import React, { useState, useEffect } from 'react';
import figmaImage from './figma.png';
import './App.css';
import ReactDOM from 'react-dom';
import useTypewriter from './useTypewriter';

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
  const name = useTypewriter("Jali Purcell", 60); // Replace 'Your Name' with your actual name

  return (
    <div className="App">
      <header className="App-header">
        <h1>{name}</h1>
        <p>Data Driven, SQL Savvy, Software Engineer in the making.</p>
      </header>
      <main className="App-content">
        <section className="App-section">
          <h2 className = "edu-header">Education</h2>
         
          <h2>Drury University</h2>
          <h3>After graduating in May 2024, I will achieve</h3>
          <div className="side-by-side">
          <div className="left-content">
          <h3>Bachelor of Science in Computer Science: Software-Engineering</h3>
          <ul>
            <p>Minor in Cyber-Risk Management</p>
            <p>Certificate in Data Analytics</p>
          </ul>

          
          </div>
          <div className="right-content">
          <h3>Bachelor of Arts in Spanish</h3>
          <ul>
            <p>Certificate in Get Out, Plug In: Intercultural Connections</p>
          </ul>
          </div>
          </div>

        </section>
        <section className="App-section">
          <h2>Leadership at Drury</h2>
          <div className="side-by-side">
          <div className = "left-content">
          <ul>
            <h4>President of DUTV and Senior Videography Staff</h4>
            <p>Completed video projects for clients.</p>
            <p>Director of Photography in Drury Lane Film Festival.</p>
          </ul>
          </div>
          </div>
          <div className="right-content">
          <ul>
            <h4>President of Math and Computer Science Club</h4>
            <p>Completed video projects for clients.</p>
            <p>Director of Photography in Drury Lane Film Festival.</p>
          </ul>
          </div>
          
        </section>
        <section className="App-section">
          <h2 className = "edu-header">Work Experience</h2>
          <div className="job">
          <div className="job-info">
          <h3>Associated Electric Cooperative Inc.</h3>
          <h4>Programming Intern</h4>
          <p>May 2023 - Present</p>
        </div>
        <ul>
        <li>Utilized SSRS to optimize daily generation report to the Board of Directors.</li>
        <li>Enhanced WebUI and WebAPI for better user experiences.</li>
        <li>Developed C# Azure Functions for GraphAPI and data streams.</li>
        <li>Followed Agile and Scrum to deliver projects on time.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-info">
          <h3>Institutional Research Department</h3>
          <h4>Drury University</h4>
          <p>October 2021 - May 2023</p>
        </div>
        <ul>
          <li>Wrote SQL queries and formatted Excel sheets to produce student information.</li>
          <li>Ran biweekly reports on student enrollment and credit-to-revenue with R programming.</li>
        </ul>
      </div>
      <div className="job">
        <div className="job-info">
          <h3>Technology Services</h3>
          <h4>Drury University</h4>
          <p>January, June - August 2022, January 2023</p>
        </div>
        <ul>
          <li>Installed new IP phones for staff and reported the status of hardware.</li>
          <li>Implemented solutions for cable management in labs to enhance student workstation experience.</li>
        </ul>
      </div>
        </section>
        <section className="App-section">
          <h2 className="edu-header">Projects</h2>
          
          <div className="side-by-side">
          <div className="left-content">
          <h3>Senior Research and Development</h3>
          <h4>Project eMission</h4>
          <ul>
            <p>Eco-Conscious Carbon Footprint Tracker written in Flutter.</p>
            <p>Development began in January, 2023. Implementation began in August, 2023.</p>
            <a href="https://youtu.be/TznYUGlRwF4">Demo Video</a>
            {/* <li class="image-container">
            <img src={figmaImage} alt="Figma Logo" className="flexible-image" />
            </li> */}
          </ul>
          

          
          </div>
          <div className="right-content">
          <h3>Machine Learning</h3>
          <h4>Non-Linear Regression Exploration</h4>
          <ul>
            <a href="https://github.com/jalikat3/housing-repo">Github Repository</a>
            {/* <li class="image-container">
            <img src={figmaImage} alt="Figma Logo" className="flexible-image" />
            </li> */}
          </ul>
          </div>
          </div>
        </section>
        <footer>
        <a style={{ fontWeight: 'bold' }} href="https://www.linkedin.com/in/jali-purcell-726b2b248/">Let's Connect!</a>
        </footer>
      </main>
    </div>
  );
}

export default App;
