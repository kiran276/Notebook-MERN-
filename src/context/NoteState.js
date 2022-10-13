import { useState } from "react";
import Swal from "sweetalert2";
import NoteContext from "./noteContext";


//arrow function
const NoteState= (props)=>{
  const host = "http://localhost:3333"
  const notesInitial=[]
  const [notes,setNotes] =useState(notesInitial)

// Get all notes
  // Get all Notes
  const getNotes = async () => {
    // API Call 
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = await response.json()
    console.log(json)
    setNotes(json)
  }
  // Add a Note
  const addNote= async (title,description,tag)=>{
    // API Call
    const response = await fetch(`${host}/api/notes/addnote/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });

    const note = await response.json();
    setNotes(notes.concat(note))
  }

  // Delete a Note
  const deleteNote = async (id)=>{
    // API Call

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      }
    });
    const json = response.json();
    console.log(json);
    Swal.fire({
      title: "Success",
      text: ` successfully Deleted `,
      icon: "error",
      confirmButtonText: "OK",
    });
    console.log("Deleting the note with id" + id);
    // here new notes is filtering and saving only those user id which donont match with delete id
    const newNotes = notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes)
  }


  // Edit a Note
  const editNote= async (id,title,description,tag)=>{
    // API CALL

    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem('token')
      },
      body: JSON.stringify({title, description, tag})
    });
    const json = await response.json();

    let newNotes = JSON.parse(JSON.stringify(notes))
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if(element._id===id){
        newNotes[index].title=title;
        newNotes[index].description=description;
        newNotes[index].tag=tag;
        break;
        
      }
      
    }

  setNotes(newNotes);
  }





return (
<NoteContext.Provider value={{notes,getNotes,setNotes,addNote,editNote,deleteNote}}>

    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;