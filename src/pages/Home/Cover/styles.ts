import styled from 'styled-components'

export const CoverContainer = styled.div`
    height: 20rem;
    width: 50rem;
    background-color: ${props => props.theme.background };
    display: flex;
    align-items: center;
    justify-content: center;
`

export const TextsContainer = styled.div`
    height: 20rem;
    width: 30rem;
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;

    h1 {
        text-align: left;
        margin-bottom: .5rem;
    }
`

export const LargeImage = styled.div`
    height: 20rem;
    width: 20rem;
    background-color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width:20rem;
    }
`