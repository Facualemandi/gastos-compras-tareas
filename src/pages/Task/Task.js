import React from "react";
import styled from "styled-components";
import calendar from "../../components/images/calendar.svg";

const Main = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #fbf3d8;
  @media (min-width: 1080px){
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1380px){
    display: flex;
    justify-content: center;
  }
`;

const SectionOne = styled.section`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1080px){
    justify-content: flex-start;
    align-items: flex-start;
    width: 540px;
  }
  @media (min-width: 1080px){
    width: 690px;
  }
`;
const SectionTwo = styled.section`
  @media (min-width: 1080px){
    width: 540px;
    border: 1px solid red;
  }
  @media (min-width: 1080px){
    width: 690px;
  }
`;
const Img = styled.img`
  width: 100%;
  height: 350px;
`;
const ButtonAdd = styled.button`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  margin-top: 30px;
  border-radius: 10px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  color: white;
  font-family: "Roboto", sans-serif;
  height: 50px;
  font-size: 24px;
  max-width: 350px;

  @media (min-width: 1080px){
    margin-left: 100px;
    margin-top: 100px;
  }
`;
const Task = () => {
  return (
    <>
      <Main>
        <SectionOne>
            <Img alt="Calendario" src={calendar} />
            <ButtonAdd>Agregar Tarea +</ButtonAdd>
        </SectionOne>

        <SectionTwo></SectionTwo>
      </Main>
    </>
  );
};

export default Task;
