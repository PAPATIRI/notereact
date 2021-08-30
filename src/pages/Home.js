import React from 'react';
import { Link } from 'react-router-dom';
import PageLayout from '../layouts/PageLayout';
import styled from 'styled-components';
import NoteList from '../components/NoteList';
import Container from '../components/ui/Container';
import Button from '../components/ui/Button';

export default function HomePage() {
  return (
    <PageLayout>
      <Container>
        <Link to="/add">
          <Button>Add New Note</Button>
        </Link>
        <NoteList>All Notes</NoteList>
      </Container>
    </PageLayout>
  );
}
