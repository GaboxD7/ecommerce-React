import { createContext, useState } from "react";
import Zoom from "react-img-zoom";

export const CartContext = createContext()


const {Provider} = CartContext;

 const MyProvider = ({children}) => {

    const [cart, setCart] = useState([])

    // ItemDetail - Si el producto a dd, esta en el carrito
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    // ItemDetail - Agregara producto al cart, sin pisar a los agregados y su duplicado (cantidad)
    const addItem = (item, qty) => {
        const newItem = {
            ...item, 
            qty
        }

    if (isInCart(newItem.id)) {

        const findProduct = cart.find(x => x.id === newItem.id)
        const produtIndex = cart.indexOf(findProduct)
        const auxArray = [... cart]
        auxArray[produtIndex].qty += qty
        setCart(auxArray)

             
    } else {
        setCart([...cart], newItem)
    }
    }
    // Vaciar el Carrito - Cart - voton
    const emptyCart = () => {
        setCart([])
    }

    // Cart - Cart -nvo array sin el producto seleccionado
    const deleteItem = (id) => {

        return setCart(cart.filter(x => x.id !== id))
       
        
    }

    // Metodo Reduce  CartWidget. Retornara la cantidad total de unidades que tiene nuestro state  cart 
    const getItemQty = () => {
        return cart.reduce((acc, x) => acc += x.qty, 0)
    }

    // Cart - Retorna e precio total de carrito
    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.qty * x.price, 0)
    }


    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>
}
 

export default MyProvider