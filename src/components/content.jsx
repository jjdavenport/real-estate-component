import { useMediaQuery } from "react-responsive";

const Content = () => {
  const desktop = useMediaQuery({ minWidth: 786 });

  if (desktop)
    return (
      <>
        <div className="flex flex-col gap-2">
          <h1 className="font-raleway text-xl font-bold text-ralewayBold">
            Cottage in New York
          </h1>
          <p className="font-raleway text-lg font-medium leading-6 text-robotoGray">
            2821 lake Sevilla, Palm Harbour, TX <br></br> New York, US
          </p>
        </div>
      </>
    );

  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="font-raleway text-2xl font-bold text-ralewayBold">
          Cottage in New York
        </h1>
        <p className="font-raleway text-lg font-medium leading-6 text-robotoGray">
          2821 lake Sevilla, Palm <br></br> Harbour, TX <br></br> New York, US
        </p>
      </div>
    </>
  );
};

export default Content;
