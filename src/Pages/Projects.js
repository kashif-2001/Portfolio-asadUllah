import React from 'react';
import Footer from '../components/Footer/Footer';
import Portfolio from '../components/Portfolio/portfolio';
import Stats from '../components/Stats/Stats';

import Navbar from '../components/Navbar/Navbar';
import { Masonry } from '@mui/lab';
import { Link } from 'react-router-dom';

import Swal from 'sweetalert2';

const Projects = () => {
  function model_evo() {
    Swal.fire({
      title: 'Evonex Pay',
      text: 'Evonexpay.com is a Product of Evonex Global Services Limited designed to serve the need of our age; the thirst for convenience and fast services',
      imageUrl: '/img/evonex-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_coin() {
    Swal.fire({
      title: 'Coin Woid',
      text: 'Want to buy or sell your Bitcoins at a good rate for instant naira payment into your bank account? Simply create an account with coin woid and start trading!',
      imageUrl: '/img/evonex-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_cash() {
    Swal.fire({
      title: 'Cash Plus Coins',
      text: 'Cashpluscoins is a cryptocurrency exchange platform. CPC make it easy for you to trade bitcoins for naira and get paid within 5 minutes with best rate guaranteed.',
      imageUrl: '/img/cashcoinplus-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_card() {
    Swal.fire({
      title: 'Card Haveins',
      text: 'A Reliable Platform For Gift Card Trading and Instant Payments',
      imageUrl: '/img/cardhaveins-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_bknew() {
    Swal.fire({
      title: 'Bk news',
      text: 'Beautiful Kohat is a local news source of Kohat, an district of Khyber Pakhtunkhwa province of Pakistan. on BKNews.PK we strive to provide latest news to our viewers we also working for the development of Kohat',
      imageUrl: '/img/bknews-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_bit() {
    Swal.fire({
      title: 'Bitdelia',
      text: 'Bitdelia is safe, secure and flawless digital currency exchange platform. Bitdelia is a platform to provide users online buy and sell of e-currency with withdrawal bounus system. Supported exchange platforms included, bitcoin, perfect money, web money, payoneer, paypal and other too.',
      imageUrl: '/img/bitdelia-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_dir() {
    Swal.fire({
      title: 'Dirham Coin',
      text: 'DirhamCoin – AED offers a refreshing approach to managing finance and breaks the mould of traditional fiat currencies and banking systems. DirhamCoin is free of interest of any kind and through a reserve, establishes trust via the Blockchain offering several benefits over traditional fiat currencies; Securing the network, rewarding investors at a higher rate for running green nodes and issuing rewards for simply holding AED in a digital wallet.',
      imageUrl: '/img/dirhamcoin-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_lady() {
    Swal.fire({
      title: 'Ladyf Exchange',
      text: 'LADYF Exchange is a platform to provide users online buy and sell orders of e-currencies with withdrawal bonus system. Ultimate priority is making LadyF Exchange an even better e-currency that you can use for virtually any kind of transaction. Use the exchange services listed to fund your account in your preferred way or exchange your funds into a e-currency of your choice. Do trade with company as well as individual.',
      imageUrl: '/img/ladyfexchange-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_naira() {
    Swal.fire({
      title: 'Naira Bitkoin',
      text: 'Naira BitKoin is a total e-business solution provider that specializes in the provision of fast, reliable and efficient e-currency (Bitcoin, Litecoin, Ethereum and Perfect Money) exchange service to clients who desire to buy and sell online with ease.',
      imageUrl: '/img/nairabitkoin-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_tutu() {
    Swal.fire({
      title: 'Tutu Exchange',
      text: 'At Tutu exchange you can buy and sell bitcoins and other cryptocurrencies easy, fast and secure. The aim to make the buying and selling process as fast and easy as possible for our clients, without compromising safety. The coins are sent as soon as the payment has been finalized. When selling cryptocurrencies, the money is transferred to the bank account number specified by clients.',
      imageUrl: '/img/tutuexchange-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_super() {
    Swal.fire({
      title: 'Supri Bitex',
      text: 'SupriBit EXchange is a total e-business solution provider that specializes in the provision of fast, reliable and efficient e-currency (Bitcoin, Litecoin, Ethereum and Perfect Money) exchange service to clients who desire to buy and sell online with ease. Supribitex help you convert your Cash to E-currency and also help you convert your E-currency to Cash in a blink of an eye.',
      imageUrl: '/img/supribitex-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  function model_nairapay() {
    Swal.fire({
      title: 'Naira Payment',
      text: 'Naira Payment is a platform to provide users online buy and sell orders of e-currency with withdrawal bounus system. Supported multi e-currency exchange platforms all around the world.',
      imageUrl: '/img/nairapayment-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_bkjobs() {
    Swal.fire({
      title: 'bk jobs',
      text: 'BKJobs.pk is Pakistans leading jobs site. It helps jobseekers in finding the jobs of their choice, while providing not only jobs but also admissions and tenders posts to from different newspaper of Pakistan like The Nation, Express, Express Tribune, Jang, Mashriq, Dawn, The News, Dunya, Ausaf, etc.',
      imageUrl: '/img/bkjobs-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_kda() {
    Swal.fire({
      title: 'kda',
      text: 'KDA strives to be an accountable and people-friendly principal planning and development vehicle of the Kohat Metropolis, aiming at providing and continuously improving metropolis-vide development works, facilities and services of acceptable standards to all. KDA attempts to turn Kohat into an “attainable city” with combined support of people, private sector and different level of the Government, where overwhelming majority enjoys convenient, healthful and satisfied living.',
      imageUrl: '/img/kda-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  function model_xchange() {
    Swal.fire({
      title: 'Kaboninc Xchange',
      text: 'Kaboninc Xchange is the place where you can buy and sell popular digital currencies, keep track of them in the one place.',
      imageUrl: '/img/kbcxchange-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }
  return (
    <div>
      <Navbar />
      <div className='portfolio'>
        <div className='portfolio-intro'>
          <h5>PORTFOLIO</h5>
          <h1>Check Out Some of My Works.</h1>
          <p>
            See my works below. Unless stated otherwise in their description,
            all their back-end and front-end parts were completely done by me.
          </p>
        </div>

        <div className='portfolio-content'>
          <Masonry
            spacing={0}
            columns={{ md: 2, sm: 2, xs: 1 }}
            style={{ width: '80%', margin: '0 auto' }}
          >
            <div className='folio-item'>
              <img src='/img/evonex-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_evo}>
                <div className='overlay-text'>
                  <h1>Evonex Pay</h1>
                  <p>Instant Funding Guaranteed</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='img/cwoid-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_coin}>
                <div className='overlay-text'>
                  <h1>Coin Woid</h1>
                  <p>buy/sell coins with coin woid</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/cardhaveins-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_card}>
                <div className='overlay-text'>
                  <h1>Card Haveins</h1>
                  <p>Sell gifts card for cash instantly</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/cashcoinplus-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_cash}>
                <div className='overlay-text'>
                  <h1>Cash plus coins</h1>
                  <p>Cashpluscoins,an exchange platfrom</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/bknews-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_bknew}>
                <div className='overlay-text'>
                  <h1>BK news</h1>
                  <p>bk news</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/bitdelia-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_bit}>
                <div className='overlay-text'>
                  <h1>Bitdelia</h1>
                  <p>DIGITAL CURRENCY EXCHANGE PLATFORM</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/dirhamcoin-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_dir}>
                <div className='overlay-text'>
                  <h1>Dirham Coin</h1>
                  <p>A Greener Future is Dirham</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/ladyfexchange-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_lady}>
                <div className='overlay-text'>
                  <h1>Ladyf Exchange</h1>
                  <p>Instant funding for cryptocurrencies</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/nairabitkoin-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_naira}>
                <div className='overlay-text'>
                  <h1>Naira Bitkoin</h1>
                  <p>Easy, Fast and Secure Platform</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/tutuexchange-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_tutu}>
                <div className='overlay-text'>
                  <h1>Tutu Exchange</h1>
                  <p>Buy, Sell of Digit Currency</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/supribitex-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_super}>
                <div className='overlay-text'>
                  <h1>Supri Bitex</h1>
                  <p>Easiest & most trusted site</p>
                </div>
              </div>
            </div>
            <div className='folio-item'>
              <img src='/img/nairapayment-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_nairapay}>
                <div className='overlay-text'>
                  <h1>Naira Payment</h1>
                  <p>Instant Funding Guaranteed</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/bkjobs-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_bkjobs}>
                <div className='overlay-text'>
                  <h1>bk jobs</h1>
                  <p>
                    Most Trusted Jobs Site in Pakistan, Operating by Beautiful
                    Kohat Team
                  </p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/kda-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_kda}>
                <div className='overlay-text'>
                  <h1>Kda</h1>
                  <p>kohat development authority</p>
                </div>
              </div>
            </div>

            <div className='folio-item'>
              <img src='/img/kbcxchange-desktop.png' alt='' srcSet='' />
              <div className='overlay' onClick={model_xchange}>
                <div className='overlay-text'>
                  <h1>Kaboninc Xchange</h1>
                  <p>buy and sell orders for any supported e-currency</p>
                </div>
              </div>
            </div>
          </Masonry>
        </div>
        <Stats />
        <Footer />
      </div>
    </div>
  );
};
export default Projects;
