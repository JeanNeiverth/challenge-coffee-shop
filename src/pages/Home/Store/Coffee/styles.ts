import styled from 'styled-components'

export const CoffeeCard = styled.div`
    height: 10rem;
    width: 8rem;
    background-color: ${props => props.theme.card };
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin:0.5rem;
    border-radius: 0 30px 0 30px;
`
export const AddButton = styled.button`
    width:20%;
    height:20%;
`

export const AmountInput = styled.input`
    width:50%;
    height:20%;
`