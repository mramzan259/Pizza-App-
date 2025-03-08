"use client";

import { ThemeProvider } from "next-themes";
import { usePathname } from "next/navigation";
import Navbar from "./header";
import Footer from "./footer";

export default function ClientLayout({ children }) {
  const path = usePathname();

  return (
    <ThemeProvider attribute="class">
      <Navbar />
      {children}
      {path !== "/login" && path !== "/signup" ? <Footer /> : null}
    </ThemeProvider>
  );
}
