import React from "react";


function About({image}){
    return(
        <aside>
            <img alt="blog logo" src={image ? image : "https://via.placeholder.com/215"} />
        </aside>
    )
}

export default About;