import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { cate } from "../api";
import { useRecoilState } from "recoil";
import { heartState } from "./../atom";
import { useEffect } from "react";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const FoodList = styled.div`
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const Icon = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const FoodName = styled.p``;

const Board = ({ category }) => {
  const [favs, setFavs] = useRecoilState(heartState);
  const data = cate(category);
  const onClickHeart = (id) => {
    setFavs((fav) => {
      const prevFavs = [...fav];

      const favIdx = prevFavs.findIndex((fav) => fav === id);

      let result;
      if (favIdx === -1) {
        result = [...prevFavs, id];

        localStorage.setItem("foods", JSON.stringify(result));
      } else {
        prevFavs.splice(favIdx, 1);

        result = prevFavs;
        localStorage.setItem("foods", JSON.stringify(result));
      }
      return result;
    });
  };

  useEffect(() => {
    const storage = localStorage.getItem("foods");

    if (storage !== null) {
      const parsedData = JSON.parse(storage);
      setFavs(parsedData);
    } else {
      setFavs([]);
    }
  }, []);

  return (
    <Box>
      {data.map((d) => (
        <FoodList key={d.id}>
          <FoodName>{d.name}</FoodName>
          <Icon onClick={() => onClickHeart(d.id)}>
            {favs.includes(d.id) ? (
              <HeartFilled style={{ color: "#ff6b81" }} />
            ) : (
              <HeartOutlined />
            )}
          </Icon>
        </FoodList>
      ))}
    </Box>
  );
};

export default Board;
