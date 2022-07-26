import styled from "styled-components";
import { useParams } from "react-router-dom";
import Board from "./../components/Board";
import Header from "../components/Header";

const Wrapper = styled.div`
  width: 480px;
  height: 100vh;
`;

const Home = () => {
  const { category } = useParams();

  console.log(category);

  return (
    <Wrapper>
      <Header />
      <Board category={category || "all"} />
    </Wrapper>
  );
};

export default Home;
