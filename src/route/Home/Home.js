import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";

import {Route, Routes, Link} from 'react-router-dom'

import './Home.css';

const Home = () => {
    return(
        <div>
            <h1>𝙎𝙏𝘼𝙍𝙂𝘼𝙕𝙀𝙍</h1>
            <h1>HarenKei</h1>
            <a href="https://github.com/HarenKei"><FontAwesomeIcon icon={faGithub} className="github" /></a>
            <a href="https://www.facebook.com/HarenKei"><FontAwesomeIcon icon={faFacebook} className="facebook" /></a>
            <a href="https://www.instagram.com/min_from00/"><FontAwesomeIcon icon={faInstagram} className="instagram" /></a>

        </div>
    )
}

export default Home;