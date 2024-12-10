import img from "../Assets/images/profile-img.png";

const Rating = () => {
  return (
    <>
      <div>
        <img src={img} />
        <div>
          <span>Eric Smirt</span>
          <span></span>
          <span>
            4/9 <span>/5</span> (3878 reviews)
          </span>
        </div>
      </div>
    </>
  );
};

export default Rating;
