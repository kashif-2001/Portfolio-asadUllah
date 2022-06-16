import React from 'react';
import './cv.css';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
const Cv = () => {
  return (
    <div className='cv'>
      <div className='cv-page'>
        <div className='cv-inner'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item md={4} sm={4} xs={4}>
                <div className='cv-headerimg'>
                  <img src='/img/asad.jpg' alt='' srcset='' />
                </div>
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <div className='cv-header-text'>
                  <h1>Asad Ullah</h1>
                  <h2>Full Stack/MERN Stack Developer</h2>
                  <p>
                    Self-motivated full stack/MERN stack developer with 4 years
                    of professional experience in coding, launching and teaching
                    others.
                    <br />
                    <br />
                    <strong>Looking for a new challenge</strong>
                    <br />
                    Willing to relocate to any place or can work remotely.
                  </p>
                </div>
              </Grid>
              <Grid item md={4} sm={4} xs={4}>
                <div className='cv-header-meta'>
                  <a href=''>asadullahkust@gmail.com</a>
                  <p>+974 7711 3158</p>
                  <a href=''>www.asadullah.info</a>
                  <a href=''> linkedin.com/asadullah041</a>
                </div>
              </Grid>
            </Grid>
          </Box>
          <div className='cv-section'>
            <div className='cv-section-title'>
              <h3>Experience</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>
                      Nova Labs & Tazweed Autos
                    </div>
                    <div className='cv-timeline-date'>02/2020 - Present</div>
                    <a href=''>novalabs-qa.com</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>Team Lead & Full-stack/MERN stack Developer</h4>
                    <p>Worked on SaaS app & other projects.</p>
                    <ul>
                      <li>
                        Planned, developed, tested, deployed, and maintained web
                        applications/microservices.
                      </li>
                      <li>
                        Provided effective troubleshooting and remediation for
                        the development.
                      </li>
                      <li>
                        Working on front-end, back-end, microservices and API
                        development by using the latest technologies (reactjs +
                        react native, express + nodejs (typescript), unit tests,
                        aws services, github, and many other packages/services).
                      </li>
                      <li>
                        Worked well independently and within a team setting.
                      </li>
                      <li>
                        Followed policies and procedures related to application
                        methods and quality standards at all times.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>

          <div className='cv-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>FREELANCE</div>
                    <div className='cv-timeline-date'>9/2016 - Present</div>
                    <a href=''> asadullah.info</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>Full-stack Developer</h4>
                    <p>Self-driven web development for remote clients.</p>
                    <ul>
                      <li>
                        Created and launched multiple web/mobile applications,
                        participating in the whole process of their development:
                        devops, hosting, front-end and back-end programming,
                        UI/UX design, maintenance and project management. (see
                        asadullah.info)
                      </li>
                      <li>
                        Complete detailed programming and development tasks for
                        front end and internal websites as well as challenging
                        back-end server code.
                      </li>
                      <li>
                        Helped to migrate the front-end and back-end structure
                        to the latest web technologies with an architecture
                        based on mostly PHP frameworks.
                      </li>
                      <li>
                        Developed and released a cross-platform web/mobile
                        applications in Codeigniter/Laravel/Slim/ReactJs/React
                        native Framework for web platforms.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}
          <div className='cv-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>
                      PHEGOH GLOBAL SERVICES LIMITED
                    </div>
                    <div className='cv-timeline-date'>10/2017 - 7/2018</div>
                    <a href=''> ladyfexchange.com</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>Lead Full-stack Developer & CTO</h4>
                    <p>
                      Built and maintained a web platform, that allows to buy
                      and sell e-currencies into the local currency all over the
                      world.
                    </p>
                    <ul>
                      <li>
                        Created international marketplace (in Codeigniter)
                        allowing end-customers to browse different e-currency
                        (bitcoin, ethereum, etc), see their market values and
                        prices, and buy or sell them online via LadyF exchange
                        platform.
                      </li>
                      <li>
                        Created a user-friendly web application for Partners (in
                        Codeingiter ) to manage their offers, schedules, prices,
                        orders, customers and agents' network.
                      </li>
                      <li>
                        Implemented custom JS price converter, that users can
                        calculate in order to firgure out buy and sell values of
                        different e-currencies with ease.
                      </li>
                      <li>
                        Helped to raise an investment and promotion of site.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}

          <div className='cv-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>DIRHAM COIN</div>
                    <div className='cv-timeline-date'>4/2018 - 8/2018</div>
                    <a href=''> dirhamcoin.com</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>Lead Web Developer</h4>
                    <p>
                      Built and maintained a web platform, that lets users
                      easily buy the masternodes and dirham coin with wallet
                      service, manage their orders and secure transactions over
                      the network.
                    </p>
                    <ul>
                      <li>
                        Created a responsive front-end web application with
                        multiple user access levels.
                      </li>
                      <li>
                        Created a cross-platform web app in Codeigniter
                        Framework for all kind of web platforms.
                      </li>
                      <li>
                        Developed unit and end-to-end tests for both front-end
                        and back-end code of the web.
                      </li>
                      <li>
                        Wrote automatic synchronizations with remote APIs, that
                        e.g. dirham-coin's explorer, coin supply in AED and
                        Network hash and difficulty of current market value.
                      </li>
                      <li>
                        Integrated two factor authentication with Google
                        authenticator into the project and support system for
                        the users.
                      </li>
                      <li>
                        Maintained the code and build/deploy setup with multiple
                        environments throughout the whole duration of the
                        project.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}

          {/*  */}

          <div className='cv-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>BIT-DELIA</div>
                    <div className='cv-timeline-date'>02/2018</div>
                    <a href=''>bitdelia.com</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>Lead Web Developer</h4>
                    <p>
                      Services at Bitdelia allows everyone to be part of
                      advanced financial system, it offer products and services
                      which makes it possible for individuals and businesses to
                      buy, sell, store, use, and learn about cryptocurrencies
                      (such as Bitcoin, Ethereum and Litecoin).
                    </p>
                    <ul>
                      <li>
                        Created an interactive web application for an online
                        buy/sell digit currency.
                      </li>
                      <li>
                        Developed the back-end API and an admin panel with CI
                        Framework of PHP.
                      </li>
                      <li>
                        Developed a version 2.0 of Bitdelia, a popular
                        e-currency buy/sell platform, by adding lots of new
                        features and refactoring almost all of the old, legacy
                        codebase based on Codeigniter & Slim PHP framework.
                      </li>
                      <li>
                        Optimized the database structure and indexes to work
                        properly with even up to ~1 milion records.
                      </li>
                      <li>
                        Optimized performance by various tweaks and fragment
                        caching to fulfill the client's expectation of having
                        about a lot of page views monthly.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}
          <div className='cv-section'>
            <div className='cv-section-title'>
              <h3>Skills</h3>
            </div>
            <div className='skill-content'>
              <div className='skill-tag'>
                <div className='cv-tags'>Javascript</div>
                <div className='cv-tags'>Typescript</div>

                <div className='cv-tags'>Node js</div>
                <div className='cv-tags'>React JS</div>

                <div className='cv-tags'>React Native</div>
                <div className='cv-tags'>Vue js</div>
                <div className='cv-tags'>Jquery</div>
                <div className='cv-tags'>Php</div>
                <div className='cv-tags'>Php framework</div>
                <div className='cv-tags'>CODEIGNITER FRAMEWORK</div>

                <div className='cv-tags'>Slim</div>
                <div className='cv-tags'>Apis</div>
                <div className='cv-tags'>Opp & mcv</div>
                <div className='cv-tags'>Git Bash</div>
                <div className='cv-tags'>Aws</div>
                <div className='cv-tags'>Algorithms</div>
                <div className='cv-tags'>Database design</div>
                <div className='cv-tags'>BUSINESS ORIENTED DEVELOPMENT</div>
                <div className='cv-tags'>PHPUNIT TESTING</div>
                <div className='cv-tags'>TECH & CUSTOMER SUPPORT</div>
                <div className='cv-tags'>CLIENT NEGOTIATIONS</div>
              </div>
            </div>
          </div>
          {/*  */}

          <div className='cv-section'>
            <div className='cv-section-title'>
              <h3>Education and Distinction</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>
                      KOHAT UNIVERSITY OF TECHNOLOGY
                    </div>
                    <div className='cv-timeline-date'>2012 - 2016</div>
                    <a href=''>kust.edu.pk</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>BSc in Computer Science (Hons)</h4>
                    <ul>
                      <li>
                        Served as a Team lead of final year project, a students'
                        project circle focused on latest technologies, ideas,
                        workshops and about development/implementation.
                      </li>
                      <li>
                        Co-created the new main website and android app for
                        grocery market.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}
          <div className='cv-section php-section'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-side'>
                    <div className='cv-timeline-company'>PHP CLASSES SITE</div>
                    <div className='cv-timeline-date'>Oct 2018</div>
                    <a href=''>www.phpclasses.org</a>
                  </div>
                </Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <h4>PHP Innovation Award</h4>
                    <ul>
                      <li>
                        Coded two factor authentication method of Google
                        authenticator. This allows applications to verify if an
                        user is the person he claims to be more than one way,
                        thus allowing to implement what is called two factor
                        authentication.
                      </li>
                      <li>
                        Awarded with PHP Innovation award, it can be dowload
                        <br />
                        <a href='' className='cv-timeline-a'>
                          from: https://www.phpclasses.org/package/10893
                        </a>
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
          {/*  */}
          <div className='cv-section'>
            <div className='cv-section-title'>
              <h3>Other perks</h3>
            </div>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={4}></Grid>
                <Grid item md={4} sm={4} xs={4}>
                  <div className='cv-timeline-body'>
                    <ul>
                      <li>
                        Long time member of an english-speaking edx &
                        future-learning, which focuses on development of public
                        speaking and personal skills.
                      </li>
                      <li>
                        Received "The Web Technologies Certification" award upon
                        completing the training, thanks to multiple achievements
                        in mathematics, informatics and other projects.
                      </li>
                      <li>
                        I speak native Pashto, fluent Urdu, conversational
                        English and basic Arabic.
                      </li>
                      <li>
                        Football player for a couple of years and willing to
                        continue it. Also a frequent cricket player.
                      </li>
                    </ul>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cv;
