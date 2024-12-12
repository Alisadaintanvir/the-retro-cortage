import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
`;

const Button = styled.button`
  font-size: 1.4rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  background-color: purple;
  color: white;
  cursor: pointer;
  margin: 20px;
`;

const Input = styled.input`
  font-size: 1.4rem;
  padding: 0.8rem 1.2rem;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const StyledApp = styled.div`
  background-color: orangered;
  padding: 20px;
`;
function App() {
  return (
    <StyledApp>
      <H1>The Retro Cottage</H1>;
      <Button onClick={() => alert("Check In!")}>Check Now</Button>
      <Button onClick={() => alert("Check Out!")}>Check Out</Button>
      <Input type="text" placeholder="Number of guests" />
    </StyledApp>
  );
}

export default App;
