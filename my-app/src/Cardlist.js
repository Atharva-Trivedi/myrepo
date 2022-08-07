import React from "react";
import Card from "./Card";
// import { robots } from "./robots";


const CardList = ({robots}) => {
   
    return (
        <div className="pa4 tc">
              {
                robots.map(user =>
                {
                    return (
                        <Card key={user.id} username={user.username} name = {user.name}/>
                    );
                })
              }  
        </div>
    ); 
}
export default CardList;