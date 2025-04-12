"use client";
import Image from "next/image";
import React, { useContext, useState } from "react";
import { CartContext } from "../utils/ContextReducer";
import Link from "next/link";

function Card(props) {
  const data = props.food;
  // const { food : data } = props;
  // console.log("card page");

  const { state, dispatch } = useContext(CartContext);
  const priceOptions = Object.keys(data.price);
  const [size, setSize] = useState(priceOptions[0]);
  const [qty, setQty] = useState(1);

  const handleQty = (e) => {
    setQty(e.target.value);
  };

  const handleSize = (e) => {
    setSize(e.target.value);
  };
  const handleAddToCart = async () => {
    const updateItem = await state.find(
      (item) => item.tempId === data["_id"] + size
      // (item) => item.tempId === data.id + size
    );
    if (!updateItem) {
      dispatch({
        type: "ADD",
        id: data["_id"],
        // id: data.id,
        tempId: data["_id"] + size,
        // tempId: data.id + size,
        name: data.name,
        price: finalPrice,
        qty: qty,
        priceOption: size,
        img: data.img,
        foodCategory : data.category,
      });
      console.log(state);
    }
    if (updateItem) {
      dispatch({
        type: "UPDATE",
        tempId: data["_id"] + size,
        // tempId: data.id+ size,
        price: finalPrice,
        qty: qty,
      });
    }
    console.log(state);
  };
  let finalPrice = qty * parseInt(data.price[size]); // yaha per "price" ayk object ha or "size" string ka ya rule ha k ager dynamicaly object main sy value extract kerni ho, means jb "size" ki value dynamicaly change hogi to ya approach use keryn gye, otherwise simple to aysy hota ha "price.regular"

  return (
    <div className="box dark:hover:scale-100">
      <div className="w-80 rounded-lg bg-white overflow-hidden dark:bg-black border-gradient">
        <Link href={`/detail/${data["_id"]}`}>
          {/* <Link href={{ pathname: "/[foodID]" }} as={`Item/${data["_id"]}`}> */}
          <div className="relative w-full h-60">
            <Image
              src={data.img}
              layout="fill"
              objectFit="cover"
              alt={`Image of ${data.name}`}
            />
          </div>
          <div className="p-4">
            <div className="custom-ellipsis font-bold mb-2 text-xl uppercase"> {data.name}</div>
            <p className=" short_description text-gray-700 dark:text-gray-400 text-base">
              {data.description}
            </p>
          </div>
        </Link>
        <div className="flex px-4 justify-between">
          <select
            className=" h-8 text-[20px]  p-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleQty}
          >
            {Array.from(Array(6), (e, i) => {
              return (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              );
            })}
          </select>
          <select
            className=" h-8 text-[20px] pl-1 text-black hover:font-bold font-semibold cursor-pointer dark:text-gray-300  border border-black dark:border-gray-400 rounded"
            onChange={handleSize}
          >
            {priceOptions.map((options) => {
              return (
                <option className="uppercase" key={options} value={options}>
                  {options}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex p-4 font-bold justify-between items-center">
          <button
            onClick={handleAddToCart}
            className="border text-[20px] cursor-pointer dark:border-gray-400 border-gray-900 rounded p-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100 "
          >
            Add to cart
          </button>
          <p className="p-2 text-xl">Rs.{finalPrice}/-</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
