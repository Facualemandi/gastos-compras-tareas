import React, { useState } from "react";
import styled from "styled-components";
import TaskImg from "../../components/images/example-8.svg";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Swal from "sweetalert2";

const Main = styled.main`
  background-color: #fbf3d8;
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100vh;
`;
const Img = styled.img`
  height: 310px;
  height: 240px;
`;

const Button = styled.button`
  padding: 10px;
  width: 50vw;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  margin-top: 30px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  height: max-content;
`;

const ModalTask = styled.section`
  display: ${({ value }) => (!value ? "none" : "true")};
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.699);
`;

const DivModal = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 80vw;
  margin-top: 70%;
  background-color: white;
  border-radius: 10px;
`;

const Input = styled(Field)`
  width: 100%;
  border: none;
  outline: none;
  padding: 15px;
  border: 1px solid grey;
  margin-top: 5px;
  border-radius: 5px;
  ::placeholder {
    color: grey;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
  }
`;

const IsForm = styled(Form)`
  font-size: 25px;
  font-family: "Roboto", sans-serif;
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 15px auto;
  border-radius: 5px;
`;

const DivButtons = styled.div`
  display: flex;
`;

const ButtonsForm = styled.button`
  padding: 10px;
  width: 50vw;
  display: flex;
  justify-content: center;
  margin: 5px;
  margin-top: 30px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
  height: max-content;

  @media (min-width: 780px) {
    cursor: pointer;
  }
`;

const Textarea = styled(Field)`
  resize: none;
  border-radius: 5px;
  font-family: "Montserrat", sans-serif;
  color: grey;
  height: auto;
  border: none;
  border: 1px solid grey;
  padding: 5px;
`;

const DivInputs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const ErrorSpan = styled.span`
  font-size: 16px;
  color: red;
  margin-top: 5px;
  font-family: "Roboto", sans-serif;
`;

const Label = styled.label`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin-bottom: 5px;
  margin-top: 10px;
`;

const SectionTask = styled.section`
  border: 1px solid red;
  width: 90vw;
  height: 150px;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 15px;
`;

const Task = () => {
  const [task, setTask] = useState(false);
  const [todoList, setTodoList] = useState([]);
  const getTask = () => (!task ? setTask(true) : setTask(false));
  const getTodoList = localStorage.getItem("list-task");
  const parseTodoList = JSON.parse(getTodoList);
  return (
    <>
      <Main value={parseTodoList}>
        <Img alt="" src={TaskImg} />
        <Button onClick={getTask}>Agregar tarea +</Button>

        <ModalTask value={task}>
          <DivModal>
            <Formik
              validate={(valores) => {
                let errores = {};
                if (!valores.nombre) {
                  errores.nombre = "Por favor, ingresa el nombre de la tarea";
                } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)) {
                  errores.nombre = "Solo puede contener letras";
                }
                if (!valores.description) {
                  errores.description = "Por favor, ingresa una descripción";
                } else if (
                  !/^[a-zA-Z0-9\\-]{4,16}$/.test(valores.description)
                ) {
                }
                return errores;
              }}
              initialValues={{ nombre: "", description: "" }}
              onSubmit={(valores, { resetForm }) => {
                resetForm();
                if (valores.nombre && valores.description) {
                  getTask();
                  const Toast = Swal.mixin({
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener("mouseenter", Swal.stopTimer);
                      toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                  });

                  Toast.fire({
                    icon: "success",
                    title: "Has agregado una tarea nueva.",
                  });

                  if (!localStorage.getItem("list-task")) {
                    localStorage.setItem(
                      "list-task",
                      JSON.stringify([...todoList, valores])
                    );
                  } else {
                    const getLocalTask = localStorage.getItem("list-task");
                    const parseLocalTask = JSON.parse(getLocalTask);
                    localStorage.setItem(
                      "list-task",
                      JSON.stringify([...parseLocalTask, valores])
                    );
                  }
                }
              }}
            >
              {({ errors }) => (
                <IsForm>
                  <DivInputs>
                    <Label htmlFor="nombre">Nombre</Label>
                    <Input
                      type={"text"}
                      id="name"
                      name="nombre"
                      placeholder="Ingresa el nombre de tu tarea"
                    />
                    <ErrorMessage
                      name="nombre"
                      component={() => <ErrorSpan>{errors.nombre}</ErrorSpan>}
                    />
                  </DivInputs>

                  <DivInputs>
                    <Label htmlFor="description">Descripción:</Label>
                    <Textarea
                      component={"textarea"}
                      id="description"
                      name="description"
                      placeholder="Por favor, ingresa una descripción de tu tarea"
                      rows={5}
                    />

                    <ErrorMessage
                      name="description"
                      component={() => (
                        <ErrorSpan>{errors.description}</ErrorSpan>
                      )}
                    />
                  </DivInputs>

                  <DivButtons>
                    <ButtonsForm type="button" onClick={getTask}>
                      Cerrar
                    </ButtonsForm>
                    <ButtonsForm type="submit">Agregar</ButtonsForm>
                  </DivButtons>
                </IsForm>
              )}
            </Formik>
          </DivModal>
        </ModalTask>

        {!localStorage.getItem("list-task") && <p>No Existe</p>}

        {localStorage.getItem("list-task") &&
        
          parseTodoList.map((list) => (
            <SectionTask key={list.nombre} id="lista">
              <p>{list.nombre}</p>
              <p>{list.description}</p>
            </SectionTask>
          ))}
      </Main>
    </>
  );
};

export default Task;
