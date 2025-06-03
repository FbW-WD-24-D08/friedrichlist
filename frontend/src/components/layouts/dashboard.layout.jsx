import { SidebarDB } from "../organisms/sidebar-db.org.jsx";

export default function DashboardLayout({ children }) {
  return (
    <>
      <SidebarDB>{children}</SidebarDB>
    </>
  );
}
