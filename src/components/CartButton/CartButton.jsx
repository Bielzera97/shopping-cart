import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartButton.css"
import { useContext } from "react";
import AppContext from "../../context/AppContext";



export default function CartButton(){


    const {cartItems, isCartVisible, setIsCartVisible} = useContext(AppContext)


    return(
        <button className="cart_button" onClick={() => setIsCartVisible(!isCartVisible)}>
            <MdOutlineShoppingCart/>
            {cartItems.length > 0 && <span className="status">{cartItems.length}</span>}
        </button>
    )
}