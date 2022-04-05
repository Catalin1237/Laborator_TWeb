import React from 'react';
import logo from './logo.svg';
import './App.css';
import { GreetMe } from './components/GreetMe';

function App() {
  return (
    <div className="App">
      <GreetMe first='Calestru' last='Catalin' group='CR-191' />
    </div>
  );
}

// comentariu

export default App;
