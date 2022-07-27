import { CheckCircleFilled, CheckCircleOutlined } from "@ant-design/icons";
import { useState } from "react";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);

  const onClickChecked = () => {
    setChecked((prev) => !prev);
  };
  return checked ? (
    <CheckCircleFilled
      style={{ color: "#70a1ff", cursor: "pointer" }}
      onClick={onClickChecked}
    />
  ) : (
    <CheckCircleOutlined
      style={{ cursor: "pointer" }}
      onClick={onClickChecked}
    />
  );
};

export default CheckBox;
