import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { SearchPageController } from './controllers/SearchPageController';
import { ShowMoviesController } from './controllers/ShowMoviesController';
import { Layout } from './view/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={ShowMoviesController} />
          <Route exact path="/search/:query" component={SearchPageController} />
        </Switch>
      </Layout>
    </Router>

  );
}

export default App;
