import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { XCircleIcon } from "@heroicons/react/24/solid";
// Components
import Aside from "../Aside"

const ProductDetail = () => {
  const { isProductDetailOpen, closeProductDetail, productDetail } = useContext(AppCartContext);
  const { title, price, image, description } = productDetail;

  return (
    <Aside isAsideOpen={isProductDetailOpen}>
      <div className="flex justify-between items-center mb-3">
        <h2 className="font-medium text-xl">Detail</h2>
        <div onClick={closeProductDetail} className="cursor-pointer">
          <XCircleIcon className="h-6 w-6 text-black-500" />
        </div>
      </div>
      <figure className="mb-3">
        <img className="w-full h-full rounded-lg" src={image} alt="" />
      </figure>
      <p className="flex flex-col">
        <span className="font-medium text-2xl">${price}</span>
        <span className="font-medium text-md">{title}</span>
        <span className="font-light text-sm">{description}</span>
      </p>
    </Aside>
  );
};

export default ProductDetail;
