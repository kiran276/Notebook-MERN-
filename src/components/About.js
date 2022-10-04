import React, { useEffect } from 'react'
import noteContext from '../context/noteContext'
import { useContext } from 'react'
const About = () => {
  const a = useContext(noteContext)
  useEffect(()=>{
    a.update()
  },[])
  return (
    <div>
      this is About {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About
