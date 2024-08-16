import styled from 'styled-components'

export const All = styled.div`
    width:100%;
    display:flex;
    align-items: start;
    justify-content: center;
`

export const OrderContainer = styled.div`
    width:30rem;
    

    h1 {
        text-align: start;
        margin-left:1rem;
    }
`

export const CartContainer = styled.div`
    width: 20rem;
    height: 500px;
    background-color: ${props => props.theme.button};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const PurchaseButton = styled.button`
    width:10rem;
    height:4rem;
`


export const Delivery = styled.div`
    margin:1rem;
    background-color: ${props=>props.theme.button};
`

export const Payment = styled.div`
    margin:1rem;
    background-color: ${props=>props.theme.button};

`

export const FormContainer = styled.form`
    display:block;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: .5rem;
    input, select {
        margin-bottom: .5rem;
        /* margin-right: 0.5rem; */
        height: 2rem;
        font-size:16px;
    }

    div {
        width: .5rem;
        height:1rem;
    }

    #cep { 
        width:100%;
        ::-webkit-outer-spin-button {
            -webkit-appearance: none;
        }
    }
    #cep::-webkit-outer-spin-button,
    #cep::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }

    #rua { 
        width:100%;
    }

    #numero { 
        width:30%;
        margin-right:.5rem;
    }

    #complemento {
        width:calc(70% - .5rem);
    }

    #bairro {
        width:30%;
        margin-right: .5rem;
    }

    #cidade { 
    width:calc(55% - .5rem);
    margin-right: .5rem;
    }

    #uf {
        width:calc(15% - .5rem);
    }

`