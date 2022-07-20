import { createContext, useState, useEffect} from "react";


export const CartContext = createContext()


const {Provider} = CartContext;

 const MyProvider = ({children}) => {

    const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cartLocal")) ?? [])
    useEffect(() => {
        localStorage.setItem("cartLocal", JSON.stringify(cart))
    }, [cart]);

    // ItemDetail - Si el producto a dd, esta en el carrito o no, Retorna boolean
    const isInCart = (id) => {
        return cart.some(x => x.id === id)
    }

    // ItemDetail - Agregara producto seleccioando al cart, sin pisar a los agregados y si es  duplicado auementa (cantidad)
    const addItem = (item, quantities) => {
        const newItem = {
            ...item, 
            quantities
        }

    if (isInCart(newItem.id)) {

        const findProduct = cart.find(x => x.id === newItem.id)
        const produtIndex = cart.indexOf(findProduct)
        const auxArray = [...cart]
        auxArray[produtIndex].quantities += quantities
        setCart(auxArray)

             
    } else {
        setCart([...cart, newItem])
    }
 
    }

    // Vaciar el Carrito - Cart - Boton

    const emptyCart = () => {
        setCart([])
    }

    // Cart - Cart -nvo array sin el producto seleccionado

    const deleteItem = (id) => {

        return setCart(cart.filter(x => x.id !== id))
    
    }

    // Metodo Reduce  CartWidget. Retornara la cantidad total de unidades que tiene nuestro state  cart 

    const getItemQty = () => {
        return cart.length
        // return  cart.reduce((acc, x) => acc += x.quantities, 0)
    }

    // Cart - Retorna e precio total de carrito

    const getItemPrice = () => {
        return cart.reduce((acc, x) => acc += x.quantities * x.price, 0)
    }


    return <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, getItemQty, getItemPrice}}>{children}</Provider>
}
 

export default MyProvider