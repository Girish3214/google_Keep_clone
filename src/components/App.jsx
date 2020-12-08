import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

    const [notes, setNotes]=useState([]);

   function addNote(newNote){

    setNotes(prevNote =>{
       return [...prevNote, newNote];
    })
       console.log(newNote);
    }

    function deleteNote(id) {

        setNotes(prevNote =>{
            return  prevNote.filter(( noteItem , index)=>{
                return index !== id;
            });
        });
        console.log("deleted");
    }

  return (
    <div>
      <Header />
      <CreateArea 
          onAdd={addNote}
      />

     { notes.map((item, index) => {
        return <Note 
        key={index}
        id={index}
        title={item.title} 
        content={item.content} 
        onDelete={deleteNote} />
      })}
      
      <Footer />
    </div>
  );
}

export default App;
