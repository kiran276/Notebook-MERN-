import { useState } from "react";
import NoteContext from "./noteContext";


//arrow function
const NoteState= (props)=>{
    const s1 = {
        "name":"kiran",
        "class":"MCA"
    }
    const [state,setState]=useState(s1);
    const update=()=>{
        setTimeout(()=>{
            setState({
            "name":"ARYAL",
            "class":"MBA"
        })
    },1000);
    }
return (
<NoteContext.Provider value={{state,update}}>

    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;