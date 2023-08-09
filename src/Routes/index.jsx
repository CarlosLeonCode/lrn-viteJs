  // Libs
import { useRoutes } from "react-router-dom";
import { AppCartContext } from "../Context";
import { useContext } from "react";

// Pages
import Home from "../Pages/Home";
import MyAccount from "../Pages/MyAccount";
import MyOrder from "../Pages/MyOrder";
import MyOrders from "../Pages/MyOrders";
import SignIn from "../Pages/SignIn";
import NotFound from "../Pages/NotFound";
import Jewelery from "../Pages/Jewelery";
import Electronics from "../Pages/Electronics";
import Men from "../Pages/Men";
import Women from "../Pages/Women";

export const AppRoutes = () => {
  const { signOut } = useContext(AppCartContext)
  return(
    useRoutes([
      { path: "/", element: <Home /> },
      { path: "/my-account", element: signOut ? <SignIn /> : <MyAccount /> },
      { path: "/my-order", element: signOut ? <SignIn /> : <MyOrder /> },
      { path: "/my-orders", element: signOut ? <SignIn /> : <MyOrders /> },
      { path: "/my-orders/:id", element: signOut ? <SignIn /> : <MyOrder /> },
      { path: "/my-orders/last/", element: signOut ? <SignIn /> : <MyOrder /> },
      { path: "/category/jewelery/", element: <Jewelery /> },
      { path: "/category/electronics/", element: <Electronics /> },
      { path: "/category/men/", element: <Men /> },
      { path: "/category/women/", element: <Women /> },
      { path: "/sign-in", element: <SignIn /> },
      { path: "*", element: <NotFound /> },
    ])
  )
}

