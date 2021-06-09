import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = () => {
  return (
    <SCHeader>
      <SCLink to="/">HOME</SCLink>
      <SCLink to="/users">USER</SCLink>
    </SCHeader>
  );
};

const SCHeader = styled.header`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px 0;
`;

const SCLink = styled(Link)`
  margin: 0 8px;
`;
