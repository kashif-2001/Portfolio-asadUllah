import React from 'react';
import './Stats.css';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import FreeBreakfastOutlinedIcon from '@mui/icons-material/FreeBreakfastOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

import CountUp, { useCountUp } from 'react-countup';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Stats = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(callBack, options);
    const currentTarget = ref.current;
    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, []);

  const callBack = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting == true) {
      setIsVisible(entry.isIntersecting);
    }
  };

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1,
  };
  return (
    <div>
      <div className='stats' ref={ref}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <DesignServicesIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={25} /> : 0}</h3>
                <h5>Project Completed</h5>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <PersonOutlineIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={100} /> : 0}</h3>
                <h5>Happy Clients</h5>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <WorkspacePremiumOutlinedIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={15030} /> : 0}</h3>
                <h5>Lines of Code</h5>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <LightbulbOutlinedIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={13} /> : 0}</h3>
                <h5>Crazy Ideas</h5>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <FreeBreakfastOutlinedIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={723} /> : 0}</h3>
                <h5>Cuffee cups</h5>
              </div>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <div className='stats-content'>
                <div className='iconpart'>
                  <AccessTimeOutlinedIcon sx={{ fontSize: 60 }} />
                </div>
                <h3>{isVisible ? <CountUp duration={5} end={5200} /> : 0}</h3>
                <h5>Hours</h5>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
};

export default Stats;
