import { useState } from 'react';
import Logo from '../Assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [openMenu, setOpenMenu] = useState(false);

    return (
        <>
            {/* HEADER */}
            <header className="fixed top-0 left-0 w-full bg-white shadow-sm z-50">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <img src={Logo} alt="Logo" className="w-10 h-10 object-contain" />

                    {/* Desktop Nav */}
                    <nav className="hidden md:block">
                        <ul className="flex gap-8 font-medium text-gray-700">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#about">About</a></li>
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#services">Services</a></li>
                        </ul>
                    </nav>

                    <button className="hidden md:block bg-blue-600 text-white px-6 py-2 rounded-md">
                        Let's Talk
                    </button>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setOpenMenu(true)}
                        className="md:hidden text-xl"
                    >
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            <div
                onClick={() => setOpenMenu(false)}
                className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300
          ${openMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            />

            {/* MOBILE MENU */}
            <aside
                className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-lg
          transform transition-transform duration-300 ease-in-out
          ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex justify-between items-center p-4 border-b">
                    <h3 className="font-semibold">Menu</h3>
                    <button onClick={() => setOpenMenu(false)}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>

                <ul className="flex flex-col gap-4 p-6">
                    {['home', 'about', 'projects', 'services'].map(link => (
                        <li key={link}>
                            <a
                                href={`#${link}`}
                                onClick={() => setOpenMenu(false)}
                                className="text-gray-700"
                            >
                                {link.charAt(0).toUpperCase() + link.slice(1)}
                            </a>
                        </li>
                    ))}
                </ul>
            </aside>

            {/* PAGE OFFSET */}
            <div className="h-20" />
        </>
    );
}
