import { Toaster } from "react-hot-toast";
import { Outlet } from "react-router-dom";
import Menu from "~/components/menu";
import SiteProvider, { useSiteContext } from "~/context";
import Footer from "~/layouts/footer";
import Header from "~/layouts/header";

export default function Layout() {
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
