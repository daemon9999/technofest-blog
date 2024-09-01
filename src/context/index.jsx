import { createContext, useContext, useState } from "react";



export const SiteContext = createContext()

export const useSiteContext = () =>  useContext(SiteContext)


export default function SiteProvider({children}) {
    const [isOpen, setIsOpen] = useState(false)
    const data = {
        isOpen,
        setIsOpen
    }
    return (
        <SiteContext.Provider value={data}>
            {children}
        </SiteContext.Provider>
    )
}