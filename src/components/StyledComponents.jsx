import styled from "styled-components";

/**
 * ð æ¢å­ã®CSSãã¡ã¤ã«ã®åå®¹ããã®ã¾ã¾å©ç¨ã§ããã
 * ð æ¢å­ã®HTMLã¿ã°ãç¬èªã¿ã°ã«ç½®æããå¯èª­æ§ãä¸ããã
 * ð ããããã¨ãã£ã¿å´ã§ãã¼ã¹ã§ããªãã±ã¼ã¹ãå¤ãã
 */
export const StyledComponents = () => {
  return (
    <SCdivContainer>
      <SCpTitle>- Styled Components -</SCpTitle>
      <SCbuttonBtn>YEAH</SCbuttonBtn>
    </SCdivContainer>
  );
};

const SCdivContainer = styled.div`
  border: solid 2px blue;
  border-radius: 16px;
  margin: 8px;
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const SCpTitle = styled.p`
  color: purple;
`;
const SCbuttonBtn = styled.button`
  background-color: limegreen;
  border: none;
  border-radius: 8px;
  &:hover {
    background-color: pink;
    cursor: pointer;
  }
`;
