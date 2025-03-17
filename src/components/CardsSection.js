"use client";
import React, { useState } from "react";
import Card from "./card";

const CardsSection = ({ foodData }) => {
  let [typeFilter, setTypeFilter] = useState("");

  let categories = new Set();
  let categoryArray = [];

  // console.log("====", categories);

  foodData?.map((data) => {
    categories.add(data.category);
  });
  categoryArray = [...categories];
  // console.log(categories);
  // console.log(categoryArray);

  // console.log("cardSection page");

  return (
    <div className="max-w-[1150px] mx-auto ">
      <div className="my-6 space-x-5">
        <button
          className={`border-black cursor-pointer rounded-full dark:border-white border-2 py-1 px-3 ${
            !typeFilter && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => setTypeFilter("")}
        >
          All
        </button>
        <button
          className={`border-black cursor-pointer rounded-full dark:border-white border-2 py-1 px-3 ${
            typeFilter === "Veg" && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => {
            setTypeFilter("Veg");
          }}
        >
          <span
            className={
              "lowercase font-thin bg-white border-green-500 border mr-2 px-0.1 text-green-500"
            }
          >
            ●
          </span>
          Veg
        </button>
        <button
          className={`border-black cursor-pointer rounded-full dark:border-white border-2 py-1 px-3 ${
            typeFilter === "Non-Veg" && "bg-slate-300 dark:bg-slate-600"
          } `}
          onClick={() => {
            setTypeFilter("Non-Veg");
          }}
        >
          <span
            className={
              "lowercase font-thin bg-white border-red-500 border mr-2 px-0.1 text-red-500"
            }
          >
            ●
          </span>
          Non Veg
        </button>
      </div>
      {categoryArray.map((category, i) => (
        <div key={i}>
          <div className="py-5">
            <h1 className="text-3xl font-bold">{category}</h1>
            <hr />
          </div>
          <div className="flex flex-wrap justify-center mx-auto">
            {foodData
              ?.filter((food) => food.category === category)
              ?.filter((data) =>
                typeFilter ? data.foodType === typeFilter : foodData
              )
              ?.map((data, i) => {
                return <Card key={i} food={data} />;
              })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsSection;
