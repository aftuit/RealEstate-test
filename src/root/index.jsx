import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import DetailsPage from "../pages/DetailsPage";
import HomePage from "../pages/HomePage";

export const Root = () => {
    return (
        <>
            <Routes>
                <Route element={<Navbar />}>
                    <Route path="/users" element={<HomePage />} />
                    <Route path="/users/:id" element={<DetailsPage />} />
                </Route>
                <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                <Route path="/" element={<Navigate to={"/users"} />} />
            </Routes>
        </>
    );
};

export default Root;