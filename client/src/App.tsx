import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/AppLayout";
import Layout from "./components/Layout";
import ProtectedLayout from "./components/ProtectedLayout";
import Register from "./components/Register";
import AuthHere from "./components/auth/auth.context";
import CartStore from "./components/auth/cartContext";
import ServiceStore from "./components/auth/serviceContext";
import Allorders from "./pages/Allorders";
import Authpage from "./pages/Authpage";
import Cheekout from "./pages/Cheekout";
import Details from "./pages/Details";
import Garment from "./pages/Garment";
import Homepage from "./pages/Homepage";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Userprofile from "./pages/Userprofile";

function App() {
  return (
    <AuthHere>
      <ServiceStore>
        <CartStore>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Landing />} />
              <Route path="auth">
                <Route index element={<Authpage />}></Route>
                <Route path="registration" element={<Register />} />
                <Route path="login" element={<Login />} />
              </Route>
              <Route element={<ProtectedLayout />}>
                <Route element={<AppLayout />}>
                  <Route path="home" element={<Homepage />} />
                  <Route path="garment" element={<Garment />} />
                  <Route path="cheekout" element={<Cheekout />} />
                  <Route path="profile" element={<Userprofile />} />
                  <Route path="orders" element={<Allorders />} />
                  <Route path="detail/:id" element={<Details />} />
                </Route>
              </Route>
            </Route>
          </Routes>
        </CartStore>
      </ServiceStore>
    </AuthHere>
  );
}

export default App;
