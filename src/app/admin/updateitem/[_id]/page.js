"use client";
import Customloading from "@/src/components/CustomLoad";
import { notFound, useRouter } from "next/navigation";
import React, { use, useEffect, useState } from "react";
// import Custom404 from "../404";

const sidesPriceOption = { single: "", double: "" };
const pizzaPriceOption = { regular: "", medium: "", large: "" };

function Admin({ params }) {
  const [loading, setLoading] = useState(true);

  const { _id } = use(params);

  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let res = await fetch(`/api/${_id}`);

        res = await res.json();

        setFoodData(res.food);
      } catch (error) {
        console.log(error);
        alert("Something wrong...");
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchData();
  }, [_id]);

  // const [mounted, setMounted] = useState(false);
  const [foodData, setFoodData] = useState({
    name: "",
    category: "",
    foodType: "",
    price: "",
    description: "",
    img: "",
  });

  const handleChange = (e) => {
    setFoodData((prevData) => {
      return { ...prevData, [e.target.name]: e.target.value };
    });
    if (e.target.name === "category") {
      if (e.target.value === "Pizza") {
        setFoodData((prevData) => {
          return { ...prevData, price: pizzaPriceOption };
        });
      } else if (e.target.value === "SIDES & BEVERAGES") {
        setFoodData((prevData) => {
          return { ...prevData, price: sidesPriceOption };
        });
      } else {
        setFoodData((prevData) => {
          return { ...prevData, price: e.target.value };
        });
      }
    }
  };
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();

      const response = await fetch(`/api/updateItem/${_id}`, {
        method: "PUT",
        body: JSON.stringify({ foodData }),
      });

      const result = await response.json();

      if (result.success) {
        alert("Food data updated successfully");
        router.push("/admin/showItems");
      } else {
        alert("Failed to update");
      }
    } catch (error) {
      alert("Something wrong...");
      console.log(error);
    }
  };

  // if (JSON.parse(localStorage.getItem("isAdmin")) === true) {
  //   console.log("===========")
  //   setMounted(true);
  // }
  // useEffect(() => {
  // }, []);

  if (loading) {
    return <Customloading />;
  }

  return (
    <>
      {JSON.parse(localStorage.getItem("isAdmin")) === true ? (
        <div
          style={{
            // minHeight: "90vh",
            backgroundImage:
              'url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
            backgroundSize: "cover",
          }}
          className=" flex justify-center content-center items-center py-5 "
        >
          <div className=" container w-full max-w-md">
            <form
              onSubmit={handleSubmit}
              className="bg-gray-100 dark:bg-gray-900 dark:text-gray-100 border-gradient rounded-lg shadow-2xl px-8 pt-6 pb-8 mb-4"
            >
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Name
                </label>
                <input
                  placeholder="Food name"
                  name="name"
                  onChange={handleChange}
                  type="text"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.name}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="category"
                  className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Category
                </label>
                <select
                  placeholder="Food Category"
                  name="category"
                  onChange={handleChange}
                  type="category"
                  required
                  style={{ "-webkit-appearance": "auto" }}
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-900"
                  value={foodData.category}
                >
                  <option value="">Select Food Category</option>
                  <option value="Pizza">PIZZA</option>
                  <option value="SIDES & BEVERAGES">SIDES & BEVERAGES</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="foodType"
                  className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Type
                </label>
                <select
                  onChange={handleChange}
                  name="foodType"
                  required
                  style={{ "-webkit-appearance": "auto" }}
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline dark:bg-gray-900"
                  value={foodData.foodType}
                >
                  <option value="">Select food type</option>
                  <option value="Veg">Veg</option>
                  <option value="Non-Veg">Non-Veg</option>
                </select>
              </div>

              {foodData.category !== "" && (
                <div className="mb-4">
                  <label
                    htmlFor="geolocation"
                    className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                  >
                    Food Price
                  </label>
                  {foodData.price !== "" &&
                    Object.keys(foodData.price).map((key) => {
                      return (
                        <div key={key} className="ml-4 mb-4">
                          <label
                            className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                            htmlFor={key}
                          >
                            {key}
                          </label>
                          <input
                            key={key}
                            type="number"
                            name={key}
                            placeholder={`Price of ${key}`}
                            value={foodData?.price[key]}
                            onChange={(e) => {
                              setFoodData({
                                ...foodData,
                                price: {
                                  ...foodData.price,
                                  [key]: e.target.value,
                                },
                              });
                            }}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                          />
                        </div>
                      );
                    })}
                </div>
              )}
              <div className="mb-4">
                <label
                  htmlFor="description"
                  className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Description
                </label>
                <textarea
                  rows={4}
                  placeholder="description"
                  name="description"
                  onChange={handleChange}
                  type="text"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.description}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="img"
                  className="block text-gray-700  dark:text-gray-300 text-sm font-bold mb-2"
                >
                  Food Image
                </label>
                <input
                  placeholder="img"
                  name="img"
                  onChange={handleChange}
                  type="url"
                  required
                  className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 focus:border-indigo-700 text-gray-700 dark:text-gray-100  leading-tight focus:outline-none focus:shadow-outline"
                  value={foodData.img}
                />
              </div>
              <div className="flex items-center justify-between"></div>
              <button
                type="submit"
                className="border font-bold text-gray-900 dark:text-gray-100 dark:border-gray-400 border-gray-900 rounded p-2 mr-2 hover:bg-gradient-to-r from-indigo-700 via-violet-700 to-orange-700  hover:text-gray-100"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      ) : (
        notFound()
      )}
    </>
  );
}

export default Admin;
