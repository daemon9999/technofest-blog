import { useEffect } from "react";
import { BiRightArrow } from "react-icons/bi";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { useSiteContext } from "~/context";

export default function RedirectBtn() {
    const {redirect, setRedirect} = useSiteContext()
    const location = useLocation()
    useEffect(() => {
        setRedirect(true)
    }, [location.pathname])
  return !!redirect && (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 bg-900 px-2 xs:px-4 shadow-md shadow-20 py-2 xs:py-3 text-base xs:text-sm   rounded-lg text-400 z-[999] flex flex-col gap-y-4">
        <button type="button" onClick={() => setRedirect(false)} className="self-end">
            <IoMdCloseCircleOutline size={30}/>
        </button>
      <p className="whitespace-nowrap px-2 xs:px-4">You can look at our product!</p>
      <Link to={"http://164.92.253.215:3000/farm"} target="_blank"   className="flex mx-4 justify-center items-center  gap-x-4 bg-100 px-3 py-2 rounded-lg ">
        Go
        <BiRightArrow />
      </Link>
    </div>
  );
}
