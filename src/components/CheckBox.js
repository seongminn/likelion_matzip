import { CheckSquareFilled, CheckSquareOutlined } from "@ant-design/icons";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const onClickChecked = () => {
    setChecked((prev) => !prev);
  };
  return (
    <AnimatePresence>
      {checked ? (
        <CheckSquareFilled
          style={{ color: "#70a1ff", cursor: "pointer" }}
          onClick={onClickChecked}
        />
      ) : (
        <CheckSquareOutlined
          style={{ cursor: "pointer" }}
          onClick={onClickChecked}
        />
      )}
    </AnimatePresence>
  );
};

export default CheckBox;
