import { Route, Routes } from "react-router";
import "./App.css";
import { lazy } from "react";

const IndexPage = lazy(() => import("./components/pages/index.page.jsx"));

function App() {
  return (
    <>
      <Routes>
        <Route element={<IndexPage />} path="/"></Route>
      </Routes>
    </>
  );
}

export default App;
