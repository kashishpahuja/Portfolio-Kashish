import React from 'react'
import project from './data/projects.json'

function Projects() {
  return (
    <div className="container projects my-3" id='project'>
        <h1 className='mt-4 mb-4'>PROJECTS</h1>
        <div className="row d-flex justify-content-center align-items-center" >
            {project.map((data) => (
                    <>
                        <div key={data.key} className='my-3 col-12 col-md-10 mx-3' >
                        <div className="card bg-dark text-light d-flex flex-row flex-wrap" style={{border:"1px solid yellow", boxShadow:"5px 5px 10px 10px rgba(108, 135, 134, 0.5)" }}
                            data-aos="zoom-in"
                            data-aos-duration="1000"
                        >
                            <div className='img d-flex justify-content-center align-items-center p-3 col-12 col-md-4'>
                                <img src={`assets/${data.imageSrc}`} className="card-img-top" alt={data.title} style={{ width:'100%', height:'200px', border:"2px solid sky-blue", borderRadius:"10px"}} />
                            </div>
                            <div className="card-body d-flex flex-column justify-content-around col-12 col-md-8" >
                                <div className='text-center'>
                                    <h2 className="card-title">{data.title}</h2>
                                    <p className="card-text">
                                    {data.description}
                                    </p>
                                </div>
                                <div className="row d-flex justify-content-around mt-3">
                                    <a href={data.demo} className="btn btn-primary" target='_blank' rel='noopener noreferrer'>
                                        Demo
                                    </a>
                                    <a href={data.source} className="btn btn-primary" target='_blank' rel='noopener noreferrer'>
                                        Source Code
                                    </a>
                                </div>
                            </div>
                            </div>


                        </div>
                    </>
                ))
            }
        </div>
    </div>
  )
}

export default Projects



