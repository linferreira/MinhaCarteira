import React, { useState, useMemo } from "react";

import Emojis from "../../utils/emojis";
import Toogle from "../Toogle";

import { useTheme } from "../../hooks/themes";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const { toogleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  function handleChangeTheme() {
    setDarkTheme(!darkTheme);
    toogleTheme();
  }

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * Emojis.length);
    return Emojis[indice];
  }, []);

  return (
    <Container>
      <Toogle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>

        <UserName>Lindsay</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
