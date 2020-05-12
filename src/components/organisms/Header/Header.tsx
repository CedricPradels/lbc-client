import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import styled from "styled-components";

import Cookies from "js-cookie";

import { PlusSquare, User, Search as Lens } from "react-feather";

import Image from "../../atoms/Image";
import Button from "../../atoms/Button";
import logo from "../../../assets/images/logo.png";

const StyledLogo = styled(Image)`
  width: 167px;
  cursor: pointer;
`;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  padding: 0 15%;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.1);
`;
const Nav = styled.nav`
  display: flex;
`;

const StyledButton = styled(Button)`
  align-self: center;
  margin: 0 15px;
`;

const Connection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #f56b2a;
    color: #fff;
  }
`;

const Search = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: #f56b2a;
    color: #fff;
  }
`;

interface Props {
  token: string | undefined;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const Header: React.FC<Props> = ({ token, setToken }) => {
  const history = useHistory();

  return (
    <StyledHeader>
      <Nav>
        <Link to="/">
          <StyledLogo src={logo} alt="logo leboncoin" />
        </Link>
        <StyledButton onClick={() => history.push("/publish")}>
          <PlusSquare /> Déposer une annonce
        </StyledButton>
        <Search onClick={() => history.push("/")}>
          <Lens />
          Rechercher
        </Search>
      </Nav>
      {token === undefined ? (
        <Connection onClick={() => history.push("/login")}>
          <User />
          Se connecter
        </Connection>
      ) : (
        <Connection
          onClick={() => {
            setToken(undefined);
            Cookies.remove("token");
          }}
        >
          <User fill="#000" />
          Se déconnecter
        </Connection>
      )}
    </StyledHeader>
  );
};

export default Header;
