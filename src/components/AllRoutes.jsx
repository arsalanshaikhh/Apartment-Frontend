import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Flat } from "./Pages/flat";
import { Navbar } from "../components/Navbar";
import { FlatForm } from "./Pages/flatForm";
import { Login } from "./Pages/Login";
import { Signup } from "./Pages/Signup";
import { FlatDetails } from "./flatDetails";
import { ProtectedRoute } from "./Context/ProtectedRoute";

export const AllRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* using protected routes here */}
        <Routes>
          <Route path="/" element={<Home />}>
            home
          </Route>
          <Route
            path="/flat"
            element={
              <ProtectedRoute>
                <Flat />
              </ProtectedRoute>
            }
          >
            flat
          </Route>
          {/* :id params */}
          <Route path="/flatdetails/:_id" element={<FlatDetails />}></Route>

          <Route path="/flatform" element={<FlatForm />}>
            flatForm
          </Route>
          <Route path="/login" element={<Login />}>
            LogIn
          </Route>
          <Route path="/signup" element={<Signup />}>
            SignUp
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
