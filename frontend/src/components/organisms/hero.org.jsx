import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router";

export function Hero() {
  return (
    <>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://storage.ko-fi.com/cdn/useruploads/display/8778f9ba-065e-4ad2-a6b1-d5df2a53be1f_desktop_wallpapers.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Friedrichs List</h1>
            <p className="mb-5">
              Deine nice TodoApp auch für untterwegs. Mit Friedrichs List kannst
              du deine Aufgaben einfach und schnell verwalten. Egal ob - ab hier
              hat leider Copilot nicht mehr weitergeschrieben - am Desktop oder
              auf dem Smartphone, du hast immer Zugriff auf deine - selbes
              Problem wieder
            </p>
            <SignedIn>
              <Link to={"/dashboard"} className="btn btn-warning">
                Dashboard
              </Link>
            </SignedIn>
            <SignedOut>
              <Link to={"/signin"} className="btn btn-warning">
                Get Started
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </>
  );
}
