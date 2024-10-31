import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="min-h-screen max-h-screen bg-[url('/landscape.jpg')] flex flex-col items-center justify-between bg-cover bg-no-repeat">
      <div className="bg-[khaki]/0 w-full px-[4%] py-[4%]">
        <img src="/logo.png" className="w-[10%] " alt="logo" />
      </div>
      <Link
        className="mb-[4%] rounded-[20px] bg-[#2C7983] text-white duration-200 px-[7%] py-[1%] text-[2rem] hover:opacity-90"
        to={"/list"}
      >
        Start
      </Link>
    </main>
  );
};

export default Home;
