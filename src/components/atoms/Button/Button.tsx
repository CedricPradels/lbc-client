import React from "react";

import styled from "styled-components";

import Loading from "../Loading";

interface Props {
  loading?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  type?: "submit" | "button";
  className?: string;
}

const StyledButton = styled.button`
  background-color: #f56b2a;
  color: #fff;
  font-size: 16px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  filter: ${({ disabled }) => (disabled ? "opacity(0.5)" : "none")};
`;

const Button: React.FC<Props> = ({
  type = "button",
  onClick,
  children,
  loading = false,
  className,
}) => {
  return (
    <StyledButton
      className={className}
      disabled={loading}
      type={type}
      onClick={(e) => {
        if (onClick) {
          onClick(e);
        }
      }}
    >
      {loading ? <Loading /> : children}
    </StyledButton>
  );
};

export default Button;
