import React from 'react';
import './about.css';
import { Link as Scroll, animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <div className='about'>
        <h5>ABOUT</h5>
        <h1>Let me introduce myself.</h1>
        <div className='introinfo'>
          <img src='/img/asad.jpg' alt='Asad' srcset='' />
          <p className='lead'>
            I am a full stack web developer and passionate about what I do and
            always give 100%. I have maintained, developed and launched multiple
            projects from scratch, carrying the development of its' back-end and
            front-end codebases.
          </p>
        </div>
        <div className='row about-content'>
          <div className='col-six'>
            <h3>PROFILE</h3>
            <p>
              I'm a developer, so I know how to create your website to run
              across devices using the latest technologies available.
            </p>
            <ul className='info-list'>
              <li>
                <strong>FullName:</strong>
                <span>Asad Ullah</span>
              </li>
              <li>
                <strong>BIRTH DATE:</strong>
                <span>February 14, 1994</span>
              </li>
              <li>
                <strong>JOB:</strong>
                <span>Full stack developer, Freelancer</span>
              </li>
              <li>
                <strong>WEBSITE:</strong>
                <span>www.asadullah.info</span>
              </li>
              <li>
                <strong>EMAIL:</strong>
                <span>asadullahkust@gmail.com</span>
              </li>
            </ul>
          </div>
          <div className='col-six'>
            <h3>SKILLS</h3>
            <p>
              My skills are broad: from front end to back end development. I
              enjoy each aspect, and love building sites from start to finish,
              for clients all over the world.
            </p>
            <ul className='skillbar'>
              <li>
                <div className='progress percent90'>
                  <span>90%</span>
                </div>

                <strong>
                  PHP<small>(FRAMEWORKS)</small>, Mysql
                </strong>
              </li>
              <li>
                <div className='progress percent85'>
                  <span>85%</span>
                </div>

                <strong>JS, HTML, CSS, REACTJS</strong>
              </li>
              <li>
                <div className='progress percent75'>
                  <span>75%</span>
                </div>
                <strong>
                  CODE TESTING<small>(PHP UNIT)</small>
                </strong>
              </li>
              <li>
                <div className='progress percent80'>
                  <span>80%</span>
                </div>

                <strong>80% APIS INTEGRATION</strong>
              </li>
              <li>
                <div className='progress percent75'>
                  <span>75%</span>
                </div>

                <strong>SERVER'S SIDE MANAGING</strong>
              </li>
            </ul>
          </div>
          <div className='row'>-</div>
          <div className='btn'>
            <Scroll duration={1500} spy={true} to='contact' smooth={true}>
              <a href='' className='hirebtn'>
                HIRE ME
              </a>
            </Scroll>
            <Link to='/cv' className='cvbtn'>
              <a className=''>DOWNLOAD CV</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
