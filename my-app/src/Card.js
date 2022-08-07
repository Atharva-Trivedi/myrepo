import React from "react";
const Card = ({key1,username,name}) =>
{
    return (
     <div className='tc bg-light-red dib br3 pa3 ma2 grow'>
        <img alt = 'robot' src = {"https://robohash.org/"+username}/>
        <h1>{name}</h1>
     </div>
    );
}
export default Card; 