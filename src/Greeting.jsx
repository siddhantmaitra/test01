import { useState } from "react";
import Button from "./Button";



const Greeting = () =>{
    
    let intialMessage = "Hello, good evening!";
    const [message, updateMessage] = useState(intialMessage);

    function changeMessage(){
        if(message.includes("evening")){
            updateMessage("Hello, good afternoon!");
        }else{
            updateMessage(intialMessage);
        }

    }
    
    return(
        <>
            <h3>{message}</h3>
            <Button onClick={changeMessage}>Click to change the text above</Button>
        </>
    )
    
}

export default Greeting;