import React from 'react';
import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titulo texto="Texto através do atributo"></Titulo>
        <p>
          Esse é meu novo texto.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
