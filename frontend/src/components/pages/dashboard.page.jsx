import { siteConfig } from "../../config/site.js";
import { ListCard } from "../atoms/list-card.comp.jsx";
import { MetaTags } from "../atoms/metatags.comp.jsx";
import DashboardLayout from "../layouts/dashboard.layout.jsx";

export default function DashboardPage() {
  // API Fetch für Daten

  return (
    <>
      <MetaTags
        title={siteConfig.meta.dashboard.title}
        desc={siteConfig.meta.dashboard.desc}
        bots={siteConfig.meta.dashboard.bots}
        keywords={siteConfig.meta.dashboard.keywords}
      />
      <DashboardLayout>
        <h1 className="text-3xl font-bold mb-6">Übersicht deiner Listen</h1>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <ListCard
            title={"Haushalt"}
            description={
              "Eine Liste für alle wichtigen Tätigkeiten im Haushalt"
            }
          />
          <ListCard
            title={"Garten"}
            description={"Diese Dinge sind im Garten zu erledigen"}
          />
        </div>
      </DashboardLayout>
    </>
  );
}
