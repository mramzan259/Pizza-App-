import { connectToDatabase } from "@/src/utils/dbConnection";
import pizzaData from "@/src/models/PizzaDataSchema";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectToDatabase();

    let { getDataById } = await params;

    const food = await pizzaData.findById({ _id: getDataById });

    console.log("=========== route");

    return NextResponse.json({ success: true, food }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};
