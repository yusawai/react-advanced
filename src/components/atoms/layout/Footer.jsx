import styled from "styled-components";

export const Footer = () => {
  return <SCFooter>&copy; 2021 Yusawai Co. Ltd. </SCFooter>;
};

const SCFooter = styled.footer`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px 0;
  position: fixed;
  bottom: 0;
  width: 100%;
`;
