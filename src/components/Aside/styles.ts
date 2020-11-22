import styled, { css } from "styled-components";

interface IContainerProps {
  menuIsOpen: boolean;
}

interface IThemeFooterProps {
  menuIsOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
  grid-area: AS;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.secondary};

  padding-left: 20px;

  border-right: 1px solid ${(props) => props.theme.colors.gray};

  position: relative;

  @media (max-width: 600px) {
    padding-left: 16px;
    position: fixed;
    z-index: 2;

    width: 170px;

    height: ${(props) => (props.menuIsOpen ? "100vh" : "70px")};

    overflow: hidden;

    ${(props) =>
      !props.menuIsOpen &&
      css`
        border: none;
        border-bottom: 1px solid ${(props) => props.theme.colors.gray};
      `};
  }
`;

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 10px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const Header = styled.header`
  height: 70px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: 40px;

  @media (max-width: 600px) {
    display: none;
  }
`;

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`;

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme.colors.info};
  text-decoration: none;

  margin: 7px 0;

  transition: opacity 0.3;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const MenuItemButton = styled.button`
  font-size: 16px;
  color: ${(props) => props.theme.colors.info};

  display: flex;
  align-items: center;

  border: none;
  background: none;

  margin: 7px 0;

  transition: opacity 0.3;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 20px;
    margin-right: 7px;
  }
`;

export const ToogleMenu = styled.button`
  height: 40px;
  width: 40px;

  display: none;

  color: ${(props) => props.theme.colors.white};

  border-radius: 5px;

  font-size: 22px;

  background-color: ${(props) => props.theme.colors.warning};

  transition: opacity 0.3s;

  &hover {
    opacity: 0.7;
  }

  @media (max-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ThemeToogleFooter = styled.footer<IThemeFooterProps>`
  display: none;
  position: absolute;
  bottom: 30px;

  @media (max-width: 470px) {
    display: ${(props) => (props.menuIsOpen ? "flex" : "none")};
  }
`;
