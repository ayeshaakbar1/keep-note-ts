import { Box, Typography } from "@mui/material";
import { NoteObject } from "../models/note";
import Divider from "@mui/material/Divider";
import NotesIcon from "@mui/icons-material/Notes";
import Note from "./Note";

interface INotesProps {
  notes: NoteObject[];
  deleteNote: (id: number) => void;
}

const Notes: React.FC<INotesProps> = ({ notes, deleteNote }) => {
  return (
    <Box>
      <Typography
        variant="h5"
        sx={{ margin: "10px 90px", fontSize: "32px", marginTop: "12px" }}
      >
        <NotesIcon sx={{ padding: "1px" }} />
        Notes
      </Typography>
      <Divider />
      <Box style={{ display: "flex", flexWrap: "wrap" }}>
        {notes.map((note) => (
          <Note key={note.id} note={note} deleteNote={deleteNote} />
        ))}
      </Box>
    </Box>
  );
};

export default Notes;
