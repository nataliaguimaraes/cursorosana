import React from 'react';
import './App.css';
import { MainLayout } from './MainLayout/MainLayout';
import { PreMatricula } from './components/PreMatricula/PreMatricula';
import bg from './assets/images/bg1.png'

function App() {
  return (
    <div className="App">
      <MainLayout><PreMatricula/></MainLayout>
      </div>
  
  );
}

export default App;
