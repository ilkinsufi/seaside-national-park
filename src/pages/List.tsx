import { useState } from "react";
import Modal from "../components/Modal";

export const StaticData = [
  {
    location: "left",
    id: 1,
    newYear: "2023",
    oldYear: "2022",
    title: "Baku Boulevard",
    newImg:
      "https://images.unsplash.com/photo-1729793284297-eeedc0573a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    oldImg:
      "https://images.unsplash.com/photo-1729808085332-4a855b6f1b62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
  },
  {
    location: "left",
    id: 2,
    newYear: "2023",
    oldYear: "2022",
    title: "City at Sunset",
    newImg:
      "https://images.unsplash.com/photo-1730228855986-357c8ed353a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8",
    oldImg:
      "https://images.unsplash.com/photo-1730217804424-825f12eef36f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
  },
  {
    location: "left",
    id: 3,
    newYear: "2023",
    oldYear: "2022",
    title: "Baku Boulevard",
    newImg:
      "https://images.unsplash.com/photo-1720048171098-dba33b2c4806?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1730125082387-5cbbb42bf776?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "center",
    id: 4,
    newYear: "2023",
    oldYear: "2022",
    title: "City at Sunset",
    newImg:
      "https://images.unsplash.com/photo-1729854298121-a2bab0724d1f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1729837149090-764b4272c2d7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "center",
    id: 5,
    newYear: "2023",
    oldYear: "2022",
    title: "Baku Boulevard",
    newImg:
      "https://images.unsplash.com/photo-1729865972481-390914fe0c06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1730138056313-dc4b284d8dd4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "center",
    id: 6,
    newYear: "2023",
    oldYear: "2022",
    title: "City at Sunset",
    newImg:
      "https://images.unsplash.com/photo-1729867799265-34a921d70baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1729829471656-8488135a99ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyM3x8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "right",
    id: 7,
    newYear: "2023",
    oldYear: "2022",
    title: "Baku Boulevard",
    newImg:
      "https://images.unsplash.com/photo-1709712268485-09135211ac53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1713877184702-34141e5b299d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "right",
    id: 8,
    newYear: "2023",
    oldYear: "2022",
    title: "City at Sunset",
    newImg:
      "https://images.unsplash.com/photo-1726092679831-ae0a4e21f072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1725551516978-0b53f171b30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    location: "right",
    id: 9,
    newYear: "2023",
    oldYear: "2022",
    title: "City at Sunset",
    newImg:
      "https://images.unsplash.com/photo-1726092679831-ae0a4e21f072?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzNXx8fGVufDB8fHx8fA%3D%3D",
    oldImg:
      "https://images.unsplash.com/photo-1725551516978-0b53f171b30c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D",
  },
];
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
