import React from 'react'
import "./Task.css"
import { Tasklist } from '../../utlites/Tasklist'
import RubberBand from "react-reveal/RubberBand";
import Fade from "react-reveal/Fade";

const Task = () => {
  return (
      <>
          <div className="container task" id='task'>
              
                  
              <h1 className='col-12 mt-3 mb-1 text-center text-uppercase'> Technologies Stack</h1>
              <hr />
              <p className='pb-3 text-center'>🤏 Including programming Language, framework,database, front-end and back-end tools, and APIs</p>
              
              <div className="row">
                      
              {Tasklist.map(tech => (
                  
                  <div key={tech._id} className="col-md-3">
                      <div className="card m-2">
                          <div className="card-content">
                              <div className="card-body">
                                  <div className="media d-flex justify-content-center align-items-center">
                                      <div className="alig-self-center">
                                          
                                      <tech.icon className="text-icon"/>
                                      </div>
                                      <div className="media-body">
                                          <h3>{ tech.name}</h3>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  
                )
                
            )}
          </div>
            </div>
    </>
  )
}

export default Task