import React from "react";
import Banner from "../../components/Banner/Banner";
import Services from "../../components/Services/Services";
import Lawyers from "../../components/Lawyers/Lawyers";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  // console.log(data);

  return (
    <div>
      {/* BannerSection */}
      <section>
        <Banner></Banner>
      </section>

      {/* LayerSection */}
      <section>
        <Lawyers data={data}></Lawyers>
      </section>

      {/* ServicesSection */}
      <section>
        <Services></Services>
      </section>
    </div>
  );
};

export default Home;
