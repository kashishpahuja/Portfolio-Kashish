import React from 'react'
import experience from './data/experience.json';
// import netmax from '../assets/netmaxImage.png';

function Experience() {
  return (
    <div className='container ex' id='experience'>
        <h1 className='mt-0 mb-4'>Experience</h1>
        {
            experience.map((data)=>{
              // console.log("assets/",data.imageSrc)
                return(
                    <>
                    <div key={data.id} className='ex-items text-center' 
                    data-aos="zoom-in"
                    data-aos-duration="1000"
                    >
                      <div className='left'>
                        <img src={`/assets/${data.imageSrc}`} alt="" />
                      </div>
                      <div className="right">
                        <h2>{data.organization}-{data.role}</h2> 
                        
                        <h4><span style={{color:'yellowgreen'}}>
                          {data.startDate} - {data.endDate} 
                        </span>{" "}
                        <span style={{color:'yellow'}}>{data.location}</span>
                        </h4>
                        <h5 style={{color:'yellow'}}>{data.experiences[0]}</h5>
                        <h5 style={{color:'yellow'}}>{data.experiences[1]}</h5>
                        <h5 style={{color:'yellow'}}>{data.experiences[2]}</h5>

                      </div>
                    </div>
                    </>
                )
            })
        }
    </div>
  )
}

export default Experience