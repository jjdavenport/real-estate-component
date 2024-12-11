import bedIcon from "../Assets/icons/bed.png";
import bathIcon from "../Assets/icons/bath.png";
import boxIcon from "../Assets/icons/box.png";

const Icons = () => {
  return (
    <>
      <div className="flex items-center justify-between py-4 md:py-0 md:pt-4">
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold md:items-start">
          <img className="object-contain ~sm/md:~w-4/6" src={bedIcon} />
          <span className="~sm/md:~text-xs/sm">4</span>
        </div>
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold md:items-start">
          <img className="object-contain ~sm/md:~w-4/6" src={bathIcon} />
          <span className="~sm/md:~text-xs/sm">2</span>
        </div>
        <div className="flex items-center gap-1 font-roboto font-medium text-ralewayBold md:items-start">
          <img className="object-contain ~sm/md:~w-4/6" src={boxIcon} />
          <span className="~sm/md:~text-xs/sm">6x7.5m²</span>
        </div>
        <span className="font-roboto text-xs text-robotoGray">
          2 years lease Required
        </span>
      </div>
    </>
  );
};

export default Icons;
