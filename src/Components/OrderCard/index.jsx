// Utils
import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = ({product, removeProduct}) => {
  const { title, price, image, id } = product
  return (
    <div className="flex justify-between items-center p-3">
      <div className="flex items-center">
        <figure className="w-20 h-20 bg-slate-500 rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div>
        <p className="text-lg font-medium">{price}</p>
        <TrashIcon className="h-6 w-6 text-black-500 cursor-pointer" onClick={() => removeProduct(id)}/>
      </div>
    </div>
  );
};

export default OrderCard;
