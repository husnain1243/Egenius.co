import vision from "../../asserts/vision.png";
import strategy from "../../asserts/strategy.jpeg";

export const VisionStrategy = () => {
    return(
        <div className="Vision-Strategy">
            <div className="Vision-section py-4 py-lg-5">
                <div className="container">
                    <div className="row align-items-center flex-column-reverse flex-md-row">
                        <div className="col-12 col-md-6">
                            <div className="Vision-Image-container">
                                <img src={vision} alt="logo" className="img-fluid d-block m-auto"/>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="Vision-data">
                                <h3 className="text-dark mb-4">Vision</h3>
                                <h2 className="text-dark mb-4">Technology inspired through creativity</h2>
                                <p className="text-dark mb-4">Cynosure Designs have been providing innovative and affordable graphic and web solutions, enabling individuals and organisations of all sizes to achieve their design objectives.By understanding the processes that make your business unique, we are able to utilise our creative skills and technological know-how to build a tailor-made solution that will support your business now and in the future.</p>
                                <p className="text-dark mb-4">We pride ourselves on our high levels of customer service. This has been achieved by carrying out all work in-house, where we can maintain quality control and ensure your deadlines are met. This approach has enabled us to grow by reputation alone – nearly all of our new business comes as a referral from our existing clients.</p>    
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            <div className="Strategy bg-dark py-4 py-lg-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-lg-6">
                            <div className="Strategy-data">
                                <h3 className="text-white mb-4 text-md-end">Strategy</h3>
                                <h2 className="text-white mb-4 text-md-end">Excellent working relationship</h2>
                                <p className="text-white mb-4 text-md-end">Creating website and multimedia solutions requires more than just knowledge. A comprehensive understanding of our clients business and the marketplace they operate in enables us to address and meet the clients' objectives.</p>
                                <p className="text-white mb-4 text-md-end">We understand that your individual needs are highly precise, which is why we assign a specific project manager to handle your account from beginning to end. By doing this we maintain a consistent, dedicated line of communication which allows us to fulfil your needs accurately and efficiently.</p>    
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
        </div>
    )
}