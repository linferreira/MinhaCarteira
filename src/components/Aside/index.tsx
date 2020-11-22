import React, { useState } from "react";

import logo from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";
import { useTheme } from "../../hooks/themes";

import {
  MdDashboard,
  MdArrowUpward,
  MdArrowDownward,
  MdKeyboardTab,
  MdClose,
  MdMenu,
} from "react-icons/md";

import {
  Container,
  Header,
  LogoImg,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  Title,
  ToogleMenu,
  ThemeToogleFooter,
} from "./styles";
import Toogle from "../Toogle";

const Aside: React.FC = () => {
  const { signOut } = useAuth();
  const { toogleTheme, theme } = useTheme();

  const [toogleMenuIsOpened, setToogleMenuIsOpened] = useState(false);
  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  function handleToogleMenu() {
    setToogleMenuIsOpened(!toogleMenuIsOpened);
  }

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
    toogleTheme();
  }

  return (
    <Container menuIsOpen={toogleMenuIsOpened}>
      <Header>
        <ToogleMenu onClick={handleToogleMenu}>
          {toogleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToogleMenu>

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

      <ThemeToogleFooter menuIsOpen={toogleMenuIsOpened}>
        <Toogle
          labelLeft="Light"
          labelRight="Dark"
          checked={darkTheme}
          onChange={handleChangeTheme}
        />
      </ThemeToogleFooter>
    </Container>
  );
};

export default Aside;
