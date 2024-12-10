import Rating from "./rating";
import Cost from "./cost";
import Icons from "./icons";
import Content from "./content";
import HeartButton from "./heart-button";

const LowerCard = () => {
  return (
    <>
      <div>
        <div>
          <div>
            <Rating />
            <Cost />
          </div>
          <div>
            <Content />
            <HeartButton />
          </div>
        </div>
        <Icons />
      </div>
    </>
  );
};

export default LowerCard;
