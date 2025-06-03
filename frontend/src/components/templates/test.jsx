import { Icon } from "@iconify/react/dist/iconify.js";

export default function Test({ children }) {
  return (
    <>
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

            <ul>
              <li>
                <a className="text-lg font-semibold">Dashboard</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
