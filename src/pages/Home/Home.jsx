import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Lawyers from "../../components/Lawyers/Lawyers";

const Home = () => {
  return (
    <div>
      {/* BannerSection */}
      <section>
        <Banner></Banner>
      </section>

      {/* LayerSection */}
      <section>
        <Lawyers></Lawyers>
      </section>

      {/* ServicesSection */}
      <section>
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
