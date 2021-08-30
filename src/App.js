import { Route, Switch } from 'react-router-dom';
import AddPage from './pages/Add';
import EditPage from './pages/Edit';
import HomePage from './pages/Home';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`;

function App() {
  return (
    <Container>
      <div className="App">
        <Switch>
          <Route path="/add">
            <AddPage />
          </Route>
          <Route path="/edit/:id">
            <EditPage />
          </Route>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Container>
  );
}

export default App;
