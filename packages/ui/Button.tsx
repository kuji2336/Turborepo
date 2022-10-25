import * as React from "react";
import styled from "styled-components";

const Button1 = styled.button`
  background-color: red;
`
export const Button = () => {
  return <Button1 style={{color : 'green'}}>Boop changed to Click</Button1>;
};
