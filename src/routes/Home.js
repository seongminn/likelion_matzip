import styled from "styled-components";
import { useParams } from "react-router-dom";
import Board from "./../components/Board";
import Header from "../components/Header";
import { getApi } from "../api";
import { useQuery } from "react-query";
import { LoadingOutlined } from "@ant-design/icons";

const Wrapper = styled.div`
  width: 480px;
  height: 100%;
  margin: 0 auto;
`;

const Loading = styled.p`
  height: 40vh;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  const { category } = useParams();

  const { data, isLoading } = useQuery(
    [`${category}`],
    () => category === "my" || getApi(`${category ? category : "all"}`)
  );

  // const data2 = category ? cate(category) : cate("all");

  return (
    <Wrapper>
      <Header />
      {isLoading ? (
        <Loading>
          <LoadingOutlined />
        </Loading>
      ) : (
        <Board data={data} category={category || "all"} length={data.length} />
      )}
    </Wrapper>
  );
};

export default Home;
