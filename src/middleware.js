import { NextResponse } from "next/server";
import { jwtVerify } from "jose"; // Use `jose` instead of `jsonwebtoken`

export async function middleware(req) {
  const token = req.cookies.get("authToken")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  try {
    // Decode token using `jose`
    const secret = new TextEncoder().encode(process.env.secret);
    const { payload } = await jwtVerify(token, secret);

    if (!payload.isAdmin) {
      return NextResponse.redirect(new URL("/notfound", req.url));
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}

// Apply middleware only to admin routes
export const config = {
  matcher: "/admin/:path*",
};

// ==========================================================================

// import jwt from "jsonwebtoken";
// import { NextResponse } from "next/server";
// import { connectToDatabase } from "./utils/dbConnection";
// import Users from "./models/UserSchema.js";
// import { isAuthenticated } from "./utils/isAuthenticated";

// export async function middleware(req) {
//   console.log("============1");
//   // const { pathname } = req.nextUrl;

//   // if (pathname.startsWith("/admin")) {
//   const token = req.cookies.get("authToken")?.value;
//   console.log("middleware=========", token);

//   if (!token) {
//     return NextResponse.redirect(new URL("/login", req.url)); // Redirect if no token
//   }
//   console.log("============2");

//   // await isAuthenticated(req);

//   console.log("============22");
//   try {
//     await connectToDatabase();
//     const decoded = await jwt.verify(token, process.env.secret);
//     console.log("token credentials: ", decoded);
//     console.log("============3");
//     console.log("============4");
//     const user = await Users.findById(decoded.userId);
//     console.log("============5");
//     if (!user || !user.isAdmin) {
//       return NextResponse.redirect(new URL("/login", req.url)); // Redirect if not admin
//     }
//     console.log("============6");
//     return NextResponse.next();
//     return;
//   } catch (error) {
//     return NextResponse.redirect(new URL("/login", req.url)); // Redirect if token invalid
//   }

//   // }

//   // return NextResponse.next();
// }

// // Apply middleware only to admin routes
// export const config = {
//   // matcher: ["/admin/:path*"],
//   matcher: "/admin/:path*",
// };
