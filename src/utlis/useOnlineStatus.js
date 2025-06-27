import { useEffect, useState } from "react";
const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);

    //check if ur online
useEffect(()=>{
    window.addEventListener('online', ()=>{
        return setOnlineStatus(true);
    })
    window.addEventListener('offline', ()=>{
        return setOnlineStatus(false);
    })
})

    //give boolean
    return onlineStatus;
}

export default useOnlineStatus;