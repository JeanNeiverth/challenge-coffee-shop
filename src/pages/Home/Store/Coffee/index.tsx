import { CoffeeCard ,AddButton, AmountInput } from './styles.ts'
import {BaseSyntheticEvent, useContext, useState} from 'react'
import {CartContext} from '../../../../App.tsx'

interface CoffeeProps {
    name: string,
    centsPrice: number,
    type?: string,
}

export function Coffee( props:CoffeeProps ) {

    let {addCoffeeToCart} = useContext(CartContext)
    const [amount, setAmount] = useState(1);

    function addThisCoffeeToCart() {
        const coffee = {
            name: props.name,
            centsPrice: props.centsPrice,
            amount: amount,
        }
        addCoffeeToCart(coffee)
    }

    const handleAmountChange = (event:BaseSyntheticEvent) => { // !!!! type of event
        setAmount(Number(event.target.value));
        console.log('Café mudou quantia', Number(event.target.value))
        // console.log(event)
    };

    const priceString = String(Math.floor(props.centsPrice / 100)) + ',' + String(props.centsPrice % 100).padStart(2,'0')
    

    return (
        <CoffeeCard>
            <h1>{props.name}</h1>
            <p>{priceString}</p>
            <AmountInput id="amount" type="number" onChange={handleAmountChange} defaultValue={1}/>
            <AddButton onClick={addThisCoffeeToCart} >+</AddButton>
        </CoffeeCard>
    )
}