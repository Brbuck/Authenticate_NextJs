import React, { useEffect } from "react";
import { useAuth } from "../Context/auth";
import { parseCookies } from "nookies";
function Dashboard() {
  const { user, logOut } = useAuth();

 /*  useEffect(() => {
    api.get(`/user/${user?.id}`);
  }, []); */
 
  return (
    <div>
      <span>DashBoard</span>
      <span>{user?.name}</span>
      <span>{user?.email}</span>
      <button onClick={logOut}>Sair</button>
    </div>
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
