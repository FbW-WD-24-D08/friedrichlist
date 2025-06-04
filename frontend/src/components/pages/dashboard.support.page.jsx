import { useContext } from "react";
import { siteConfig } from "../../config/site.js";

import { MetaTags } from "../atoms/metatags.comp.jsx";
import { ProjectContext } from "../contexts/project.context.jsx";

export default function DashboardSupportPage() {
  // API Fetch für Daten

  const { projects } = useContext(ProjectContext);

  console.log(projects);

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
