import React from "react";

import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

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
  MenuItemButton,
  Title,
} from "./styles";

const Aside: React.FC = () => {
  const { signOut } = useAuth();

  return (
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

        <MenuItemButton onClick={signOut}>
          <MdKeyboardTab /> Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
