import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState<string>('Home');

  return (
    <div className="appwrapper">
      <Navbar currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <main className="mainContent">
        <MainContent currentTab={currentTab} />
      </main>
      <Footer/>
    </div>
  );
};

export default App;