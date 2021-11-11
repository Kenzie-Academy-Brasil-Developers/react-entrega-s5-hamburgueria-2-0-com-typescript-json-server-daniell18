import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Inputform } from "../Input";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill, BsPersonFill, BsLock } from "react-icons/bs";
import { AiTwotoneCalendar } from "react-icons/ai";
import { ButtonForm } from "../Button";
import { Flex } from "@chakra-ui/layout";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useLogin } from "../../Provider/LoginProvider";
interface Formprops {
  name: string;
}
interface User {
  email: string;
  password: string;
  age: number;
  name: string;
}

export const FormRegister = ({ name }: Formprops) => {
  const history = useHistory();
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
    confirmed_Password: yup
      .string()
      .required()
      .oneOf([yup.ref("password"), null], "Senhas diferentes"),
    name: yup.string().required(),
    age: yup.number().required(),
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const { singup } = useLogin();
  const teste = (e: User) => {
    const { email, password, age, name } = e;
    const UserData = {
      email: email,
      password: password,
      age: age,
      name: name,
    };
    singup(UserData);
  };
  return (
    <>
      <Flex justify="center" align="center">
        <form autoComplete="off" onSubmit={handleSubmit(teste)}>
          <FormControl
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Flex
              justifyContent="flex-start"
              w="72%"
              fontFamily="inter"
              fontWeight="medium"
            >
              <FormLabel fontSize="18px" fontWeight="bold" margin="10px">
                {name}
              </FormLabel>
            </Flex>

            <div>
              <Inputform
                placeholder="Email"
                type="email"
                icon={MdEmail}
                register={register}
                reg="email"
              />
              <Inputform
                placeholder="Nome"
                type="text"
                icon={BsPersonFill}
                register={register}
                reg="name"
              />
              <Inputform
                placeholder="Senha"
                type="password"
                icon={BsFillLockFill}
                register={register}
                reg="password"
              />
              <Inputform
                placeholder="Confirmar Senha"
                type="password"
                icon={BsLock}
                register={register}
                reg="confirmed_Password"
              />
              <Inputform
                placeholder="Idade"
                type="number"
                icon={AiTwotoneCalendar}
                register={register}
                reg="age"
              />
              <ButtonForm margin="20px" name="Cadastrar" />
              <FormHelperText
                _hover={{
                  cursor: "pointer",
                  color: "black",
                }}
                onClick={() => history.push("/")}
                fontFamily="inter"
                color="#999999"
                margin="10px"
                maxW="300px"
              >
                Ja tem uma conta venha saborear nossas delicias
              </FormHelperText>
            </div>
          </FormControl>
        </form>
      </Flex>
    </>
  );
};
