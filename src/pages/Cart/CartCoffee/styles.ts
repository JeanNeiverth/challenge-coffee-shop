import styled from 'styled-components'

export const CartCoffeeContainer = styled.div`
    width: 18rem;
    height: 5rem;
    background-color: ${props => props.theme.card};
    margin:.25rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0 20px 0 20px;
`