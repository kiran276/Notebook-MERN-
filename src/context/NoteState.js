import { useState } from "react";
import NoteContext from "./noteContext";


//arrow function
const NoteState= (props)=>{
   const notesInitial = [
    {
      "_id": "633ad0b3142f13eb0421cc92",
      "user": "6339e3cfaff221c01ff26185",
      "title": "My title2",
      "description": "favouraite place of mine is ramghar",
      "tag": "place",
      "date": "2022-10-03T12:08:19.273Z",
      "__v": 0
    },
    {
      "_id": "633ad0b9142f13eb0421cc94",
      "user": "6339e3cfaff221c01ff26185",
      "title": "My title2",
      "description": "favouraite place of mine is ramghar",
      "tag": "place",
      "date": "2022-10-03T12:08:25.554Z",
      "__v": 0
    },
    {
      "_id": "633add3d798ff19be8c956a4",
      "user": "6339e3cfaff221c01ff26185",
      "title": "My title5",
      "description": "favouraite place of mine is ramghar",
      "tag": "place",
      "date": "2022-10-03T13:01:49.400Z",
      "__v": 0
    },
    {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      },
      {
        "_id": "633add3d798ff19be8c956a4",
        "user": "6339e3cfaff221c01ff26185",
        "title": "My title5",
        "description": "favouraite place of mine is ramghar",
        "tag": "place",
        "date": "2022-10-03T13:01:49.400Z",
        "__v": 0
      }
  ]
  const [notes,setNotes] =useState(notesInitial)
return (
<NoteContext.Provider value={{notes,setNotes}}>

    {props.children}
</NoteContext.Provider>
)
}
export default NoteState;