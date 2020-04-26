import React from 'react';
import { Switch,Route } from 'react-router-dom';
import { routes } from './routes';

function App() {
  return (
    <Switch>
      {routes.map(route =>(
        <Route {...route}></Route>))}
    </Switch>
  );
}

export default App;
