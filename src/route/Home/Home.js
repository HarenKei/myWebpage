import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import './Home.css';

const Home = () => {
    return(
        <div>
            <h1>Hello world</h1>
            <FontAwesomeIcon icon={faGithub} className="github" />
            <FontAwesomeIcon icon={faFacebook} className="facebook" />
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
        </div>
    )
}

export default Home;