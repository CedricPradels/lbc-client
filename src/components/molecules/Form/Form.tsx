import React from "react";

import styled from "styled-components";

import Button from "../../atoms/Button";

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
`;

const Title = styled.h2`
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  border-bottom: 3px #f56b2a solid;
  padding-bottom: 33px;
  text-align: center;
`;

interface Props {
  button: string;
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  title: string;
  loading?: boolean;
}

const Form: React.FC<Props> = ({
  button,
  children,
  onSubmit,
  title,
  loading = false,
}) => {
  return (
    <StyledForm onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
      <Button type="submit" loading={loading}>
        {button}
      </Button>
    </StyledForm>
  );
};

export default Form;
