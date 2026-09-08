import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useState } from 'react';

function App() {
  return  (
    <div style={{ textAlign: 'center' }}>
      <Header title="Welcome to my website" />
      
      <h1 style={{ marginTop: '50px' }}>Any question?</h1>
    </div>
  );
}

export default App;