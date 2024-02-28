import {products} from '../Items/BlogItems'
import button_view from '../../asserts/button-view.png'

export const BlogCards = () => {
    
    return(
        <div className="blogs-accordians-container">

            <div class="card p-3 border-0 bg-transparent">
                <nav>
                    <div class="nav nav-tabs mb-3 border-0 d-flex gap-4" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-Html-tab" data-bs-toggle="tab" data-bs-target="#nav-Html" type="button" role="tab" aria-controls="nav-Html" aria-selected="true">Html Pages/Sites</button>
                        <button class="nav-link" id="nav-Laravel-tab" data-bs-toggle="tab" data-bs-target="#nav-Laravel" type="button" role="tab" aria-controls="nav-Laravel" aria-selected="false">Laravel Pages/Sites</button>
                        <button class="nav-link" id="nav-Wordpress-tab" data-bs-toggle="tab" data-bs-target="#nav-Wordpress" type="button" role="tab" aria-controls="nav-Wordpress" aria-selected="false">Wordpress Pages/Sites</button>
                        <button class="nav-link" id="nav-React-tab" data-bs-toggle="tab" data-bs-target="#nav-React" type="button" role="tab" aria-controls="nav-React" aria-selected="false">React Js Pages/Sites</button>
                    </div>
                </nav>

                <div class="tab-content p-3 border-0 bg-transparent " id="nav-tabContent">
                    <div class="tab-pane fade active show" id="nav-Html" role="tabpanel" aria-labelledby="nav-Html-tab">
                        <div className='row py-4 py-lg-5'>
                            <h2 className='text-dark text-center mb-5'>Recent HTML Project</h2>
                            {
                                products.slice(0, products.length).filter(item => item.type == 'HTML').length > 0 ? (
                                products.slice(0, 1).filter(item => item.type == 'HTML').map((data, index) => (
                                        <div className='col-12 mb-5'>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                                                    <figure className="snip1529">
                                                        <div className="image-container">
                                                            <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                                                        </div>
                                                        <div className="date"><span class="day text-dark mb-2">{data.price}$</span><span className="month text-dark">Price</span></div>
                                                        <figcaption>
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                        </figcaption>
                                                        <div className="hover">
                                                            <img src={button_view} className='w-25'/>
                                                        </div>
                                                        <a href={data.link} target='_blank'></a>
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (<h3 className='text-dark'>No Recent HTML Projects found:</h3>)
                            }
                        </div>

                        <div className='row'>
                            <h2 className='text-dark text-center mb-5'>Our HTML Project</h2>
                            {
                                products.slice(0, products.length).filter(item => item.type == 'HTML').length > 0 ? (
                                products.slice(0, products.length).filter(item => item.type == 'HTML').map((data, index) => (
                                        <div className='col-12 col-md-6 col-lg-4 mb-5'>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                                                    <figure className="snip1529">
                                                        <div className="image-container">
                                                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                                                        </div>
                                                        <div className="date"><span class="day text-dark mb-2">{data.price}$</span><span className="month text-dark">Price</span></div>
                                                        <figcaption>
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                        </figcaption>
                                                        <div className="hover">
                                                            <img src={button_view} className='w-25'/>
                                                        </div>
                                                        <a href={data.link} target='_blank'></a>
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (<h3 className='text-dark'>No HTML Projects found:</h3>)
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-Laravel" role="tabpanel" aria-labelledby="nav-Laravel-tab">
                        <div className='row py-4 py-lg-5'>
                            <h2 className='text-dark text-center mb-5'>Our Laravel Project</h2>
                            {
                                products.slice(0, products.length).filter(item => item.type == 'Laravel').length > 0 ? (
                                products.slice(0, products.length).filter(item => item.type == 'Laravel').map((data, index) => (
                                        <div className='col-12 col-md-6 col-lg-4 mb-5'>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                                                    <figure className="snip1529">
                                                        <div className="image-container">
                                                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                                                        </div>
                                                        <div className="date"><span class="day text-dark mb-2">{data.price}$</span><span className="month text-dark">Price</span></div>
                                                        <figcaption>
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                        </figcaption>
                                                        <div className="hover">
                                                            <img src={button_view} className='w-25'/>
                                                        </div>
                                                        <a href={data.link} target='_blank'></a>
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (<h3 className='text-dark'>No Laravel Projects found:</h3>)
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-Wordpress" role="tabpanel" aria-labelledby="nav-Wordpress-tab">
                        <div className='row py-4 py-lg-5'>
                            <h2 className='text-dark text-center mb-5'>Our Wordpress Project</h2>
                            {
                                products.slice(0, products.length).filter(item => item.type == 'Wordpress').length > 0 ? (
                                products.slice(0, products.length).filter(item => item.type == 'Wordpress').map((data, index) => (
                                        <div className='col-12 col-md-6 col-lg-4 mb-5'>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                                                    <figure className="snip1529">
                                                        <div className="image-container">
                                                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                                                        </div>
                                                        <div className="date"><span class="day text-dark mb-2">{data.price}$</span><span className="month text-dark">Price</span></div>
                                                        <figcaption>
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                        </figcaption>
                                                        <div className="hover">
                                                            <img src={button_view} className='w-25'/>
                                                        </div>
                                                        <a href={data.link} target='_blank'></a>
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (<h3 className='text-dark'>No Wordpress Projects found:</h3>)
                            }
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-React" role="tabpanel" aria-labelledby="nav-React-tab">
                        <div className='row py-4 py-lg-5'>
                            <h2 className='text-dark text-center mb-5'>Our React Project</h2>
                            {
                                products.slice(0, products.length).filter(item => item.type == 'React').length > 0 ? (
                                products.slice(0, products.length).filter(item => item.type == 'React').map((data, index) => (
                                        <div className='col-12 col-md-6 col-lg-4 mb-5'>
                                            <a href={data.link} target='_blank' className='text-decoration-none'>
                                                <div key={index} className="card overflow-hidden text-center rounded bg-transparent text-dark border-0">
                                                    <figure className="snip1529">
                                                        <div className="image-container">
                                                        <img src={data.image} alt={data.name + "image"} className="m-auto d-block img-fluid w-100 h-100"/>
                                                        </div>
                                                        <div className="date"><span class="day text-dark mb-2">{data.price}$</span><span className="month text-dark">Price</span></div>
                                                        <figcaption>
                                                            <h3>{data.name}</h3>
                                                            <p>{data.description}</p>
                                                        </figcaption>
                                                        <div className="hover">
                                                            <img src={button_view} className='w-25'/>
                                                        </div>
                                                        <a href={data.link} target='_blank'></a>
                                                    </figure>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (<h3 className='text-dark'>No React Projects found:</h3>)
                            }
                        </div>
                    </div>
                </div>
	        </div>

        </div>    
    )
}