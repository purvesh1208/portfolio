import React from 'react';

const Navbar = ({ currentTab, setCurrentTab }) => {
  const tabs = ['Home', 'About', 'Education & Skills', 'Contacts'];

  return (
    <nav className="navContainer">
      <div className="logo">
        <h1>PORTFOLIO</h1>
      </div>
      <div className="linksContainer">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`navLink ${currentTab === tab ? 'underline' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;