import AdminSidebar from "@/src/components/adminSidebar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex max-h-[523px] min-h-[523px] ">
      {/* Fixed Sidebar */}
      <AdminSidebar />

      {/* Main Content (Scrollable) */}
      <div className="flex-1 overflow-y-auto ">{children}</div>
    </div>
  );
};

export default AdminLayout;
