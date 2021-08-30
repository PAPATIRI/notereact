import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import Container from '../components/ui/Container';
import EditNoteForm from '../components/EditNoteForm';

const EditPage = () => {
  return (
    <PageLayout>
      <Container>
        <div>
          <Link to="/">Home</Link> / edit
        </div>
        <h1>Edit Note</h1>
        <EditNoteForm />
      </Container>
    </PageLayout>
  );
};

export default EditPage;
