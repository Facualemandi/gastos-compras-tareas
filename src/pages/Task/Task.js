import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TaskImg from "../../components/images/example-8.svg";
import dateDesktop from "../../components/images/Date.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MdOutlineDelete } from "react-icons/md";

const Main = styled.main`
  background-color: #fbf3d8;
  height: auto;
  min-height: 100vh;
  @media (min-width: 1080px) {
    display: flex;
  }
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
  }
`;

const SectionOne = styled.section`
  @media (min-width: 1080px) {
    display: flex;
    width: 1080px;
    margin: auto;
  }
  @media (min-width: 1380px) {
    width: 1380px;
  }
`;

const Modal = styled.section`
  position: absolute;
  top: 0px;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.671);
  display: ${({ value }) => (!value ? "none" : "block")};
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

const SectionBtns = styled.section`
  display: flex;
`;

const ContainerTask = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 90vw;
  max-width: 900px;
  margin: auto;
  @media (min-width: 1080px) {
    margin: 0;
  }
`;

const SectionTask = styled.section`
  list-style: none;
  padding: 5px;
  margin: 5px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.199);

  @media (min-width: 1080px) {
    height: max-content;
  }
`;

const Task = () => {
  const [modal, setModal] = useState(false);
  const openModal = () => (!modal ? setModal(true) : setModal(false));

  function generateUUID() {
    var d = new Date().getTime();
    var uuid = "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : r && 0x3 | 0x8).toString(16);
      }
    );
    return uuid;
  }

  const localTask = localStorage.getItem("task");

  let parseTask;

  if (!localTask) {
    localStorage.setItem("task", JSON.stringify([]));
    parseTask = [];
  } else {
    parseTask = JSON.parse(localTask);
  }
  const [tasks, setTasks] = useState(parseTask);

  const saveTasks = (newTasks) => {
      const taskString = JSON.stringify(newTasks);
      localStorage.setItem('task', taskString);
      setTasks(newTasks)
  }

  const deleteTask = (task) => {
     const taskIndex = tasks.findIndex(el => el.id === task.id);
     console.log(taskIndex);
     const newTasks = [...tasks];
     newTasks.splice(taskIndex, 1);
     saveTasks(newTasks)
  };

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
            <Formik
              initialValues={{ name: "", description: "" }}
              onSubmit={(valores, { resetForm }) => {
                if (valores.name && valores.description) {
                  setTasks([...tasks, valores]);
                  valores.id = generateUUID();
                  localStorage.setItem(
                    "task",
                    JSON.stringify([...tasks, valores])
                  );
                  resetForm();
                  return openModal();
                }
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

                  <DivForm>
                    <Labels htmlFor="dia">Més</Labels>

                    <Input name="month" component="select">
                      <option value="Enero">Enero</option>
                      <option value="Febrero">Febrero</option>
                      <option value="Marzo">Marzo</option>
                      <option value="Abril">Abril</option>
                      <option value="Mayo">Mayo</option>
                      <option value="Junio">Junio</option>
                      <option value="Julio">Julio</option>
                      <option value="Agosto">Agosto</option>
                      <option value="Septiembre">Septiembre</option>
                      <option value="Octubre">Octubre</option>
                      <option value="Noviembre">Noviembre </option>
                      <option value="Diciembre">Diciembre</option>
                    </Input>

                    <ErrorMessage
                      name="dia"
                      component={() => <Error>{errors.name}</Error>}
                    />
                  </DivForm>

                  <SectionBtns>
                    <Button type="button" onClick={openModal}>
                      Cerrar
                    </Button>
                    <Button type="submit">Agregar</Button>
                  </SectionBtns>
                </TheForm>
              )}
            </Formik>
          </Modal>

          {tasks.length === 0 ? (
            <p>Facu</p>
          ) : (
            <ContainerTask>
              {tasks.length >= 1 &&
                tasks.map((el) => (
                  <SectionTask key={el.id}>
                    <div>
                      <h2>{el.name}</h2>
                      <MdOutlineDelete onClick={() => deleteTask(el)} />
                    </div>
                    <p>{el.description}</p>
                    <span>{el.month}</span>
                  </SectionTask>
                ))}
            </ContainerTask>
          )}
        </SectionOne>
      </Main>
    </>
  );
};

export default Task;
