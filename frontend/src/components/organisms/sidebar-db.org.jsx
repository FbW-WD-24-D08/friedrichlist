import { Icon } from "@iconify/react/dist/iconify.js";
import { UserAvatar } from "../atoms/user-avatar.atom.jsx";
import { SidebarItem } from "../molecules/sidebar-Item.comp.jsx";
import { sidebarDbItems } from "../../config/sidebar-db-items.js";

export function SidebarDB({ children }) {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-8">
        {/* Sidebar Mobile Icon */}
        <label htmlFor="my-drawer-2" className="lg:hidden mb-6">
          <Icon
            icon="fluent-color:send-48"
            className="text-1xl text-primary"
            aria-label="open sidebar"
          />
        </label>
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-base-200 text-base-content min-h-full w-80 p-4 gap-8">
          {/* Sidebar content here */}
          <UserAvatar />

          <ul>
            {sidebarDbItems.map((item) => (
              <SidebarItem
                key={item.path}
                path={item.path}
                iconifyIcon={item.iconifyIcon}
                text={item.text}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
