import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';


export default function Contacts() {
    return (
        <section className="bg-white-50 py-20" id="contacts">
            <div className="max-w-xl mx-auto px-6 text-center">

                <div className="flex flex-col items-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">Contacts</h2>
                </div>

                <div>
                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message"></textarea>
                        <button type="submit">Send</button>
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