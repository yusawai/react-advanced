import styled from "styled-components";
import { SearchInput } from "../molecules/SearchInput";
import { UserCard } from "../molecules/UserCard";

const users = [...Array(10).keys()].map((val) => {
  return {
    id: val,
    image: "https://source.unsplash.com/2l0CWTpcChI",
    name: `Yu${val}`,
    email: "zejingyou@gmail.com",
    phone: "0900567844",
    company: { name: "Yusawai Co. Ltd." },
    url: "https://yusawai.com"
  };
});
const user = {
  image: "https://source.unsplash.com/2l0CWTpcChI",
  name: "Yu",
  email: "zejingyou@gmail.com",
  phone: "0900567844",
  company: { name: "Yusawai Co. Ltd." },
  url: "https://yusawai.com"
};

export const Users = () => {
  return (
    <SCContainer>
      <h2>This's user list.</h2>
      <SearchInput />
      {user.map(() => (
        <UserCard key={user.id} user={user} />
      ))}
    </SCContainer>
  );
};

const SCContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SCUserArea = styled.div`
  padding-top: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
`;
