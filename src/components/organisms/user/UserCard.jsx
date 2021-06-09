import styled from "styled-components";
import { Card } from "../../atoms/card/Card";
import { Avator } from "../../molecules/user/Avator";

export const UserCard = (props) => {
  const { user } = props;

  return (
    <Card>
      <Avator image={user.image} name={user.name} />
      <SCDl>
        <dt>Email</dt>
        <dd>{user.email}</dd>
        <dt>Phone</dt>
        <dd>{user.phone}</dd>
        <dt>Company</dt>
        <dd>{user.company.name}</dd>
        <dt>Web</dt>
        <dd>{user.url}</dd>
      </SCDl>
    </Card>
  );
};

const SCDl = styled.dl`
  text-align: left;
  margin-bottom: 0;
  dt {
    float: left;
  }
  dd {
    padding-left: 32px;
    padding-bottom: 8px;
    overflow-wrap: break-word;
  }
`;
