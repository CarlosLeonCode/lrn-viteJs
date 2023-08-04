import { useContext, useState } from "react";
import { AppCartContext } from "../../Context";
import { PlusCircleIcon, CheckBadgeIcon } from "@heroicons/react/24/solid";

const Card = ({ product }) => {
  const {
    count,
    setCount,
    openProductDetail,
    setProductDetail,
    cartProducts,
    setCartProducts,
    openCartDetail,
  } = useContext(AppCartContext);
  const { category, title, price, image, id } = product;
  const showProductDetail = () => {
    openProductDetail();
    setProductDetail(product);
  };

  const addProdutToCart = () => {
    setCount(count + 1);
    setCartProducts([...cartProducts, product]);
    openCartDetail();
  };

  const RenderIconTop = () =>{
    const addedToCart = cartProducts.filter(product => product.id === id).length > 0
    return(
      addedToCart ? (
        <span className="text-lime-200">
          <CheckBadgeIcon className="h-6 w-6 bg-black-500 rounded-full" />
        </span>
      ) : (
        <span className="text-white cursor-pointer" onClick={addProdutToCart}>
          <PlusCircleIcon className="h-6 w-6 text-black-500" />
        </span>
      )
    )
  }

  return (
    <div className="w-56 h-70 rounded-lg drop-shadow-lg">
      <div className="z-10 absolute -top-3 -right-3 flex justify-center items-center bg-black/60 w-6 h-6 rounded-full">
        <RenderIconTop />
      </div>
      <figure className="relative w-full h-full cursor-pointer" onClick={showProductDetail}>
        <img
          className="w-full h-full object-cover rounded-t-lg"
          src={image}
          alt="headphones"
        />
        <div className="h-2/5 w-full absolute left-0 bottom-0 bg-black/80 p-2 rounded-b-lg">
          <span className="bottom-0 left-0 bg-white/60 rounded-lg text-white text-sm p-1">
            {category}
          </span>
          <p className="text-white flex justify-between bg-blacks mt-2">
            <span className="text-xs font-light">{title}</span>
            <span className="text-lg font-medium">${price}</span>
          </p>
        </div>
      </figure>
    </div>
  );
};

export default Card;
