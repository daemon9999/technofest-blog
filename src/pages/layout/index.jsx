import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { Outlet, useLocation } from "react-router-dom";
import Menu from "~/components/menu";
import SiteProvider, { useSiteContext } from "~/context";
import Footer from "~/layouts/footer";
import Header from "~/layouts/header";

export default function Layout() {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo(0,0)
    }, [location.pathname])
  return (
  <>
        <SiteProvider>
            <Menu/>
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
