import React from "react";
import { NoteObject } from "../models/note";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

interface INoteProps {
  note: NoteObject;
  deleteNote: (id: number) => void;
}

const Note: React.FC<INoteProps> = ({ note, deleteNote }) => {
  return (
    <Card
      sx={{
        backgroundColor: note.color,
        width: "500px",
        margin: "68px",
        height: "310px",
        marginBottom: "5px",
      }}
    >
      <CardContent>
        <Box
          sx={{
            border: "2px solid #000",
            background: "#fff",
            marginTop: "2px",
          }}
        >
          <Typography variant="h4" component="div" sx={{ padding: "15px" }}>
            {note.title}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "20px", margin: "1px 15px 16px" }}
          >
            {note.text}
          </Typography>
          <Typography sx={{ margin: "14px 15px 16px" }}>{note.date}</Typography>
          <Button
            variant="contained"
            color="inherit"
            onClick={() => deleteNote(note.id)}
            sx={{ margin: "2px 12px ", fontSize: "15px" }}
          >
            <DeleteOutlineIcon />
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Note;
