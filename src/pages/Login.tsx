import React from "react";

import { useHistory } from "react-router-dom";

import Small from "../components/templates/Small";
import LoginForm from "../components/organisms/LoginForm";
import Button from "../components/atoms/Button";

interface Props {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Login: React.FC<Props> = (props) => {
  const history = useHistory();

  return (
    <Small>
      <LoginForm {...props} />
      <Button onClick={() => history.push("/register")}>Créer un compte</Button>
    </Small>
  );
};

export default Login;
