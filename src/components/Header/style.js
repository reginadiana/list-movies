import styled from "styled-components";

export const Context = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: black;
  width: 100%;
  padding: 10px;

  img {
    width: 150px;
  }

  @media screen and (max-width: 592px) {
    align-items: center;
    flex-direction: column;

    img {
      margin-bottom: 20px;
    }
  }
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  background: #fff;
  border-radius: 4px;
  background-color: transparent;

  svg {
    color: white;
  }

  input {
    border: none;
    outline: none;
    margin-left: 10px;
    color: white;
    background-color: transparent;
  }
`;
