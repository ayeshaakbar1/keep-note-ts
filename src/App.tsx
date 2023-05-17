import React, { useState, useEffect } from "react";
import CreateNote from "./components/CreateNote";
import Header from "./components/Header";
import Notes from "./components/Notes";
import { NoteObject } from "./models/note";
function App() {
  const [notes, setNotes] = useState<NoteObject[]>([]);

  useEffect(() => {
    if (sessionStorage.getItem("notes")) {
      setNotes(JSON.parse(sessionStorage.getItem("notes") as string));
    }
  }, []);

  const addNote = (note: NoteObject) => {
    setNotes([note, ...notes]);
    sessionStorage.setItem("notes", JSON.stringify([note, ...notes]));
  };

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    sessionStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
    </>
  );
}

export default App;
