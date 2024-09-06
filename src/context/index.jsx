import { createContext, useContext, useState } from "react";



export const SiteContext = createContext()

export const useSiteContext = () =>  useContext(SiteContext)


export default function SiteProvider({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const [redirect, setRedirect] = useState(true)
    const data = {
        isOpen,
        setIsOpen,
        redirect,
        setRedirect
    }
    return (
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}