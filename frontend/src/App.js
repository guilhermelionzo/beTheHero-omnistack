import React, {useState} from 'react';

import './global.css';

import Login from './pages/Login';

function App() {

  //useState return a Array [valor, funcaoDeAtualizado]

  return (
    <div>
      <Login/>
    </div>
  );
} 

export default App;

//Stop in 42min