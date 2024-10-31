import { useEffect } from "react";
import { StaticData } from "../data/StaticData";

const Modal = ({ modal, setModal, currentItem, setCurrentItem }: any) => {
  useEffect(() => {
    if (modal) {
      document.body.style.overflow = "hidden";
    } else {
      setCurrentItem(0);
      document.body.style.overflow = "auto";
    }
  }, [modal]);

  const filteredItem = StaticData.filter(
    (selectedItem) => selectedItem.id === currentItem
  );
  console.log(filteredItem[0]);

  return (
    <main
      onClick={() => setModal(!modal)}
      className={`${
        modal ? "opacity-100 visible" : "opacity-0 invisible"
      } fixed duration-0 flex select-none items-center justify-center w-full h-full left-0 top-0 bg-[black]/80`}
    >
      <div
        className="bg-[#2C7983] flex items-center  flex-col justify-center w-[70%] h-[80%] relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Circular Cross Icon */}
        <div
          onClick={() => setModal(!modal)}
          className="rounded-full bg-[white] flex items-center justify-center absolute -right-[1%] -top-[1%] cursor-pointer"
          style={{ width: "3vw", height: "3vw" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2vw"
            height="2vw"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M16.0001 16L25.3334 25.3333M16.0001 16L6.66675 6.66663M16.0001 16L6.66675 25.3333M16.0001 16L25.3334 6.66663"
              stroke="#2C7983"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <div className="mt-[3%] mb-[1%] w-[90%] bg-[purple]/0 flex items-center justify-between">
          <span className="text-[30px] text-white">
            {filteredItem[0]?.oldYear}
          </span>
          <span className="text-[30px] text-white">
            {filteredItem[0]?.newYear}
          </span>
        </div>
        <div className="bg-[khaki]/0 relative h-[77%] w-[90%]">
          <img
            src={filteredItem[0]?.newImg}
            alt="item"
            className="w-full h-full object-cover"
          />

          <div
            onDrag={(e) => e.stopPropagation()}
            className="absolute left-0 h-full top-0"
          >
            <img src="/drag.png" className="h-full" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Modal;
