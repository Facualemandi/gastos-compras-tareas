import React, { useState } from "react";
import styled from "styled-components";
import calendar from "../../components/images/calendar.svg";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { MdDeleteOutline } from "react-icons/md";
import { BiTaskX } from "react-icons/bi";

const Main = styled.main`
  width: 100vw;
  height: auto;
  min-height: 100vh;
  background-color: #fbf3d8;
  padding-bottom: 20px;
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
    cursor: pointer;
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
const TheForm = styled(Form)`
  width: 90vw;
  height: auto;
  margin: 100px auto;
  background-color: white;
  border-radius: 15px;
  box-shadow: 5px 5px 5px 5px rgba(0, 0, 0, 0.281);
  @media (min-width: 1080px) {
    width: 50vw;
  }
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

const Button = styled.button`
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  width: 40vw;
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
    cursor: pointer;
  }
`;

const SectionBtns = styled.section`
  display: flex;
`;
///////////////////////////////////////////

const SectionTwo = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: max-content;
  width: 90vw;
  height: auto;
  margin: 15px;

  @media (min-width: 1080px) {
    width: 690px;
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-auto-rows: minmax(min-content, max-content);
    grid-template-rows: max-content;
  }
`;
const ContainerTask = styled.section`
  padding: 10px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.147);
  margin-top: 10px;
  @media (min-width: 1080px) {
    width: 330px;
    margin: 5px;
    height: max-content;
    cursor: pointer;
  }
`;

const DivTasks = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Description = styled.p`
  width: 90vw;
  word-wrap: break-word;
  margin-top: 15px;
  @media (min-width: 1080px) {
    width: 300px;
  }
`;
const IconDelete = styled(MdDeleteOutline)`
  width: 35px;
  height: 35px;
  color: grey;
`;
const H3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 25px;
  width: 250px;
`;
const SectionNoTask = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const IconNoTask = styled(BiTaskX)`
  width: 100px;
  height: 100px;
  margin-top: 30px;

  @media (min-width: 1080px) {
    cursor: pointer;
  }
`;

const Task = () => {
  const [modal, setModal] = useState(false);
  const theModal = () => (!modal ? setModal(true) : setModal(false));

  const localTask = localStorage.getItem("tasks");

  let allTasks;

  if (!localTask) {
    localStorage.setItem("tasks", JSON.stringify([]));
    allTasks = [];
  } else {
    allTasks = JSON.parse(localTask);
  }

  const [tasks, setTasks] = useState(allTasks);

  const saveTasks = (newTasks) => {
    const stringTask = JSON.stringify(newTasks);
    localStorage.setItem("tasks", stringTask);
    setTasks(newTasks);
  };

  const deleteTask = (el) => {
    const indexTask = tasks.findIndex((task) => task.id === el.id);
    const newTasks = [...tasks];
    newTasks.splice(indexTask, 1);
    return saveTasks(newTasks);
  };

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
  return (
    <>
      <Main>
        <SectionOne>
          <Img alt="Calendario" src={calendar} />
          <ButtonAdd onClick={theModal}>Agregar Tarea +</ButtonAdd>
        </SectionOne>

        <Modal value={modal}>
          <Formik
            initialValues={{ name: "", description: "" }}
            onSubmit={(valores, { resetForm }) => {
              valores.id = generateUUID();
              console.log(valores);
              localStorage.setItem(
                "tasks",
                JSON.stringify([...tasks, valores])
              );
              setTasks([...tasks, valores]);
              resetForm();
              theModal();
            }}
            validate={(valores) => {
              let errors = {};

              if (!valores.name) {
                errors.name = "Por favor, ingresa el nombre de la tarea";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.name)) {
                errors.name = "El nombre no puede contener números";
              }

              if (!valores.description) {
                errors.description = "Por favor, ingresa una descripción";
              } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(errors.description)) {
                errors.description = "L";
              }

              return errors;
            }}
          >
            {({ errors }) => (
              <TheForm>
                <DivForm>
                  <Labels htmlFor="name">Tarea</Labels>
                  <Input name="name" placeholder="Nombre de la tarea" />
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
                    placeholder="Agregue una descripción de su tarea"
                  />
                  <ErrorMessage
                    name="description"
                    component={() => <Error>{errors.description}</Error>}
                  />
                </DivForm>

                <SectionBtns>
                  <Button type="button" onClick={theModal}>
                    Cerrar
                  </Button>
                  <Button type="submit">Agregar</Button>
                </SectionBtns>
              </TheForm>
            )}
          </Formik>
        </Modal>

        <SectionTwo>
          {tasks.length === 0 ? (
            <SectionNoTask>
              <IconNoTask />
            </SectionNoTask>
          ) : (
            tasks.map((el) => (
              <ContainerTask key={el.id}>
                <DivTasks>
                  <H3>{el.name}</H3>
                  <IconDelete onClick={() => deleteTask(el)} />
                </DivTasks>
                <Description>{el.description}</Description>
              </ContainerTask>
            ))
          )}
        </SectionTwo>
      </Main>
    </>
  );
};

export default Task;
