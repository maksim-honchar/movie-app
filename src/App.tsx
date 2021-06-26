import React from 'react';
import { ShowMoviesController } from './controllers/ShowMoviesController';
import { Layout } from './view/Layout';

function App() {
  return (
    <Layout>
      <ShowMoviesController />
    </Layout>
  );
}

export default App;
