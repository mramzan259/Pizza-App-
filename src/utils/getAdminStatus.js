import { cookies } from "next/headers";
import jwt from "jsonwebtoken"; // Install using: npm i jsonwebtoken

export const getAdminStatus = async () => {
  const cookieStore = await cookies();
  const token =  cookieStore.get("authToken")?.value;

  if (!token) return false; // If no token, return false

  try {
    const decoded = jwt.verify(token, process.env.secret); // Ensure you have a JWT_SECRET

    return decoded || false; // Return isAdmin value from token
  } catch (error) {
    return false; // If token is invalid, return false
  }
};
