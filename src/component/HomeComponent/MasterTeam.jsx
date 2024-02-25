import image1 from "../../asserts/masterteam1.jpeg";
import image2 from "../../asserts/masterteam2.jpeg";
import image3 from "../../asserts/masterteam3.jpeg";

export const MasterTeam = () => {
    return(
        <div className="master-team-section bg-dark py-4 py-lg-5">
            <div className="container">
                <div className="master-team-container">
                    <div className="row flex-column-reverse flex-lg-row">
                        <div className="col-12 col-lg-6">
                            <div className="row">
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="master-image-container position-relative">
                                        <img src={image1} alt="master team" className="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div className="master-image-data">
                                            <h4 className="text-center text-white mb-3">JESSICA ANTONY</h4>
                                            <h4 className="text-center text-white mb-2">Seo Expert</h4>
                                            <p className="text-center text-white">12 Year Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3">
                                    <div className="master-image-container position-relative">
                                        <img src={image2} alt="master team" class="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div className="master-image-data">
                                            <h4 className="text-center text-white mb-3">MADELEINE GOLDEN</h4>
                                            <h4 className="text-center text-white mb-2">Web Developer</h4>
                                            <p className="text-center">8 Year Experience</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-6 mb-3 d-none d-lg-block">
                                    <div className="master-image-container position-relative">
                                        <img src={image3} alt="master team" className="m-auto d-flex img-fluid w-100 h-100"/>
                                        <div className="master-image-data">
                                            <h4 className="text-center text-white mb-3">IRIS ELLIOTT</h4>
                                            <h4 className="text-center text-white mb-2">App Developer</h4>
                                            <p className="text-center">7 Year Experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 text-center d-flex justify-content-center align-items-center  login-box mb-4">
                            <div className="w-75 m-auto">
                                <h2 className="text-center mb-5">MEET OUR MASTERS TEAM</h2>
                                <div className="d-none d-lg-block">
                                    <a href="" type="submit" className="d-block py-3 text-white text-center w-75 m-auto">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                        View More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}