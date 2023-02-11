import React from 'react'


const Box = (props) => {
  return (

    <button className='box   h-[90px] w-[90px]   text-[60px] m-1 '  onClick={props.onClick}>{props.state} </button>


  )
}

export default Box
