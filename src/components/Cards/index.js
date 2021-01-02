import React, { useState } from "react";
import posterIt from "../../assets/poster.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

import BestMovies from "../BestMovies/index";

const Cards = ({ movies }) => {
  const [input, setInput] = useState("");

  const renderMovies = () => {
    return movies.map((itemJson) => {
      var title = itemJson.title.toUpperCase();
      var search = input.toUpperCase();

      var foundSearch = title.includes(search);

      if (foundSearch) {
        return (
          <div>
            <li>{itemJson.title}</li>
            <img src={posterIt} alt="Poster do filme" />
          </div>
        );
      }

      return null;
    });
  };

  return (
    <>
      <input
        placeholder="Pesquise por um filme"
        onChange={(event) => setInput(event.target.value)}
      />

      <BestMovies movies={movies} />

      <div>{renderMovies()}</div>
    </>
  );
};

export default Cards;
