import { useParams } from "react-router";
import { siteConfig } from "../../config/site.js";

import { MetaTags } from "../atoms/metatags.comp.jsx";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "../contexts/project.context.jsx";
import { Header } from "../atoms/header.comp.jsx";
import { Table } from "../molecules/table.comp.jsx";
import { Loader } from "../atoms/loader.comp.jsx";
import { useFetch } from "../../hooks/useFetch.hook.jsx";

export default function DashboardProjectPage() {
  const [project, setProject] = useState(null);
  const { projects } = useContext(ProjectContext);
  const { id } = useParams();

  const { isLoading, isError, data } = useFetch(
    `/todos?projectid=${project?.id}`,
    "Failed to fetch Todos",
    project
  );

  useEffect(() => {
    const project = projects.filter((item) => {
      return item.id === id;
    });
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
        {isLoading ? (
          <div>
            <Loader />
          </div>
        ) : (
          <Table head={["TITLE", "BESCHREIBUNG", "STATUS"]} data={data} />
        )}

        {isError && (
          <p className="text-red-500">
            Todos können nicht geladen werden. Komm später wieder!
          </p>
        )}
      </main>
    </>
  );
}
