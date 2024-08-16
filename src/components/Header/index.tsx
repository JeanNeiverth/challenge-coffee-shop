import { HeaderContainer } from "./styles";
import { Logo } from "./styles";
import { CartLink } from "./styles";
import { NavLink } from "react-router-dom";
import logo from '../../assets/coffee-shop-logo.png'
import {ShoppingCart} from 'phosphor-react'

export function Header() {
    return (
        <HeaderContainer>
            <NavLink to="./"> <Logo><img src={logo}/></Logo> </NavLink>
            <h1>  </h1>
            <NavLink to="./cart"> <CartLink> <ShoppingCart size='2rem'/> </CartLink> </NavLink>
        </HeaderContainer>
    )
}