import pizzaData from "@/src/models/PizzaDataSchema";
import { connectToDatabase } from "@/src/utils/dbConnection";
import { NextResponse } from "next/server";

export const DELETE = async (req, { params }) => {
  try {
    await connectToDatabase();

    const { id } = await params;

    const empData = await pizzaData.deleteOne({ _id: id });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: true, error: error });
  }
};
