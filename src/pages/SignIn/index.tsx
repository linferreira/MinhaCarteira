import React from "react";

import { Container, Logo, Form, FormTitle } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.svg";

const SignIn: React.FC = () => {
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>

        <Input type="email" placeholder="email" required />
        <Input type="password" placeholder="senha" required />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
