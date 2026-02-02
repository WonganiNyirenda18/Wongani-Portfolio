import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';


export default function Contacts() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_nkgailt",
            "template_oud2mfh",
            form.current,
            "qrgW6espVilEXu1c9"
        )
            .then(() => {
                alert("Message sent successfully");
                form.current.reset();
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <section className="bg-white-50 py-20" id="contacts">
            <div className="max-w-xl mx-auto px-6">


                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900">Contacts</h2>
                </div>


                <div className="bg-white p-8 rounded-xl shadow-mg">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name *
                            </label>

                            <input
                                type="text"
                                name="name"
                                required
                                placeholder="Your full name"
                                className="w-full rounded-md border border-gray-300 px-4 py-3
                                           focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Email *
                            </label>

                            <input
                                type="email"
                                name="email"
                                required
                                placeholder="email@example.com"
                                className="w-full rounded-md border border-gray-300 px-4 py-3
                                           focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>


                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Message
                            </label>

                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="Write your message here..."
                                className="w-full rounded-md border border-gray-300 px-4 py-3
                                           focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-3 rounded-md font-medium
                                       hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>

                    </form>
                </div>

                <div className="mt-10 text-center">

                    <p className="text-gray-600 mb-4">Social Media Links</p>

                    <div className="flex justify-center gap-6 text-gray-700 text-xl">
                        <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-600 cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </div>
                </div>

            </div>
        </section >
    );
}