import { Route, Routes } from "react-router";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route element={<h1>Welcome to the App</h1>} path="/"></Route>
      </Routes>
    </>
  );
}

export default App;
