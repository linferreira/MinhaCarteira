import React, { useMemo } from "react";

import Emojis from "../../utils/emojis";

import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * Emojis.length);
    return Emojis[indice];
  }, []);

  return (
    <Container>
      <h2>Toogle</h2>

      <Profile>
        <Welcome>Olá, {emoji}</Welcome>

        <UserName>Lindsay</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
