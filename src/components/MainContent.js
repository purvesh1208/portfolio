import React from 'react';
import profile from '../profile.jpeg';
import profile2 from '../profile2.jpeg';

const MainContent = ({ currentTab }) => {
  if (currentTab === 'Home') {
    return (
       <div className="textContainer">
         <img className="homeImage" src={profile} alt="Home Visual" />
          <h2>PURVESH NEMADE</h2>
          <p>Computer Technology Student</p>
          <p>Welcome to my workspace. I build responsive web layouts, manage system structures, and love exploring modern development technologies.</p>
          <p>Welcome! I am Purvesh Prashant Nemade studying Diploma...</p>
        </div>
    );
  }

  if (currentTab === 'About') {
    return (
      <div className="maincontent">
        <h2 className="textContainer">PURVESH NEMADE</h2>
        
          <p className="biotext">

            <strong>Welcome!</strong> I am Purvesh Prashant Nemade studying Diploma in computer technology in 
            <strong> K.K. Wagh polytechnic </strong> from Raver Dist:- Jalgaon Maharashtra. I currently live in Nashik for my educational purpose.
          </p>
          <h3 className="heading">Hands-on Experience:</h3>
          <p className="itemBlock">
            Throughout my diploma, I have built practical applications focusing on UI/UX development, form validation, and event-driven programming.
          </p>
          <h3 className="heading">Interning:</h3>
          <p className="itemBlock">
            I am currently interning at <strong>Dfox Media PVT.LTD, Nashik</strong> under the direct supervision and mentorship of Mr. Mayur Khairnar sir and Mr. Harsh Sonawane sir. Currently, I am learning coding on React JS and GitHub.
          </p>
      </div>
    );
  }

  if (currentTab === 'Education & Skills') {
    return (
      <div className="maincontent">
        <div className="container">
          <h2 className="sectionReading">Education</h2>
          <p className="itemBlock2"><strong>10th GRADE (SSC)</strong> — B.G.S.V School (2023-2024)</p>
          <p className="itemBlock2"><strong>Diploma in Computer Technology</strong> — K.K. Wagh polytechnic, Nashik</p>
          
          <hr className="divider" />
          
          <h2 className="sectionReading">Skills & Technical Knowledge</h2>
          <p className="itemBlock2"><strong>Programming Languages:</strong> Python, HTML, Java, C, C++</p>
          <p className="itemBlock2"><strong>Tools & Frameworks:</strong> GitHub, SQL</p>
        </div>
      </div>
    );
  }

  if (currentTab === 'Contacts') {
    return (
      <div className="maincontent">
        <div className="container">
          <h2 className="sectionReading">Please, get in touch</h2>
          <div className="contactflex">
            <img className="contactImage" src={profile2} alt="Contact Visual" />
            <div className="contactDetails">
              <p><strong>Email:</strong> <a href="mailto:purveshnemade12@gmail.com">purveshnemade12@gmail.com</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/purvesh1208" target="_blank" rel="noreferrer">@purvesh1208</a></p>
              <p><strong>Contact No:</strong> 9172120967</p>
              <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/purvesh-nemade-b6004a119">Purvesh Nemade</a></p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
};

export default MainContent;