import React from "react";
import styled from "styled-components";
import TaskImg from "../../components/images/example-8.svg";

const Main = styled.main`
  background-color: #fbf3d8;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Img = styled.img`
  height: 310px;
  height: 240px;
`;

const Button = styled.button`
  padding: 10px;
  width: 50vw;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 30px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
`;

const Task = () => {
  return (
    <>
      <Main>
        <Img alt="" src={TaskImg} />
        <Button>Agregar tare +</Button>
      </Main>
    </>
  );
};

export default Task;
