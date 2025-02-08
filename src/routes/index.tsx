import React from "react";
import { Route, Routes } from 'react-router-dom';
import NotFound from '../components/NotFound'; // Componente 404

const Home = React.lazy(() => import("../views/Home.tsx"));
const Projects = React.lazy(() => import("../views/Projects.tsx"));


const AppRoutes = () => (
    <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
            path="/"
            element={
                <React.Suspense fallback={
                    <div className="w-full h-screen flex flex-col space-y-4 items-center justify-center">
                        <img src="/assets/icons/favicon.png" alt="" className="w-favicon-mobile md:w-favicon-desktop" />
                        <h1>Loading...</h1>
                    </div>
                }>
                    <Home></Home>
                </React.Suspense>
            }
        />
        <Route
            path="/projects"
            element={
                <React.Suspense fallback={
                    <div className="w-full h-screen flex flex-col space-y-4 items-center justify-center">
                        <img src="/assets/icons/favicon.png" alt="" className="w-favicon-mobile md:w-favicon-desktop" />
                        <h1>Loading...</h1>
                    </div>
                }>
                    <Projects></Projects>
                </React.Suspense>
            }
        />
    </Routes>
);

export default AppRoutes;