import Orders from "@/src/models/OrdersSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  connectToDatabase();
  let { email } = await req.json();

  let ordersData = await Orders.findOne({ email });
  console.log(ordersData);

  if (ordersData === null) {
    return NextResponse.json({ success: false });
  } else {
    // let order_data = await ordersData.order_data;
    // console.log(order_data);

    return NextResponse.json({ ordersData });
  }
};

export const GET = async (req) => {
  connectToDatabase();
  let ordersData = await Orders.find();

  if (ordersData === null) {
    return NextResponse.json({ success: false });
  } else {
    return NextResponse.json({ ordersData });
  }
};
