import { createBrowserRouter } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Confirmation,
  Error,
  Home,
  MainLayout,
  Products,
  SingleProduct,
} from "../pages";

import { loader as productsLoader } from "../pages/MainLayout";
import { loader as singleProductLoader } from "../pages/SingleProduct";
import { ErrorComponent } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    loader: productsLoader,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/confirmation",
        element: <Confirmation />,
      },
    ],
  },
]);
