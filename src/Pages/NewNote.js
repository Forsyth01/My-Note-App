import { useState, useEffect } from "react";
import {collection, addDoc,serverTimestamp} from 'firebase/firestore'
import { db } from "../Firebase/Firebase";
import {useNavigate} from 'react-router-dom'
import { getAuth, onAuthStateChanged} from 'firebase/auth'

const NewNote = () => {
    const [title, setTitle] = useState("")
    const [details, setDetails] = useState("")
    const colRef = collection (db, "Notes")
    const navigate = useNavigate()
    const auth = getAuth();

    function handleSubmit(e){
        e.preventDefault()
       
        if (title || details !== ""){
            addDoc(colRef, {
               title,
               note: details
            })
            .then(()=>{
                setTitle("")
                setDetails("")
                navigate("/")
            })
          .catch(err =>{
            alert(err.message)
          })
        } 
        else{
            alert("empty fields")
        }
    }
    
    return (
        <div>
            <div className="w-[80%] m-auto">
                <form className="space-y-10 " onSubmit={handleSubmit}>
                    <div className="">
                        <input 
                            value={title}
                            onChange = {(e)=> setTitle(e.target.value) }
                        type="text" placeholder='Title' className="w-[100%] outline-none py-2 xl:text-3xl text-2xl text-white  border-white bg-transparent" />
                    </div>
                    <div className="">
                        <textarea 
                         value={details}
                         onChange = {(e)=> setDetails(e.target.value) }
                        type="text" placeholder='Type your note here' className="w-[100%] outline-none py-2 text-white bo border-white bg-transparent" />
                    </div>
                        <button type="submit" className="px-6 py-3 rounded-md text-white border border-yellow-500 hover:bg-[#444]" >Add note</button>
                </form>
            </div>
        </div>
    );
};

export default NewNote;