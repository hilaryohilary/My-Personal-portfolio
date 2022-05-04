import React from 'react'
import './portfolio.css'
import Weather from '../../assets/weatherapp1.JPG'
import StellarSyndicate from '../../assets/stellarsyndicate.png'
import AvaxGold from '../../assets/AVAX GOLD1.jpg'
import timeStampConverter from '../../assets/timestampconverter.JPG'
import smartAuction from '../../assets/smartAuction.JPG'
import larioToken from '../../assets/larioToken.JPG'
import ngblog from '../../assets/ngblog1.JPG'
import NftRaries from '../../assets/nft raries.JPG'

const portfolioData = [
  {
    id: 2,
    image: StellarSyndicate,
    title: 'StellarSyndicate, an NFT collection of 6,600 built on Solana Metaverse.',
    github: 'https://github.com/hilaryohilary/StellarSyndicate',
    demo: 'https://stellarsyndicate.io'
  },
  {
    id: 3,
    image: AvaxGold,
    title: 'AXGO a utility token for the AvaxGold Ecosystem.',
    github: 'https://github.com/hilaryohilary',
    demo: ''
  },
  {
    id: 4,
    image: smartAuction,
    title: 'Smart auction built on Ethereum.',
    github: 'https://github.com/hilaryohilary/Auction-Contract',
    demo: ''
  },
  {
    id: 5,
    image: timeStampConverter,
    title: 'Unix timeStamp Converter',
    github: 'https://github.com/hilaryohilary/timeStampConverter',
    demo: 'https://unixconverter.web.app'
  },
  {
    id: 6,
    image: larioToken,
    title: 'An experimental token for my community.',
    github: 'https://github.com/hilaryohilary/LarioContract',
    demo: ''
  },
  {
    id: 7,
    image: ngblog,
    title: 'A personal blog built with Angular and NodeJS',
    github: 'https://github.com/hilaryohilary/Ng-blog-project',
    demo: ''
  },
  {
    id: 8,
    image: Weather,
    title:'Progressive Web App built with vanilla Javascript and fetch Api',
    github: 'https://github.com/hilaryohilary/hilary-weatherApp',
    demo: 'https://hilary-weatherapp.web.app/'
  },
  {
    id: 9,
    image: NftRaries,
    title: 'Nft Raries, a simple implementation of rarity.tools',
    github: 'https://github.com/hilaryohilary/Nftraries',
    demo: ''
  }
]

const portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          portfolioData.map(({id, image, title, github, demo}) => {
            return (
              <article className="portfolio__item">
                <div className="portfolio__item_image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                <a href={github} className='btn' target='__blank'>Github</a>
                {demo !== "" ? <a href={demo} className='btn btn-primary' target='__blank'>Live Demo</a> : null}
                </div>
            </article>)
          })
        }
        
      </div>
    </section >
  )
}

export default portfolio