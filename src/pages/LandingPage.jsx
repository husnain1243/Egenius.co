import React from 'react';
import '../Style/style.css'

export const LandingPage = () => {
    return(
        <div id="AniPage" className="contact-wrapper">
            
            <div className="anipage-section position-fixed top-0 w-100 bg-dark" style={{zindex: 10 , height: '100vh'}}>
                <iframe
                    src="https://husnain1243.github.io/EgeniusAdvance/"
                    width="100%"
                    height="100%"
                    title="External Website"
                />
            </div>

        </div>
    )
}