import React, { useState } from "react";
import styled from "styled-components";
import calendar from "../../components/images/calendar.svg";
import { Form, Field, ErrorMessage } from "formik";

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
const TheForm = styled(Form)`
  width: 90vw;
  height: auto;
  margin: 100px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.281);
`;

const Input = styled(Field)`
  display: flex;
  margin-top: 5px;
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  border: 1px solid rgba(175, 175, 175, 0.473);
`;

const Textarea = styled(Field)`
  display: flex;
  margin-top: 5px;
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  border: 1px solid grey;
  resize: none;
  border-radius: 10px;
  border: 1px solid rgba(175, 175, 175, 0.473);
`;

const DivForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
`;

const Error = styled.p`
  font-size: 14px;
  font-family: "Roboto", sans-serif;
  color: red;
  margin-top: 5px;
`;

const Labels = styled.label`
  margin-top: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
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
            <TheForm >
              <DivForm>
                <Labels htmlFor="name">Tarea</Labels>
                <Input name="name" />
                <ErrorMessage
                  name="name"
                  component={() => <Error>{errors.name}</Error>}
                />
              </DivForm>

              <DivForm>
                <Labels htmlFor="description">Descripción</Labels>
                <Textarea
                  name="description"
                  type="textarea"
                  component={"textarea"}
                />
                <ErrorMessage
                  name="description"
                  component={() => <Error>{errors.description}</Error>}
                />
              </DivForm>
            </TheForm>
            <ButtonAdd onClick={theModal}>Cerrar</ButtonAdd>
          </SectionModal>
        </Modal>

        <SectionTwo></SectionTwo>
      </Main>
    </>
  );
};

export default Task;
