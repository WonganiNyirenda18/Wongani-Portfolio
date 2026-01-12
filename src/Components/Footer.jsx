export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-200 py-6">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm text-gray-500">
                    © {new Date().getFullYear()} Wongani Nyirenda. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
