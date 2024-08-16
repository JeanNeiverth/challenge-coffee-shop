import { CartCoffeeInterface, CartContext } from '../../App.tsx';
import { CartContainer, PurchaseButton, All, OrderContainer, Delivery, Payment, FormContainer } from './styles.ts'
import {useContext} from 'react'
import { CartCoffee } from './CartCoffee/index.tsx';
import {useForm} from 'react-hook-form'



export function Cart() {

    const {register, handleSubmit, watch, reset} = useForm();

    const cep = watch('cep');
    const rua = watch('rua');
    const numero = watch('numero');
    // const complemento = watch('complemento')
    const bairro = watch('bairro');
    const cidade = watch('cidade');
    const uf = watch('uf');

    const enablePurchase = (cep) && (rua) && (bairro) && (numero) && (cidade) && (uf)


    const {itemsInCart, purchaseCartItems} = useContext(CartContext)
    
    const listOfCoffees = itemsInCart.map(item => {
        return (<CartCoffee name={item.name} centsPrice={item.centsPrice} amount={item.amount}  />)
    })

    function getTotalCents(itemsInCart:CartCoffeeInterface[]) {
        let sum = 0
        for (const coffee of itemsInCart) {
            sum = sum + coffee.centsPrice * coffee.amount
        }
        return sum
    }

    function callPurchaseCartItems() {
        purchaseCartItems()
        reset()
    }

    const totalCents = getTotalCents(itemsInCart)
    const priceString = String(Math.floor(totalCents / 100)) + ',' + String(totalCents % 100).padStart(2,'0')

    return (
        <All>
            <OrderContainer>
                <h1> Complete seu pedido </h1>
                <Delivery>
                    <FormContainer>
                        Endereço de entrega:
                        <br/>
                        <br/>
                        <input type="number" id="cep" placeholder="CEP" {...register('cep')}/>
                        <input id="rua" placeholder="Rua" {...register('rua')}/>
                        <input id="numero" placeholder='Número' {...register('numero')}/>
                        <input id="complemento" placeholder='Complemento (opcional)' {...register('complemento')}/>
                        <input id="bairro" placeholder='Bairo' {...register('bairro')}/>
                        <input id="cidade" placeholder='Cidade' {...register('cidade')}/>
                        <select id="uf" {...register('uf')}>
                            <option value="" disabled selected>UF</option>
                            <option value="AC">AC</option>
                            <option value="AL">AL</option>
                            <option value="BA">BA</option>
                        </select>
                    </FormContainer>
                </Delivery>
                <Payment>
                    <p>Pagamento</p>
                    <div>
                        <div>CARTÃO DE CRÉDITO</div>
                        <div>CARTÃO DE DÉBITO</div>
                        <div>DINHEIRO</div>
                    </div>
                </Payment>
            </OrderContainer>
            <CartContainer>
                <h1>Cafés selecionados</h1>
                {listOfCoffees}
                <p>Total: {priceString}</p>
                <br/>
                <PurchaseButton disabled={!enablePurchase} onClick={handleSubmit(callPurchaseCartItems)}> Comprar</PurchaseButton>
            </CartContainer>
        </All>
    )
}