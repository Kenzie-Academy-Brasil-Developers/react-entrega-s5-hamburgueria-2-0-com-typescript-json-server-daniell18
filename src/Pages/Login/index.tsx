import { useHistory } from "react-router";
import { Forms } from "../../Components/FormLogin";
import { Header } from "../../Components/Header";

import { Container } from "./style";

export const Login = () => {
  const history = useHistory();
  const localAuth =
    JSON.parse(localStorage.getItem("@BurguerKenzie:Auth") || "false") || false;
  console.log(localAuth);
  if (localAuth) {
    history.push("/Home");
  }
  return (
    <>
      <Container>
        <Header />
        <Forms name="Login" />
      </Container>
    </>
  );
};
