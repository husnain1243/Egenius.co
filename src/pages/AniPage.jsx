import React from 'react';
import Typewriter from '../TypeWritter/TypeWritter.jsx';
import '../Style/style.css'

export const AniPage = () => {

    return(
        <div id="AniPage" className="contact-wrapper">
            
            <div className="anipage-section">
                <div className="container-fluid py-3 py-5">
                    <div className="anipage-container position-relative">
                        <div className="typewriter">
                            <h1 className='text-dark'><Typewriter text="Welcome To My Portfolio Website Here You Can Explore EveryThing About Me." delay={200} /></h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}