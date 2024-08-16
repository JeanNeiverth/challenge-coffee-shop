import { CartCoffeeContainer } from "./styles";
import { CartCoffeeInterface } from "../../../App";
import { useContext } from "react";
import { CartContext } from "../../../App";

export function CartCoffee(props:CartCoffeeInterface) {

    let {removeCoffeeFromCart} = useContext(CartContext)

    function callRemoveCoffeFromcart () {
        removeCoffeeFromCart(props.name);
    }
    
    return (
        <CartCoffeeContainer>
            <p> {props.name} | {props.centsPrice} | {props.amount} </p>
            <button onClick={callRemoveCoffeFromcart}>remove</button>
        </CartCoffeeContainer>
    )
}