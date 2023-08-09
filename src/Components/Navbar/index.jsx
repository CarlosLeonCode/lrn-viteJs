import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { NavLink } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const activeStyle = "underline underline-offset-4";
  const { count, openCartDetail, setSearchByCategory, handleSignOut, signOut } = useContext(AppCartContext);
  const renderMenu = () => {
    if(signOut) {
      return(
        <li>
          <NavLink
            to="/sign-in"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            Sign in
          </NavLink>
        </li>
      )
    } else {
      return(
        <>
          <li className="text-black/40">carlosleoncode@example.com</li>
          <li>
            <NavLink to="/my-orders">My Orders</NavLink>
          </li>
          <li>
            <NavLink to="/my-account">My Account</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in"
              className={({ isActive }) => (isActive ? activeStyle : undefined)}
              onClick={handleSignOut}
            >Sign out</NavLink>
          </li>
        </>
      )
    }
  }

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0 bg-white drop-shadow-md">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg">
          <NavLink to="/">Shop</NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('')}
          >
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/jewelery"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('jewelery')}
          >
            Jewelery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/electronics"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory('electronics')}
          >
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/men"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("men's clothing")}
          >
            men's clothing
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/women"
            className={({ isActive }) => (isActive ? activeStyle : undefined)}
            onClick={() => setSearchByCategory("women's clothing")}
          >
            women's clothing
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderMenu()}
        <li>
          {
            <ShoppingCartIcon
              className="h-6 w-6 text-black-500 inline-block cursor-pointer"
              onClick={openCartDetail}
            />
          }{" "}
          {count}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
