import React from 'react';
import pvtimg from '../profile.jpeg';
import profile2 from '../profile2.jpeg';

// Defining TypeScript interfaces for props
interface MainContentProps {
  currentTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ currentTab }) => {
  if (currentTab === 'Home') {
    return (
      <div className="container" style={{ textAlign: 'left' }}>
        <div className="heading">Home</div>
        <div className="style1">
          <img className="homeImage" src={pvtimg} alt="profile" style={{ float: 'left' }} />
          <h2>Purvesh Nemade</h2>
          <p style={{ fontWeight: 500, color: '#ff5f5e', margin: '5px 0 20px 0' }}>Computer Technology Student</p>
          <p className="biotext">Welcome to my workspace. I build responsive web layouts, manage system structures, and explore modern development technologies.</p>
          <p className="biotext">I am Purvesh Rajendra Nemade studying Diploma in Computer Technology...</p>
        </div>
      </div>
    );
  }

  if (currentTab === 'About') {
    return (
      <div className="container" style={{ textAlign: 'left' }}>
        <div className="heading">About</div>
        <div className="style1" style={{ textAlign: 'left', padding: '0 20px' }}>
          <h2>Purvesh Nemade</h2>
          <p style={{ textAlign: 'center', margin: '20px 0' }}>💡 Purvesh Nemade</p>
          <p><strong>Hi there!</strong> I am Purvesh Rajendra Nemade studying Diploma in Computer Technology from <strong>K.K. Wagh polytechnic, Nashik</strong>...</p>
          <div className="heading">Hands-on Experience</div>
          <div className="heading">Internship</div>
          <p>I am currently interning at <strong>OFOX Media PVT.LTD, Nashik</strong> under the direct supervision and mentorship of Mr. Mayur Khairnar...</p>
        </div>
      </div>
    );
  }

  if (currentTab === 'Education & Skills') {
    return (
      <div className="container">
        <div className="heading-style" style={{ fontSize: '1.6rem' }}>Education</div>
        <div className="itemBlock">
          <div className="itemName">10th Grade (SSC) / Strong — 8.6.S.V School (2023-2024)</div>
        </div>
        <div className="itemBlock">
          <div className="itemName">Diploma in Computer Technology / strong — K.K. Wagh polytechnic, Nashik</div>
        </div>
        <div className="divider"></div>
        <div className="heading-style" style={{ fontSize: '1.6rem' }}>Skills & Technical Knowledge</div>
        <div className="itemBlock2">
          <div className="itemName">Programming Languages: <strong>Python, HTML, Java, C, C++</strong></div>
        </div>
        <div className="itemBlock2">
          <div className="itemName">Tools & Frameworks: <strong>github, SQL</strong></div>
        </div>
      </div>
    );
  }

  if (currentTab === 'Contacts') {
    return (
      <div className="container">
        <h2 className="sectionHeading">Please, get in touch:</h2>
        <div className="contactFlex">
          <img className="contactImage" src={profile2} alt="Contact Visual" />
          <div className="contactDetails">
            <p><strong>Email:</strong> <a href="mailto:purveshnomade12@gmail.com">purveshnomade12@gmail.com</a></p>
            <p><strong>GitHub:</strong> <a href="https://github.com/purvesh1208" target="_blank" rel="noreferrer">@purvesh1208</a></p>
            <p><strong>Contact No:</strong> 9172120967</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/purvesh-nemade-b6041119" target="_blank" rel="noreferrer">Purvesh Nemade</a></p>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MainContent;