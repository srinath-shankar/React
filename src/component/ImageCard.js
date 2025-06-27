import {CDN_URL} from "../utlis/constant";
import { useContext } from "react";
import userContext from "../utlis/userContext";
//img card
const ImageCard = (props)=>{
    const {Obj} = props;
    const{info} = Obj;
    const data = useContext(userContext);
    const {user,datas} = data;
    return(
        <div className="image-card">
           <div>
           <img src={CDN_URL+info.cloudinaryImageId} alt="food item" />
        </div>
         <div className="img-card-content">
         <h3>{info.name}</h3>
         <p>{info.costForTwo}</p>
         <p>{info.avgRating}</p>
         <p>{user} {datas}</p>
        </div>
        </div>
    );
}
export const isOpen = (ImageCard)=>{
   return (props)=>{
    return (
        <div className="open-status">
            <h3>Open</h3>
            <ImageCard {...props}/>
        </div>
    )
   }
}
export default ImageCard;