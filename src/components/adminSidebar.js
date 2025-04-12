"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaHome, FaPlus, FaList } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

const AdminSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-gray-700 text-white max-h-[523px] p-5 transition-all duration-500 relative ${
          isOpen ? "w-64" : "w-20"
        }`}
      >
        {/* Toggle Button */}
        <button
          className="absolute top-6 left-6 text-white text-[28px] cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 /> : <AiOutlineMenu />}
        </button>

        {/* Sidebar Links */}
        <nav className="mt-16 space-y-6">
          <SidebarLink
            href="/admin"
            icon={<FaHome />}
            text="Dashboard"
            active={pathname === "/admin"}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/addItem"
            icon={<FaPlus />}
            text="Add Item"
            active={pathname === "/admin/addItem"}
            isOpen={isOpen}
          />
          <SidebarLink
            href="/admin/showItems"
            icon={<FaList />}
            text="Show Items"
            active={pathname === "/admin/showItems"}
            isOpen={isOpen}
          />
        </nav>
      </div>
    </>
  );
};

const SidebarLink = ({ href, icon, text, active, isOpen }) => (
  <Link
    href={href}
    className={`flex items-center gap-4 p-3 rounded-lg transition-all duration-500 ease-in-out ${
      active ? "bg-gray-700" : "hover:bg-gray-800"
    }`}
    style={{ minHeight: "50px" }} // ✅ Prevents icon shifting
  >
    {/* Icon - Always Visible */}
    <span className="text-xl transition-opacity duration-500">{icon}</span>

    {/* Text - Slides In & Out Without Wrapping */}
    <span
      className={`text-xl whitespace-nowrap transition-all duration-500 ease-in-out ${
        isOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-5"
      }`}
    >
      {text}
    </span>
  </Link>
);

export default AdminSidebar;
