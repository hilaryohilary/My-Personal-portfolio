import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className='service__head'>
            <h3>UI/UX/Graphics Design</h3>
          </div>
            <ul className="service__list">
              <li><BiCheck className='service__list-icon'/>Business | complementary cards.</li>
              <li><BiCheck className='service__list-icon'/>Promotional videos for businesses.</li>
              <li><BiCheck className='service__list-icon'/>UI/UX design for websites and mobile apps.</li>
              <li><BiCheck className='service__list-icon'/>2D graphics and animations.</li>
              <li><BiCheck className='service__list-icon'/>Modern website UI creations.</li>
            </ul>
        </article>
        <article className="service">
          <div className='service__head'>
            <h3>Blockchain Development</h3>
          </div>
            <ul className="service__list">
              <li><BiCheck className='service__list-icon'/>Cryptocurrency smart contracts for Ethereum, BSC and Polygon.</li>
              <li><BiCheck className='service__list-icon'/>NFT creation for Ethereum, BSC networks.</li>
              <li><BiCheck className='service__list-icon'/>Solana NFTs, metaplex and candy machine setup.</li>
              <li><BiCheck className='service__list-icon'/>Solana SPL Token generation.</li>
              <li><BiCheck className='service__list-icon'/>NFT staking smart contracts.</li>

              <li><BiCheck className='service__list-icon'/>DEFI protocols.</li>
            </ul>
        </article>
        <article className="service">
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
            <ul className="service__list">
              <li><BiCheck className='service__list-icon'/>Personal | business portfolio websites.</li>
              <li><BiCheck className='service__list-icon'/>Cryptocurrency | DEFI protocol Landing pages.</li>
              <li><BiCheck className='service__list-icon'/>NFT minting sites | Landing pages.</li>
              <li><BiCheck className='service__list-icon'/>Personal | business Blogs.</li>
            </ul>
        </article>   
      </div>
    </section >
  )
}

export default services