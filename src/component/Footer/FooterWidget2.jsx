import React, { useState } from "react";
import Logo from '../../asserts/EgeniusLogo.png';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

export const FooterWidget2 = () => {
    const Route = [
        {
          path: "/Home",
          name: "Home",
        },
        // {
        //   path: "/potfolio",
        //   name: "Potfolio",
        // },
        {
          path: "/services",
          name: "Services",
        },
        {
          path: "/projects",
          name: "Projects",
        },
        {
          path: "/contact-us",
          name: "Contact Us",
        },
      ];
      const [routeDate] = useState(Route);
      const location = useLocation();
    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-5 mb-4">
            <div className="" style={{width: "110px"}}>
              <Link to="/Home" className="link text-decoration-none text-white">
                <img src={Logo} alt="footer-image" className="d-block image-fluid w-100 h-100"/>
              </Link>
                
            </div>
            <div className="py-4">
                <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap gap-3 m-0"  style={{fontSize: "18px"}}>
                    {routeDate.map(({ name, path }, index) => {
                        return (
                            <li key={index} className={location.pathname === path ? 'active' : ''}>
                                <Link to={path} className="link text-decoration-none text-white">{name}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}