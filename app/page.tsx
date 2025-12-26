"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FiBarChart,
  FiClock,
  FiEdit,
  FiHome,
  FiMoon,
  FiSearch,
  FiSettings,
  FiShoppingCart,
  FiUsers,
} from "react-icons/fi";

const items = [
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
  { name: "Beer", price: 200, stock: 20, category: "Beverages" },
];

export default function Home() {
  const [category, setCategory] = useState("");
  const [searchTxt, setSearchTxt] = useState("");
  const [btn1,setBtn1] = useState(true)
  const [btn2,setBtn2] = useState(false)
  const [btn3,setBtn3] = useState(false)
  const [btn4,setBtn4] = useState(false)
  return (
    <div className="w-full h-dvh flex flex-row text-gray-900 font-sans">
      <div className="w-20 p-5 flex flex-col gap-5 justify-start items-center bg-green-100">
        <Link href="/">
          <FiHome
            size={35}
            className="bg-green-400 p-2 rounded-lg text-white cursor-pointer"
          />
        </Link>
        <Link href="/edit">
          <FiEdit
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
            className="bg-transparent p-2 rounded-lg cursor-pointer"
          />
        </Link>
        <FiSettings
          size={35}
          className="bg-transparent p-2 rounded-lg cursor-pointer"
        />
      </div>
      <div className="bg-white w-full flex flex-col p-5 gap-5">
        <div className="flex flex-row justify-end items-end gap-5">
          <div className="flex flex-row gap-1">
            <FiClock size={20} />
            05:30 PM
          </div>
          <Link href="/purchase">
            <FiShoppingCart size={20} />
          </Link>{" "}
          <FiMoon size={20} />
        </div>
        <h1 className="text-6xl font-bold">
          Mart<span className="text-green-400">X</span>
        </h1>
        <div className="flex flex-row gap-5">
          <div className="flex flex-row gap-2 justify-start items-center bg-gray-100 p-2 rounded-full w-1/2">
            <FiSearch size={20} />
            <input
              placeholder="search by product name..."
              onChange={(e) => {
                setSearchTxt(e.target.value);
              }}
              className="w-full focus:outline-none"
            />
          </div>
          <div className="flex flex-row gap-2">
            <label
              className={`${btn1?"bg-green-400 text-white":"bg-transparent border-2 border-green-400 text-green-400"} p-2 rounded-lg  flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setCategory("");
                setBtn1(true)
                setBtn2(false)
                setBtn3(false)
                setBtn4(false)
              }}
            >
              All
            </label>
            <label
              className={`${btn2?"bg-green-400 text-white":"bg-transparent border-2 border-green-400 text-green-400"} p-2 rounded-lg flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setCategory("beverages");
                setBtn1(false)
                setBtn2(true)
                setBtn3(false)
                setBtn4(false)
              }}
            >
              Beverages
            </label>
            <label
              className={`${btn3?"bg-green-400 text-white":"bg-transparent border-2 border-green-400 text-green-400"} p-2 rounded-lg flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setCategory("sweets");
                setBtn1(false)
                setBtn2(false)
                setBtn3(true)
                setBtn4(false)
              }}
            >
              Sweets
            </label>
            <label
              className={`${btn4?"bg-green-400 text-white":"bg-transparent border-2 border-green-400 text-green-400"} p-2 rounded-lg flex justify-center items-center cursor-pointer`}
              onClick={() => {
                setCategory("gift items");
                setBtn1(false)
                setBtn2(false)
                setBtn3(false)
                setBtn4(true)
              }}
            >
              Gift items
            </label>
          </div>
        </div>
        <div className="w-full h-dvh grid grid-cols-6 gap-5 overflow-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {items
            .filter((items) =>
              items.name?.toLowerCase().includes(searchTxt) || category !== ""
                ? items.category?.toLowerCase().includes(category)
                : ""
            )
            .map((e, index) => {
              return (
                <div
                  className="bg-zinc-100 rounded-lg h-80 p-2 text-sm flex flex-col gap-2"
                  key={index}
                >
                  <div
                    className="bg-white rounded-lg w-full h-2/3 relative"
                    key={index}
                  >
                    <label className="bg-blue-500 p-1 rounded-lg absolute top-2 left-2 text-white">
                      {e.category}
                    </label>
                  </div>
                  <label className="font-bold">{e.name}</label>
                  <div className="flex flex-row gap-2">
                    <label className="p-1 rounded-full bg-yellow-300 w-1/2 flex justify-center items-center">
                      LKR {e.price}
                    </label>
                    <label className="p-1 rounded-full bg-red-400 w-1/2 flex justify-center items-center text-white">
                      stock {e.stock}
                    </label>
                  </div>
                  <div className="flex flex-row gap-2 justify-center items-center border-green-400 rounded-lg p-1 text-green-400 border-2">
                    <FiShoppingCart />
                    add
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
