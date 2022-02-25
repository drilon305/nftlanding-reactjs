/* eslint-disable react/jsx-no-undef */
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Release from './components/Release'
import ScrollToTop from './components/ScrollToTop'
import SignUp from './components/SignUp'
import SuperRare from './components/SuperRare'
import Free from './components/Free'
import Like from './components/Like'
import Clients from './components/Clients'
import Footer from './components/Like'
import "./sass/index.scss";

export default function App() {
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