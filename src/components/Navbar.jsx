import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react";
import { IconContext } from "react-icons";
import { CiMenuBurger } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
    const location = useLocation();
    const [isActive, setIsActive] = useState(false)
    const [navBg, setNavBg] = useState(false)

    const changeNavBg = () => {
        window.scrollY >= 100 ? setNavBg(true) : setNavBg(false)
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNavBg)
        return () => {
            window.removeEventListener('scroll', changeNavBg)
        }
    }, [])

    const navLinks = [
        { name: '🏡 Home', href: '/' },
        { name: '👋 About', href: '/about' }
    ]

    return (
        <nav
            className={`sticky top-0 z-10 flex items-center justify-end bg-transparent px-5 py-3 text-mainColor duration-600 md:px-10 md:py-5 ${navBg && 'md:justify-center md:py-2'
                }`}>
            <ul
                className={`hidden gap-6 text-lg md:flex ${navBg &&
                    'gap-4 rounded-xl border-2 border-black-primary bg-white p-4 text-black-primary shadow-nav-card'
                    }`}>
                {navLinks.map((link, index) => (
                    <li
                        key={index}
                        className="relative font-semibold cursor-pointer group"
                    >
                        <span
                            className={`absolute bottom-0 h-[2px] w-0 rounded-md bg-thrdColor transition-all duration-300 ease-in-out group-hover:w-full ${location.pathname === link.href ? "w-full" : "w-0"
                                }`}
                        ></span>
                        <Link to={link.href}>{link.name}</Link>
                    </li>
                ))}
            </ul>
            <div className="flex md:hidden">
                <button
                    onClick={() => {
                        setIsActive(!isActive)
                    }}
                    className="p-1 bg-white border-2 rounded-full"
                >
                    <IconContext.Provider
                        value={{ className: 'text-4xl text-black-primary p-2' }}
                    >
                        {isActive ? <AiOutlineClose /> : <CiMenuBurger />}
                    </IconContext.Provider>
                </button>
            </div>
            <div
                className={`fixed top-12 flex h-full w-full justify-center overflow-x-hidden rounded transition-all duration-300 ease-in-out md:hidden ${isActive ? 'right-0' : '-right-full'
                    }`}
            >
                <ul className="flex flex-col items-center w-full gap-8 px-3 py-6 m-5 text-lg font-light bg-white h-fit rounded-xl">
                    {navLinks.map((link, index) => (
                        <li
                            key={index}
                            className="group relative w-fit cursor-pointer font-semibold text-[#616D8A]"
                        >
                            <span
                                className={`absolute bottom-0 h-[2px] w-0 rounded-md bg-thrdColor transition-all duration-300 ease-in-out group-hover:w-full ${location.pathname === link.href ? "w-full" : "w-0"
                                    }`}
                            ></span>
                            <Link to={link.href}>{link.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}