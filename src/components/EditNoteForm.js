import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { Form, FormGroup, Label, Input, TextArea } from './ui/Forms';
import Button from './ui/Button';
import getLocalStorageData from '../utils/getLocalStorageData';

const EditNoteForm = () => {
  /*
Custom Hooks dari package react-router-dom
Untuk mendapatkan alamat dari page yang sedang diakses
*/
  const location = useLocation();

  //delete data var needed
  const history = useHistory();

  const [allNotes, setAllNotes] = useState(null);
  const [currentNote, setCurrentNote] = useState({ title: '', note: '' });
  // const [state, setState] = useState({ title: '', note: '' });

  /*
Proses pengambilan data dilakukan setelah DOM diupdate
Oleh karena itu kita menggunakan useEffect()
*/
  useEffect(() => {
    const notes = getLocalStorageData('notes');

    setAllNotes(notes);
    // mengambil noteId dari location
    const noteId = location.pathname.replace('/edit/', '');
    // mengambil data note yang akan diedit
    const currentNote = notes.filter((note) => note.id === noteId);

    // simpan data note ke state
    setCurrentNote(currentNote[0]);
  }, []);

  const handleTitleChange = (e) => {
    setCurrentNote({ ...currentNote, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setCurrentNote({ ...currentNote, note: e.target.value });
  };

  const handleSubmit = (e) => {
    const newNotes = allNotes.map((note) => {
      if (note.id === currentNote.id) {
        return { ...note, title: currentNote.title, note: currentNote.note };
      } else {
        return note;
      }
    });

    localStorage.setItem('notes', JSON.stringify(newNotes));
    e.preventDefault();
  };

  const handleDeleteNote = (e) => {
    const newNotes = allNotes.filter((note) => note.id !== currentNote.id);

    setCurrentNote(null);
    setAllNotes(newNotes);

    localStorage.setItem('notes', JSON.stringify(newNotes));
    history.push('/');
  };

  const { title, note } = currentNote;

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Title</Label>
        <Input type="text" name="title" value={title} onChange={handleTitleChange} />
      </FormGroup>
      <FormGroup>
        <Label>Note</Label>
        <TextArea name="note" rows="12" value={note} onChange={handleNoteChange} />
      </FormGroup>
      <FormGroup>
        <Button type="submit">Add</Button>
        <Button danger onClick={handleDeleteNote}>
          Delete
        </Button>
      </FormGroup>
    </Form>
  );
};

export default EditNoteForm;
