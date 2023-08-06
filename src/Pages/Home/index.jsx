// Utils
import { useContext } from "react";
import { AppCartContext } from "../../Context";
import { Player } from "@lottiefiles/react-lottie-player";

// Components
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const {
    products,
    isLoadingProds,
    setOnSearchValue,
    productsFiltered,
    onSearchValue,
  } = useContext(AppCartContext);

  const renderProducts = () => {
    if (onSearchValue.trim().length > 0) {
      if (productsFiltered && productsFiltered.length > 0) {
        return productsFiltered?.map((item) => (
          <Card key={item.id} product={item} />
        ));
      } else {
        return (
          <div className="col-span-full grid place-content-center">
            <Player
              src="https://lottie.host/e2dc90f9-86c2-4d5a-bb0d-566cd046b318/MJ2GR62YSn.json"
              className="player"
              loop
              autoplay
            />
          </div>
        );
      }
    } else {
      return products?.map((item) => <Card key={item.id} product={item} />);
    }
  };
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
            <input
              className="mt-3 rounded-lg border w-80 p-2 focus:outline-none"
              type="text"
              placeholder="Search a product"
              onChange={(e) => setOnSearchValue(e.target.value.toLowerCase())}
            />
          </div>
          <div className="grid grid-cols-4 gap-4 w-full max-w-screen-lg py-3">
            {renderProducts()}
          </div>
          <ProductDetail />
        </>
      )}
    </Layout>
  );
}

export default Home;
