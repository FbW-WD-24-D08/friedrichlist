import { Route, Routes } from "react-router";
import "./App.css";
import { lazy } from "react";
import DashboardPage from "./components/pages/dashboard.page.jsx";
import DashboardSupportPage from "./components/pages/dashboard.support.page.jsx";
import DashboardLayout from "./components/layouts/dashboard.layout.jsx";
import { ProjectProvider } from "./components/contexts/project.context.jsx";

const NotFoundPage = lazy(() =>
  import("./components/pages/error.notfound.page.jsx")
);
const IndexPage = lazy(() => import("./components/pages/index.page.jsx"));
const SigninPage = lazy(() => import("./components/pages/signin.page.jsx"));
const SignUpPage = lazy(() => import("./components/pages/signup.page.jsx"));
const AboutPage = lazy(() => import("./components/pages/about.page.jsx"));
const DashboardProjectPage = lazy(() =>
  import("./components/pages/dashboard.project.page.jsx")
);

function App() {
  return (
    <>
      <Routes>
        {/* Public Pages */}
        <Route element={<IndexPage />} path="/" />
        <Route element={<AboutPage />} path="/about" />

        {/* Signin/Signout */}
        <Route element={<SigninPage />} path="/signin" />
        <Route element={<SigninPage />} path="/signin/factor-one" />
        <Route element={<SigninPage />} path="/signin/reset-password" />
        <Route element={<SigninPage />} path="/signin/reset-password-success" />
        <Route element={<SigninPage />} path="/signin/sso-callback" />
        <Route element={<SignUpPage />} path="/signup" />
        <Route element={<SignUpPage />} path="/signup/verify-email-address" />

        {/* Dashboard */}
        <Route
          element={
            <ProjectProvider>
              <DashboardLayout />
            </ProjectProvider>
          }
          path="/dashboard"
        >
          <Route element={<DashboardPage />} index />
          <Route element={<DashboardSupportPage />} path="/dashboard/support" />
          <Route
            element={<DashboardProjectPage />}
            path="/dashboard/list/:id"
          />
        </Route>

        {/* Error */}
        <Route element={<NotFoundPage />} path="*" />
      </Routes>
    </>
  );
}

export default App;
