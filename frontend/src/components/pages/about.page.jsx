import { MetaTags } from "../atoms/metatags.atom.jsx";
import { DefaultLayout } from "../layouts/default.layout.jsx";

export default function AboutPage() {
  return (
    <>
      <MetaTags
        title={"FL | About"}
        desc={"Lerne FL kennen! Hier findest.."}
        bots={true}
        keywords={"FL, FriedrichList, Wir, sind, eh, die, geilsten"}
      />
      <DefaultLayout>
        <h1>Über uns</h1>
      </DefaultLayout>
      ;
    </>
  );
}
