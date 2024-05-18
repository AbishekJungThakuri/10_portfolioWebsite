import React from 'react'
import './Hero.css'
import abishek from '../../assets/abishek.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const Hero = () => {
  return (
    <div  id='home' className='hero'>
     <img src={abishek} alt="" />
     <h1> <span>I'm Abishek Jung Thakuri,</span> frontend developer based in Nepal.</h1>
     <p>I am a frontend developer from Chitwan, Nepal. I am just a beginner and learning myself.</p>
     <div className="hero-action">
        <div className="hero-connect">
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            Connect with me
          </AnchorLink>
        </div>
        <div className="hero-resume">My resume</div>
     </div>
    </div>
  )
}
