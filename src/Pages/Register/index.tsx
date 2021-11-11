import { useHistory } from "react-router";
import { FormRegister } from "../../Components/FormRegister";
import { Header } from "../../Components/Header";
import { Container } from "./style";

export const Register = () => {
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
        <FormRegister name="Cadastro" />
      </Container>
    </>
  );
};
