import { useState } from "react";

const HeartButton = () => {
  const [active, setActive] = useState(false);
  const toggle = () => {
    setActive(!active);
  };
  return (
    <>
      <button
        className="h-fit transform transition-all duration-300 ease-in-out"
        onClick={toggle}
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          className={`${
            active ? "scale-105 fill-red-600" : "scale-100 fill-robotoGray"
          } w-6 transition-all duration-300 ease-in-out`}
        >
          <path d="M12 20a1 1 0 0 1-.437-.1C11.214 19.73 3 15.671 3 9a5 5 0 0 1 8.535-3.536l.465.465.465-.465A5 5 0 0 1 21 9c0 6.646-8.212 10.728-8.562 10.9A1 1 0 0 1 12 20z" />
        </svg>
      </button>
    </>
  );
};

export default HeartButton;
