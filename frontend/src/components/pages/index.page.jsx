import { siteConfig } from "../../config/site.js";
import { MetaTags } from "../atoms/metatags.comp.jsx";
import { DefaultLayout } from "../layouts/default.layout.jsx";

export default function IndexPage() {
  return (
    <>
      <MetaTags
        title={siteConfig.meta.index.title}
        desc={siteConfig.meta.index.desc}
        bots={siteConfig.meta.index.bots}
        keywords={siteConfig.meta.index.keywords}
      />
      <DefaultLayout withHero></DefaultLayout>
    </>
  );
}
