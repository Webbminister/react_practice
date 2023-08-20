import React from "react";
import Playercard from "./components/Playerslist";
import "./player.css"

function Player(){

const players =[{
    name : "Christiana",
    team : "Paris saint germain ",
    nationality: "Portugal",
    jerseyNumber : "7",
    age : 30,
    image : "https://upload.wikimedia.org/wikipedia/commons/8/8b/Cristiano_Ronaldo_WC2022_-_01_%28cropped%29.jpg"
},
{
    name : "Ighalo",
    team : " Al hilal SFC ",
    jerseyNumber : "10",
    nationality: "Nigeria",
    age : 31,
    image : "https://www.sports247.ng/wp-content/uploads/2023/06/IMG-20230604-WA0002.jpg"
},
{
    name : "Osinmhen",
    team : "Paris saint germain ",
    nationality: "Nigeria",
    jerseyNumber : "7",
    age : 24,
    image : "https://soccernet.ng/wp-content/uploads/2023/04/images-83.jpeg"
},
{
    name : "Musa Ahmed",
    team : "Paris saint germain ",
    nationality: "Nigeria",
    jerseyNumber : "7",
    age : 30,
    image : "https://dailypost.ng/wp-content/uploads/2018/06/ahmed-musa-eagles-track-800.jpg"
}
]


return (
    <div className='cards'>
      {players.map((player)=>(
        <Playercard
        name={player.name}
        team={player.team} 
        nationality={player.nationality}
        jerseyNumber={player.jerseyNumber}
        age={player.age}
        image={player.image}/>

        ))}
    </div>
  
)

}
export default Player ;