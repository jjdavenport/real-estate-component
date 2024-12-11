import img from "../Assets/images/Rectangle 64.png";

const UpperCard = () => {
  return (
    <>
      <div className="font-roboto flex flex-col">
        <img src={img} />
        <div className="-mt-14 flex justify-between p-4">
          <a className="rounded-md bg-backgroundGreen px-4 text-white" href="/">
            Rent now
          </a>
          <a className="uppercase text-white" href="/">
            3 leads
          </a>
        </div>
      </div>
    </>
  );
};

export default UpperCard;
