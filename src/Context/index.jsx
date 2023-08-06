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

  // Orders created
  const [order, setOrder] = useState([])

  // Filter products with OnSearch
  const [onSearchValue, setOnSearchValue] = useState('')
  const [productsFiltered, setProductsFiltered] = useState([])

  const filterProdsByTitle = (products, title) => {
    return products?.filter(product => product.title.toLowerCase().includes(title))
  }

  useEffect(() => {
    const fetchProducts = async () => {
      const response =  await (await fetch('https://fakestoreapi.com/products')).json()
      setProducts(response)
      setIsLoadingProd(false)
    }
    fetchProducts()
  }, [])

  useEffect(() => {
    if(onSearchValue){
      const prodsFiltered = filterProdsByTitle(products, onSearchValue)
      setProductsFiltered(prodsFiltered)
    }
  }, [products, onSearchValue])

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
      order,
      setOrder,
      onSearchValue,
      setOnSearchValue,
      productsFiltered,
    }}>
      {children}
    </AppCartContext.Provider>
  )
}

export { AppCartContext, AppCartProvider }
