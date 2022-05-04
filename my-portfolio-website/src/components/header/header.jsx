import React from 'react'
import './header.css'
import CTA from './CTA'
import Me from '../../assets/me-about tp.png'
import HeaderSocials from './headerSocials'

const header = () => {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hello I'm</h5>
        <h1>Hilary O Hilary</h1>
        <h2>(Web3_lario)</h2>
        <h5 className='text-light'>Fullstack Blockchain Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className='me'>
          <img src={Me} alt='me'></img>
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default header