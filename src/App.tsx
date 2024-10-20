import Note from './components/note/note'
import Form from './components/input/form';
import './App.css';
import { notes } from './components/note/dummy';
import {data} from './components/note/notedata'
import { useState } from 'react';



function App() {
  
  const [allnotes, setAllnotes]=useState(notes)
  const addnotes=(note:data)=>{
    setAllnotes([note,...allnotes])
  }
  
  return (
    <div className="App">
      <h1>Notes app</h1>
      <Form addnote={addnotes} />

      {
        allnotes.map((note) => <Note key={note.id} text={note.text} classprio={note.classprio} />)  // map each note to a Note component with props passed down as props. title={note.title} content={note.content} />)  // map each note to a Note component with props passed down as props.
      }
      
      
    </div>
  );
}

export default App;
