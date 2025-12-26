export default function Services() {
    return (
        <section className="bg-blue-50 py-20" id="services">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Services</h2>
                    </div>

                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-700 font-medium text-lg">Web Development</li>
                            <li className="flex items-center text-gray-700 font-medium text-lg">UI/UX Design</li>
                            <li className="flex items-center text-gray-700 font-medium text-lg">Marketing</li>
                        </ul>
                    </div>
                </div>


                <div>
                    <div className="mb-6">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Skills</h2>
                    </div>

                    <div>
                        <ul className="space-y-4">
                            <li className="flex items-center text-gray-700 font-medium text-lg">React</li>
                            <li className="flex items-center text-gray-700 font-medium text-lg">Figma</li>
                        </ul>
                    </div>

                </div>


            </div>
        </section>
    );
}