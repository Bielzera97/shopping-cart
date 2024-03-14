import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import "./Cart.css"
import AppContext from "../../context/AppContext"
import currency from "../../utils/formatCurrency"

export default function Cart(){


    const {cartItems, isCartVisible} = useContext(AppContext)

    const totalPrice = cartItems.reduce((acc, item) => {
        return item.price + acc
    }, 0)

    return(
        <section className={`cart ${isCartVisible ? 'cart-active' : '' }` }>
            <div className="cart-items">
                {cartItems.map((item) => <CartItem key={cartItems.id} data={item}/>)}
                </div>
            <div className="cart-resume">{currency(totalPrice)}</div>
        </section>
    )
}