import styled from "styled-components";

export const Text = (props) => {
  const { placeholder } = props;
  return <SCText type="text" />;
};

const SCText = styled.input`
  padding: 8px 16px;
  border: solid #ddd 1px;
  border-radius: 999px;
  outline: none;
`;
