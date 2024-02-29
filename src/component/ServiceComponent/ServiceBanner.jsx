import Typewriter from '../../TypeWritter/TypeWritter.jsx';

export const ServiceBanner = () => {
    return(
        <div className="banner-section d-flex align-items-center">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7">
                        <h1 className="text-white">Our Services</h1>
                        <p className="p">
                            <Typewriter text="We're here to help you achieve your web development goals! At Egenius.co, our team of highly skilled professionals is dedicated to providing exceptional web development services that cater to the unique needs of each client." delay={80} />    
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}