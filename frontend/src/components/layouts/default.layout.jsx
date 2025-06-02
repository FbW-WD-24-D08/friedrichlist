import { Footer } from "../organisms/footer.org.jsx";
import { Navbar } from "../organisms/navbar.org.jsx";

export function DefaultLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
