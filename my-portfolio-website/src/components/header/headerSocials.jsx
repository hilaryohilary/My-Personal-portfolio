/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/hillary-ononiwu-1b139a234" target="_blank" rel='noreferrer'><BsLinkedin /></a>
      <a href="https://twitter.com/web3_lario" target="_blank" rel='noreferrer'><BsTwitter /></a>
      <a href="https://github.com/hilaryohilary" target="_blank" rel='noreferrer'><FaGithub /></a>
    </div>
  )
}

export default HeaderSocials