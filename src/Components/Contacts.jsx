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
            <div className="max-w-xl mx-auto px-6 text-center">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h2>
                </div>

                <div>
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        {/* Name fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm mb-1">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
                                />
                            </div>

                            <div>
                                <label className="block text-sm mb-1">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm mb-1">
                                Email *
                            </label>
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label className="block text-sm mb-1">
                                Message
                            </label>
                            <textarea
                                name="message"
                                rows="5"
                                className="w-full border border-gray-300 px-4 py-2 outline-none focus:border-blue-600"
                            ></textarea>
                        </div>

                        {/* Button */}
                        <div className="text-right">
                            <button
                                type="submit"
                                className="bg-blue-600 text-white px-8 py-2 hover:bg-blue-700 transition"
                            >
                                Send
                            </button>
                        </div>
                    </form>
                </div>

                <div>
                    <p>Social Media Links</p>
                    <div className="py-8 flex items-center justify-center gap-6">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                        <FontAwesomeIcon icon={faWhatsapp} />
                        <FontAwesomeIcon icon={faGithub} />
                    </div>

                </div>

            </div>
        </section>
    );
}