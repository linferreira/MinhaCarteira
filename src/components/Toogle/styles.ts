import styled from "styled-components";

import Toogle, { ReactSwitchProps } from "react-switch";

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToogleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`;

export const ToogleSelector = styled(Toogle).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
  })
)<ReactSwitchProps>`
  margin: 0 7px;
`;
