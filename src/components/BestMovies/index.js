import React, { useState } from "react";
import { FireOutlined } from "@ant-design/icons";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function BestMovies({ movies, className }) {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const minScore = 94;

  const renderBestMovies = () =>
    movies.map((itemJson) => {
      if (itemJson.rt_score > minScore) {
        return (
          <p>
            {itemJson.title} <FireOutlined /> {itemJson.rt_score}
          </p>
        );
      }

      return null;
    });

  return (
    <>
      <div>
        <Button color="danger" onClick={toggle}>
          See the best movies
        </Button>

        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Melhores filmes</ModalHeader>
          <ModalBody>
            <div>{renderBestMovies()}</div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default BestMovies;
