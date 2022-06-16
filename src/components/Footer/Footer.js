import React from 'react';
import './footer.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faDribbble } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className='Footer'>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid item md={6} sm={12} xs={12}>
            <div className='footer-text'>
              <p>© Copyright 2018.</p>
            </div>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <div className='footer-text'>
              <LinkedInIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                  paddingLeft: '22px',
                  cursor: 'pointer',
                }}
              />
              <InstagramIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                  paddingLeft: '22px',
                  cursor: 'pointer',
                }}
              />
              <GitHubIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                  paddingLeft: '22px',
                  cursor: 'pointer',
                }}
              />
              <FacebookIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                  paddingLeft: '22px',
                  cursor: 'pointer',
                }}
              />
              <TwitterIcon
                sx={{
                  fontSize: 25,
                  color: 'white',
                  paddingLeft: '22px',
                  cursor: 'pointer',
                }}
              />
              <FontAwesomeIcon
                icon={faDribbble}
                className='contact-icon'
                sx={{ color: 'white' }}
              />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Footer;
