import React from 'react'

const Button = ({color,text,onClick,textcolor}) => {
    return (
        <button onClick={onClick} className='btn' style={{backgroundColor:color,color:textcolor,float:'right'}}>{text}</button>
    )
}

export default Button