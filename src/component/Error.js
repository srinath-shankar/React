import { useRouteError } from "react-router-dom";
const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div className="error">
            <h1>{err.status}</h1>
            <h2>{err.statusText}</h2>
            {/* <h3>{err.error.message}</h3> */}
        </div>
    )
}

export default Error;   