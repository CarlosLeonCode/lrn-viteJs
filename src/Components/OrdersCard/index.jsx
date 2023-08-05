import { CalendarDaysIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";

const OrdersCard = ({ order }) => {
  const { totalPrice, totalProducts, date } = order;
  return (
    <div className="items-center p-3 bg-white drop-shadow m-1">
      <div className="flex justify-between items-center">
        <p className="flex flex-col justify-center">
          <div className="flex justify-center items-center">
            <CalendarDaysIcon className="h-4 w-4 text-black-500 inline" />
            <span className="text-sm font-light ml-1">{date}</span>
          </div>
          <div className="flex items-center">
            <ShoppingBagIcon className="h-4 w-4 text-black-500 inline" />
            <span className="text-sm font-light ml-1">{totalProducts}</span>
          </div>
        </p>
        <span className="text-lg font-bold">${totalPrice}</span>
      </div>
    </div>
  );
};

export default OrdersCard;
