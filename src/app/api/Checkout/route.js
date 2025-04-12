import Orders from "@/src/models/OrdersSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  await connectToDatabase();
  let { order_data, order_date, email } = await req.json();

  // {order_data:[],email:string,order_date:date}   // formate

  await order_data.splice(0, 0, { order_date: order_date });

  let user = await Orders.findOne({ email });

  try {
    if (user === null) {
      await Orders.create({
        email: email,
        order_data: [order_data],
      });
      return NextResponse.json({ success: true });
    } else {
      await Orders.findOneAndUpdate({ email }, { $push: { order_data } });
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error });
  }
};
