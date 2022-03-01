/* eslint-disable react/jsx-no-undef */
import React, { useState, useEffect } from 'react'
import scrollreveal from 'scrollreveal'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Release from './components/Release'
import ScrollToTop from './components/ScrollToTop'
import SignUp from './components/SignUp'
import SuperRare from './components/SuperRare'
import Free from './components/Free'
import Like from './components/Like'
import Clients from './components/Clients'
import Footer from './components/Footer'
import "./sass/index.scss";

export default function App() {
  useEffect(() => {
    const registerAnimations = () => {
      const sr = scrollreveal({
        origin: 'bottom',
        distance: '80px',
        duration: 2000,
        reset: false,
      });
      sr.reveal(
        `nav, .home, .free, .clients, .super-rare, .release, .like, .signup, footer`, {
          interval: 500
        }
      );
    }
    registerAnimations();
  }, [])

  window.setTimeout(() => {
    const home = document.getElementsByClassName('home');
    home[0].style.transform = 'none';
    const nav = document.getElementsByName('nav');
    nav[0].style.transform = 'none';
  }, 1500)

  return <div className='app-container'>
     <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Clients />
      <SuperRare />
      <Release />
      <Like />
      <SignUp />
      <Footer />
  </div>
}