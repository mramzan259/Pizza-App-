"use client";
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// // Dummy orders data (Replace with API)
// // const ordersData = [
// //   {
// //     id: 1,
// //     name: "Pepperoni Pizza",
// //     img: "/pizza.jpg",
// //     sizes: [
// //       { size: "Regular", price: 500, orders: 2 },
// //       { size: "Medium", price: 800, orders: 1 },
// //       { size: "Large", price: 1200, orders: 3 },
// //     ],
// //   },
// //   {
// //     id: 2,
// //     name: "Cheese Burger",
// //     img: "/burger.jpg",
// //     sizes: [
// //       { size: "Regular", price: 300, orders: 4 },
// //       { size: "Medium", price: 450, orders: 2 },
// //       { size: "Large", price: 600, orders: 1 },
// //     ],
// //   },
// //   {
// //     id: 3,
// //     name: "Cheese Burger",
// //     img: "/burger.jpg",
// //     sizes: [
// //       { size: "Regular", price: 300, orders: 4 },
// //       { size: "Medium", price: 450, orders: 2 },
// //       { size: "Large", price: 600, orders: 1 },
// //     ],
// //   },
// //   {
// //     id: 4,
// //     name: "Cheese Burger",
// //     img: "/burger.jpg",
// //     sizes: [
// //       { size: "Regular", price: 300, orders: 4 },
// //       { size: "Medium", price: 450, orders: 2 },
// //       { size: "Large", price: 600, orders: 1 },
// //     ],
// //   },
// // ];

// const Dashboard = () => {
//   const [orders, setOrders] = useState([]);
//   console.log("=====1", orders);
//   const [expandedOrders, setExpandedOrders] = useState([]); // Store multiple open orders

//   useEffect(() => {
// const getOrderData = async () => {
//   try {
//     let ordersData = await fetch("/api/myOrdersData");

//     ordersData = await ordersData.json();

//     console.log("=======", ordersData.ordersData);

//     setOrders(ordersData.ordersData);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getOrderData();
//   }, []);

//   // Calculate grand total of all orders
//   // const grandTotal = orders.reduce(
//   //   (acc, order) =>
//   //     acc +
//   //     order.sizes.reduce(
//   //       (itemTotal, size) => itemTotal + size.price * size.orders,
//   //       0
//   //     ),
//   //   0
//   // );

//   // Toggle Order Details (Accordion Behavior)
//   const toggleOrder = (orderId) => {
//     setExpandedOrders(
//       (prev) =>
//         prev.includes(orderId)
//           ? prev.filter((id) => id !== orderId) // Close if already open
//           : [...prev, orderId] // Open if not in list
//     );
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Orders</h1>

//       <div className="bg-white shadow-md rounded-lg p-4">
//         {orders.length > 0 ? (
//           <div className="space-y-4">
//             {orders.map((user) => {
//               console.log("hello", user);
//               console.log("hello", orders);

//               // Calculate total price of each order
//               {
//                 /* const totalOrderPrice = order.sizes.reduce(
//                 (acc, size) => acc + size.price * size.orders,
//                 0
//               ); */
//               }

//               user.order_data.map((orders) => {
//                 console.log(user.email);
//                 orders.slice(1).map((order) => {
//                   let pizzaSummary = [];

//                   let {name,qty,size,img,price} = order;

//                   pizzaSummary.map((item) => {
//                     {/* if(item.name === name){
//                       if()
//                     } */}
//                   })

//                 });
//               })

//               [
//                 {
//                   name: "pizza",
//                   img: "",
//                   size: {
//                     regular: "",
//                     medium: "",
//                     large: "",
//                   },
//                 }
//               ];

//               return null;
//             })}
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">No orders available.</p>
//         )}

//         {/* Grand Total */}
//         {orders.length > 0 && (
//           <div className="mt-6 text-right text-xl font-bold">
//             Grand Total: Rs {grandTotal}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ====================================================================== 2
// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const Dashboard = () => {
//   const [orders, setOrders] = useState([]);
//   console.log(orders);
//   const [expandedOrders, setExpandedOrders] = useState([]);
//   const [pizzaSummary, setPizzaSummary] = useState({});

//   useEffect(() => {
//     // Fetch orders from API (Replace with actual API call)
//     const getOrderData = async () => {
//       try {
//         let ordersData = await fetch("/api/myOrdersData");

//         ordersData = await ordersData.json();

//         console.log("=======", ordersData.ordersData);

//         setOrders(ordersData.ordersData);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     getOrderData();
//     // setOrders(ordersData);

//     // Process orders to calculate monthly size-wise count
//     const summary = {};
//     orders.forEach((order) => {
//       order.sizes.forEach((size) => {
//         const { name, size: pizzaSize, orders } = size;

//         if (!summary[name]) {
//           summary[name] = {
//             small: 0,
//             medium: 0,
//             large: 0,
//             single: 0,
//             double: 0,
//           };
//         }

//         summary[name][pizzaSize.toLowerCase()] += orders;
//       });
//     });

//     setPizzaSummary(summary);
//   }, []);

//   // Calculate grand total of all orders
//   const grandTotal = orders.reduce(
//     (acc, order) =>
//       acc +
//       order.sizes.reduce(
//         (itemTotal, size) => itemTotal + size.price * size.orders,
//         0
//       ),
//     0
//   );

//   // Toggle Order Details (Accordion Behavior)
//   const toggleOrder = (orderId) => {
//     setExpandedOrders(
//       (prev) =>
//         prev.includes(orderId)
//           ? prev.filter((id) => id !== orderId) // Close if already open
//           : [...prev, orderId] // Open if not in list
//     );
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Orders</h1>

//       <div className="bg-white shadow-md rounded-lg p-4">
//         {orders.length > 0 ? (
//           <div className="space-y-4">
//             {orders.map((order) => {
//               // Calculate total price of each order
//               const totalOrderPrice = order.sizes.reduce(
//                 (acc, size) => acc + size.price * size.orders,
//                 0
//               );

//               return (
//                 <div
//                   key={order.id}
//                   className="border rounded-lg bg-gray-100 shadow-sm"
//                 >
//                   {/* Accordion Header */}
//                   <button
//                     onClick={() => toggleOrder(order.id)}
//                     className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition-all"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Image
//                         src={order.img}
//                         width={60}
//                         height={60}
//                         className="rounded-lg"
//                         alt={order.name}
//                       />
//                       <h2 className="text-lg font-semibold">{order.name}</h2>
//                     </div>
//                     <span className="text-xl">
//                       {expandedOrders.includes(order.id) ? (
//                         <FaChevronUp />
//                       ) : (
//                         <FaChevronDown />
//                       )}
//                     </span>
//                   </button>

//                   {/* Accordion Content (Order Details) */}
//                   {expandedOrders.includes(order.id) && (
//                     <div className="p-4 border-t bg-white transition-all duration-500">
//                       <table className="w-full border-collapse">
//                         <thead>
//                           <tr className="bg-gray-200">
//                             <th className="p-2 text-left">Size</th>
//                             <th className="p-2 text-left">Price</th>
//                             <th className="p-2 text-left">Orders</th>
//                             <th className="p-2 text-left">Total</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {order.sizes.map((size, index) => (
//                             <tr key={index} className="border-t">
//                               <td className="p-2">{size.size}</td>
//                               <td className="p-2">Rs {size.price}</td>
//                               <td className="p-2">{size.orders}</td>
//                               <td className="p-2 font-bold">
//                                 Rs {size.price * size.orders}
//                               </td>
//                             </tr>
//                           ))}
//                         </tbody>
//                       </table>

//                       {/* Total Price of the Order */}
//                       <div className="mt-4 text-right text-lg font-bold">
//                         Total: Rs {totalOrderPrice}
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               );
//             })}
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">No orders available.</p>
//         )}

//         {/* Grand Total */}
//         {orders.length > 0 && (
//           <div className="mt-6 text-right text-xl font-bold">
//             Grand Total: Rs {grandTotal}
//           </div>
//         )}
//       </div>

//       {/* Pizza Summary Section */}
//       <div className="mt-10 bg-white shadow-md rounded-lg p-4">
//         <h2 className="text-2xl font-bold mb-4">Monthly Pizza Size Summary</h2>
//         {Object.keys(pizzaSummary).length > 0 ? (
//           <table className="w-full border-collapse">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="p-2 text-left">Pizza Name</th>
//                 <th className="p-2 text-center">Small</th>
//                 <th className="p-2 text-center">Medium</th>
//                 <th className="p-2 text-center">Large</th>
//                 <th className="p-2 text-center">Single</th>
//                 <th className="p-2 text-center">Double</th>
//               </tr>
//             </thead>
//             <tbody>
//               {Object.entries(pizzaSummary).map(([pizza, sizes], index) => (
//                 <tr key={index} className="border-t">
//                   <td className="p-2">{pizza}</td>
//                   <td className="p-2 text-center">{sizes.small}</td>
//                   <td className="p-2 text-center">{sizes.medium}</td>
//                   <td className="p-2 text-center">{sizes.large}</td>
//                   <td className="p-2 text-center">{sizes.single}</td>
//                   <td className="p-2 text-center">{sizes.double}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         ) : (
//           <p className="text-gray-600 text-center">No data available.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// ================================================================== 3

// import React, { useEffect, useState } from "react";

// const AdminDashboard = () => {
//   const [orders, setOrders] = useState([]);

//   const getOrderData = async () => {
//     try {
//       let ordersData = await fetch("/api/myOrdersData");
//       ordersData = await ordersData.json();
//       setOrders(ordersData.ordersData);
//     } catch (error) {
//       console.error("Error fetching orders:", error);
//     }
//   };

//   useEffect(() => {
//     getOrderData();
//   }, []);

//   return (
//     <div className="container mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
//       {orders.length === 0 ? (
//         <p>Loading orders...</p>
//       ) : (
//         <div className="space-y-6">
//           {orders.map((userOrder) => (
//             <div key={userOrder._id} className="border p-4 rounded-md shadow-md">
//               <h2 className="text-lg font-semibold">{userOrder.email}</h2>
//               {userOrder.order_data.map((order, index) => (
//                 <div key={index} className="mt-4">
//                   <h3 className="text-md font-medium text-gray-700">
//                     Order Date: {order[0].order_date}
//                   </h3>
//                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
//                     {order.slice(1).map((item) => (
//                       <div
//                         key={item.tempId}
//                         className="border p-3 rounded-md shadow-sm"
//                       >
//                         <img
//                           src={item.img}
//                           alt={item.name}
//                           className="w-full h-32 object-cover rounded-md"
//                         />
//                         <h4 className="text-md font-semibold mt-2">{item.name}</h4>
//                         <p>Size: {item.size}</p>
//                         <p>Price: ${item.price}</p>
//                         <p>Quantity: {item.qty}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AdminDashboard;

// ====================================================== 4

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const Dashboard = () => {
//   const [orders, setOrders] = useState([]);
//   const [expandedOrders, setExpandedOrders] = useState([]);
//   const [pizzaSummary, setPizzaSummary] = useState({});
//   const [grandTotal, setGrandTotal] = useState(0);

//   useEffect(() => {
//     const getOrderData = async () => {
//       try {
//         let response = await fetch("/api/myOrdersData");
//         let data = await response.json();

//         console.log(data.ordersData);

//         let flattenedOrders = [];
//         let summary = {};
//         let totalAmount = 0;

//         data.ordersData.forEach((userOrder) => {
//           userOrder.order_data.forEach((orderGroup) => {
//             const orderDate = orderGroup[0].order_date;

//             orderGroup.slice(1).forEach((item) => {
//               const { id, name, price, qty, size, img } = item;

//               // Flatten orders
//               flattenedOrders.push({
//                 id,
//                 name,
//                 price,
//                 qty,
//                 size,
//                 img,
//                 orderDate,
//               });

//               // Grand Total Calculation
//               totalAmount += price * qty;

//               // Pizza Summary Calculation
//               if (!summary[name]) {
//                 summary[name] = {
//                   small: 0,
//                   medium: 0,
//                   large: 0,
//                   single: 0,
//                   double: 0,
//                   regular: 0,
//                 };
//               }
//               summary[name][size.toLowerCase()] += qty;
//             });
//           });
//         });

//         setOrders(flattenedOrders);
//         setPizzaSummary(summary);
//         setGrandTotal(totalAmount);
//       } catch (error) {
//         console.error("Error fetching orders:", error);
//       }
//     };

//     getOrderData();
//   }, []);

//   // Toggle Order Details (Accordion Behavior)
//   const toggleOrder = (orderId) => {
//     setExpandedOrders((prev) =>
//       prev.includes(orderId)
//         ? prev.filter((id) => id !== orderId)
//         : [...prev, orderId]
//     );
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Orders</h1>

//       <div className="bg-white shadow-md rounded-lg p-4">
//         {orders.length > 0 ? (
//           <div className="space-y-4">
//             {orders.map((order) => (
//               <div
//                 // key={order.id}
//                 className="border rounded-lg bg-gray-100 shadow-sm"
//               >
//                 {/* Accordion Header */}
//                 <button
//                   onClick={() => toggleOrder(order.id)}
//                   className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition-all"
//                 >
//                   <div className="flex items-center gap-4">
//                     <Image
//                       src={order.img}
//                       width={60}
//                       height={60}
//                       className="rounded-lg"
//                       alt={order.name}
//                     />
//                     <div>
//                       <h2 className="text-lg font-semibold">{order.name}</h2>
//                       <p className="text-sm text-gray-500">
//                         Order Date: {order.orderDate}
//                       </p>
//                     </div>
//                   </div>
//                   <span className="text-xl">
//                     {expandedOrders.includes(order.id) ? (
//                       <FaChevronUp />
//                     ) : (
//                       <FaChevronDown />
//                     )}
//                   </span>
//                 </button>

//                 {/* Accordion Content */}
//                 {expandedOrders.includes(order.id) && (
//                   <div className="p-4 border-t bg-white transition-all duration-500">
//                     <table className="w-full border-collapse">
//                       <thead>
//                         <tr className="bg-gray-200">
//                           <th className="p-2 text-left">Size</th>
//                           <th className="p-2 text-left">Price</th>
//                           <th className="p-2 text-left">Quantity</th>
//                           <th className="p-2 text-left">Total</th>
//                         </tr>
//                       </thead>
//                       <tbody>
//                         <tr className="border-t">
//                           <td className="p-2">{order.size}</td>
//                           <td className="p-2">Rs {order.price}</td>
//                           <td className="p-2">{order.qty}</td>
//                           <td className="p-2 font-bold">
//                             Rs {order.price * order.qty}
//                           </td>
//                         </tr>
//                       </tbody>
//                     </table>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="text-gray-600 text-center">No orders available.</p>
//         )}

//         {/* Grand Total */}
//         {orders.length > 0 && (
//           <div className="mt-6 text-right text-xl font-bold">
//             Grand Total: Rs {grandTotal}
//           </div>
//         )}
//       </div>

//  {/* Pizza Summary Section */}
// <div className="mt-10 bg-white shadow-md rounded-lg p-4">
//   <h2 className="text-2xl font-bold mb-4">Monthly Pizza Size Summary</h2>
//   {Object.keys(pizzaSummary).length > 0 ? (
//     <table className="w-full border-collapse">
//       <thead>
//         <tr className="bg-gray-200">
//           <th className="p-2 text-left">Pizza Name</th>
//           <th className="p-2 text-center">Small</th>
//           <th className="p-2 text-center">Medium</th>
//           <th className="p-2 text-center">Large</th>
//           <th className="p-2 text-center">Single</th>
//           <th className="p-2 text-center">Double</th>
//           <th className="p-2 text-center">Regular</th>
//         </tr>
//       </thead>
//       <tbody>
//         {Object.entries(pizzaSummary).map(([pizza, sizes], index) => (
//           <tr key={index} className="border-t">
//             <td className="p-2">{pizza}</td>
//             <td className="p-2 text-center">{sizes.small}</td>
//             <td className="p-2 text-center">{sizes.medium}</td>
//             <td className="p-2 text-center">{sizes.large}</td>
//             <td className="p-2 text-center">{sizes.single}</td>
//             <td className="p-2 text-center">{sizes.double}</td>
//             <td className="p-2 text-center">{sizes.regular}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   ) : (
//     <p className="text-gray-600 text-center">No data available.</p>
//   )}
//  </div>
//     </div>
//   );
// };

// export default Dashboard;

// =========================================================== perfect code my
import { useState, useEffect } from "react";
import Image from "next/image";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import PizzaSummary from "@/src/components/OrderSummary";
import Customloading from "@/src/components/CustomLoad";

const Dashboard = () => {
  const [groupedOrders, setGroupedOrders] = useState({});
  const [expandedOrders, setExpandedOrders] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  console.log("admin page-----------------");

  const currentDate = new Date();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currentMonth = monthNames[currentDate.getMonth()]; // Get month name
  const currentYear = String(currentDate.getFullYear()); // Get year

  // let filteredData = [];
  const [filteredData, setFilteredData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setSelectedYear] = useState(currentYear);

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const years = ["2023", "2024", "2025"];

  // getting data for accordian............
  useEffect(() => {
    const getOrderData = async () => {
      try {
        let response = await fetch("/api/myOrdersData");
        let data = await response.json();

        let orderSummary = {};
        let totalAmount = 0;

        data.ordersData.forEach((userOrder) => {
          userOrder.order_data.forEach((orderGroup) => {
            orderGroup.slice(1).forEach((item) => {
              const { id, name, price, qty, size, img } = item;

              if (!orderSummary[name]) {
                orderSummary[name] = {
                  img,
                  sizes: {},
                  totalAmount: 0,
                };
              }

              if (!orderSummary[name].sizes[size]) {
                orderSummary[name].sizes[size] = { qty: 0, price: 0 };
              }

              orderSummary[name].sizes[size].qty += Number(qty);
              orderSummary[name].sizes[size].price += price * qty;
              totalAmount += price * qty;
            });
          });
        });

        setGroupedOrders(orderSummary);
        setGrandTotal(totalAmount);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false); // Stop loading when done
      }
    };

    getOrderData();
  }, []);

  // Toggle Order Details (Accordion Behavior)
  const toggleOrder = (pizzaName) => {
    setExpandedOrders((prev) =>
      prev.includes(pizzaName)
        ? prev.filter((name) => name !== pizzaName)
        : [...prev, pizzaName]
    );
  };

  useEffect(() => {
    fetchOrders();
  }, [selectedMonth, selectedYear]);

  const fetchOrders = async () => {
    // let query = {};
    // if (selectedMonth) query.month = selectedMonth;
    // if (selectedYear) query.year = selectedYear;

    const response = await fetch(`/api/orders`);
    const data = await response.json();
    console.log(data.foodData);

    let updatedFilteredData = [];

    // data.foodData.map((order) => {
    //   let d = [];
    //   d = order.order_data.filter((item) => {
    //     const dateStr = item[0].order_date;
    //     const dateParts = dateStr.split(" "); // ["Thu", "April", "20", "2023"]

    //     const month = dateParts[1]; // "April"

    //     const year = dateParts[3]; // "2023"

    //     // console.log(month, year);
    //     if (currentMonth === month) {
    //       item.slice(1).map((orderItem) => {
    //         filteredData.push(orderItem);
    //       });
    //       // return item;
    //     }
    //     // item.filter(())
    //   });
    //   console.log(d);
    //   console.log(filteredData);
    // });

    // setFilteredData(filteredData);
    // console.log(data);

    data.foodData.forEach((order) => {
      order.order_data.forEach((item) => {
        const dateStr = item[0].order_date;
        const dateParts = dateStr.split(" ");
        const month = dateParts[1];
        const year = dateParts[3];

        if (
          (selectedMonth &&
            !selectedYear &&
            month === selectedMonth &&
            year === currentYear) ||
          (!selectedMonth && selectedYear && year === selectedYear) ||
          (selectedMonth &&
            selectedYear &&
            month === selectedMonth &&
            year === selectedYear)
        ) {
          item.slice(1).forEach((orderItem) => {
            updatedFilteredData.push(orderItem);
          });
        }
      });
    });

    setFilteredData(updatedFilteredData); // State update
    setOrders(data);
  };

  // const groupedOr = filteredData.reduce((acc, order) => {
  //   const key = `${order.name}-${order.size}`;
  //   if (!acc[key]) {
  //     acc[key] = { ...order, qty: 0, totalPrice: 0 };
  //   }
  //   acc[key].qty += order.qty;
  //   acc[key].totalPrice += order.price;
  //   return acc;
  // }, {});

  // const finalOr = Object.values(groupedOr);

  if (loading) {
    return <Customloading />;
  }

  return (
    <div className="container mx-auto p-6 ">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard - Orders</h1>

      <div className="bg-white shadow-md rounded-lg p-4 border">
        {Object.keys(groupedOrders).length > 0 ? (
          <div className="space-y-4">
            {Object.entries(groupedOrders).map(([name, details]) => (
              <div
                key={name}
                className="border rounded-lg bg-gray-100 shadow-sm"
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleOrder(name)}
                  className="w-full flex justify-between items-center p-4 cursor-pointer hover:bg-gray-200 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={details.img}
                      width={60}
                      height={60}
                      className="rounded-lg"
                      alt={name}
                    />
                    <h2 className="text-lg font-semibold">{name}</h2>
                  </div>
                  <span className="text-xl">
                    {expandedOrders.includes(name) ? (
                      <FaChevronUp />
                    ) : (
                      <FaChevronDown />
                    )}
                  </span>
                </button>

                {/* Accordion Content */}
                {expandedOrders.includes(name) && (
                  <div className="p-4 border-t bg-white transition-all duration-500">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="p-2 text-left">Size</th>
                          <th className="p-2 text-left">Total Quantity</th>
                          <th className="p-2 text-left">Total Price</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(details.sizes).map(
                          ([size, data], index) => (
                            <tr key={index} className="border-t">
                              <td className="p-2">{size}</td>
                              <td className="p-2">{data.qty}</td>
                              <td className="p-2 font-bold">Rs {data.price}</td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">No orders available.</p>
        )}

        {/* Grand Total */}
        {Object.keys(groupedOrders).length > 0 && (
          <div className="mt-6 text-right text-xl font-bold">
            Grand Total: Rs {grandTotal}
          </div>
        )}
      </div>

      <div className="p-5 bg-gray-100 min-h-screen">
        <h2 className="text-2xl font-bold text-center mb-5">Order History</h2>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-5">
          <select
            className="p-2 border rounded bg-white"
            onChange={(e) => setSelectedMonth(e.target.value)}
            value={selectedMonth}
          >
            <option value="">Select Month</option>
            {months.map((month, index) => (
              <option key={index} value={monthNames[index]}>
                {month}
              </option>
            ))}
          </select>

          <select
            className="p-2 border rounded bg-white"
            onChange={(e) => setSelectedYear(e.target.value)}
            value={selectedYear}
          >
            <option value={currentYear}>{currentYear}</option>
            {years.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
        </div>
        <PizzaSummary orders={filteredData} />
      </div>
    </div>
  );
};

export default Dashboard;
