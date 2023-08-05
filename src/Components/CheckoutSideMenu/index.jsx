// Utils
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
import { totalPrice } from "../../Utils";
// Components
import Aside from "../Aside";
import OrderCard from "../OrderCard";

const CheckoutSideMenu = () => {
  const {
    isCartDetailOpen,
    closeCartDetail,
    cartProducts,
    setCartProducts,
    setCount,
    count,
    order,
    setOrder,
  } = useContext(AppCartContext);

  const removeProduct = (id) => {
    const filteredProducts = cartProducts.filter((product) => product.id != id);
    setCartProducts(filteredProducts);
    setCount(count - 1);
  };

  const handleOrder = () => {
    const newOrder = {
      date: new Date().toLocaleString(),
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: totalPrice(cartProducts),
      id: crypto.randomUUID(),
    };
    setOrder([...order, newOrder]);
    setCartProducts([]);
    setCount(0);
    closeCartDetail();
  };

  return (
    <Aside isAsideOpen={isCartDetailOpen}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-xl">My Order</h2>
        <div onClick={closeCartDetail} className="cursor-pointer">
          <XCircleIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      <div className="flex-1">
        {cartProducts.map((product) => (
          <OrderCard
            product={product}
            key={product.id}
            removeProduct={removeProduct}
          />
        ))}
      </div>
      <div className="border-t-2 mt-3">
        <p className="flex justify-between mt-6">
          <span className="font-light">Total:</span>
          <span className="font-medium text-xl">
            ${totalPrice(cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="bg-black text-white w-full rounded-lg py-3 mt-3"
            onClick={handleOrder}
          >
            Checkout
          </button>
        </Link>
      </div>
    </Aside>
  );
};

export default CheckoutSideMenu;
