import { Helmet } from "react-helmet-async";
import Estates from "./Estates";
import Map from '../Components11/Map';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>City In | Home </title>
      </Helmet>
      {/* Banner */}
      <div className="">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage:
              "url(https://i.ibb.co/1q53NpC/c1.jpg)",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>

      <Map></Map>
      
      <Estates></Estates>
    </div>
  );
};

export default Home;
