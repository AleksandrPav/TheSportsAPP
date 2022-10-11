import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage/AboutPage"));
const SportPage = lazy(() => import("./Pages/SportPage/SportPage"));

const UserRoutes = () => {
  return (
    <Suspense
      fallback={
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/sport" element={<SportPage />} />
        <Route path="/sport/:id" element={<SportPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
