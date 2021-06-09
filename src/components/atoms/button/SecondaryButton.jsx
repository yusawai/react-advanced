import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const SecondaryButton = (props) => {
  const { children } = props;

  return <SCButton>{children}</SCButton>;
};

const SCButton = styled(BaseButton)`
  background-color: #11999e;
`;
