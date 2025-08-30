import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import Main from "./components/pages/Main";
import Engage from "./components/pages/Engage";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Usage from "./components/pages/Usage";
import Faq from "./components/pages/Faq";
import Banner from "./components/pages/Banner";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Main />
        <Engage />
        <About />
        <Portfolio />
        <Usage />
        <Faq />
        <Banner />
      </main>
      <Footer />
    </div>
  );
}
