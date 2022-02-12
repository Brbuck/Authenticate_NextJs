import React from "react";
import {
  Container,
  Form,
  EditInput,
  EditButton,
  Illustration,
  Sign,
} from "./styles";

import { useAuth } from "../../Context/auth";
import { useForm } from "react-hook-form";

function LogIn() {
  const { register, handleSubmit } = useForm({});

  const { authenticat } = useAuth();
  async function SignIn({ email, password }) {
    try {
      await authenticat({ email, password });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(SignIn)}>
        <Illustration>
          <h2>Welcome to user area</h2>
        </Illustration>
        <Sign className="form">
          <h2>Welcome to Login</h2>
          <EditInput type="email" {...register("email")} placeholder="e-mail" />
          <EditInput
            type="password"
            {...register("password")}
            placeholder="Senha"
          />
          <EditButton type="submit">Login</EditButton>
        </Sign>
      </Form>
    </Container>
  );
}

export default LogIn;
