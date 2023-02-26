import React from 'react'

function Card(props) {
    const rand_id=Math.floor(Math.random()*180)+20;
  return (

    <div
    className='card'>
    <img src={`https://picsum.photos/id/${rand_id}/600/300`} alt={props.author} />
    <h2>{props.author}</h2>
    <p>{props.quote}</p>

    </div>
  )
}


export default Card;