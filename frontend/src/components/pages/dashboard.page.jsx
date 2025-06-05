import { useContext } from "react";
import { siteConfig } from "../../config/site.js";
import { ListCard } from "../atoms/list-card.comp.jsx";
import { MetaTags } from "../atoms/metatags.comp.jsx";

import { ProjectContext } from "../contexts/project.context.jsx";
import { Skeleton } from "../atoms/skeleton.comp.jsx";
import { Header } from "../atoms/header.comp.jsx";

export default function DashboardPage() {
  // API Fetch für Daten
  const { projects, isLoading, isError } = useContext(ProjectContext);

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.title}
        desc={siteConfig.meta.dashboard.desc}
        bots={siteConfig.meta.dashboard.bots}
        keywords={siteConfig.meta.dashboard.keywords}
      />

      <main>
        <Header title={"Übersicht deiner Projekte"} />

        {isLoading ? (
          <div className="">
            <Skeleton />
          </div>
        ) : (
          <section
            aria-label="Liste der Projekte"
            className="flex flex-wrap gap-4 justify-center md:justify-start"
          >
            {projects.map((project) => {
              return <ListCard projekt={project} key={project.id} />;
            })}
          </section>
        )}

        {isError && (
          <div className="text-red-500 text-center mt-4">
            Etwas ist schief gelaufen. Bitte versuche es später erneut.
          </div>
        )}
      </main>
    </>
  );
}
