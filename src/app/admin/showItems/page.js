"use client";
import Customloading from "@/src/components/CustomLoad";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";

const ShowItems = () => {
  let [typeFilter, setTypeFilter] = useState("");
  let [query, setQuery] = useState("");
  const [foodData, setFoodData] = useState(null);
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFoodData = async () => {
      try {
        let response = await fetch(`/api/fetchData`, {
          next: { revalidate: 60 },
        });
        response = await response.json();
        if (response.success) {
          setFoodData(response.foodData);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    fetchFoodData();
  }, []);

  if (loading) {
    return <Customloading />;
  }

  const handleDeleteItem = async (_id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (!confirmDelete) {
      return; // Stop execution if user clicks 'Cancel'
    }

    try {
      let res = await fetch(`/api/deleteItem/${_id}`, {
        method: "DELETE",
      });

      res = await res.json();
      console.log(res);

      if (res.success) {
        alert("Item deleted Successfully");
        // router.refresh();
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      alert("Error while deleting the item");
    }
  };

  return (
    <div
      style={{ minHeight: "95vh" }}
      className="flex flex-col justify-center  p-3  "
    >
      <div className="flex justify-between my-6 px-3 space-x-5">
        <div className="flex gap-2">
          <button
            className={`border-black cursor-pointer rounded-full dark:border-white border-2 py-1 px-3 ${
              !typeFilter && "bg-slate-500 dark:bg-slate-600 text-white"
            } `}
            onClick={() => setTypeFilter("")}
          >
            All
          </button>
          <button
            className={`border-black cursor-pointer rounded-full dark:border-white border-2 py-1 px-3 ${
              typeFilter === "Veg" &&
              "bg-slate-500 dark:bg-slate-600 text-white"
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
              typeFilter === "Non-Veg" &&
              "bg-slate-500 dark:bg-slate-600 text-white"
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
        <div>
          <input
            type="search"
            className="w-full max-w-md border border-gray-900 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400"
            placeholder="Search for an item..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="container mx-auto flex border-gradient p-1 pb-10 rounded-lg flex-col ">
        <div className=" ">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-4 ">
            <div className="overflow-hidden ">
              <table className="min-w-full text-left text-lg font-light">
                <thead className="border-b font-medium dark:border-neutral-500">
                  <tr className="">
                    <th scope="col" className="px-4 py-4 border">
                      #
                    </th>
                    <th scope="col" className="px-4 py-4 border ">
                      <div className="flex items-center">
                        Item name
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-4 py-4 border">
                      <div className="flex items-center justify-center">
                        Category
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className=" px-4 border py-4 ">
                      <div className="flex items-center ">
                        Food Type
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-4 border  ">
                      <div className="flex items-center justify-center ">
                        Price
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </th>
                    <th scope="col" className="px-3 py-4 border ">
                      <div className="flex items-center">
                        Actions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6 mx-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {foodData
                    ?.filter((data) =>
                      typeFilter ? data.foodType === typeFilter : foodData
                    )
                    ?.filter((data) =>
                      query ? data.name.toLowerCase().includes(query) : data
                    )
                    .map((data, index) => {
                      return (
                        <tr
                          key={index}
                          className="border-b dark:border-neutral-500 text-center "
                        >
                          <td className="whitespace-nowrap px-6 py-4 font-medium">
                            {index + 1}
                          </td>
                          <td className=" whitespace-nowrap px-6 py-4">
                            <div className="flex  items-center gap-2">
                              <Image
                                src={data.img}
                                alt="food image"
                                width={50}
                                height={50}
                              />
                              {data.name}
                            </div>
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 ">
                            {data.category}
                          </td>
                          <td className="whitespace-nowrap  px-12 py-4">
                            {data.foodType}
                          </td>
                          <td className="whitespace-nowrap px-6 py-4">
                            {Object.entries(data.price).map(([size, price]) => (
                              <div
                                key={size}
                                className="flex justify-between gap-2"
                              >
                                <span className="font-normal">
                                  {size.charAt(0).toUpperCase() +
                                    size.slice(1, 3).trim()}
                                  :
                                </span>
                                <span className="font-normal  text-gray-600 ">
                                  Rs. {price}/-
                                </span>
                              </div>
                            ))}
                          </td>

                          {/* delete option */}
                          <td className="cursor-pointer whitespace-nowrap  py-2 ">
                            <div className="flex flex-col items-center gap-4 ">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6 hover:text-red-500 "
                                onClick={() => {
                                  handleDeleteItem(data._id);
                                }}
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                              </svg>

                              <Link href={`/admin/updateitem/${data._id}`}>
                                <FiEdit className="text-[20px] hover:text-blue-700  " />
                              </Link>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowItems;
