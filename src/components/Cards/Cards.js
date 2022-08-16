import React from "react";
import styled from "styled-components";
import IlustrationOne from "../images/calendar.svg";
import Card from "../images/card.svg";
import Pig from "../images/Pig.svg";
import { NavLink } from "react-router-dom";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  background-color: #fbf3d8;
  padding-top: 25px;
  padding-bottom: 25px;
  height: auto;
  min-height: 100vh;
`;
const SectionDesktop = styled.section`
  @media (min-width: 780px) {
    display: flex;
  }
`;

const Button = styled.button`
  padding: 10px;
  width: 50vw;
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 15px;
  background: linear-gradient(to bottom, #7a5bf5, #b56bff);
  border: none;
  border-radius: 5px;
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;

  @media (min-width: 780px) {
    width: 300px;
    cursor: pointer;
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  margin: 15px;
  border-radius: 30px;
  background-color: #ffdddd;
  box-shadow: 5px 5px 5px 5px rgba(161, 161, 161, 0.342);
  width: 90vw;
  height: 350px;
  margin: auto;
  margin-top: 15px;

  @media (min-width: 780px) {
    width: 350px;
  }
`;

const Img = styled.img`
  height: 240px;
  background-color: #ffdddd;
`;

const NavL = styled(NavLink)`
  text-decoration: none;
`;

const SectionOne = styled.section`
  @media (min-width: 780px) {
    width: 780px;
    display: flex;
    flex-direction: column;
    margin: auto;
  }
`;

const Cards = () => {
  return (
    <>
      <Main>
        <SectionOne>
          <SectionDesktop>
            <Div>
              <Img alt="" src={IlustrationOne} />
              <NavL to={"/task"}>
                <Button>Lista de tareas</Button>
              </NavL>
            </Div>
            <Div>
              <Img alt="" src={Pig} />
              <NavL to={'/bills'}>
                <Button>Control de gastos</Button>
              </NavL>
            </Div>
          </SectionDesktop>
          <Div>
            <Img alt="" src={Card} />
            <Button>Lista de compras</Button>
          </Div>
        </SectionOne>
      </Main>
    </>
  );
};

export default Cards;
