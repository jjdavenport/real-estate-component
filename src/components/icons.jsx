import bedIcon from "../Assets/icons/bed.png";
import bathIcon from "../Assets/icons/bath.png";
import boxIcon from "../Assets/icons/box.png";

const Icons = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4 text-xs">
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold">
          <img className="w-4 object-contain" src={bedIcon} />
          <span>4</span>
        </div>
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold">
          <img className="w-4 object-contain" src={bathIcon} />
          <span>2</span>
        </div>
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold">
          <img className="w-4 object-contain" src={boxIcon} />
          <span>6x7.5m²</span>
        </div>
        <span className="font-roboto text-robotoGray">
          2 years lease Required
        </span>
      </div>
    </>
  );
};

export default Icons;
