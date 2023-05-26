import axios from 'axios'
import React, { useContext, useEffect } from 'react'




const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

 

  useEffect(() => {
    fetchProducts(url)
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        
      }}
    >
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
