import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [currentTab, setCurrentTab] = useState('Home');

  return (
    <div className="appWrapper">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="mainContent">
        <MainContent currentTab={currentTab} />
      </main>
      <Footer />
    </div>
  );
}

const globalBackground = {
    backgroundImage: `linear-gradient(rgba(252, 252, 252, 0.93), rgba(252, 252, 252, 0.93)), url('./bg01.jpg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  };

  
export default App;