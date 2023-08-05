// Utils
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AppCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

// Components
import OrdersCard from "../../Components/OrdersCard";

function MyOrders() {
  const { order } = useContext(AppCartContext);
  return (
    <Layout>
      <div className="flex items-center w-80 justify-between mb-6 mt-6">
        <Link to="/" className="flex justify-center items-center">
          <ArrowLeftIcon className="h-4 w-4 text-black-500 cursor-pointer" />{" "}
          <span className="text-sm font-light"> Home</span>
        </Link>
        <h3>My Orders</h3>
      </div>
      {order.map((order) => (
        <Link to={`/my-orders/${order.id}`} key={order.id} className="w-4/12">
          <OrdersCard order={order} />
        </Link>
      ))}
    </Layout>
  );
}

export default MyOrders;
