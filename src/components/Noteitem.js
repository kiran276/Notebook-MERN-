import React, { useContext } from 'react'
import noteContext from '../context/noteContext';

const Noteitem = (props) => {
    const context = useContext(noteContext);
    const {deleteNote} =context;
    const { note,updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3">
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5><i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>                       
                        {/* yaha se update note poori ki pooori note ki value dega apne parents ko jo ki modal popup ke form me wo value fill kar rahain currentvalue param ke naam se */}
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem