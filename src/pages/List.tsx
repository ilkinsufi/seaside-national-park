import { useState } from "react";
import Modal from "../components/Modal";
import { StaticData } from "../data/StaticData";


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
    <main data-aos="fade-in" className="bg-[#2C7983] flex flex-col">
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
                className={`overflow-hidden ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
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
                className={`overflow-hidden ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
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
                className={`overflow-hidden ${getRandomAspectRatio()}`}
              >
                <img
                  src={data.newImg}
                  alt={data.title}
                  className="w-full h-full object-cover"
                />
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
