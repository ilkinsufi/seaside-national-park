import { useState } from "react";
import Modal from "../components/Modal";
import { StaticData } from "../data/StaticData";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/LeftArrow";

const getRandomAspectRatio = () => {
  const ratios = [
    "aspect-square",
    "aspect-video",
    "aspect-[3/4]",
    "aspect-[4/3]",
  ];
  return ratios[Math.floor(Math.random() * ratios.length)];
};

const List = () => {
  const [modal, setModal] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);

  function handleClick(id: number) {
    setCurrentItem(id);
    setModal(true);
  }
  return (
    <main data-aos="fade-in" className="bg-[#2C7983] relative  flex flex-col">
      {/* back button */}
      <Link
        to="/"
        className="bg-white fixed flex items-center gap-3 top-[2%] px-[4%] py-[1%] rounded-[11px] left-[2%] z-[1] duration-200 hover:opacity-90"
      >
        <LeftArrow /> <span className="text-2xl">Go Back</span>
      </Link>
      <section className="flex items-start  justify-center">
        {/* first  */}
        <div className="grid w-1/3 ">
          {StaticData.filter((data) => data.location === "left").map(
            (data, index) => (
              <div
                onClick={() => {
                  handleClick(data.id);
                }}
                key={index}
                className={`overflow-hidden relative ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`${
                    data.darkYearColor ? "text-black" : "text-white"
                  } absolute left-[5%] bottom-[5%] text-[32px] font-medium`}
                >
                  {data.newYear}
                </div>
              </div>
            )
          )}
        </div>
        {/* second  */}
        <div className="grid w-1/3 ">
          {StaticData.filter((data) => data.location === "center").map(
            (data, index) => (
              <div
                onClick={() => {
                  handleClick(data.id);
                }}
                key={index}
                className={`overflow-hidden relative ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`${
                    data.darkYearColor ? "text-black" : "text-white"
                  } absolute left-[5%] bottom-[5%] text-[32px] font-medium`}
                >
                  {data.newYear}
                </div>
              </div>
            )
          )}
        </div>
        {/* third  */}
        <div className="grid w-1/3 ">
          {StaticData.filter((data) => data.location === "right").map(
            (data, index) => (
              <div
                onClick={() => {
                  handleClick(data.id);
                }}
                key={index}
                className={`overflow-hidden relative ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`${
                    data.darkYearColor ? "text-black" : "text-white"
                  } absolute left-[5%] bottom-[5%] text-[32px] font-medium`}
                >
                  {data.newYear}
                </div>
              </div>
            )
          )}
        </div>
      </section>

      {/* modal  */}

      <Modal
        modal={modal}
        setModal={setModal}
        currentItem={currentItem}
        setCurrentItem={setCurrentItem}
      />
    </main>
  );
};

export default List;
