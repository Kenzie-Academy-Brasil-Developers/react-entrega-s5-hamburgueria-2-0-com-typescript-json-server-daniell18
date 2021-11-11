import {
  FormControl,
  FormHelperText,
  FormLabel,
} from "@chakra-ui/form-control";
import { Inputform } from "../Input";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
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
}

export const Forms = ({ name }: Formprops) => {
  const history = useHistory();
  const schema = yup.object({
    email: yup.string().required().email(),
    password: yup.string().required(),
  });
  const { singin } = useLogin();
  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });
  const teste = (e: User) => {
    singin(e);
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
                placeholder="Senha"
                type="password"
                icon={BsFillLockFill}
                register={register}
                reg="password"
              />
              <ButtonForm margin="20px" name="Login" />
              <FormHelperText
                onClick={() => history.push("/register")}
                fontFamily="inter"
                color="#999999"
                margin="10px"
                maxW="300px"
                _hover={{
                  cursor: "pointer",
                  color: "black",
                }}
              >
                Crie sua conta para saborear muitas delícias e matar sua fome!
              </FormHelperText>
            </div>
          </FormControl>
        </form>
      </Flex>
    </>
  );
};
