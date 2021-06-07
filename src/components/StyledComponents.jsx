import styled from "styled-components";

/**
 * 👍 既存のCSSファイルの内容をそのまま利用できる。
 * 👎 既存のHTMLタグが独自タグに置換され可読性が下がる。
 * 👎 それゆえエディタ側でパースできないケースが多い。
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
