import React from "react";

import styled from "styled-components";

const StyledInputFile = styled.input.attrs((props) => ({
  type: "file",
  accept: "image/*",
  multiple: true,
}))``;

interface Props {
  ref:
    | string
    | ((instance: HTMLInputElement | null) => void)
    | React.RefObject<HTMLInputElement>
    | null
    | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputFile = React.forwardRef(
  (
    {
      onChange,
    }: { onChange: (event: React.ChangeEvent<HTMLInputElement>) => void },
    ref: any
  ) => {
    return <StyledInputFile onChange={onChange} ref={ref} />;
  }
);

export default InputFile;
