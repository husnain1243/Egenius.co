import banner1 from "../../asserts/banner-slide1.jpeg";
import banner2 from "../../asserts/banner-wordpress.jpeg";
import banner3 from "../../asserts/banner-react.png";
import banner4 from "../../asserts/banner-laravel.jpeg";

export const HomeSlider = () => {
    return(
        <div id="carouselExampleCaptions" className="carousel slide">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block img-fluid w-100 h-100" alt="banner1"/>
                    <div className="carousel-caption">
                        <h1>Web Developer</h1>
                        <p className=" d-none d-md-block"></p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner2} className="d-block img-fluid w-100 h-100" alt="banner2"/>
                    <div className="carousel-caption">
                        <h1>Wordpress Developer</h1>
                        <p className="w-75 m-auto d-none d-md-block">As a WordPress Developer, I create high-performance and responsive websites using WordPress and its robust ecosystem of plugins and themes. My expertise lies in customizing themes and plugins to suit clients' specific needs. With a solid background in web development and WordPress, I ensure smooth functionality and performance across devices. Contact me today to discuss your next WordPress project!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner3} className="d-block img-fluid w-100 h-100" alt="banner3"/>
                    <div className="carousel-caption">
                        <h1>React Developer</h1>
                        <p className="w-75 m-auto d-none d-md-block">As a React.js Developer, I create user-friendly and high-performance web applications using React.js and its rich ecosystem of libraries and tools. My expertise lies in designing and implementing modern UI/UX designs, while maintaining optimal performance and security. With a solid background in web development and React.js, I ensure smooth functionality and performance across devices. Contact me today to discuss your next React.js project!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={banner4} className="d-block img-fluid w-100 h-100" alt="banner3"/>
                    <div className="carousel-caption">
                        <h1>Laravel Developer</h1>
                        <p className="w-75 m-auto d-none d-md-block">As a Laravel Developer, I specialize in building robust, scalable, and secure web applications using the Laravel PHP framework. My expertise includes architecting, coding, and maintaining enterprise-level web applications, as well as optimizing the performance of web applications for high-traffic websites. Some key technologies I've worked with include MySQL, PostgreSQL, Redis, Elasticsearch, AWS, Docker, Kubernetes, and CI/CD tools. Contact me today to discuss your next Laravel project!</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}