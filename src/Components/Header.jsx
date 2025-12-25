import Logo from '../Assets/logo.png';

export default function Header() {
    return (
        <header className="bg-white py-4 shadow-sm">
            <div className="max-w-xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center">
                    <div className="flex items-center gap-2">
                        <img
                            src={Logo}
                            alt="Logo"
                            className="w-30 h-30 object-contain"
                        />
                    </div>
                </div>

                <nav>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Projects</li>
                        <li>Services</li>
                    </ul>
                </nav>
                <button>Let's Talk </button>
            </div>

        </header>
    );
}