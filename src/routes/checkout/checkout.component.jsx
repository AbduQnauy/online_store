import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import {HeaderBlock, CheckoutHeader, CheckoutContainer, Total} from './checkout.styles'
import React from "react"

const Checkout = (props) => {
    const { cartItems, cartTotal } = useContext(CartContext)
  return (
    <CheckoutContainer>

      <CheckoutHeader>
        <HeaderBlock>
            <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
            <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>

      {cartItems.map((cartItem, id)=> <CheckoutItem key={id} cartItem={cartItem}/>)}
         <Total>Total: ${cartTotal}</Total>
      </CheckoutContainer>
  )
};

export default Checkout;
