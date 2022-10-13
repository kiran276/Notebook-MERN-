
import noteContext from '../context/noteContext';
import { useContext, useState } from 'react';


const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote}=context;
    const[note,setNote]=useState({title:"",description:"",tag:"default"})

    const onchange=(e)=>{
        setNote({...note,[e.target.name]:e.target.value})
    }

    const handleClick=(e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag);
        setNote({title:"",description:"",tag:""});
    }
  return (
    <div className='container my-3'>
    <h1>Add a Note </h1>
    
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" value={note.title} name="title" aria-describedby="emailHelp" onChange={onchange} minLength={5} required/>
      </div>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input type="text" className="form-control" value={note.description} name='description' minLength={5} required  onChange={onchange} id="description"/>
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" value={note.tag} id="tag" name="tag"  onChange={onchange} />
      </div>

      <button disabled={note.title.length<5 || note.description.length<5} type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
    
    
        </div>
  )
}

export default AddNote
