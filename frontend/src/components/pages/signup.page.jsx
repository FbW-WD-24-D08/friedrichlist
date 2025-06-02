import { SignUp } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";
import { Loader } from "../atoms/loader.atom.jsx";
import { MetaTags } from "../atoms/metatags.atom.jsx";
MetaTags;

export default function SignUpPage() {
  return (
    <>
      <MetaTags
        title={"FL | Home"}
        desc={
          "Herzlich willkommen bei FL! Hier findest du alles, was du brauchst."
        }
        bots={true}
        keywords={"FL, FriedrichList, Wir, sind, eh, die, geilsten"}
      />
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
