import { Footer } from "../organisms/footer.org.jsx";
import { Hero } from "../organisms/hero.org.jsx";
import { Navbar } from "../organisms/navbar.org.jsx";

export function DefaultLayout({ children, withHero }) {
  return (
    <>
      <Navbar />
      {withHero && <Hero />}
      {children}
      <Footer />
    </>
  );
}
