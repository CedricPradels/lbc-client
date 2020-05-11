import React, { useCallback, useState } from "react";

import { useHistory } from "react-router-dom";

import InputBlock from "../../molecules/InputBlock";
import Form from "../../molecules/Form";

import Cookies from "js-cookie";

import { gql } from "apollo-boost";
import { useLazyQuery } from "@apollo/react-hooks";

const LOGIN = gql`
  query Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

interface Props {}

const LoginForm: React.FC<Props> = () => {
  const history = useHistory();

  const [login, { data, loading }] = useLazyQuery(LOGIN, {
    onCompleted: (data) => {
      if (data.login === null) {
        resetFiedls();
      } else {
        Cookies.set("token", data.login.token);
        history.push("/");
      }
    },
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const resetFiedls = useCallback(() => {
    setEmail("");
    setPassword("");
  }, []);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        login({
          variables: {
            email,
            password,
          },
        });
      }}
      button="Se connecter"
      title="Connexion"
      loading={loading}
    >
      <InputBlock
        title="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputBlock
        title="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </Form>
  );
};

export default LoginForm;
