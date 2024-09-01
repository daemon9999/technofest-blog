import { Link, useLocation } from "react-router-dom";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import {BsFillInfoCircleFill} from "react-icons/bs"
import { useSiteContext } from "~/context";
import { IoMdMenu } from "react-icons/io";
export default function Header() {
  const {setIsOpen} = useSiteContext()
  const {pathname} = useLocation()
  const linkStyle = `flex items-center  gap-x-2 bg-200 text-400 px-3 py-1 text-base lg:text-lg rounded border border-200 hover:bg-transparent 
  hover:text-200 transition-all duration-300`;
  return (
    <header className="bg-white shadow-md shadow-200">
      <div className="container mx-auto w-[90%] flex items-center justify-between">
        <Link to={"/"} className="w-14 h-14 xs:w-20 xs:h-20 flex items-center gap-x-0 xs:gap-x-3">
          <img
            src="/icons/logo-icon.png"
            className="w-full h-full"
            alt="Logo Icon"
          />
          <span className="uppercase whitespace-nowrap font-montserrat text-lg xs:text-2xl tracking-widest font-extrabold gradient-text">
            suni ekinchi
          </span>
        </Link>

        <div className="hidden md:flex  items-center gap-x-4 font-montserrat  font-medium">
          <a href={"/#about"} className={linkStyle}>
            <BsFillInfoCircleFill size={22} /> 
            About Company
          </a>

 
          <Link to={"/subscription"} className={linkStyle}>
            <HiMiniCurrencyDollar size={22} />
            Subscription Plan
          </Link>
        </div>
        <button type="button" className="block md:hidden" onClick={() => setIsOpen(true)}>
        <IoMdMenu size={34}/>
        </button>
      </div>
    </header>
  );
}
