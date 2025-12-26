import { useState } from 'react';
import Logo from '../Assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [openMenu, setOpenMenu] = useState(false);


    return (
        <header className="bg-white py-4 shadow-sm">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">

                    <div className="flex items-center gap-2">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-30 h-30 object-contain"
                        />

                    </div>
                </div>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 font-medium text-gray-700">
                        <li className="cursor-pointer hover:text-blue-700 transition">Home</li>
                        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
                        <li className="cursor-pointer hover:text-blue-600 transition">Projects</li>
                        <li className="cursor-pointer hover:text-blue-600 transition">Services</li>
                    </ul>
                </nav>

                <div>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
                    >
                        Let's Talk
                    </button>
                </div>

                <button
                    type='button'
                    onClick={() => setOpenMenu(!openMenu)}
                    className='md:hidden'
                >
                    <FontAwesomeIcon icon={faBars} />
                </button>
            </div>
        </header>
    );
}