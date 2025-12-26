export default function Contacts() {
    return (
        <section className="bg-white-50 py-20" id="contacts">
            <div className="max-w-xl mx-auto px-6 text-center">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h2>
                </div>

                <div className="space-y-6 max-w-lg mx-auto mb-16">
                    <div className="flex items-center justify-between md:justify-center gap-12">
                        <span className="font-bold text-gray-900">Email</span>
                        <span className="text-gray-600">wonganinyirenda18@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-between md:justify-center gap-12">
                        <span className="font-bold text-gray-900">WhatsApp</span>
                        <span className="text-gray-600">+265 995 358 915</span>
                    </div>
                    <div className="flex items-center justify-between md:justify-center gap-12">
                        <span className="font-bold text-gray-900">Phone Number</span>
                        <span className="text-gray-600">+265 995 358 915</span>
                    </div>
                </div>

            </div>
        </section>
    );
}