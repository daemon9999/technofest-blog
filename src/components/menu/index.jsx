import { useSiteContext } from "~/context";
import { MdOutlineClose } from "react-icons/md";
import classNames from "classnames";

export default function Menu() {
  const { isOpen, setIsOpen } = useSiteContext();
  return (

      <>
        <div className={classNames("transition-all border-400 shadow-xl  duration-500 h-full text-400 bg-10 fixed top-0 right-0  py-4 flex flex-col gap-y-3  z-[999999]", {
            "w-full xs:w-1/2 px-4 visible  border-l-4": isOpen,
            "w-0 invisible": !isOpen
        })}>
          <button type="button" onClick={() => setIsOpen(false)} className="ml-auto"><MdOutlineClose size={40}/></button>
          <a href="/#about" onClick={() => setIsOpen(false)} className="text-2xl font-semibold tracking-widest">About</a>
          <a href="/subscription" onClick={() => setIsOpen(false)} className="text-2xl font-semibold tracking-widest">Subscription</a>
        </div>
        <style jsx>{`
          body {
            ${isOpen && "overflow:hidden;" }
          }
        `}</style>
      </>
    )

}
