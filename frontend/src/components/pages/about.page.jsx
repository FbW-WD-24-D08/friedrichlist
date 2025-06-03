import { siteConfig } from "../../config/site.js";
import { MetaTags } from "../atoms/metatags.atom.jsx";
import { DefaultLayout } from "../layouts/default.layout.jsx";

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title={siteConfig.meta.about.title}
        desc={siteConfig.meta.about.desc}
        bots={siteConfig.meta.about.bots}
        keywords={siteConfig.meta.about.keywords}
      />
      <DefaultLayout>
        <h1>Über uns</h1>
      </DefaultLayout>
      ;
    </>
  );
}
