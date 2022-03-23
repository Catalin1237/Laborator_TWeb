import React from 'react';
import logo from './logo.svg';
import './App.css';
import { MyLayout } from './components/lab3/MyLayout';
// import { GreetMe } from './components/GreetMe';


function App() {
  return (
    <div className="App">
      {/* <GreetMe first='Calestru' last='Catalin' group='CR-191' /> */}
      <MyLayout/>
    </div>
  );
}

export default App;