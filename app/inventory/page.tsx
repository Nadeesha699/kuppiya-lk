import Link from "next/link";
import { CgAdd } from "react-icons/cg";
import {
  FiBarChart,
  FiBox,
  FiClock,
  FiEdit,
  FiEye,
  FiHome,
  FiMoon,
  FiSearch,
  FiSettings,
  FiTrash,
  FiUsers,
} from "react-icons/fi";

const inventory = [
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
  { product: "Cake", price: 100, oty: 20, category: "sweets" },
];

const Edit = () => {
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
            className="bg-green-400 p-2 rounded-lg text-white cursor-pointer"
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
            className="bg-transparent p-2 rounded-lg cursor-pointer"
          />
        </Link>
        <FiSettings
          size={35}
          className="bg-transparent p-2 rounded-lg cursor-pointer"
        />
      </div>
      <div className="bg-white w-full flex flex-col pt-5 pl-5 pr-5 gap-5">
        <div className="flex flex-row justify-end items-end gap-5">
          <div className="flex flex-row gap-1">
            <FiClock size={20} />
            05:30 PM
          </div>
          <FiMoon size={20} />
        </div>
        <h1 className="text-6xl font-bold">
          Inventor<span className="text-green-400">Y</span>
        </h1>
        <div className="flex flex-row justify-between items-center">
        <div className="flex flex-row gap-2 justify-start items-center bg-gray-100 p-2 rounded-full w-1/2">
          <FiSearch size={20} />
          <input
            placeholder="search by product name and category..."
            className="w-full focus:outline-none"
          />
        </div>
        <div className="bg-green-400 flex flex-row gap-1 justify-center items-center pl-5 pr-5 pt-1 pb-1 rounded-lg text-white cursor-pointer"><CgAdd/>Add</div>
        </div>
        <div className="w-full overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <table className="w-full table-auto border-separate border-spacing-y-3">
            <thead>
              <tr className="bg-green-400/50 text-green-600">
                <th>#</th>
                <th>Product</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            {inventory.map((e, index) => {
              return (
                <tr className="text-center text-gray-700 text-sm">
                  <td>#{++index}</td>
                  <td>{e.product}</td>
                  <td>{e.category}</td>
                  <td>{e.oty}</td>
                  <td>{e.price}</td>
                  <td className="flex flex-row gap-2 justify-center items-center">
                    <FiEye className="text-blue-500"/>
                    <FiEdit className="text-green-500"/>
                    <FiTrash className="text-red-500"/>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
};

export default Edit;
