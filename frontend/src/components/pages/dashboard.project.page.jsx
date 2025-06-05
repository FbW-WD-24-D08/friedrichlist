import { useParams } from "react-router";
import { siteConfig } from "../../config/site.js";

import { MetaTags } from "../atoms/metatags.comp.jsx";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/project.context.jsx";
import { Header } from "../atoms/header.comp.jsx";

export default function DashboardProjectPage() {
  const [project, setProject] = useState({});
  const { projects } = useContext(ProjectContext);
  const { id } = useParams();

  useEffect(() => {
    const project = projects.filter((item) => {
      return item.id === id;
    });
    console.log(project);
    setProject(project[0]);
  }, [projects]);

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.list.title}
        desc={siteConfig.meta.dashboard.list.desc}
        bots={siteConfig.meta.dashboard.list.bots}
        keywords={siteConfig.meta.dashboard.list.keywords}
      />
      <main>
        <Header title={project?.title} secondtitle={project?.secondtitle} />
      </main>
    </>
  );
}
