import React, { useState } from "react";
function Greeting () {
    const [name, setName] = useState ("");
    const handleButtonClick = () => {
        setName ("Niharika")
    }
    return (
        <div>
            <h1> Hello {name || "World" }</h1>
            <button onClick = {handleButtonClick} > Click me </button>

        </div>
    )

       
} 
export default Greeting