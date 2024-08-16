import React, { useEffect, useRef } from 'react';
import pdf from '../pdf/Kashish_Resume07.pdf';
import hero from './data/hero.json';
import Typed from 'typed.js';


function Home() {
    const typedRef = useRef(null);
    useEffect(()=>{
        const options = {
            strings:[
                "Welcome to my profile",
                "My Name is Kashish",
                "I'm full stack developer",
                "MERN Stack Developer",
            ],
            typeSpeed:50,
            backSpeed:50,
            loop:true
        }
        const typed = new Typed(typedRef.current,options);
        return()=>{
            typed.destroy()
        }
    },[])
  return (
    <div>
        <div className="container home" id='home'>
            <div className="row">
                <div className="col-md-6 col-sm-12 mb-4 mt-5 left" data-aos="fade-up-right" data-aos-duration="1000">
                    <h1 ref={typedRef}></h1>
                    <a href={pdf} download="KashishResume.pdf" className='btn btn-outline-warning mt-5 p-3'>
                        Download Resume
                    </a>
                </div>
                <div className="col-md-6 col-sm-12 mb-4 mt-5 right">
                    <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
                    <img src={`/assets/${hero.imgSrc}`} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home