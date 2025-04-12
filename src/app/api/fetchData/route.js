import { connectToDatabase } from "@/src/utils/dbConnection";
import pizzaData from "@/src/models/PizzaDataSchema";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    await connectToDatabase();

    const foodData = await pizzaData.find();

    return NextResponse.json({ success: true, foodData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
};

// To store multipl items at a time.
// export const POST = async (req) => {
//   try {
//     await connectToDatabase();
//     // const users = await User.find();
//     le,

//     for (let i = 0; i ,
//       let food = new pizzaData({
//         name,
//         category,
//         foodType,
//         price,
//         description,
//         img,
//       });

//       await food.save();
//     }
//     // revalidatePath("/");

//     return NextResponse.json(
//       { success: true, user:,
//       { status: 200 }
//     );
//   } catch (error) {
//     return NextResponse.json(
//       { success: false, error: error.message },
//       { status: 500 }
//     );
//   }
// };

// To store one item at a time.
export const POST = async (req) => {
  try {
    await connectToDatabase();

    let { name, description, price, foodType, foodCategory, img } =
      await req.json();

    let food = new pizzaData({
      name,
      category: foodCategory,
      foodType,
      price,
      description,
      img,
    });

    await food.save();

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
