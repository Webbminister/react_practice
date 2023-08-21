import React from "react";
import "./profilepix.css"
class App extends React.Component{

  constructor(props){
    super(props);
  this.state = {
    fullName : "Bamigbade Damilare",
    bio : "Nigerian and Yoruba",
    imgSrc : "https://img.freepik.com/free-vector/cute-boy-standing-position-showing-thumb_96037-450.jpg?w=2000",
    profession : "A full Stack Web Developer"
  }
  }

  changePersonDetails =()=>{
    this.setState({
        fullName : "Oluwadamilare Felix",
        bio : "Father and husband"

    })
  }
  render(){
 return(
  <div className="profilebody">
    <img src ={this.state.imgSrc} className="mypix" alt="mypix" />
    <h3>{this.state.fullName}</h3>
    <p>{this.state.bio}</p>
    <button

          type="button"

          onClick={this.changePersonDetails}

        >Change</button>
  </div>
 )
 
 
  }
}

export default App;
