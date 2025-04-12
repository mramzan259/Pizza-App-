"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "./header";
import Footer from "./footer";
import { CartProvider } from "../utils/ContextReducer";

export default function ClientLayout({ children }) {
  let path = usePathname();

  if (path.includes("/admin")) {
    path = "/admin";
  }

  return (
    <ThemeProvider attribute="class">
      <CartProvider>
        <Navbar />
        {children}
        {path !== "/login" && path !== "/signup" && path !== "/admin" ? (
          <Footer />
        ) : null}
      </CartProvider>
    </ThemeProvider>
  );
}
