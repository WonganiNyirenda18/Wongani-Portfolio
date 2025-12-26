export default function Contacts() {
    return (
        <section className="bg-white-50 py-20" id="contacts">
            <div className="max-w-xl mx-auto px-6 text-center">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h2>
                </div>

                <div>
                    <form>
                        <div className="mb-6">
                            <input type="text" placeholder="Name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <input type="email" placeholder="Email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                        </div>
                        <div className="mb-6">
                            <textarea placeholder="Message" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}