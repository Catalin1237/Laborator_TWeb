import React from "react";
import logo from "./logo.svg";
import "./App.css";
// import { GreetMe } from './components/GreetMe';
import { MyLayout } from "./components/MyLayout";

function App() {

  return (
    <div className="App">
      {/* <GreetMe first='Calestru' last='Catalin' group='CR-191' /> */}
      <MyLayout />
    </div>
  );
}

export default App;
