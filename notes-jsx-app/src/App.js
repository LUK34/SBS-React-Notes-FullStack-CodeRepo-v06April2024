import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Navbar from "./components/Navbar";
import AddNote from "./components/AddNote";
import NoteList from './components/NoteList';
import NotFound from './components/NotFound';
import NoteDetails from './components/NoteDetails';

function App() 
{
 
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      <div>
         <Routes>
            <Route exact path='/' element={<NoteList />} />
            <Route path='/add' element={<AddNote />} />
            <Route path='/notes/edit/:id' element={<AddNote />} />
            <Route path='/notes/:id' element={<NoteDetails />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </div>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
