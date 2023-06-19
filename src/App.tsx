import { Routes, Route } from "react-router-dom";
import "./App.css";
import { DashboardPage } from "./pages/dashboard";
import { MyRecordPage } from "./pages/my-record";
import { ArticlesPage } from "./pages/articles";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="my-record" element={<MyRecordPage />} />
        <Route path="articles" element={<ArticlesPage />} />
      </Routes>
    </div>
  );
}

export default App;
