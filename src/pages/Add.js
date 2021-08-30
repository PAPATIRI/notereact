import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import styled from 'styled-components';
import Container from '../components/ui/Container';
import AddNoteForm from '../components/AddNoteForm';

export default function AddPage() {
  return (
    <PageLayout>
      <Container>
        <div>
          <h4>
            <Link to="/">Home</Link> / Add
          </h4>
        </div>
        <h2>Add New Note</h2>
        <AddNoteForm />
      </Container>
    </PageLayout>
  );
}
