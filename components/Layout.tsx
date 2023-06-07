import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutData = {
  children: any;
};

const Layout: FunctionComponent<LayoutData> = ({ children }) => {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
