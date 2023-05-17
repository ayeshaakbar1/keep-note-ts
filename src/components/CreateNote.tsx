import React, { useState } from "react";
import { InputBase, Box, Button, Typography, Container } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import { NoteObject } from "../models/note";
import { v4 as uuid } from "uuid";

const defaultObj = {
  id: 0,
  title: "",
  text: "",
  color: "",
  date: new Date().toLocaleString().toString(),
};

interface ICreateNoteProps {
  addNote: (note: NoteObject) => void;
}

const CreateNote: React.FC<ICreateNoteProps> = ({ addNote }) => {
  const [note, setNote] = useState<NoteObject>(defaultObj);
  const [error, setError] = useState<string>("");

  const onValueChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (error) {
      setError("");
    }
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const onCreateNote = () => {
    if (!note.title && !note.text) {
      setError("All fields are required");
      return;
    }
    addNote({ ...note, id: uuid() });
    setNote(defaultObj);
  };

  return (
    <Container
      sx={{
        margin: "40px 50px",
        fontSize: "15px",
      }}
    >
      <InputBase
        placeholder="Title"
        name="title"
        onChange={(e) => onValueChange(e)}
        value={note.title}
        sx={{
          borderBottom: "2px solid #111111",
          opacity: 0.9,
          width: "420px",
          fontSize: "22px",
          margin: "16px",
        }}
      />
      <Box component="span">{note.title.length}</Box>
      <InputBase
        placeholder="Note"
        name="text"
        onChange={(e) => onValueChange(e)}
        value={note.text}
        sx={{
          borderBottom: "2px solid #111111",
          opacity: 0.9,
          width: "420px",
          fontSize: "22px",
          margin: "16px",
        }}
      />
      <Box component="span">{note.text.length}</Box>
      <InputBase
        type="color"
        defaultValue={" #0d0d0d"}
        name="color"
        onChange={(e) => onValueChange(e)}
        sx={{
          position: "relative",
          bottom: "-19px",
          width: "50px",
          height: "50px",
          margin: "20px",
        }}
      />
      <Button
        variant="contained"
        color="inherit"
        sx={{ backgroundColor: "#ffaa00", fontSize: "16px" }}
        onClick={() => onCreateNote()}
        startIcon={<AddBoxIcon />}
      >
        Create
      </Button>
      {error && (
        <Typography sx={{ color: "red", margin: "8px 90px" }}>
          {error}
        </Typography>
      )}
    </Container>
  );
};

export default CreateNote;
