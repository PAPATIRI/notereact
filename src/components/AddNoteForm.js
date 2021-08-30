import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, TextArea } from '../components/ui/Forms';
import { v4 as uuidv4 } from 'uuid';
import Button from '../components/ui/Button';
import getLocalStorageData from '../utils/getLocalStorageData';
import Message from './ui/Message';

const AddNoteForm = () => {
  //set state untuk title dan note defaultnya string kosong
  const [state, setState] = useState({ title: '', note: '' });
  const [isSuccess, setIsSuccess] = useState(false);

  //event handler untuk menyimpan data dari form input title dan note kedalam state
  const handleTitleChange = (e) => {
    setState({ ...state, title: e.target.value });
  };

  const handleNoteChange = (e) => {
    setState({ ...state, note: e.target.value });
  };

  //event handler untuk submit data
  const handleSubmit = (e) => {
    const notes = getLocalStorageData('notes');
    //ambil data 'notes' dari localstorage dan disimpan dalam var existing
    // let existing = localStorage.getItem('notes');

    /*
  Cek jika sudah ada data bernama 'notes' di dalam localStorage
  Jika ada maka gunakan method JSON.parse() untuk membaca datanya
  Hal ini dikarenakan localStorage hanya bisa menyimpan tipe data String
  Jika tidak ada data di dalam 'notes' maka buat sebuah array kosong [] 
  */
    // existing = existing ? JSON.parse(existing) : [];

    /*
  Setiap note harus memiliki id unik untuk membedakan dengan data note yang lain
  Kita bisa menggunakan package uuid dari npm
  Untuk menginstallnya gunakan command => yarn add uuid
  */
    const noteId = uuidv4();

    /*
  Tambahkan data note + noteId di dalam state ke array existing
  */
    notes.push({ ...state, id: noteId });
    // existing[noteId] = state;

    /*
  Simpan data ke localStorage dengan command localStorage.setItem()
  Gunakan method JSON.stringify() untuk mengubah object ke String
  Karena localStorage hanya bisa menyimpan tipe data String
  */
    localStorage.setItem('notes', JSON.stringify(notes));
    setIsSuccess(true);
    // membiarkan react menghandle data yang disubmit
    e.preventDefault();
  };

  const { title, note } = state;

  return (
    <>
      {isSuccess && <Message text="Data berhasil disimpan" />}
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
        </FormGroup>
      </Form>
    </>
  );
};

export default AddNoteForm;
