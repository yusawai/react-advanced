import styled from "styled-components";
import { BaseButton } from "./BaseButton";

export const PrimaryButton = (props) => {
  const { children } = props;

  return <SCButton>{children}</SCButton>;
};

const SCButton = styled(BaseButton)`
  background-color: #40514e;
`;
