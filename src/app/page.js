import CarouselComponent from "../components/heroSection";
import CardsSection from "../components/CardsSection";
import { baseUrl } from "../utils/baseUrl";

// export const dynamic = "force-dynamic";

const fetchFoodData = async () => {
  try {
    let response = await fetch(`${baseUrl}api/fetchData`, {
      next: { revalidate: 60 }, // Revalidates data every 10 seconds
      // cache: "no-store",
    });

    response = await response.json();

    if (response.success) {
      return response.foodData;
    }
  } catch (error) {
    console.log(error);
  }
};

const page = async () => {
  // const foodData = [
  //   {
  //     id: "1",
  //     name: "MARGHERITA",
  //     category: "Pizza",
  //     foodType: "Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "A hugely popular margherita, with a deliciously tangy single cheese topping",
  //     img: "https://www.dominos.co.in/files/items/Double_Cheese_Margherita.jpg",
  //   },

  //   {
  //     id: "2",
  //     name: "CHICKEN DOMINATOR",
  //     category: "Pizza",
  //     foodType: "Non-Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers",
  //     img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(11).png",
  //   },
  //   {
  //     id: "3",
  //     name: "NON VEG SUPREME",
  //     category: "Pizza",
  //     foodType: "Non-Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "Bite into supreme delight of Black Olives, Onions, Grilled Mushrooms, Pepper BBQ Chicken, Peri-Peri Chicken, Grilled Chicken Rashers",
  //     img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(13).png",
  //   },
  //   {
  //     id: "4",
  //     name: "CHICKEN PEPPERONI",
  //     category: "Pizza",
  //     foodType: "Non-Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "A classic American taste! Relish the delectable flavor of Chicken Pepperoni, topped with extra cheese",
  //     img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(20).png",
  //   },
  //   {
  //     id: "5",
  //     name: "CHICKEN SAUSAGE",
  //     category: "Pizza",
  //     foodType: "Non-Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description: "Chicken Sausage & Cheese",
  //     img: "https://www.dominos.co.in/files/items/MicrosoftTeams-image_(17).png",
  //   },
  //   {
  //     id: "6",
  //     name: "Pepper Barbecue",
  //     category: "Pizza",
  //     foodType: "Non-Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description: "Pepper Barbecue Chicken | Onion",
  //     img: "https://www.dominos.co.in/files/items/Pepper_Barbeque_&_Onion.jpg",
  //   },
  //   {
  //     id: "7",
  //     name: "FARM HOUSE",
  //     category: "Pizza",
  //     foodType: "Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes",
  //     img: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
  //   },
  //   {
  //     id: "8",
  //     name: "PEPPY PANEER",
  //     category: "Pizza",
  //     foodType: "Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!",
  //     img: "https://www.dominos.co.in/files/items/Peppy_Paneer.jpg",
  //   },
  //   {
  //     id: "9",
  //     name: "MEXICAN GREEN WAVE",
  //     category: "Pizza",
  //     foodType: "Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description:
  //       "A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.",
  //     img: "https://www.dominos.co.in/files/items/Mexican_Green_Wave.jpg",
  //   },
  //   {
  //     id: "10",
  //     name: "VEGGIE PARADISE",
  //     category: "Pizza",
  //     foodType: "Veg",
  //     price: { regular: "69", medium: "159", large: "219" },
  //     description: "Goldern Corn, Black Olives, Capsicum & Red Paprika",
  //     img: "https://www.dominos.co.in/files/items/Digital_Veggie_Paradise_olo_266x265.jpg",
  //   },
  //   {
  //     id: "11",
  //     name: "STUFFED GARLIC BREAD",
  //     category: "SIDES & BEVERAGES",
  //     foodType: "Veg",
  //     price: { single: "40", double: "72" },
  //     description:
  //       "Freshly Baked Garlic Bread stuffed with mozzarella cheese, sweet corns & tangy and spicy jalapeños",
  //     img: "https://www.dominos.co.in/files/items/stuffed-garlic-breadstick_1346070564.webp",
  //   },
  //   {
  //     id: "12",
  //     name: "TACO MEXICANA VEG",
  //     category: "SIDES & BEVERAGES",
  //     foodType: "Veg",
  //     price: { single: "40", double: "72" },
  //     description:
  //       "A crispy flaky wrap filled with Mexican Arancini Bean Patty rolled over a creamy Harissa Sauce.",
  //     img: "https://www.dominos.co.in/files/items/Main_Menu-VG.jpg",
  //   },
  //   {
  //     id: "13",
  //     name: "TACO MEXICANA NON VEG",
  //     category: "SIDES & BEVERAGES",
  //     foodType: "Non-Veg",
  //     price: { single: "40", double: "72" },
  //     description:
  //       "A crispy flaky wrap filled with Hot and Smoky Chicken Patty rolled over a creamy Harissa Sauce.",
  //     img: "https://www.dominos.co.in/files/items/Main_Menu-NVG.jpg",
  //   },
  //   {
  //     id: "14",
  //     name: "GARLIC BREADSTICKS",
  //     category: "SIDES & BEVERAGES",
  //     foodType: "Veg",
  //     price: { single: "40", double: "72" },
  //     description:
  //       "The endearing tang of garlic in breadstics baked to perfection.",
  //     img: "https://www.dominos.co.in/files/items/garlic-bread.webp",
  //   },
  // ];

  let foodData = await fetchFoodData();

  return (
    <div className="transition-colors duration-1000 dark:text-white dark:bg-black  font-poppins   ">
      <CarouselComponent />
      <CardsSection foodData={foodData} />
    </div>
  );
};

export default page;
