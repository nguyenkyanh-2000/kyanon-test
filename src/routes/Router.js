import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/error/ErrorPage";
import HomePage from "../pages/home/HomePage";
import BlankLayout from "../pages/layouts/BlankLayout";
import LoginPage from "../pages/login/LoginPage";
import ProfilePage from "../pages/profile/ProfilePage";
import UpdatePage from "../pages/update/UpdatePage";
import AuthRequire from "./AuthRequire";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<BlankLayout />}>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route
            path="/update"
            element={
              <AuthRequire>
                <UpdatePage />
              </AuthRequire>
            }
          ></Route>
          <Route
            path="/profile"
            element={
              <AuthRequire>
                <ProfilePage />
              </AuthRequire>
            }
          ></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
