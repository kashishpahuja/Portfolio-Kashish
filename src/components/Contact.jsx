import React from 'react';
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

function Contact(props) {
    return (
        <div className='container contact my-3' id='contact'>
            <h1 className='mt-4 mb-0'>CONTACT ME</h1>
            <div className='contact-icon' data-aos="flip-left"
            data-aos-duration="1000">
                <a  href="https://www.instagram.com/kashishhpahuja_239/" className="item">
                    <FaInstagramSquare className='icons'/>
                </a>
                <a href="https://www.facebook.com/kashish.pahuja.737/" className="item">
                    <FaFacebook className='icons'/>
                </a>
                <a href="https://github.com/kashishpahuja/" className="item">
                    <FaGithub className='icons'/>
                </a>
                <a href="https://www.linkedin.com/in/kashish-pahuja/" className="item">
                    <FaLinkedin className='icons'/>
                </a>
                <a href="mailto:pahujakashish18@gnail.com" className="item">
                    <CgMail className='icons'/>
                </a>
            </div>
        </div>
    );
}

export default Contact;