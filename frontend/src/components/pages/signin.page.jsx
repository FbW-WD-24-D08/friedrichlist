import { SignIn } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";
import { Loader } from "../atoms/loader.atom.jsx";
import { MetaTags } from "../atoms/metatags.atom.jsx";

export default function SignInPage() {
  return (
    <>
      <MetaTags
        title={"FL | SignIn"}
        desc={
          "Herzlich willkommen bei FL! Hier findest du alles, was du brauchst."
        }
        bots={true}
        keywords={"FL, FriedrichList, Wir, sind, eh, die, geilsten"}
      />
      <DefaultLayout>
        <section className="flex flex-col items-center justify-center h-screen">
          <SignIn
            fallback={<Loader />}
            path="/signin"
            forceRedirectUrl={"/dashboard"}
            signUpUrl="/signup"
          />
        </section>
      </DefaultLayout>
    </>
  );
}
