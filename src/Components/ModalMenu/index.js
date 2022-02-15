import React from "react";
import Link from "next/link";

import { Container } from "./styles";
import { useAuth } from "../../Context/auth";

function ModalMenu() {
  const { user, logOut } = useAuth();
  return (
    <Container>
      <span>Signed is as {user?.name}</span>
      <Link href="#">
        <a>Your Projects</a>
      </Link>
      <Link href="#">
        <a>Settings</a>
      </Link>
      <button onClick={logOut}>Sair</button>
    </Container>
  );
}

export default ModalMenu;
