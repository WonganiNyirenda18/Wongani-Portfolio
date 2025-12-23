export default function Header() {
    return (
        <header className="w-full flex items-center justify-between">
            <div className="text-xl font-bold">
                Logo
            </div>
            <nav>
                <ul className="flex items-center gap-5 list-none">
                    <li className="text-black-700 hover:text-blue-600 cursor-pointer transition">Home</li>
                    <li className="text-black-700 hover:text-blue-600 cursor-pointer transition">About</li>
                    <li className="text-black-700 hover:text-blue-600 cursor-pointer transition">Projects</li>
                    <li className="text-black-700 hover:text-blue-600 cursor-pointer transition">Services</li>
                </ul>
            </nav>
            <button
                type="button"
                className="bg-blue-600 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-700 transition"
            >
                Let's Talk
            </button>
        </header>
    );
}