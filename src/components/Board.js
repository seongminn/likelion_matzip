import styled from "styled-components";
import { useRecoilState } from "recoil";
import { heartState } from "./../atom";
import { useEffect, useState } from "react";
import CheckBox from "./CheckBox";
import Pagination from "./Pagination";
import Heart from "./Heart";

const Wrapper = styled.div`
  height: 100%;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  padding: 50px 0;
`;

const FoodList = styled.div`
  padding: 20px 10px;
  padding-left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const FoodName = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
`;

const Board = ({ data, category }) => {
  const [page, setPage] = useState(1);
  const limit = 6;
  const offset = (page - 1) * limit;

  const [favs, setFavs] = useRecoilState(heartState);

  useEffect(() => {
    setPage(1);
  }, [category]);

  useEffect(() => {
    const storage = localStorage.getItem("foods");

    if (storage !== null) {
      const parsedData = JSON.parse(storage);
      setFavs(parsedData);
    } else {
      setFavs([]);
    }
  }, [setFavs]);

  return (
    <Wrapper>
      {category !== "my" ? (
        <>
          <Box>
            {data.slice(offset, offset + limit).map(({ id, name }) => (
              <FoodList key={id + name}>
                <FoodName>{name}</FoodName>
                <Heart
                  id={id}
                  name={name}
                  filled={favs.find((fav) => fav.id === id)}
                />
              </FoodList>
            ))}
          </Box>
          <Pagination
            total={data.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      ) : (
        <>
          <Box>
            {favs.slice(offset, offset + limit).map(({ id, name }) => (
              <FoodList key={id + "favs"}>
                <FoodName>
                  <CheckBox />
                  {name}
                </FoodName>
                <Heart id={id} name={name} filled={true} />
              </FoodList>
            ))}
          </Box>
          <Pagination
            total={favs.length}
            limit={limit}
            page={page}
            setPage={setPage}
          />
        </>
      )}
    </Wrapper>
  );
};

export default Board;
