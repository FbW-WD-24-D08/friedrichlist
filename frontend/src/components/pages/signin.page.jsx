import { SignIn } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";

export default function SignInPage() {
  return (
    <>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center h-screen">
          <SignIn
            fallback={"Loading..."}
            path="/signin"
            forceRedirectUrl={"/dashboard"}
            signUpUrl="/signup"
          />
        </section>
      </DefaultLayout>
    </>
  );
}
