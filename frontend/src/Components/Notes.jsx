import React from "react"
import { useEffect } from "react"
import { useState } from "react"


const Notes = () => {
        const [loading,setLoading] = useState(false)
        const [error, setError] = useState(false)
        const [notes, setNotes] = useState("")
      useEffect(() => {
        setLoading(true)
        fetch("http://localhost:8080/posts", {
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
            }
        })
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            setNotes(res)
            setLoading(false)
        })
        .catch((err) => {
            setError(true)
            setLoading(false)
        })
      }, [])
      

      const deleteNote = (postID) => {
        fetch(`http://localhost:8080/posts/delete/${postID}`, {
            method : "DELETE",
            headers : {
                "Authorization" : `Bearer ${localStorage.getItem("psctoken")}`
            }
        })
      }
    return(
        <div>
            <h1>Notes :</h1>
            {
                loading && "Loading....."
            }
            {
                error && "something went wrong...."
            }
            {
                notes && notes.length > 0 && notes.map((note) => {
                    return (
                        <div>
                            <p>{note._id}</p>
                            <p>{note.content}</p>
                            <p>{note.note}</p>
                            <button onClick={()=>deleteNote(note._id)}>Delete</button>
                            <hr/>
                        </div>
                    )
                })
            }

        </div>
    )
}


export {Notes}
