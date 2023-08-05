// Utils
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { AppCartContext } from "../../Context";
import Layout from "../../Components/Layout";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
// Components
import OrderCard from "../../Components/OrderCard";

function MyOrder() {
  const { order } = useContext(AppCartContext);
  let products = order?.slice(-1)[0].products;

  // Catch params from URL
  const { id } = useParams();
  if (id) {
    products = order.filter((item) => item.id === id)[0].products;
  }

  return (
    <Layout>
      <div className="flex items-center w-80 justify-between mb-6 mt-6">
        <Link to="/my-orders" className="flex justify-center items-center">
          <ArrowLeftIcon className="h-6 w-6 text-black-500 cursor-pointer" />{" "}
          <span className="text-sm font-light">My Orders</span>
        </Link>
        <h3>My Order</h3>
      </div>
      <div className="flex-1 mt-4">
        {products.map((product) => (
          <OrderCard product={product} key={product.id} />
        ))}
      </div>
    </Layout>
  );
}

export default MyOrder;
