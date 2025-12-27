import Link from "next/link";
import {
  FiBarChart,
  FiBox,
  FiHome,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

const Analysis = () => {
  return (
    <div className="w-full h-dvh flex flex-row text-gray-900 font-sans">
      <div className="w-20 p-5 flex flex-col gap-5 justify-start items-center bg-green-100">
         <Link href="/">
          <FiHome
            size={35}
            className="bg-transparent p-2 rounded-lg cursor-pointer"
          />
        </Link>
        <Link href="/inventory">
          <FiBox
            size={35}
            className="bg-transparent p-2 rounded-lg cursor-pointer"
          />
        </Link>
        <Link href="/users">
          <FiUsers
            size={35}
            className="bg-transparent p-2 rounded-lg cursor-pointer"
          />
        </Link>
        <Link href="/analysis">
          <FiBarChart
            size={35}
            className="bg-green-400 p-2 rounded-lg text-white cursor-pointer"
          />
        </Link>
        <FiSettings
          size={35}
          className="bg-transparent p-2 rounded-lg cursor-pointer"
        />
      </div>
      <div className="bg-white w-full flex flex-col p-5 gap-5"></div>
    </div>
  );
};

export default Analysis;
