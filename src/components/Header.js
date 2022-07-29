import { motion } from "framer-motion";
import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: black;
  z-index: 999;
`;

const Items = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Item = styled.li`
  font-size: 16px;
`;

const PositionBar = styled(motion.div)`
  width: 100%;
  height: 2px;
  background-color: #70a1ff;
  margin-top: 5px;
`;

const Header = () => {
  const allMatch = useMatch("/");
  const krMatch = useMatch("/kr");
  const cnMatch = useMatch("/cn");
  const jpMatch = useMatch("/jp");
  const westMatch = useMatch("/west");
  const coffeeMatch = useMatch("/coffee");
  const myMatch = useMatch("/my");

  return (
    <Nav>
      <Items>
        <Item>
          <Link to="/">
            전체
            {allMatch && <PositionBar layoutId="bar" />}
          </Link>
        </Item>
        <Item>
          <Link to="kr">한식 {krMatch && <PositionBar layoutId="bar" />}</Link>
        </Item>
        <Item>
          <Link to="cn">중식 {cnMatch && <PositionBar layoutId="bar" />}</Link>
        </Item>
        <Item>
          <Link to="jp">일식 {jpMatch && <PositionBar layoutId="bar" />}</Link>
        </Item>
        <Item>
          <Link to="west">
            양식 {westMatch && <PositionBar layoutId="bar" />}
          </Link>
        </Item>
        <Item>
          <Link to="coffee">
            카페 {coffeeMatch && <PositionBar layoutId="bar" />}
          </Link>
        </Item>
        <Item>
          <Link to="my">
            마이페이지 {myMatch && <PositionBar layoutId="bar" />}
          </Link>
        </Item>
      </Items>
    </Nav>
  );
};

export default Header;
