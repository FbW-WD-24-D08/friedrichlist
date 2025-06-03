import { SignIn } from "@clerk/clerk-react";
import { DefaultLayout } from "../layouts/default.layout.jsx";
import { Loader } from "../atoms/loader.atom.jsx";
import { MetaTags } from "../atoms/metatags.atom.jsx";
import { siteConfig } from "../../config/site.js";

export default function SignInPage() {
  return (
    <>
      <MetaTags
        title={siteConfig.meta.signin.title}
        desc={siteConfig.meta.signin.desc}
        bots={siteConfig.meta.signin.bots}
        keywords={siteConfig.meta.signin.keywords}
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
