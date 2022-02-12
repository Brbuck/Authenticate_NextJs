import React from "react";

import { api } from "../../pages/api/api";
import Router from "next/router";
import { useForm } from "react-hook-form";

import { Container, Form, EditInput, EditButton } from "./styles";

function LogOut() {
  const { register, handleSubmit } = useForm({});

  async function createUser({ name, email, password }) {
    try {
      await api.post("/signup", { name, email, password });
      Router.push("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(createUser)}>
        <h1>Log Out</h1>
        <EditInput type="text" {...register("name")} placeholder="Nome" />
        <EditInput type="email" {...register("email")} placeholder="e-mail" />
        <EditInput
          type="password"
          {...register("password")}
          placeholder="Senha"
        />
        <EditButton type="submit">Enviar</EditButton>
      </Form>
    </Container>
  );
}

export default LogOut;
