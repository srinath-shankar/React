import ImageCard from "./ImageCard";
import { useState } from "react";
import ObjListOne from "../utlis/mockData";


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
    let [ObjList,setObjList] = useState(ObjListOne);

    return(
        <div className="main-section">
            <button className="btn btn-primary" onClick={()=>{
               ObjList = ObjList.filter((x)=> x.rating > 4);
               setObjList(ObjList);
               console.log(ObjList);
            }}>filter</button>
            <div className="search-container">
                <input type="text" placeholder="Search for food items" />
                <button className="search-btn">Search</button>
            </div>
            <div className="image-container">
                {
                  ObjList.map((items) => {
                    return <ImageCard key={items.id} Obj={items}/>
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