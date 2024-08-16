import styled from 'styled-components'


export const HeaderContainer = styled.div`
    width: 100%;
    height: 100px;
    background-color: ${props => props.theme.background};
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const Logo = styled.div`
    /* width: 5rem;
    height: 3rem; */
    background-color: ${props => props.theme.background};
    padding:.25rem;
    border-radius:10px;

    &:hover {
        background-color: ${props => props.theme.hover};
    }
`

export const CartLink = styled.div`
    width: 5rem;
    height: 3rem;
    background-color: ${props => props.theme.background};
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius:10px;

    &:hover {
        background-color: ${props => props.theme.hover};
    }
`

