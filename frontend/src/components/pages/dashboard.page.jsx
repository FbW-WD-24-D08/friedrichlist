import { useContext } from "react";
import { siteConfig } from "../../config/site.js";
import { ListCard } from "../atoms/list-card.comp.jsx";
import { MetaTags } from "../atoms/metatags.comp.jsx";

import { ProjectContext } from "../contexts/project.context.jsx";

export default function DashboardPage() {
  // API Fetch für Daten
  const { projects } = useContext(ProjectContext);

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.title}
        desc={siteConfig.meta.dashboard.desc}
        bots={siteConfig.meta.dashboard.bots}
        keywords={siteConfig.meta.dashboard.keywords}
      />

      <main>
        <section aria-label="Titel">
          <h1 className="text-3xl font-bold mb-6">Übersicht deiner Projekte</h1>
        </section>

        <section
          aria-label="Liste der Projekte"
          className="flex flex-wrap gap-4 justify-center md:justify-start"
        >
          {projects.map((project) => {
            console.log(project);

            return (
              <ListCard
                key={project.id}
                title={project.title}
                description={project.secondtitle}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}
