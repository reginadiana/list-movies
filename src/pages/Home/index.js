import React, { useState } from "react";
import Header from "../../components/Header/index";
import ApiMovies from "../../components/ApiMovies/index";
import Footer from "../../components/Footer/index";
import { Context } from "../../context";

const Home = () => {
  const [search, getSearch] = useState("");

  return (
    <Context.Provider value={{ search }}>
      <Header getSearch={(search) => getSearch(search)} />
      <ApiMovies />
      <Footer />
    </Context.Provider>
  );
};

export default Home;
