import React, { useContext, useState } from 'react';
import { FirebaseContext } from '../Context/FirebaseContext';
import { Link, useParams } from 'react-router-dom'
import { db } from "../Firebase/Firebase";
import { deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineDelete } from "react-icons/ai"
import { useNavigate } from 'react-router-dom'

const NoteDetails = () => {

    const [noteDetails, setNoteDetails] = useState([])
    const navigate = useNavigate()
    const { id } = useParams()
    const docRef = doc(db, "Notes", id)

    onSnapshot(docRef, (doc) => {
        setNoteDetails(doc.data(), doc.id)
    })

    function handleDelete(id) {
        const docRef = doc(db, "Notes", id)
        deleteDoc(docRef)
        navigate("/")
    }

    return (
        <div>
            <div className="m-auto w-[80%] text-white space-y-5">
                <h1 className="xl:text-3xl text-2xl font-semibold">{noteDetails.title}</h1>
                <h1 className="text-md font-light">{noteDetails.note}</h1>
                <i onClick={() => handleDelete(id)}> <AiOutlineDelete className='text-4xl fixed right-[10%] top-[80%] hover:text-white font-bold text-yellow-600' /></i>
            </div>
        </div>
    );
};

export default NoteDetails;