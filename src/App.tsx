import './App.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./page/Home.tsx";
import React, {useState} from "react";
import Product from "./components/Product.tsx";
import AddProductForm from "./page/AddProduct-Form.tsx";
import UpdateProduct from "./page/UpdateProduct.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/product",
    element: <Product />
  },
  {
    path: "/product-form",
    element: <AddProductForm />
  },
  {
    path: "/product-update",
    element: <UpdateProduct />
  }
]);

export const AppContext = React.createContext(undefined);

function App() {
  const [data, setData] = useState<any>({ name: 'chien1' })
  const [product, updateProduct] = useState<any>({ name: 'chien2' })

  return (
    <AppContext.Provider value={{user: data, changeUser: setData, addProduct: updateProduct}}>
      <RouterProvider router={router} />
    </AppContext.Provider>
  )
}

export default App
