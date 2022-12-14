import { BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Error404 from './components/Error404';
import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import NoteState from './context/NoteState';
function App() {
  return (
    <div className="App">
 
    <NoteState>
    <BrowserRouter>
    <Navbar/>
    <div className='container'>
    <Routes>
   
    <Route exact path="/*" element={<Error404/>}></Route>
    
    <Route exact path="/" element={<Home/>}></Route>
    <Route exact path="/about" element={<About/>}></Route> 
    <Route exact path="/login" element={<Login/>}></Route> 
    <Route exact path="/signup" element={<Signup/>}></Route> 
 
    </Routes>
    </div>
    </BrowserRouter>
    </NoteState>
    </div>
  );
}

export default App;
