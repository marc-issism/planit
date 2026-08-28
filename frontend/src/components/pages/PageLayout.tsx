import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default PageLayout;
