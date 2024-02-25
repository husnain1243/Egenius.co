import image1 from "../../asserts/homeaacordian.jpeg";

export const HomeAccordian = () => {
    return(
        <div className="homeaccordian bg-dark py-4 py-lg-5">
            <div className="container">
                <div className="homeaccordian-container py-4 py-lg-5">
                    <div className="row">
                        <div className="col-12 col-lg-6">
                            <h2 className="mb-5">RELATED QUESTIONS</h2>
                            <div className="accordion text-white" id="accordionExample">
                                <div className="accordion-item bg-transparent mb-4">
                                    <h2 className="accordion-header" id="headingOne">
                                        <button className="accordion-button bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            What is the difference between a web application and a website?
                                        </button>
                                    </h2>
                                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="p">A website is a collection of web pages that are statically or dynamically generated and hosted on a server. A web application, on the other hand, is a software application that runs on a server and is accessed through a web browser. Web applications typically involve more complex interactions and require more advanced programming skills.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent mb-4">
                                    <h2 className="accordion-header" id="headingTwo">
                                        <button className="accordion-button collapsed bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                            Will I have access to CMS? If so, which one and is it possible for me to test it?
                                        </button>
                                    </h2>
                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="p"></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item bg-transparent mb-4">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            Will you put all my materials on the site right away?
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="p">It’s best if you’re responsible for producing/providing the high-quality materials yourself, such as team photos, portfolio, written content etc.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="accordion-item  bg-transparent mb-4">
                                    <h2 className="accordion-header bg-transparent" id="headingFour">
                                        <button className="accordion-button collapsed  bg-transparent text-white border" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                            Will my site be designed individually for me or will a template be used to create it?
                                        </button>
                                    </h2>
                                    <div id="collapseFour" className="accordion-collapse collapse bg-transparent" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <p className="p">We can do both, If you want to use a template for your site, we can and if you want to create a new one from scratch we can make it.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-6 d-none d-lg-block">
                            <img src={image1} alt="footer" className="img-fluid d-block m-auto w-100 h-100"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}