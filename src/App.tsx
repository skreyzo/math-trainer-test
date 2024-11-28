import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import MainPage from "./components/pages/MainPage";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
