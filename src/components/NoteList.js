import styled from 'styled-components';
import { Link } from 'react-router-dom';
import getLocalStorageData from '../utils/getLocalStorageData';

const NoteListContainer = styled.div`
  display: flex;
  text-align: left;
  flex-direction: column;
  min-width: 20vw;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid #a0aec0;
  border-radius: 5px;
`;

const List = styled.ul`
  list-style: none;
`;

const ListItem = styled.li`
  margin: 0.5rem;
`;

const Separator = styled.hr`
  width: 90%;
  margin: -1px;
  background-color: #edf2f7;
  color: #edf2f7;
`;

const NoteList = () => {
  const notes = getLocalStorageData('notes');

  const listItems = notes.map((note) => {
    return (
      <ListItem key={note.id}>
        <h4>
          <Link to={`/edit/${note.id}`}>{note.title}</Link>
        </h4>
        <p>{note.note.slice(0, 70)}...</p>
        <Separator />
      </ListItem>
    );
  });

  return (
    <NoteListContainer>
      <List>{listItems}</List>
    </NoteListContainer>
  );
};
export default NoteList;
