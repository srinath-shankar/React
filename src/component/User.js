import { useState } from "react";

const User = (props)=>{
    const [count,setCount] = useState(0);
    return(
        <div>
            <h1>User {props.name}</h1>
            <p>This is the user page</p>
            <p>Count: {count}</p>
        </div>
    )
}

export default User;