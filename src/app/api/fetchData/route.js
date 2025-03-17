import { connectToDatabase } from "@/src/utils/dbConnection";
import pizzaData from "@/src/utils/PizzaDataSchema";
import { NextResponse } from "next/server";

// import User from "@/models/User";

export const GET = async () => {
  try {
    await connectToDatabase();

    const foodData = await pizzaData.find();
    // console.log(foodData);
    return NextResponse.json({ success: true, foodData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};

export const POST = async (req) => {
  try {
    await connectToDatabase();
    // const users = await User.find();
    let data = await req.json();

    for (let i = 0; i < data.length; i++) {
      let food = new pizzaData({
        name: data[i].name,
        category: data[i].category,
        foodType: data[i].foodType,
        price: data[i].price,
        description: data[i].description,
        img: data[i].img,
      });

      await food.save();
    }
    // revalidatePath("/");

    return NextResponse.json(
      { success: true, user: "data save successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};
