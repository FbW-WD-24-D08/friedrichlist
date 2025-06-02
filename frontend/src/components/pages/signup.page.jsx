import { SignUp } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";
import { Loader } from "../atoms/loader.atom.jsx";
3;

export default function SignUpPage() {
  return (
    <>
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center h-screen">
          <SignUp
            fallback={<Loader />}
            path="/signup"
            forceRedirectUrl={"/dashboard"}
            signInUrl="/signin"
          />
        </section>
      </DefaultLayout>
    </>
  );
}
