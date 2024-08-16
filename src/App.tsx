import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default.ts"
import { GlobalStyle } from "./styles/global.ts"
import {createContext, useReducer, useEffect} from 'react'
import { Cart } from './pages/Cart/index.tsx'
import { Home  } from './pages/Home/index.tsx'
import { DefaultLayout } from './layouts/DefaultLayout/index.tsx';


export interface CartCoffeeInterface {
  name: string,
  centsPrice: number,
  amount: number,
}

export interface CartContextInterface {
  itemsInCart: CartCoffeeInterface[],
  addCoffeeToCart: (coffee:CartCoffeeInterface) => void,
  removeCoffeeFromCart: (coffeeName:string) => void,
  purchaseCartItems: () => void,
}

export const CartContext = createContext({} as CartContextInterface)


export function App() {


  // const [itemsInCart, setItemsInCart] = useState<CartCoffee[]>([])

  const [itemsInCart, dispatchCart] = useReducer((state:CartCoffeeInterface[], action: any) => {
    if (action.type === 'ADD_COFFEE_TO_CART') {
      const existingCoffeeIndex = state.findIndex(coffee => coffee.name === action.payload.coffee.name);

      if (existingCoffeeIndex !== -1) {
        return state.map((coffee, index) => 
          index === existingCoffeeIndex
            ? { ...coffee, amount: coffee.amount + action.payload.coffee.amount }
            : coffee
        );
      }

      return [...state, action.payload.coffee];
    }

    if (action.type === 'REMOVE_COFFEE_FROM_CART') {
      console.log('Removendo café no dispatch',action.payload.coffeeName)

      let newState = state.filter(coffee => coffee.name !== action.payload.coffeeName);
      return newState
      // 
    }

    if (action.type === 'PURCHASE') {
      return []
    }


    return state
  },
  [],
  () => {
    const storedState = localStorage.getItem('@coffee-shop-challenge:itemsInCart-1.0.0')
    if (storedState) {
      console.log(JSON.parse(storedState))
      return JSON.parse(storedState)
    }
    return []
    },
  )
  

  function addCoffeeToCart(coffee:CartCoffeeInterface) {
    dispatchCart( {
      type:'ADD_COFFEE_TO_CART',
      payload: {coffee,}
    } )
  }

  function removeCoffeeFromCart(coffeeName:string) {
    console.log('Removendo coffee dentro do App.tsx',coffeeName)
    dispatchCart( {
      type:'REMOVE_COFFEE_FROM_CART',
      payload: {coffeeName,}
    } )
  }

  function purchaseCartItems() {
    dispatchCart({
      type:'PURCHASE',
      payload:{},
    })
  }
  

  useEffect( () => {
    const stateJSON = JSON.stringify(itemsInCart);
    localStorage.setItem('@coffee-shop-challenge:itemsInCart-1.0.0', stateJSON)
    console.log('itemsInCart changed:', itemsInCart); 
  }, [itemsInCart])

  return (
    <ThemeProvider theme={defaultTheme}>
      <CartContext.Provider value={{itemsInCart, addCoffeeToCart, removeCoffeeFromCart, purchaseCartItems}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<DefaultLayout/>}>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
