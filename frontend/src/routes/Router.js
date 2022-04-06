import { Routes, Route } from "react-router-dom";

import AuthLayout from "../layout/AuthLayout";
import DashboardLayout from "../layout/DashboardLayout";
import Home from "../pages/home/Home";
import SignIn from "../pages/auth/SignIn";
import Page1 from "../pages/page 1/Page1";
import Page2 from "../pages/page 2/Page2";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<AuthLayout />}>
        <Route path="sign-in" element={<SignIn />} />
      </Route>

      <Route path="/" element={<DashboardLayout />}>
        <Route index path="/" element={<Home />} />

        <Route path="/page1" element={<Page1 />} />

        <Route path="/page2" element={<Page2 />} />
      </Route>
    </Routes>
  );
}
