import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: #CFEFFF;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 19px;
  font-weight: 500;
  border-radius: 30px;
`;

const Announcement = () => {
  return <Container>Best Selling Books ! Get Yours Now !</Container>;
};

export default Announcement;