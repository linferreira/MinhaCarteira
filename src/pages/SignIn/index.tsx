import React, { useState } from "react";

import { Container, Logo, Form, FormTitle } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import logoImg from "../../assets/logo.svg";

import { useAuth } from "../../hooks/auth";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const { signIn } = useAuth();

  function trySignIn(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn(email, password);
  }

  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Minha Carteira" />
        <h2>Minha Carteira</h2>
      </Logo>

      <Form onSubmit={(e) => trySignIn(e)}>
        <FormTitle>Entrar</FormTitle>

        <Input
          type="email"
          placeholder="email"
          onChange={({ target }) => setEmail(target.value)}
          required
        />
        <Input
          type="password"
          placeholder="senha"
          onChange={({ target }) => setPassword(target.value)}
          required
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default SignIn;
