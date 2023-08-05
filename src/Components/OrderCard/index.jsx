// Utils
import { TrashIcon } from "@heroicons/react/24/solid";

const OrderCard = ({ product, removeProduct }) => {
  const { title, price, image, id } = product;

  const renderDeleteIcon = () =>{
    if(removeProduct){
      return <TrashIcon
        className="h-4 w-4 text-black-500 cursor-pointer"
        onClick={() => removeProduct(id)}
      />
    }
  }
  return (
    <div className="flex justify-between items-center p-3 bg-white drop-shadow m-1">
      <div className="flex items-center">
        <figure className="w-16 h-16 bg-slate-500 rounded-lg">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div>
        <p className="text-lg font-medium">${price}</p>
      </div>
      {renderDeleteIcon()}
    </div>
  );
};

export default OrderCard;
