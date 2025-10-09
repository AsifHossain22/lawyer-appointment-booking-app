import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Layers from "../../components/Layers/Layers";

const Home = () => {
  return (
    <div>
      {/* BannerSection */}
      <section>
        <Banner></Banner>
      </section>

      {/* LayerSection */}
      <section>
        <Layers></Layers>
      </section>

      {/* ServicesSection */}
      <section>
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
