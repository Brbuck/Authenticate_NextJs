import React from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../Context/auth"

import { Container, Form, EditInput, EditButton } from "./styles";

function LogIn() {
  const { register, handleSubmit } = useForm({});

  const onSubmit = data => console.log(data);
  const { authenticat } = useAuth();
  async function SignIn({ email, password }) {
    try {
      await authenticat({email, password});
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(SignIn)}>
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
        <EditButton type="submit">Login</EditButton>
      </Form>
    </Container>
  );
}

export default LogIn;
