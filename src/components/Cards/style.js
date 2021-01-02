import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  button {
    margin-top: 50px;
    align-self: center;
  }
`;

export const Movies = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(1, 300px);
  gap: 50px;

  img {
    width: 300px;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: repeat(2, 300px);
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 300px);
  }

  @media screen and (min-width: 1500px) {
    grid-template-columns: repeat(4, 300px);
  }
`;

export const Movie = styled.img`
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Description = styled.div`
  text-align: justify;

  h6 {
    font-weight: bold;
  }
`;

export const Info = styled.div`
  display: flex;
  align-items: center;

  h6,
  p {
    margin: 0;
    padding: 0;
  }

  h6 {
    font-weight: bold;
    margin: 5px 10px 5px 0;
  }
`;
