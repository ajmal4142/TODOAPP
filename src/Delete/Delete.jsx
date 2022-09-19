import React from 'react'
import './Delete.css'
const Delete = (props) => {
  return (
    <div className='mainDelete'>
      <div className="Deletes">
        Trash Bin
      </div>
      {props.todos.map((obj,intex)=>{
          if(obj.is_delete){
            return (<div key={intex} className="delBox">
          <div className="type">
          <div className="type">
      <p className='text'>{obj.text}</p>
      </div>
      </div>
          <i className='fa-solid fa-trash'></i>
        </div>)
          }
         return null;
        })}
    </div>
  )
}

export default Delete
