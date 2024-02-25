import { FaFacebook , FaInstagram , FaLinkedin , FaGithub} from 'react-icons/fa';
export const FooterSocials = () => {
    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 mb-4 d-flex justify-content-start align-items-lg-end flex-column">
            <h3>Links To Contact</h3>
            <ul className="d-flex flex-row justify-content-start gap-3 list-unstyled my-3">
                <li><a href='#'><div className="icons"><FaFacebook/></div></a></li>
                <li><a href='#'><div className="icons"><FaInstagram/></div></a></li>
                <li><a href='#'><div className="icons"><FaLinkedin/></div></a></li>
                <li><a href='#'><div className="icons"><FaGithub/></div></a></li>
            </ul>
        </div>
    )
}