import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItems } from "../utlis/cartSlice";

const Cart = ()=>{
    const cartItems = useSelector((store)=> store.cart.items);
    const cartDispatch = useDispatch()
    const clearCart = ()=>{
       cartDispatch(clearItems())
    }
    console.log(cartItems.lenght)
    return (
      <>
        <button className="btn btn-primary" onClick={clearCart}>clear</button>
       <ItemList items={cartItems}></ItemList>
       {cartItems.lenght === 0 && (
        <h1>add items to cart</h1>
       )
    }
       </>
    )
}

export default Cart;