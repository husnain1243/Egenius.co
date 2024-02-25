import {ServiceData} from '../Items/ServicesItems.jsx'

export const ServiceCards = () => {
    return(
        <div className='row main-service-container m-auto pt-4 pt-lg-5 d-flex justify-content-center justify-content-lg-start'>
            {ServiceData.slice(0, 20).map((data, index) => (
                <div className='col-12 mb-3'>
                    <div className='row main-service-details align-items-center'>
                        <div key={index} className="col-12 col-md-6 mb-3">
                            <div className='image-container' style={{height: "300px"}}>
                                <img src={data.image} className="card-img-top w-100 h-100 m-auto d-block img-fluid" alt={data.title + "image"}/>
                            </div>
                        </div>
                        <div className='col-12 col-md-6 mb-3'>
                            <div className="card-body">
                                <h3 className="card-title text-dark mb-4">{data.title}</h3>
                                <p className="card-text text-dark">{data.description}</p>
                                <p className="card-text text-dark">{data.description2}</p>
                                <p className='mb-3 text-dark'>{data.tags}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}