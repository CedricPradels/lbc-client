import React from "react";

import styled from "styled-components";

const StyledInputBlock = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 16px;
  font-family: "Roboto", sans-serif;
`;
const TextArea = styled.textarea`
  border: 1px solid #d9e0eb;
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  height: 44px;
`;
const TextInput = styled.input`
  border: 1px solid #d9e0eb;
  border-radius: 5px;
  padding: 12px 20px;
  height: 44px;
  box-sizing: border-box;
`;
const Label = styled.label`
  font-weight: bold;
  margin-bottom: 19px;
`;

interface Props {
  title: string;
  value: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  type: "text" | "password" | "textarea" | "number" | "email";
}

const InputBlock: React.FC<Props> = ({ value, onChange, type, title }) => {
  return (
    <StyledInputBlock>
      <Label htmlFor={title}>{title}</Label>
      {type === "textarea" ? (
        <TextArea id={title} onChange={onChange} value={value} />
      ) : (
        <TextInput id={title} onChange={onChange} value={value} type={type} />
      )}
    </StyledInputBlock>
  );
};

export default InputBlock;
