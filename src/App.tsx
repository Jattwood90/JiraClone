import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import LeftContainer from './components/LeftContainer/LeftContainer';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <LeftContainer/>
    </div>
  );
}

export default App;
