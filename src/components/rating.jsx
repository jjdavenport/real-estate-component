import img from "../Assets/images/profile-img.png";
import ratingsIcon from "../Assets/icons/ratings-icon.svg";

const Rating = () => {
  return (
    <>
      <div className="flex justify-start gap-2">
        <div className="h-fit overflow-hidden rounded-full">
          <img className="w-8 object-contain" src={img} />
        </div>
        <div className="flex flex-col">
          <span className="font-roboto font-bold text-robotoMedium">
            Eric Smirt
          </span>
          <img className="h-2 w-fit object-contain" src={ratingsIcon} />
          <span className="font-roboto text-xs text-robotoGray">
            4.9<span className="font-medium text-robotoMedium">/5</span> (3878
            reviews)
          </span>
        </div>
      </div>
    </>
  );
};

export default Rating;
