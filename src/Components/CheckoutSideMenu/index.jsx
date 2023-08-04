import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
// Components
import Aside from "../Aside";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const { isCartDetailOpen, closeCartDetail, cartProducts, setCartProducts, setCount, count } = useContext(AppCartContext);

  const removeProduct = (id) => {
    const filteredProducts = cartProducts.filter(product => product.id != id)
    setCartProducts(filteredProducts)
    setCount(count - 1)
  }

  return (
    <Aside isAsideOpen={isCartDetailOpen}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-xl">Checkout | My Order</h2>
        <div onClick={closeCartDetail} className="cursor-pointer">
          <XCircleIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      {cartProducts.map((product) => (
        <OrderCard product={product} key={product.id} removeProduct={removeProduct}/>
      ))}
    </Aside>
  );
};

export default CheckoutSideMenu;
