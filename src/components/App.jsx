import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Board from './Board';


function App(){
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Board} />
      </Switch>
    </div>
  );
}

export default App;
