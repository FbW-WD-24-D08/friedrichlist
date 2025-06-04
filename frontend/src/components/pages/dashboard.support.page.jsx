import { siteConfig } from "../../config/site.js";

import { MetaTags } from "../atoms/metatags.comp.jsx";

export default function DashboardSupportPage() {
  // API Fetch für Daten

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.support.title}
        desc={siteConfig.meta.dashboard.support.desc}
        bots={siteConfig.meta.dashboard.support.bots}
        keywords={siteConfig.meta.dashboard.support.keywords}
      />
      Hello from Support
    </>
  );
}
