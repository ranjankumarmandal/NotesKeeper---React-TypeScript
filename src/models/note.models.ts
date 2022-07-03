export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

export interface NotesListProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

export interface NoteProps {
  note: Note;
  handleDelete: (id: string) => void;
}
