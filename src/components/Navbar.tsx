import React from 'react';

// Defining TypeScript interfaces for props
interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentTab, setCurrentTab }) => {
  const tabs: string[] = ['Home', 'About', 'Education & Skills', 'Contacts'];

  return (
    <nav className="navContainer">
      <div className="logo">
        <h1>PORTFOLIO.</h1>
      </div>
      <div className="linksContainer">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setCurrentTab(tab)}
            className={`navLink ${currentTab === tab ? 'active' : ''}`}
          >
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;