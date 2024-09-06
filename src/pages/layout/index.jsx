import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "~/components/menu";
import RedirectBtn from "~/components/redirect-btn";
import SiteProvider, { useSiteContext } from "~/context";
import Footer from "~/layouts/footer";
import Header from "~/layouts/header";

export default function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);
  return (
    <>
      <SiteProvider>
       
      
          
              <RedirectBtn />
              <Menu />
              <Toaster position="top-right" />
              <Header />
              <main className="mt-3">
                <Outlet />
              </main>
              <Footer />
            
         
      </SiteProvider>
    </>
  );
}
