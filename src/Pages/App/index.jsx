// Utils
import { useRoutes, BrowserRouter } from "react-router-dom";
import { AppCartProvider } from "../../Context";

// Pages
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import SignIn from "../SignIn";
import NotFound from "../NotFound";
import Jewelery from "../Jewelery";
import Electronics from "../Electronics";
import Men from "../Men";
import Women from "../Women";

// Components
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

import "./App.css";

const AppRoutes = () =>
  useRoutes([
    { path: "/", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/my-orders/last/", element: <MyOrder /> },
    { path: "/category/jewelery/", element: <Jewelery /> },
    { path: "/category/electronics/", element: <Electronics /> },
    { path: "/category/men/", element: <Men /> },
    { path: "/category/women/", element: <Women /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "*", element: <NotFound /> },
  ]);

function App() {
  return (
    <AppCartProvider>
      <BrowserRouter>
        <Navbar />
        <AppRoutes />
        <CheckoutSideMenu />
      </BrowserRouter>
    </AppCartProvider>
  );
}

export default App;
