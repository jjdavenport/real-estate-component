import Rating from "./rating";
import Cost from "./cost";
import Icons from "./icons";
import Content from "./content";
import HeartButton from "./heart-button";

const LowerCard = () => {
  return (
    <>
      <div className="flex flex-col gap-4 divide-y-2 bg-robotoWhite p-4">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <Rating />
            <Cost />
          </div>
          <div className="flex items-end justify-between">
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
