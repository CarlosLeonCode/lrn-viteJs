import { createContext, useState, useEffect } from "react"

const AppCartContext =  createContext()

const AppCartProvider = ({children}) => {
  const [products, setProducts] = useState([])
  const [count, setCount] = useState(0)
  const [isLoadingProds, setIsLoadingProd] = useState(true)

  // Product details
  const [productDetail, setProductDetail] = useState({})

  // Product detail Open/Close Aside
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
  const openProductDetail = () => setIsProductDetailOpen(true)
  const closeProductDetail = () => setIsProductDetailOpen(false)

  // Cart products to buy
  const [cartProducts, setCartProducts] = useState([])

  // Cart detail Open/Close Aside
  const [isCartDetailOpen, setIsCartDetailOpen] = useState(false)
  const openCartDetail = () => setIsCartDetailOpen(true)
  const closeCartDetail = () => setIsCartDetailOpen(false)

  useEffect(() => {
    const fetchProducts = async () => {
      const response =  await (await fetch('https://fakestoreapi.com/products')).json()
      setProducts(response)
      setIsLoadingProd(false)
    }
    fetchProducts()
  }, [])

  return (
    <AppCartContext.Provider value={{
      products,
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isProductDetailOpen,
      setProductDetail,
      productDetail,
      isLoadingProds,
      setIsLoadingProd,
      cartProducts,
      setCartProducts,
      isCartDetailOpen,
      openCartDetail,
      closeCartDetail,
    }}>
      {children}
    </AppCartContext.Provider>
  )
}

export { AppCartContext, AppCartProvider }
