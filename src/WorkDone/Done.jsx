import React from 'react'
import './Done.css'
const Done = (props) => {
  return (
    
      <div className="mainDone">
       
        <div className="captionbox">
          <h3 className="capdone">DONE</h3>
        </div>
        
        {props.todos.map((obj,intex)=>{
          if(obj.status){
            return (<div key={intex} className="donebox">
          <div className="type">
             <p className='text'>{obj.text}</p>
          </div>
          <i className='fa-solid fa-trash'></i>
        </div>)
          }
         return null;
        })}
        
        
      </div>
    
  )
}

export default Done
