import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";

const Home = () => {
  return (
    <div>
      {/* BannerSection */}
      <section>
        <Banner></Banner>
      </section>
      {/* ServicesSection */}
      <section>
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
