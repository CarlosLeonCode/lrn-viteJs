import Layout from "../../Components/Layout";
import { Player } from "@lottiefiles/react-lottie-player";

function NotFound() {
  return (
    <Layout>
      <div className="w-6/12">
        <Player
          src="https://lottie.host/776284ad-87fb-4af4-92f6-093c963f245b/ESyrz34wto.json"
          className="player"
          loop
          autoplay
        />
      </div>
    </Layout>
  );
}

export default NotFound;
