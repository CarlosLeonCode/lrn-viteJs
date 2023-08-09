// Utils
import { BrowserRouter } from "react-router-dom";
import { AppCartProvider } from "../../Context";
import { AppRoutes } from "../../Routes";

// Components
import Navbar from "../../Components/Navbar";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";

import "./App.css";

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
