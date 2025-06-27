import { useEffect, useState } from "react";
import { RESTAURANT_API } from "./constant";

const useRestuarntMenu = (resId)=>
{
  const [resData, setResData] = useState(null);
  //fetching data from API
  useEffect(()=>{
    fetchData();
  },[])
  const fetchData = async()=>{
    const data = await fetch(RESTAURANT_API+resId);
    const json = await data.json();
    setResData(json.data);
  }
  return resData;
}

export default useRestuarntMenu;