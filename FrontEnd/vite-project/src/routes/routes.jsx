import { Route } from "react-router-dom";

import Rice from "../pages/Rice";
import Aata from "../pages/Aata";
import Oils from "../pages/Oils.jsx";
import Snacks from "../pages/Snacks";
import Masala from "../pages/Masala";
import InstantFood from "../pages/InstantFood";
import DryFruits from "../pages/DryFruits";
import Sweets from "../pages/Sweets";
import Colddrink from "../pages/Colddrink";
import Cosmetics from "../pages/Cosmetics";
import Pickle from "../pages/Pickle.jsx";
import TCMD from "../pages/TCMD.jsx";
import Cleaning from "../pages/Cleanning.jsx";
import Salt from "../pages/Salt.jsx";
import Pulses from "../pages/Pulses.jsx";
import Layout from "../pages/Layout";
import Cart from "../pages/Cart.jsx";
import ProductDetails from "../pages/ProductDetails.jsx";
import Orders from "../pages/Orders.jsx";
// auth
import Login from "../components/Login.jsx";
import Signup from "../components/Signup.jsx";
import Profile from "../components/Profile.jsx";



export const routes = (
  <>
    <Route path="/login" element={<Login />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/orders" element={<Orders />} />


    <Route path="/" element={<Layout />} />
    <Route path="/rice" element={<Rice />} />
    <Route path="/aata" element={<Aata />} />
    <Route path="/clean" element={<Cleaning />} />
    <Route path="/pulses" element={<Pulses />} />
    <Route path="/oils" element={<Oils />} />
    <Route path="/snacks" element={<Snacks />} />
    <Route path="/masala" element={<Masala />} />
    <Route path="/dry-fruits" element={<DryFruits />} />
    <Route path="/sweets" element={<Sweets />} />
    <Route path="/cosmetics" element={<Cosmetics />} />
    <Route path="/colddrink" element={<Colddrink />} />
    <Route path="/instant-food" element={<InstantFood />} />
    <Route path="/pickle" element={<Pickle />} />
    <Route path="/tcmd" element={<TCMD />} />
    <Route path="/salt" element={<Salt />} />
    <Route path="/cart" element={<Cart />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/product/:category/:id" element={<ProductDetails />} />


  </>
);
