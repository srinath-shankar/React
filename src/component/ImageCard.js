import {CDN_URL} from  "../utlis/constant";
//img card
const ImageCard = (props)=>{
    const {Obj} = props;
    const{heading,price,cloud,rating} = Obj;
    return(
        <div className="image-card">
           <div>
           <img src={CDN_URL+cloud} alt="food item" />
        </div>
         <div className="img-card-content">
         <h3>{heading}</h3>
         <p>{price+' rupee'}</p>
         <p>{rating}</p>
        </div>
        </div>
    );
}

export default ImageCard;