import styled from 'styled-components'

export const StoreContainer = styled.div`
    height: 70rem;
    width: 50rem;
    background-color: ${props => props.theme.background };
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`

export const CoffeeOptionsContainer = styled.div`
    /* height: 60rem; */
    width: 50rem;
    background-color: inherit;
    display: grid;
    grid-template-columns: 10rem 10rem 10rem 10rem;
    align-items: center;
    justify-content: center;
`