import img from "../Assets/images/Rectangle 64.png";

const UpperCard = () => {
  return (
    <>
      <div className="flex flex-col font-roboto">
        <img src={img} />
        <div className="~sm/md:~p-4/6 ~sm/md:~-mt-14/20 flex justify-between">
          <a
            className="rounded-md bg-backgroundGreen px-4 text-white md:py-1 md:pl-8 md:pr-16"
            href="/"
          >
            Rent now
          </a>
          <a
            className="~sm/md:~gap-1/6 flex items-center uppercase text-white"
            href="/"
          >
            3 leads
            <svg
              className="w-3 fill-robotoWhite"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 330 330"
            >
              <path
                id="XMLID_222_"
                d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001
	c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213
	C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606
	C255,161.018,253.42,157.202,250.606,154.389z"
              />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};

export default UpperCard;
