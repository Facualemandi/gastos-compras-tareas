import React, { useState } from "react";
import styled from "styled-components";
import Commerce from "../../components/images/example-6.svg";
import { Form, Formik, Field, ErrorMessage } from "formik";

const Main = styled.main`
  background-color: #fbf3d8;
  height: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ImgCommerce = styled.img`
  width: 80vw;
  height: 300px;
  display: flex;
  margin: auto;
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

const ButtonAdd = styled.button`
  width: 60vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 10px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  color: white;
  font-family: "Roboto", sans-serif;
  height: 50px;
  font-size: 24px;
  max-width: 350px;
  margin: 0 auto;
  margin-top: 30px;

  @media (min-width: 1080px) {
    margin-top: 100px;
    cursor: pointer;
  }
`;

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
  padding: 15px;
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

const DivForm = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: auto;
  margin-top: 10px;
`;
const Labels = styled.label`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-top: 20px;
`;
const SectionBtns = styled.section`
  display: flex;
`;

const Bills = () => {
  const [modal, setModal] = useState(false);
  const theModal = () => (!modal ? setModal(true) : setModal(false));

  return (
    <>
      <Main>
        <section>
          <ImgCommerce alt="" src={Commerce} />
        </section>
        <ButtonAdd onClick={theModal}>Agregar gasto del día</ButtonAdd>

        <Modal value={modal}>
          <Formik initialValues={{ mes: "", dia: "", costo: "", gasto: "" }}>
            <TheForm>
              <DivForm>
                <Labels htmlFor="mes">Mes:</Labels>
                <Input name="mes" component="select">
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
                  <option value="Noviembre">Noviembre</option>
                  <option value="Diciembre">Diciembre</option>
                </Input>
              </DivForm>

              <DivForm>
                <Labels htmlFor="dia">Día:</Labels>
                <Input name="dia" component="select">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                </Input>
              </DivForm>

              <DivForm>
                <Labels htmlFor="producto">Producto:</Labels>
                <Input name="producto" id="producto" type="text" placeholder='ej: Celular...'/>
              </DivForm>

              <DivForm>
                <Labels htmlFor="costo">Costo:</Labels>
                <Input name="costo" id="costo" type="number"  placeholder='ej: 250'/>
              </DivForm>

              <SectionBtns>
                  <Button type="button" onClick={theModal}>
                    Cerrar
                  </Button>
                  <Button type="submit">Agregar</Button>
                </SectionBtns>
            </TheForm>
          </Formik>
        </Modal>
      </Main>
    </>
  );
};

export default Bills;
