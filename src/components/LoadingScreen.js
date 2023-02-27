import { SiReact, SiRedux, SiTailwindcss, SiJson } from "react-icons/si";
const LoadingScreen = () => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen bg-white flex flex-col justify-center items-center  ">
      <div className="bg-[url('svg/logo-no-background.png')]  w-[76%] h-52  bg-no-repeat bg-cover mb-8 md:bg-cover "></div>

      <div className="animate-pulse text-colorIcon font-bold text-2xl">
        <div className="flex flex-row gap-6">
          <SiReact
            size="50"
            className="border p-1 rounded  text-colorIcon border-colorIcon"
          />
          <SiRedux
            size="50"
            className="border p-1 rounded  text-colorText border-colorIcon"
          />
          <SiTailwindcss
            size="50"
            className="border p-1 rounded  text-colorIcon border-colorIcon"
          />
          <SiJson
            size="50"
            className="border p-1 rounded  text-colorText border-colorIcon"
          />
        </div>
        <div className="flex justify-center items-center">
          <span className="ml-1 ">.</span>
          <span className="ml-1">.</span>
          <span className="ml-1">.</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
