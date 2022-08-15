import React, { useState } from "react";
import styled from "styled-components";
import calendar from "../../components/images/calendar.svg";

const Main = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #fbf3d8;
  @media (min-width: 1080px) {
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1380px) {
    display: flex;
    justify-content: center;
  }
`;

//////////// Style Primera Sección ///////////////
const SectionOne = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1080px) {
    width: 540px;
  }
  @media (min-width: 1080px) {
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

  @media (min-width: 1080px) {
    margin-top: 100px;
  }
`;
//////////////////////////////////////////////////

///////////// Syle Modal //////////////////
const Modal = styled.section`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.349);
  display: ${({ value }) => (!value ? "none" : "true")};
  position: absolute;
  top: 0px;
`;
const SectionModal = styled.section`
  width: 90vw;
  height: 500px;
  border: 1px solid red;
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
`;
///////////////////////////////////////////


const SectionTwo = styled.section`
  @media (min-width: 1080px) {
    width: 540px;
    border: 1px solid red;
  }
  @media (min-width: 1080px) {
    width: 690px;
  }
`;
const Task = () => {
  const [modal, setModal] = useState(false);
  const theModal = () => (!modal ? setModal(true) : setModal(false));

  return (
    <>
      <Main>
        <SectionOne>
          <Img alt="Calendario" src={calendar} />
          <ButtonAdd onClick={theModal}>Agregar Tarea +</ButtonAdd>
        </SectionOne>

        <Modal value={modal}>
          <SectionModal>

             <input/>
             <input/>
            <ButtonAdd onClick={theModal}>Cerrar</ButtonAdd>
          </SectionModal>
        </Modal>

        <SectionTwo></SectionTwo>
      </Main>
    </>
  );
};

export default Task;
