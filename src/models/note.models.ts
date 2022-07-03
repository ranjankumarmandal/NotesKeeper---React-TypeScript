export interface Note {
  id: string;
  title: string;
  text: string;
  color: string;
  date: string;
}

export interface NotesListProps {
  notes: Note[];
}

export interface NoteProps {
  note: Note;
  handleDelete: (id: string) => void;
}
