import React, { useContext, useState } from "react";
import posterIt from "../../assets/poster.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import { Context } from "../../context";
import BestMovies from "../BestMovies/index";
import * as Style from "./style";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const Cards = ({ movies }) => {
  const { search } = useContext(Context);

  const [modal, setModal] = useState(false);
  const [movie, setMovie] = useState("");
  const toggle = (movie) => {
    setMovie(movie);
    setModal(!modal);
  };

  const renderMovies = () => {
    return movies.map((movie) => {
      var foundSearch = movie.title.toUpperCase().includes(search);

      if (foundSearch)
        return (
          <Style.Movie
            src={posterIt}
            onClick={() => toggle(movie)}
            alt="Poster do filme"
          />
        );

      return null;
    });
  };

  return (
    <>
      <BestMovies movies={movies} />

      <Style.Movies>{renderMovies()}</Style.Movies>

      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{movie.title}</ModalHeader>
        <ModalBody>
          <Style.Description>
            <h6>Descrição:</h6>
            <p>{movie.description}</p>
          </Style.Description>

          <Style.Info>
            <h6>Diretor:</h6>
            <p>{movie.director}</p>
          </Style.Info>

          <Style.Info>
            <h6>Produtor:</h6>
            <p>{movie.producer}</p>
          </Style.Info>

          <Style.Info>
            <h6>Lançamento:</h6>
            <p>{movie.release_date}</p>
          </Style.Info>
        </ModalBody>
      </Modal>
    </>
  );
};

export default Cards;
