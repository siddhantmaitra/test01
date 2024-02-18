import { useState } from "react";
const Counter = () => {
    const [count, updateCount] = useState(0);

    function handleOnClick() {
        updateCount(()=>{
            //Trying to add something here
            return(
                count+1
            )
        });
    }

    return (
        <>
            <p>Count is : {count}</p>
            <button onClick={handleOnClick}>count button</button>
        </>

    )
}

export default Counter;