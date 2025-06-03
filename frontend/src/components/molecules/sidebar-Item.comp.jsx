import { Icon } from "@iconify/react/dist/iconify.js";
import { NavLink } from "react-router";

export function SidebarItem({ path, iconifyIcon, text }) {
  return (
    <>
      <li>
        <NavLink to={path} end className="text-lg font-semibold">
          <div className="flex items-center gap-2">
            <Icon icon={iconifyIcon} />
            <p>{text}</p>
          </div>
        </NavLink>
      </li>
    </>
  );
}
