import { SignUp } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";
import { Loader } from "../atoms/loader.atom.jsx";
import { MetaTags } from "../atoms/metatags.atom.jsx";
import { siteConfig } from "../../config/site.js";
MetaTags;

export default function SignUpPage() {
  return (
    <>
      <MetaTags
        title={siteConfig.meta.signup.title}
        desc={siteConfig.meta.signup.desc}
        bots={siteConfig.meta.signup.bots}
        keywords={siteConfig.meta.signup.keywords}
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
