import React, { useState, useCallback } from "react";
import styled from "styled-components";

import { Clock, Eye, Bell } from "react-feather";

import { useHistory } from "react-router-dom";

import { gql } from "apollo-boost";
import { useMutation } from "@apollo/react-hooks";

import Form from "../../molecules/Form";
import IconList from "../../molecules/IconList";
import InputBlock from "../../molecules/InputBlock";

const StyledRegisterBox = styled.div`
  padding: 30px;
  border-radius: 5px;
  background-color: white;
  display: grid;
  grid-gap: 125px;
  grid-template-columns: repeat(2, 1fr);
`;

const PasswordWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
`;

const CheckBox = styled.input.attrs(({ type }) => ({ type: "checkbox" }))`
  border: 1px solid black;
  margin-right: 10px;
`;

const CdgCdu = styled.span`
  font-family: "Roboto", sans-serif;
`;

const CdgCduWrapper = styled.div`
  display: flex;
`;

const CREATE_USER = gql`
  mutation Register($email: String!, $alias: String, $password: String!) {
    register(email: $email, password: $password, alias: $alias) {
      email
    }
  }
`;

interface Props {}

const benefits = [
  {
    icon: <Clock size={"100%"} strokeWidth={"3.5px"} />,
    title: "Gagner du temps",
    details:
      "Publiez vos annonces rapidement, avec vos informations pré-remplies chaque fois que vous souhaitez déposer une nouvelle annonce.",
  },
  {
    icon: <Bell size={"100%"} strokeWidth={"3.5px"} />,
    title: "Soyez les premiers informés",
    details:
      "Créez des alertes Immo ou Emploi et ne manquez jamais l'annonce qui vous intéresse.",
  },
  {
    icon: <Eye size={"100%"} strokeWidth={"3.5px"} />,
    title: "Visibilité",
    details:
      "Suivez les statistiques de vos annonces (nombre de fois où votre annonce a été vue, nombre de contact reçus).",
  },
];

const RegisterForm: React.FC<Props> = ({}) => {
  const history = useHistory();
  const [register, { loading }] = useMutation(CREATE_USER, {
    onCompleted: (data) => {
      if (data.register === null) {
        resetFields();
      } else {
        history.push("/login");
      }
    },
  });
  const [alias, setAlias] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [accept, setAccept] = useState<boolean>(false);

  const resetFields = useCallback(() => {
    setAlias("");
    setEmail("");
    setPassword("");
    setConfirm("");
    setAccept(false);
  }, []);

  return (
    <StyledRegisterBox>
      <IconList items={benefits} title="Pourquoi créer un compte" />
      <Form
        title="Créer un compte"
        onSubmit={(e) => {
          e.preventDefault();
          if (password !== confirm || !accept) {
            resetFields();
          } else {
            register({ variables: { email, alias, password } });
          }
        }}
        button="Créer mon compte personnel"
        loading={loading}
      >
        <InputBlock
          title="Pseudo *"
          value={alias}
          onChange={(e) => setAlias(e.target.value)}
          type="text"
        />
        <InputBlock
          title="Email *"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <PasswordWrapper>
          {" "}
          <InputBlock
            title="Password *"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <InputBlock
            title="Confirm password *"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            type="password"
          />
        </PasswordWrapper>
        <CdgCduWrapper>
          <CheckBox checked={accept} onChange={() => setAccept(!accept)} />
          <CdgCdu>J'accepte les CDG et CDU</CdgCdu>
        </CdgCduWrapper>
      </Form>
    </StyledRegisterBox>
  );
};

export default RegisterForm;
