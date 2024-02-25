import { BlogCards } from "../component/Cards/BlogCards"
import { Testimonials } from "../component/Testimonial/Testimonials"
import strategy from "../asserts/strategy.jpeg";

export const Projects = () => {
    return(
        <div className="blog-wrapper">

            <div className="blog-banner d-flex flex-column justify-content-center bg-dark text-center" style={{height:"400px"}}>
                <div className="container">
                    <div className="banner-container">
                        <h1 className="text-start">Our Projects</h1>
                    </div>
                </div>
            </div>

            <div className="Blog-container py-4 py-lg-5">
                <div className="container">
                    <BlogCards/>
                </div>
            </div>

            <div className="Strategy bg-dark py-4 py-lg-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div class="Strategy-data">
                                <h3 className="mb-4 text-md-end">Strategy</h3>
                                <h2 className="mb-4 text-md-end">Excellent working relationship</h2>
                                <p className="mb-4 text-md-end">Creating website and multimedia solutions requires more than just knowledge. A comprehensive understanding of our clients business and the marketplace they operate in enables us to address and meet the clients' objectives.</p>
                                <p className="mb-4 text-md-end">We understand that your individual needs are highly precise, which is why we assign a specific project manager to handle your account from beginning to end. By doing this we maintain a consistent, dedicated line of communication which allows us to fulfil your needs accurately and efficiently.</p>    
                            </div>
                        </div>
                        <div className="col-12 col-lg-6">
                            <div className="Strategy-image">
                                <div className="Strategy-Image-Img">
                                    <img src={strategy} alt="logo" className="img-fluid d-block m-auto"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Testimonials/>

        </div>
    )
}