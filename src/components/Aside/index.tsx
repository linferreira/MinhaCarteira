import React from "react";

import logo from "../../assets/logo.svg";

import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdKeyboardTab,
} from "react-icons/md";

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  Title,
} from "./styles";

const Aside: React.FC = () => (
  <Container>
    <Header>
      <LogoImg src={logo} alt="Logo Minha Carteira" />
      <Title>Minha Carteira</Title>
    </Header>

    <MenuContainer>
      <MenuItemLink href="/">
        <MdDashboard />
        Dashboard
      </MenuItemLink>

      <MenuItemLink href="/list/entry-balance">
        <MdArrowUpward />
        Entradas
      </MenuItemLink>

      <MenuItemLink href="/list/exit-balance">
        <MdArrowDownward />
        Saídas
      </MenuItemLink>

      <MenuItemLink href="#">
        <MdKeyboardTab /> Sair
      </MenuItemLink>
    </MenuContainer>
  </Container>
);

export default Aside;
