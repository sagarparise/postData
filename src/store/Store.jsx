import { createContext, useState } from "react";

export const Store = createContext();

 const StoreProvider = ({ children }) => {
  const[post, setPost] = useState(null)
  return (
    <Store.Provider value={{post, setPost}}>
      {children}
    </Store.Provider>
    )
 }

 export default StoreProvider;