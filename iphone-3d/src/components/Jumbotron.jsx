import React from 'react'
import İphone from "../assets/images/iphone-14.jpg"
import Holdingİphone from "../assets/images/iphone-hand.png"

function Jumbotron() {
    const handleLearnMore = () =>{
        const element = document.querySelector(".sound-section");
        window.scrollTo({
            top: element?.getBoundingClientRect().top,
            left:0,
            behavior:'smooth'
        })
    }
  return (
    <>
     <div className='jumbotron-section wrapper'>
        <h2 className='title'>New</h2>
        <img className="logo" src={İphone} alt="İphone 14 Pro" />
        <p className='text'>Big and Bigger.</p>
        <span className='description'>
            From $14.62/mo for 24 mo. or $999 before trade-in
        </span>
        <ul className='links'>
            <li className='button'>Buy</li>
            <li className='link' onClick={handleLearnMore}>Learn more</li>
        </ul>
        <img src={Holdingİphone} alt="İphone" className='iphone-img' />
     </div>
    </>
  )
}

export default Jumbotron