import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Detail" component={Detail} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
