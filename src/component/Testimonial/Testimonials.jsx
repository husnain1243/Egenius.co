import Carousel1 from "../../asserts/carousel1.jpeg"
import Carousel2 from "../../asserts/carousel2.jpeg"

export const Testimonials = () => {
    return(
        <div className="testi-section bg-light py-4 py-lg-5">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div id="Testimonials" className="text-center py-4 py-lg-4">
                            <div id="carouselExampleIndicators" className="carousel slide">
                                {/* <div className="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div> */}
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="">
                                            <div className="">
                                                <img src={Carousel1} alt="testi-img" height="200px" width="200px" className="rounded-circle mb-4"/>
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-lg-8">
                                                        <h3 className="mb-3 text-dark">Maria Kate</h3>
                                                        <p className="text-muted mb-4">Photographer</p>
                                                        <p className="text-muted mb-0">
                                                            "I developed a portfolio website for myself as a photographer to showcase my work.
                                                        </p>
                                                        <p className="p text-muted mb-0">I have captured a lot of photos, and I want to display them all on my website to share with my users.</p>
                                                        <p className="text-muted">
                                                            Thank you to the <span className="d-inline" style={{color: "#e8bd81dc"}}>Egenius.co</span> team for the great experience."
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="">
                                            <div className="">
                                                <img src={Carousel2} alt="testi-img" height="200px" width="200px"  className="rounded-circle mb-4"/>
                                                <div className="row d-flex justify-content-center">
                                                    <div className="col-lg-8">
                                                        <h3 className="mb-3 text-dark">Dany joy</h3>
                                                        <p className="text-muted mb-4">Busines Man</p>
                                                        <p className="text-muted mb-0">
                                                        "I am here to share that the <span className="d-inline" style={{color: "#e8bd81dc"}}>Egenius.co</span> team is very cooperative and experienced.
                                                        </p>
                                                        <p className="p text-muted"> They built the website according to my thoughts and requirements."</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}