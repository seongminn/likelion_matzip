import styled from "styled-components";
import { useParams } from "react-router-dom";
import Board from "./../components/Board";
import Header from "../components/Header";
import { cate } from "../api";

const Wrapper = styled.div`
  width: 480px;
  height: 100vh;
`;

const Home = () => {
  const { category } = useParams();

  const data = category ? cate(category) : cate("all");

  return (
    <Wrapper>
      <Header />
      <Board data={data} category={category || "all"} length={data.length} />
    </Wrapper>
  );
};

export default Home;
