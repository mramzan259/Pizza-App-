import pizzaData from "@/src/models/PizzaDataSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";

export const PUT = async (req, { params }) => {
  try {
    await connectToDatabase();
    let { foodData } = await req.json();

    let { id } = await params;
    console.log("my id product", id);

    console.log(foodData, "ok");

    let res = await pizzaData.findByIdAndUpdate(
      { _id: id },
      foodData,
      { new: true } // Returns updated document
    );

    if (res === null) {
      return NextResponse.json({ success: false });
    } else {
      // let order_data = await ordersData.order_data;
      // console.log(order_data);
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.log(error);
  }
};
