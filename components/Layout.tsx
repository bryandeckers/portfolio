import { FunctionComponent } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

type LayoutData = {
  children: any;
};

const Layout: FunctionComponent<LayoutData> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
