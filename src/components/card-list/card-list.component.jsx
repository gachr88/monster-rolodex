import React from "react";
import './card-list.style.css';
import { Card } from "../card/card.component";  

export const CardList = (props) => {
    return <div className="card-list">
         {
            props.monsters.map(monster => {
              return <Card key={monster.id} name={monster.name} id={monster.id} email={monster.email}/>
            })
          }
    </div>
}