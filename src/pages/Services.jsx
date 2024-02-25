import { ServiceBanner } from "../component/ServiceComponent/ServiceBanner"
import { OurService } from "../component/ServiceComponent/OurServie"
import vision from "../asserts/vision.png";
import { Testimonials } from "../component/Testimonial/Testimonials";

export const Services = () => {
    return(
        <div id="our-service" className="wrapper our-service">
        
            <ServiceBanner/>
            <OurService/>
            <div className="Vision-section bg-dark py-4 py-lg-5">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-md-row">
                        <div className="col-12 col-md-6">
                            <div class="Vision-Image-container">
                                <img src={vision} alt="logo" className="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="Vision-data">
                                <h3 className="mb-4">Vision</h3>
                                <h2 className="mb-4">Technology inspired through creativity</h2>
                                <p className="mb-4">Cynosure Designs have been providing innovative and affordable graphic and web solutions, enabling individuals and organisations of all sizes to achieve their design objectives.By understanding the processes that make your business unique, we are able to utilise our creative skills and technological know-how to build a tailor-made solution that will support your business now and in the future.</p>
                                <p className="mb-4">We pride ourselves on our high levels of customer service. This has been achieved by carrying out all work in-house, where we can maintain quality control and ensure your deadlines are met. This approach has enabled us to grow by reputation alone – nearly all of our new business comes as a referral from our existing clients.</p>    
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            <Testimonials/>

        </div>
    )
}