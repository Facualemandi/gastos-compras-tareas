import React, { useState } from "react";
import styled from "styled-components";
import TaskImg from "../../components/images/example-8.svg";
import dateDesktop from "../../components/images/Date.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Main = styled.main`
  background-color: #fbf3d8;
  height: auto;
  min-height: 100vh;
`;
const Img = styled.img`
  width: 70vw;
  height: 300px;
  display: flex;
  margin: auto;

  @media (min-width: 1080px) {
    margin: 15px;
    width: max-content;
  }
`;
const ImgDesktop = styled.img`
  display: none;

  @media (min-width: 1080px) {
    display: block;
    width: 400px;
    height: 400px;
  }
`;

const DivOne = styled.div`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
  @media (min-width: 1080px) {
    width: 1080px;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Button = styled.button`
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  width: 50vw;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  height: 50px;
  border: none;
  border-radius: 10px;
  color: white;
  font-family: "Roboto", sans-serif;
  font-size: 25px;

  @media (min-width: 1080px) {
    margin: 50px;
    margin-left: 70px;
    width: max-content;
    width: 300px;
  }
`;

const SectionOne = styled.section``;

const Modal = styled.section`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.671);
  display: ${({value}) => !value ? 'none' : 'block'};
`;


const Task = () => {

  const [modal, setModal] = useState(false);
  
   const openModal = () =>  !modal ? setModal(true) : setModal(false);

  return (
    <>
      <Main>
        <SectionOne>
          <DivOne>
            <Img alt="" src={TaskImg} />
            <Button onClick={openModal}>Agregar tarea +</Button>
            <ImgDesktop alt="" src={dateDesktop} />
          </DivOne>

          <Modal value={modal}>
             <Button onClick={openModal}>Cerrar</Button>
          </Modal>

        </SectionOne>
      </Main>
    </>
  );
};

export default Task;
