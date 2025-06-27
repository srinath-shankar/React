import ImageCard,{isOpen} from "./ImageCard";
import { useState,useEffect } from "react";
import ObjListOne from "../utlis/mockData";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utlis/useOnlineStatus";


// let ObjList =[
//     {
//     id:0,
//     heading:"kfc",
//     price:"20",
//     cloud:"?q=tbn:ANd9GcQ32TjzFGxIibtdbjvXjVLQWIR39-cWnAUXAGwq-we_7LE3glRlFkxislGnQD5wW2-E3Kw&usqp=CAU",
//     rating:1
//     },
//     {
//         id:1,
//         heading:"pizza",
//         price:"200",   
//         cloud:"?q=tbn:ANd9GcQ32TjzFGxIibtdbjvXjVLQWIR39-cWnAUXAGwq-we_7LE3glRlFkxislGnQD5wW2-E3Kw&usqp=CAU",
//         rating:4.5
//     }
// ]
//body comp
const Body =()=>{
    const [ObjList,setObjList] = useState(ObjListOne);
    const [filteredObjList, setFilteredObjList] = useState([]);

    const [searchText, setSearchText] = useState("");
    const IsOpenStatus = isOpen(ImageCard);
useEffect(()=>{
   fetchData();
},[])
const fetchData = async()=>{
   const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.015638&lng=77.00139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
   const json = await data.json();
   setObjList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setFilteredObjList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const onlineStatus = useOnlineStatus();
if(onlineStatus === false){
    return(
        <h1>Offline, please check your internet connection</h1>
    )
};
    return(
        <div className="main-section">
            <button className="btn btn-primary" onClick={()=>{
               ObjList = ObjList.filter((x)=> x.info.avgRating > 4.4);
               setObjList(ObjList);
            }}>filter</button>

            <div className="search-container">
                <input type="text" placeholder="Search for food items" value={searchText} onChange={(e)=>{
                    setSearchText(e.target.value);
                }}/>

                <button className="search-btn btn btn-secondary" onClick={()=>{
                   const filterData = ObjList.filter((e)=>{
                   return e?.info?.name.toLowerCase().includes(searchText.toLowerCase());
                   });
                   setFilteredObjList(filterData);
                }}>Search</button>
            </div>
            <div className="image-container">
                {
                filteredObjList.map((items) => {
                    return (
                        <Link to={"/restaurant/"+items?.info?.id} key={items?.info?.id}>
                            {
                                items?.info?.isOpen ? <IsOpenStatus  Obj={items} /> : <ImageCard Obj={items} />
                            }
                           
                        </Link>
                    );
                  })
                }
            </div>
            <div className="container">
                 Content here
            </div>
        </div>
    );
}
export default Body;