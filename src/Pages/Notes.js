import React, { useEffect, useState } from 'react';
import { IoMdAddCircle } from "react-icons/io"
import { RiEditCircleLine } from "react-icons/ri"
import { Link } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { collection, getDocs, deleteDoc, doc, onSnapshot, query, orderBy } from 'firebase/firestore'
import { db } from '../Firebase/Firebase';
import { useNavigate } from 'react-router-dom'


const Notes = () => {
    const [notes, setNotes] = useState([])
    const navigate = useNavigate()
    const colRef = collection(db, "Notes")
    const q = query(colRef, orderBy('createdAt', 'desc'))


    useEffect(() => {
        onSnapshot(colRef, (snapshot) => {
            setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        })
    }, [])
    return (
        <div className='w-[80%] m-auto xl:my-'>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-2 xl:grid-cols-4 gap-5 ">
                {notes.map((note) => {
                    return (
                        <Link to={`/notes/${note.id}`}>
                            <div className="p-5 space-y-3 border text-white border-yellow-50  hover:border-white rounded-xl bg-[#444] hover:bg-[#333]">
                                <h1 className="font-bold text-xl">{note.title}</h1>
                                <p className="">{note.note}</p>
                                <div className="edit flex justify-between">
                                    <p className="date">12/0/23</p>
                                    <Link to={`/editnote/${note.id}`}>
                                        <RiEditCircleLine className='text-2xl  hover:text-white text-yellow-400' />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
            <div className="fixed right-[10%] top-[80%]">
                <Link to="/addnote" className="">
                    <IoMdAddCircle className='text-6xl text-yellow-500 hover:text-yellow-400' />
                </Link>
            </div>
        </div >
    );
};

export default Notes;