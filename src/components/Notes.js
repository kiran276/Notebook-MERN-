import React, {useContext,useState,useRef,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import noteContext from "../context/noteContext";
import AddNote from './AddNote';
import Noteitem from './Noteitem';



const Notes = () => {
    const context = useContext(noteContext);
    const {notes,getNotes,editNote} = context;
    let navigate = useNavigate();

    useEffect(()=>{
      if(localStorage.getItem('token')){
        getNotes()
      }
      else{
        navigate("/login");
      }
    },[])
    const ref = useRef(null)
    const refClose = useRef(null)
    const [note, setNote] = useState({id:"",etitle: "", edescription: "", etag: ""})
    const updateNote=(currentNote)=>{
        ref.current.click();
        setNote({id:currentNote._id,etitle: currentNote.title, edescription: currentNote.description, etag:currentNote.tag})
        }

    const handleClick = (e)=>{
        Swal.fire({
            title: "Success",
            text: ` successfully updated title ${note.etitle} `,
            icon: "success",
            confirmButtonText: "OK",
          });
          editNote(note.id,note.etitle,note.edescription,note.etag)
        // e.preventDefault(); 
        refClose.current.click();
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }

    return (
        <>
        <AddNote/>

{/* modal start here */}

<button type="button"  ref={ref} className="btn d-none btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<div className="modal fade"  id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header text-center">
        <h5 className="modal-title" id="exampleModalLabel">Edit Note</h5>
        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
        
      <form className="my-3">
 <div className="mb-3">
     <label htmlFor="title" className="form-label">Title</label>
     <input type="text" className="form-control" id="etitle" name="etitle" value={note.etitle} aria-describedby="emailHelp" onChange={onChange} minLength={5} required />
 </div>
 <div className="mb-3">
     <label htmlFor="description" className="form-label">Description</label>
     <input type="text" className="form-control" id="edescription" name="edescription" value={note.edescription} onChange={onChange} minLength={5} required />
 </div>
 <div className="mb-3">
     <label htmlFor="tag" className="form-label">Tag</label>
     <input type="text" className="form-control" id="etag" name="etag" value={note.etag} onChange={onChange} />
 </div>

                            </form>
      </div>
      <div className="modal-footer">
        <button ref ={refClose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" className="btn btn-primary">Update Note</button>
      </div>
    </div>
  </div>
</div>

{/* modal ends here */}

        <div className="row my-3">
            <h2>You Notes</h2> 
            <div className='container'>
            {notes.length===0 &&'No Notes to display'}
            </div>
            {notes.map((note)=>{
                return <Noteitem key={note._id} updateNote={updateNote} note={note}/>  
            })}
            </div>
            </>
    )
}

export default Notes