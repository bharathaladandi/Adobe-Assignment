import React from "react"
import { useEffect } from "react"
import { useState } from "react"


const NotesCreate = () => {
    
    const [content, setcontent] = useState("")
    const [note, setNote] = useState("")

    const handleSubmit = () => {
        const payload = {
            content,
            note
        }
       
        fetch("http://localhost:8080/notes/posts", {
            method : "POST",
            body : JSON.stringify(payload),
            headers : {
                'Content-Type': 'application/json',
                'Authorization' : `Bearer ${localStorage.getItem("psctoken")}`
            }
        })
        .then((res) => res.json())
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
    }
    return(
        <div>
            <h1>Add note here</h1>
            <input type="text" placeholder="title" value={content} onChange={(e) => setcontent(e.target.value)}></input>
            <input type="text" placeholder="actual note" value={note} onChange={(e) => setNote(e.target.value)}></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}


export {NotesCreate}