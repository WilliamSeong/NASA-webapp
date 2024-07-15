import List from "./components/List.jsx";
import styled from "styled-components";

const StyledWrapper = styled.div`
    background-image: url("https://i.pinimg.com/originals/bd/8b/ff/bd8bffd78009eab632d34294f1b760bb.gif");
    margin: 0;
    width: 100%;
    height: 100vh;
    color: white;
    text-align: center;
`

export default function App() {
  return (
      <StyledWrapper>
          <h1 className='navbar-brand text-light'>10 Random Astronomy Pictures of the Day (APOD)</h1>

          <List />
      </StyledWrapper>
  );
}

