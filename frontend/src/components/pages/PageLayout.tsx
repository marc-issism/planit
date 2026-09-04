import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router";
import "./PageLayout.scss";

const PageLayout = () => {
  return (
    <>
      <Navbar />
      <div className="page-layout">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default PageLayout;
