import React from "react";

import { Container, ToogleLabel, ToogleSelector } from "./styles";

interface IToogleProps {
  labelLeft: string;
  labelRight: string;
  checked: boolean;
  onChange(): void;
}

const Toogle: React.FC<IToogleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  <Container>
    <ToogleLabel>{labelLeft}</ToogleLabel>
    <ToogleSelector
      uncheckedIcon={false}
      checkedIcon={false}
      checked={checked}
      onChange={onChange}
    />
    <ToogleLabel>{labelRight}</ToogleLabel>
  </Container>
);

export default Toogle;
