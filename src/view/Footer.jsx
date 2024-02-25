import { FooterSocials } from '../component/Footer/FooterSocial';
import { FooterWidget1 } from "../component/Footer/FooterWidget1";
import { FooterWidget2 } from "../component/Footer/FooterWidget2";

export const Footer = () => {

    return(
        
        <footer id='footer' className="footer py-4 py-lg-5 bg-dark text-white">
            <div className="container">
                <div className="footer-container py-4 py-lg-5">
                    <div className="row">
                        <FooterWidget2/>
                        <FooterWidget1/>
                        <FooterSocials/>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <span style={{fontSize: "18px"}}>EGENIUS.co @ 2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    )
}

                        
                        
