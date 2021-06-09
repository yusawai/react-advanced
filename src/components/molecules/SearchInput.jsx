import styled from "styled-components";
import { PrimaryButton } from "../atoms/button/PrimaryButton";
import { Text } from "../atoms/input/Text";

export const SearchInput = () => {
  return (
    <SCContainer>
      <Text placeholder="Input search words." />
      <SCButtonWrapper>
        <PrimaryButton>Search</PrimaryButton>
      </SCButtonWrapper>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SCButtonWrapper = styled.div`
  padding-left: 8px;
`;
