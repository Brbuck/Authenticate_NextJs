import React from "react";
import Link from "next/link";

import { Container } from "./styles";

function Header() {
  return (
    <Container>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/login">
        <a>LogIn</a>
      </Link>
      <Link href="/register">
        <a>LogOut</a>
      </Link>
    </Container>
  );
}

export default Header;
