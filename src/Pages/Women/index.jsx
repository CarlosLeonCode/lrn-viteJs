// libs
import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { Player } from "@lottiefiles/react-lottie-player";

// components
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

const Women = () => {
  const { products, isLoadingProds } = useContext(AppCartContext);

  return (
    <Layout>
      {isLoadingProds ? (
        <Player
          src="https://lottie.host/f1b943f2-c8e4-486e-ab6d-282d4f43bc8f/NYQYJGzI4W.json"
          className="player"
          loop
          autoplay
        />
      ) : (
        <>
          <div className="flext items-center justify-center relative w-full mb-12 mt-6 text-center">
            <h1>Exclusive Products</h1>
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg py-3">
            {products?.map((item) => (
              <Card key={item.id} product={item} />
            ))}
          </div>
          <ProductDetail />
        </>
      )}
    </Layout>
  );
}

export default Women
