import bedIcon from "../Assets/icons/bed.png";
import bathIcon from "../Assets/icons/bath.png";
import boxIcon from "../Assets/icons/box.png";

const Icons = () => {
  return (
    <>
      <div>
        <div>
          <img src={bedIcon} />
          <span></span>
        </div>
        <div>
          <img src={bathIcon} />
          <span></span>
        </div>
        <div>
          <img src={boxIcon} />
          <span></span>
        </div>
        <span>2 years lease Required</span>
      </div>
    </>
  );
};

export default Icons;
