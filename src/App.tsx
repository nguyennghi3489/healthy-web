import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { MyRecordPage } from "./pages/my-record";
import { ArticlesPage } from "./pages/articles";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import styles from "./App.module.css";
import { useState } from "react";
import { BackToTopButton } from "./components/back-to-top-button";

const SCROLL_SHOW_NUMBER = 300;
function App() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > SCROLL_SHOW_NUMBER) {
      setVisible(true);
    } else if (scrolled <= SCROLL_SHOW_NUMBER) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="my-record" element={<MyRecordPage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
      <Footer />
      <div className={styles.backToTopWrapper}>
        <div
          className={styles.button}
          style={{ display: visible ? "inline" : "none" }}
        >
          <BackToTopButton onClick={scrollToTop} />
        </div>
      </div>
    </div>
  );
}

export default App;
