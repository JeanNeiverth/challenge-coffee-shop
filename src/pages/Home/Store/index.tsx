import { StoreContainer, CoffeeOptionsContainer } from './styles.ts'
import { Coffee } from './Coffee/index.tsx'

export function Store() {
    return (
        <>
            <StoreContainer>
                <h1> Conheça nossos cafés </h1>
                <br/>
                <CoffeeOptionsContainer>
                    <Coffee name='Expresso Tradicional' centsPrice={990}/>
                    <Coffee name='Expresso Americano' centsPrice={990}/>
                    <Coffee name='Expresso Cremoso' centsPrice={1990}/>
                    <Coffee name='Expresso Gelado' centsPrice={990}/>
                    <Coffee name='Café com Leite' centsPrice={990}/>
                    <Coffee name='Latte' centsPrice={1990}/>
                </CoffeeOptionsContainer>
            </StoreContainer>
        </>
    )
}