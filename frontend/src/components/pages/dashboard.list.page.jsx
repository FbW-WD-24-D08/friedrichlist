import { siteConfig } from "../../config/site.js";

import { MetaTags } from "../atoms/metatags.comp.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";

export default function DashboardListPage() {
  // API Fetch für Daten

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.list.title}
        desc={siteConfig.meta.dashboard.list.desc}
        bots={siteConfig.meta.dashboard.list.bots}
        keywords={siteConfig.meta.dashboard.list.keywords}
      />
      <DashboardLayout>Hello from List</DashboardLayout>
    </>
  );
}
