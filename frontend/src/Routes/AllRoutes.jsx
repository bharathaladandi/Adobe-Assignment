import React from 'react'
import { Route, Routes } from "react-router-dom";
import { Signup } from '../Components/Signup';
import { Login } from '../Components/Login';
import { Notes } from '../Components/Notes';
import { NotesCreate } from '../Components/Notes.Create';

export const AllRoutes = () => {
  return (
    <div>
        <Routes>

            <Route path='/' element={<Signup />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='notes' element={<Notes />} />
            <Route path="/createnote" element={<NotesCreate/>}/>

        </Routes>
    </div>
  )
}
