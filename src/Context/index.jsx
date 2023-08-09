// Libs
import { createContext, useState, useEffect } from "react"

// Utils
import Storage from "../Utils/storage"

const AppCartContext =  createContext()
const STORAGEKEY = 'shopData'

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
  
  const [searchByCategory, setSearchByCategory] = useState('')

  const filterProdsByTitle = (products, title) => {
    return products?.filter(product => product.title.toLowerCase().includes(title))
  }

  // Login/Sign up
  const [account, setAccount] = useState({})
  const [signOut, setSignOut] = useState(false)
  // --
  const initStorage = () => {
    const data = Storage.getItem(STORAGEKEY)
    if(!data){
      let newData = {
        account: account,
        signOut: signOut
      }
      Storage.setItem(STORAGEKEY, newData)
    } else {
      setAccount(data.account)
      setSignOut(signOut)
    }
  }


  const handleSignOut = () => {
    const data = Storage.getItem(STORAGEKEY)
    data.signOut = true
    Storage.setItem(STORAGEKEY, data)
    setSignOut(true)
  }

  useEffect(() => {
    initStorage()
  }, [])

  useEffect(() => {
    setIsLoadingProd(true)
    const fetchProducts = async () => {
      let response;
      if(searchByCategory.length > 0){
        response =  await (await fetch(`https://fakestoreapi.com/products/category/${searchByCategory}`)).json()
      } else {
        response =  await (await fetch('https://fakestoreapi.com/products')).json()
      }
      setProducts(response)
      setIsLoadingProd(false)
    }
    fetchProducts()
  }, [searchByCategory])

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
      setProducts,
      setSearchByCategory,
    }}>
      {children}
    </AppCartContext.Provider>
  )
}

export { AppCartContext, AppCartProvider }
