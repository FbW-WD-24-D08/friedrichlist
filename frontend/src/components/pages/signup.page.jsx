import { SignUp } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";

export default function SignUpPage() {
  return (
    <>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center h-screen">
          <SignUp
            fallback={"Loading..."}
            path="/signup"
            forceRedirectUrl={"/dashboard"}
            signInUrl="/signin"
          />
        </section>
      </DefaultLayout>
    </>
  );
}
