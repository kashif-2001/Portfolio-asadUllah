import React from 'react';
import './portfolio.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Masonry } from '@mui/lab';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Portfolio = () => {
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
      imageUrl: '/img/bitdelia-desktop.png',
      imageWidth: 600,
      imageHeight: 300,
      confirmButtonText: '<a href="https://dirhamcoin.com/">VISIT SITE</a>',
      showCancelButton: true,
    });
  }

  return (
    <div>
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
          </Masonry>
          <div className='portfolio_btn'>
            <Link to='/Projects'>
              <button style={{ margin: '35px' }} className='transbtn'>
                More Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portfolio;
