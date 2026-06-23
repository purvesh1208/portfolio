import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="footer-links">
        <a href="https://www.linkedin.com/in/purvesh-nemade-b6004a119" target="_blank" rel="noreferrer">|LinkedIn| </a>
        <a href="https://github.com/purvesh1208" target="_blank" rel="noreferrer"> |GitHub| </a>
        <a href="mailto:purveshnemade12@gmail.com"> |Email|</a>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    textAlign: 'center',
    padding: '40px 20px',
    backgroundColor: '#f5ff6e',
    color: '#ffffff',
    marginTop: '40px',
    borderTop: '3px solid #0c0c0c',
    fontFamily: '"Times New Roman", Times, serif',
    fontSize: '1.2rem',
    letterSpacing: '2px',
  }
};

export default Footer;