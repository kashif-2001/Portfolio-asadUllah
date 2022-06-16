import React from 'react';
import './Contact.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import PinDropOutlinedIcon from '@mui/icons-material/PinDropOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import Footer from '../Footer/Footer';

const Contact = () => {
  return (
    <div name='contact'>
      <div className='contacts'>
        <h5 className='contact-head'>contact</h5>
        <h1>I'd Love To Hear From You.</h1>
        <p className='contactP'>
          If you like my work and have some cool projects to work on, just send
          me a direct message or contact me through social sites.
        </p>
        <form className='textfield'>
          <div>
            <input type='text' name='' id='' placeholder='Name' required />
          </div>
          <div>
            <input type='email' name='' id='' placeholder='Email' required />
          </div>
          <div>
            <input type='text' name='' id='' placeholder='Subject' required />
          </div>
          <div>
            <textarea
              name=''
              placeholder='Message'
              id=''
              cols='30'
              rows='10'
            ></textarea>
          </div>
          <input className='bigbtn' type='submit' />
        </form>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={1}>
            <Grid item md={4} sm={12} xs={12}>
              <div className='contact-info'>
                <PinDropOutlinedIcon sx={{ fontSize: 45, color: 'white' }} />
                <h5>Where to find me</h5>
                <p>
                  1600 Stree 03 ABCD
                  <br /> Mountain View, KP
                  <br /> 94043 AB
                </p>
              </div>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <div className='contact-info'>
                <MailOutlineOutlinedIcon
                  sx={{ fontSize: 45, color: 'white' }}
                />
                <h5>Email it me</h5>
                <p>
                  asadullahkust@gmail.com
                  <br /> contact@asadullah.info
                </p>
              </div>
            </Grid>
            <Grid item md={4} sm={12} xs={12}>
              <div className='contact-info'>
                <PhoneOutlinedIcon sx={{ fontSize: 45, color: 'white' }} />
                <h5>Call me it</h5>
                <p>
                  Mobile: (+92) xxx xxxx
                  <br /> Fax: (+92) xxx xxxx
                </p>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </div>
    </div>
  );
};

export default Contact;
