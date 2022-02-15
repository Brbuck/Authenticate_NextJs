import React from "react";
import { Container } from "./styles";

import { useAuth } from "../../Context/auth";
import Loading from "../../Components/Loading"
import { parseCookies } from "nookies";


function Dashboard() {
  const { user } = useAuth();

  if(!user) return <Loading />;
  return (
    <Container>
      <span>Welcome back {user?.name}</span>
    </Container>
  );
}

export default Dashboard;

export const getServerSideProps = async (ctx) => {
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
