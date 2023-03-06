import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar';
import './index.css';
import HandleEdit from './Pages/HandleEdit';
import Home from './Pages/Home';
import NewNote from './Pages/NewNote';
import NoteDetails from './Pages/NoteDetails';
import Notes from './Pages/Notes';

function App() {
  return (
    <div className="App">
        <Navbar />
      <header className="py-5">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/addnote' element={<NewNote />} />
          <Route path='/editnote/:id' element={<HandleEdit />} />
          <Route path = "/notes/:id" element = {<NoteDetails/>}></Route>  
        </Routes>
      </header>
    </div>
  );
}

export default App;
