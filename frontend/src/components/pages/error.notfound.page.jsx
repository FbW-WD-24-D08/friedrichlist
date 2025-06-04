import { Icon } from "@iconify/react/dist/iconify.js";
import { Link } from "react-router";

export default function NotFoundPage() {
  return (
    <>
      <section
        aria-label="Not Found Page"
        className="h-dvh flex flex-col items-center justify-center gap-6"
      >
        <Icon icon={"fluent-color:warning-48"} className="text-5xl" />
        <h1 className="text-xl lg:text-4xl">404 - Not Found</h1>
        <Link to={"/"} className="btn btn-md btn-primary">
          Bring me Home
        </Link>
      </section>
    </>
  );
}
