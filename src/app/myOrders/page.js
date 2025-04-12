"use client";
import Customloading from "@/src/components/CustomLoad";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Orders = () => {
  const [loading, setLoading] = useState(true);

  const [ordersData, setOrdersData] = useState([]);
  const fetchData = async () => {
    try {
      let response = await fetch("/api/myOrdersData", {
        method: "POST",
        body: JSON.stringify({ email: localStorage.getItem("userEmail") }),
      });

      response = await response.json();

      setOrdersData(response?.ordersData?.order_data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Customloading />;
  }

  return (
    <>
      {ordersData.length > 0 ? (
        <div className="container my-4 mx-auto">
          {ordersData?.map((orders, index) => {
            return (
              <div key={index} className="mb-4">
                {/* Order Date */}
                <div className="w-full font-bold text-xl mb-2">
                  {orders[0].order_date} <hr />
                </div>

                {/* Order Items (Row-wise display) */}
                <div className="flex flex-wrap gap-4 mb-5 py-2">
                  {orders.slice(1).map((data, idx) => (
                    <div
                      key={idx}
                      className="w-[250px] border-black border-gradient p-4 dark:border-white rounded-lg"
                    >
                      <div className="relative w-full rounded-lg h-40">
                        <Image
                          src={data.img}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg"
                          alt="pizza"
                        />
                      </div>
                      <div className="font-bold text-lg mt-2">{data.name}</div>
                      <div className="flex justify-between items-center">
                        <div>{data.qty}</div>
                        <div>{data.size}</div>
                        <div className="font-semibold">{data.price}/-</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="flex w-screen flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold"> No previous Orders 😅</h1>
          <Link
            href="/"
            className="text-violet-500 text-xl hover:font-bold mt-8"
          >
            Go back to the home
          </Link>
        </div>
      )}
    </>
  );
};

export default Orders;
