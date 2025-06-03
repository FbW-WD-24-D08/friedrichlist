import { siteConfig } from "../../config/site.js";
import { MetaTags } from "../atoms/metatags.atom.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";

export default function DashboardPage() {
  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.title}
        desc={siteConfig.meta.dashboard.desc}
        bots={siteConfig.meta.dashboard.bots}
        keywords={siteConfig.meta.dashboard.keywords}
      />
      <DashboardLayout>Hello Main Page</DashboardLayout>
    </>
  );
}
