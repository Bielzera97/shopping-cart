import { MdOutlineShoppingCart } from "react-icons/md";
import "./CartButton.css"



export default function CartButton(){
    return(
        <button className="cart_button">
            <MdOutlineShoppingCart/>
            <span className="status">1</span>
        </button>
    )
}