import React from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import LeftContainer from './components/LeftContainer/LeftContainer';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <LeftContainer/>
      <MainContainer/>
    </div>
  );
}

export default App;
