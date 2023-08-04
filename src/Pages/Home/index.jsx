// Utils
import { useContext } from "react";
import { AppCartContext } from "../../Context";

// Components
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";

function Home() {
  const { products, isLoadingProds } = useContext(AppCartContext);
  return (
    <Layout>
      {isLoadingProds ? (
        <>LOADING</>
      ) : (
        <>
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

export default Home;
