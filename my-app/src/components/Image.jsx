import React from 'react';
export function Image(props){
       return(
           <img className='img-thumbnail' width='100px' src={props.src} alt={props.src} onClick={props.onClick}/>
       )
}