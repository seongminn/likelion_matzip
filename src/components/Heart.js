import { HeartFilled, HeartOutlined } from "@ant-design/icons";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { heartState } from "../atom";

const Icon = styled.div`
  font-size: 14px;
  cursor: pointer;
`;

const Heart = ({ id, name, filled }) => {
  const setFavs = useSetRecoilState(heartState);

  const onClickHeart = (id, name) => {
    setFavs((fav) => {
      const prevFavs = [...fav];

      const favIdx = prevFavs.findIndex((fav) => fav.id === id);
      console.log(favIdx);
      let result;
      if (favIdx === -1) {
        alert(`${name}이(가) 찜 목록에 추가되었습니다😉`);
        result = [...prevFavs, { id, name }];

        localStorage.setItem("foods", JSON.stringify(result));
      } else {
        prevFavs.splice(favIdx, 1);

        result = prevFavs;
        localStorage.setItem("foods", JSON.stringify(result));
      }
      return result;
    });
  };

  return (
    <Icon onClick={() => onClickHeart(id, name)}>
      {filled ? (
        <HeartFilled style={{ color: "#ff6b81" }} />
      ) : (
        <HeartOutlined />
      )}
    </Icon>
  );
};

export default Heart;
