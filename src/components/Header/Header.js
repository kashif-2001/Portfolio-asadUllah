import React from 'react';
import './Header.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {} from '@fortawesome/free-solid-svg-icons';
import { faDribbble } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../Navbar/Navbar';

import { Link as Scroll, animateScroll as scroll } from 'react-scroll';

export const Header = () => {
  return (
    <div className='banner'>
      <Navbar />
      <div className='introtext'>
        <h5>Hello, World.</h5>
        <h1>I'm Asad Ullah.</h1>
        <div className='introP'>
          <p>
            <span className='firstchild'>FULL STACT DEVELOPER</span>
            <span>MERN STACK DEVELOPER</span>
            <span>FREELANCER</span>
          </p>
          <Scroll duration={500} to='about' smooth={true}>
            <button className='introbutton'>
              MORE ABOUT ME
              <ExpandMoreIcon sx={{ m: -1, ml: 1 }} />
            </button>
          </Scroll>
        </div>
        <div className=''>
          <LinkedInIcon
            className='introicon'
            // sx={{ color: 'white', fontSize: 35 }}
          />
          <InstagramIcon
            className='introicon'
            // sx={{ color: 'white', fontSize: 35 }}
          />
          <GitHubIcon
            className='introicon'
            // sx={{ color: 'white', fontSize: 35 }}
          />
          <FacebookIcon
            className='introicon'
            // sx={{ color: 'white', fontSize: 35 }}
          />
          <TwitterIcon
            className='introicon'
            // sx={{ color: 'white', fontSize: 35 }}
          />
          <FontAwesomeIcon
            icon={faDribbble}
            className='introicondribble'
            sx={{ color: 'white' }}
          />
        </div>
      </div>
    </div>
  );
};
export default Header;
