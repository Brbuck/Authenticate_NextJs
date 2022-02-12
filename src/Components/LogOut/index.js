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
      console.log(error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(createUser)}>
        <div>
          <EditInput type="text" {...register("name")} placeholder="Nome" />
        </div>
        <div>
          <EditInput type="email" {...register("email")} placeholder="e-mail" />
        </div>
        <div>
          <EditInput
            type="password"
            {...register("password")}
            placeholder="Senha"
          />
        </div>
        <EditButton type="submit">Enviar</EditButton>
      </Form>
    </Container>
  );
}

export default LogOut;
