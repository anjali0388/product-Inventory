import Navbar from "../components/Navbar";
import Home from "./Home";
import ProductCard from "../components/ProductCard";
import Cities from "./Cities";
import Footer from "../components/Footer";

export default function Layout() {
  return (
    <>
      <Home />
      <Navbar/>
      <ProductCard/>
      <Cities/>
      <Footer/>
      

    </>
  );
}
