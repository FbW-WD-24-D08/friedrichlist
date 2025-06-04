import { Outlet } from "react-router";
import { SidebarDB } from "../organisms/sidebar-db.org.jsx";

export default function DashboardLayout() {
  return (
    <>
      <SidebarDB>
        <Outlet />
      </SidebarDB>
    </>
  );
}
