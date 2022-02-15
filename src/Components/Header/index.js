import React, { useState } from "react";
import { Container, Navigation } from "./styles";

import Link from "next/link";
import { BsPerson } from "react-icons/bs";

import { useAuth } from "../../Context/auth";
import ModalMenu from "../ModalMenu";
import Login from "../Loading";

function Header() {
  const { user } = useAuth();

  const [modal, setModal] = useState(false);
  const togleModal = () => {
    setModal(!modal);
  };

  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      {user ? (
        <Navigation onClick={togleModal}>
          <span className="user" onClick={togleModal}>
            <BsPerson />
          </span>
          {modal && <ModalMenu />}
        </Navigation>
      ) : (
        <Navigation>
          <Link href="/login">
            <a>Sign In</a>
          </Link>
          <Link href="/register">
            <a>Sign Up</a>
          </Link>
        </Navigation>
      )}
    </Container>
  );
}

export default Header;
