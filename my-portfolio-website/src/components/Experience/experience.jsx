import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id='experience'>
      <h5>
        Skills I have
      </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>HTML</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>CSS</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>JavaScript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Typescript</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>BootStrap</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Angular Material</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Angular</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>React</h4>
              </div>
            </article>
          </div>
        </div>
        {/* End of FrontEnd */}
        <div className="experience__backend">
        <h3>Backend | Blockchain Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Node Js</h4>
              </div>
            </article>
            
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Nest Js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Docker</h4>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Mongo DB</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Firebase</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>MySQL</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Solidity</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Web3 js</h4>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Solana |</h4>
              <h4>Rust</h4>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section >
  )
}

export default experience