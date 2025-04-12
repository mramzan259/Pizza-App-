import Orders from "@/src/models/OrdersSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connectToDatabase();

    const foodData = await Orders.find({}, { order_data: 1, _id: 0 });

    return NextResponse.json({ success: true, foodData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};
