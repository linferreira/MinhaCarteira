import React from "react";

import { Container, Controllers, TitleContainer } from "./styles";

const ContentHeader: React.FC = () => {
  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>

      <Controllers>
        <button>botao A</button>
        <button>botao B</button>
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
