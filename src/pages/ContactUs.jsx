import { ContactUsDetails } from "../component/ContactUsDetails/ContactUsDetails";
import { ContactUsForm } from "../component/ContactUsDetails/ContactUsForm";

export const ContactUs = () => {

    return(
        <div id="contact-us" className="contact-wrapper">
            
            <div className="contactform-section py-4 py-lg-5">
                <div className="container">
                    <div className="contactform-container d-flex justify-content-center">
                        <div className="row">
                            <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
                                <ContactUsDetails/>
                            </div>

                            <div className="col-12 col-xl-6">
                                <ContactUsForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}