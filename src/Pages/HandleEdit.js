import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../Context/FirebaseContext';
import { Link, useParams } from 'react-router-dom'
import { db } from "../Firebase/Firebase";
import { deleteDoc, doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'

const HandleEdit = () => {
    const [noteDetails, setNoteDetails] = useState([])
    const [editTitle, setEditTitle] = useState()
    const [editNote, setEditNote] = useState()

    const navigate = useNavigate()
    const { id } = useParams()
    const docRef = doc(db, "Notes", id)

    onSnapshot(docRef, (doc) => {
        setNoteDetails(doc.data(), doc.id)
    })
function handleSubmit(e){
    e.preventDefault()

    updateDoc(docRef, {
        
     })

    .then(()=>{

    })
}
    return (
        <div>
            <form className="w-[80%] m-auto space-y-5">
                <div className="">
                    <input
                        value={noteDetails.title}
                        onChange={(e) => setEditTitle(e.target.value)}
                        type="text" placeholder='Title' className="w-[100%] outline-none  xl:text-3xl text-2xl text-white  border-white bg-transparent" />
                </div>
                <div className="">
                    <textarea
                        value={noteDetails.note}
                        onChange={(e) => setNoteDetails(e.target.value)}
                        type="text" placeholder='Type your note here' className="w-[100%] outline-none font-semibold text-white  border-white bg-transparent" />
                </div>
                <button type="submit" className="px-6 py-3 rounded-md text-white  bg-yellow-500 hover:bg-yellow-400 " >submit</button>
               
            </form>
        </div>
    );
};

export default HandleEdit;