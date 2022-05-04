/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import {IoLogoTwitter} from 'react-icons/io'
import {BsLinkedin} from 'react-icons/bs'

const footer = () => {
  return (
    <footer id='footer'>
      <a href="#" className="footer__logo">HILARY .O. HILARY </a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/web3_lario" target='_blank' rel='noreferrer'><IoLogoTwitter /></a>
        <a href="https://www.linkedin.com/in/hillary-ononiwu-1b139a234" target='_blank' rel='noreferrer'> <BsLinkedin /> </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Web3_lario, All rights reserved. </small>
      </div>
    </footer>
  )
}
export default footer