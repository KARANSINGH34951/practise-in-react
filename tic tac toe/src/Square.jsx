import React from 'react'

export default function Square(props) {

 

  return (
    <div
    onClick={props.onClick} 
    className='square' style={{margin:'0.1rem', border:'1px solid', height:'100px', width:'100px',display:'flex' , justifyContent:'center', alignItems:'center' }}>
      <h5 >{props.value}</h5>
    </div>
  )
}
