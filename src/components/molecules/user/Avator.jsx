import styled from "styled-components";

export const Avator = (props) => {
  const { image, name } = props;

  return (
    <SCContainer>
      <SCImg width={160} src={image} alt="User profile" />
      <p>
        <SCName>{name}</SCName>
      </p>
    </SCContainer>
  );
};

const SCContainer = styled.div`
  text-align: center;
`;
const SCImg = styled.img`
  border-radius: 50%;
`;
const SCName = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
  color: #40514e;
`;
