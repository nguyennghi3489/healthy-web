import { Routes, Route } from "react-router-dom";
import { DashboardPage } from "./pages/dashboard";
import { MyRecordPage } from "./pages/my-record";
import { ArticlesPage } from "./pages/articles";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="my-record" element={<MyRecordPage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
