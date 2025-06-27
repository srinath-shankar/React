import { useDispatch } from "react-redux";
import {CDN_URL} from "../utlis/constant";
import { addItems } from "../utlis/cartSlice";
const ItemList = ({items})=>{
    const dispatch = useDispatch();
    const addToCart = (item) => {
        // Here you would typically dispatch an action to add the item to the cart
        dispatch(addItems(item));
        console.log(item)
    };
   
    return (
        <div className="accordion-body">
           {items.map((item,index)=>{
            return (
                    <div className="itemCard"  key={item?.card?.info?.id}>
                        <div className="item-content">
                            <h4 className="item-heading">
                             {item?.card?.info?.name}
                            </h4>
                            <p className="items-name">
                            ₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice/100 }
                            </p>
                            <p className="item-description">{item?.card?.info?.description}</p>
                        </div>
                        <div className="item-image">
                             <img className="item-image" src={CDN_URL + item?.card?.info?.imageId} alt={item?.card?.info?.name} />
                        </div>
                        <div className="item-action">
                            <button className="btn btn-primary" onClick={()=>addToCart(item)}>Add to Cart</button>  
                        </div>              
                    </div>
            )
           })}
        </div>
    );
}

export default ItemList