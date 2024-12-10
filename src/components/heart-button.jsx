import { useState } from "react";

const HeartButton = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <button onClick={toggle}>
        <div></div>
      </button>
    </>
  );
};

export default HeartButton;
