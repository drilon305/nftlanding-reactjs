import React from 'react'
import logo from "../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";

  

const Footer = () => {
  const links = [
    {
      title: "About",
      data: ["About", "Terms", "Legal"],
    },
    {
      title: "NFT",
      data: ["OpenSea", "Maker", "Learn"],
    },
    {
      title: "Contact",
      data: ["Press", "Support"],
    },
    {
      title: "Social",
      data: ["Twiiter", "Instagram"],
    },
  ];
  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ];

  return (
    <footer>
      <div className="upper">
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt='logo' />
          </div>
          <p>Exclusive NFT Collection</p>
          <ul>
            {socialLink.map((link, i) => (
              <li key={i}>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({title, data}, i) => {
            return (
              <div className="link" key={i}>
                <h4>{title}</h4>
                <ul>
                {data.map((link, index) => (
              <li key={index}>
                {link}
              </li>
            ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>
      <div className="lower">
        <span>&copy; Copyright 2022 NFT</span>
      </div>
    </footer>
  )
}

export default Footer