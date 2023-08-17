import React from "react";

function Image({image}){
    return(
        <div style= {{width:"100px"}}>
            <img src={image} alt= "pics" />
            </div>
    )
}

export default Image;