import * as React from 'react';
import './Navbar.css';
import MenuIcon from '@mui/icons-material/Menu';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { red, pink } from '@mui/material/colors';
import { Link } from 'react-router-dom';
import { Link as Scroll, animateScroll as scroll } from 'react-scroll';

export default function SimpleAccordion() {
  const [active, setActive] = React.useState(false);

  return (
    <div>
      <Accordion
        className='nav'
        sx={{
          top: '0%',
          left: '12%',
          background: 'black',
          color: 'white',
          position: 'fixed',
          zIndex: '1000',
          wordWrap: 'nowrap',
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <MenuIcon sx={{ fontSize: 35, mr: 2, color: pink[500] }} />
          <Typography
            className='navname'
            sx={{
              lineHeight: 2.8,
              fontWeight: 700,
              fontSize: '18px',
              color: 'white',
            }}
          >
            Asad Ullah
          </Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ mr: 15 }}>
          <Typography className='link'>
            <Scroll duration={1500} spy={true} to='banner' smooth={true}>
              <Link to='/' className='link'>
                <a className='padding'>HOME</a>
              </Link>
            </Scroll>
          </Typography>
          <Typography className='link'>
            <Scroll duration={1500} spy={true} to='about' smooth={true}>
              <Link to='/' className='link'>
                <a>About</a>
              </Link>
            </Scroll>
          </Typography>
          <Typography className='link'>
            <Scroll duration={1500} spy={true} to='resume' smooth={true}>
              <Link to='/' className='link'>
                <a>Resume</a>
              </Link>
            </Scroll>
          </Typography>
          <Typography className='link'>
            <Scroll duration={1500} spy={true} to='portfolio' smooth={true}>
              <Link to='/' className='link'>
                <a>Portfolio</a>
              </Link>
            </Scroll>
          </Typography>
          <Typography className='link'>
            <Scroll duration={1500} spy={true} to='contact' smooth={true}>
              <Link to='/' className='link'>
                <a>Contact</a>
              </Link>
            </Scroll>
          </Typography>
          <Typography className='link'>
            <Link to='/cv' className='link'>
              <a className=''>MyCV</a>
            </Link>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
