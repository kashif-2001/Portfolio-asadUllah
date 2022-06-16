import React from 'react';
import './Resume.css';
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
export const Resume = () => {
  return (
    <div>
      <div className='resume'>
        <h5>Resume</h5>
        <h1>More of my credentials.</h1>
        <p className='resumeP'>
          I’ve always sought out opportunities and challenges that are
          meaningful to me.
        </p>
        <h2>Work Experience</h2>

        <div className='timeline-wrap'>
          <div className='timeline-block'>
            <div className='timeline-icon'>
              <SchoolIcon sx={{ fontSize: 23, mb: 1 }} />
            </div>
            <div className='timeline-header'>
              <h3>Lead Full/Mern Stack Developer</h3>
              <p>Feb 2020 - Present</p>
              <p>Doha, Qatar</p>
            </div>
            <div className='timeline-content'>
              <h4>Nava Labs</h4>
              <p>
                As a lead developer, I'm working on the project's planning,
                development, testing, deployment, and maintenance. I provide
                effective troubleshooting and remediation for the development
                and not only working on front-end, back-end, and API development
                by using the latest technologies but also I follow policies and
                procedures related to application methods and quality standards
                at all times.
              </p>
            </div>
          </div>

          <div className='timeline-block'>
            <div className='timeline-icon'>
              <SchoolIcon sx={{ fontSize: 23, mb: 1 }} />
            </div>
            <div className='timeline-header'>
              <h3>Lead Developer</h3>
              <p>Sept 2016 - Present</p>
            </div>
            <div className='timeline-content'>
              <h4>Freelance</h4>
              <p>
                As a freelance web developer responsibilities and duties are:
                Develop project concepts and maintain optimal workflow, Complete
                detailed programming and development tasks for front end and
                internal websites as well as challenging back-end server code,
                Collaborate with designers to create clean interfaces and
                simple, intuitive interactions and experiences and Carry out
                quality assurance tests to discover errors and optimize
                usability.
              </p>
            </div>
          </div>

          <div className='timeline-block'>
            <div className='timeline-icon'>
              <SchoolIcon sx={{ fontSize: 23, mb: 1 }} />
            </div>
            <div className='timeline-header'>
              <h3>Web Developer</h3>
              <p>June 2016 - Jan 2017</p>
              <p>KPK, Pakistan</p>
            </div>
            <div className='timeline-content'>
              <h4>Directorate of Information Technology, Govt. of KPK</h4>
              <p>
                More than 6-months intensive and interactive courses, lab work
                and implementation with other team members in order to carry-out
                some of the interactive and responsive websites, APIs in the
                Full Time working hours.
              </p>
            </div>
          </div>
        </div>

        <div className='education-h'>
          <h2>Education</h2>
        </div>
        <div className='timeline-edu'>
          <div className='timeline-block'>
            <div className='timeline-icon'>
              <BusinessCenterIcon sx={{ fontSize: 23, mb: 1 }} />
            </div>
            <div className='timeline-header'>
              <h3>BSc in Computer Science</h3>
              <p>Sept 2012 - Dec 2016</p>
            </div>
            <div className='timeline-content'>
              <h4>Kohat University of Science & Technology</h4>
              <p>
                Served as a Team lead of final year project, a students' project
                circle focused on latest technologies, ideas, workshops and
                lectures about web development. Co-created the new main website
                and android app for grocery market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
