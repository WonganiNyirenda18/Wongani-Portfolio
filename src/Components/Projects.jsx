import { motion } from "framer-motion";
import Inshuwa from "../Assets/inshuwa.jpg";
import Ecom from "../Assets/ecomm.jpg";
import CloudPay from "../Assets/cloud.jpg";

const projects = [
    {
        title: "Inshuwa",
        description: "A webapp that connects insurance companies to customers",
        image: Inshuwa
    },
    {
        title: "E-Commerce site",
        description: "A school project in software engineering course aimed to teach collaboration",
        image: Ecom
    },
    {
        title: "CloudPay",
        description: "A payment gateway that smoothens local and international transactions",
        image: CloudPay
    }
];

export default function Projects() {
    return (
        <section className="bg-white py-20" id="projects">
            <div className="max-w-7xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-gray-900 mb-12">Projects</h2>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -80 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ margin: "-120px" }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 18
                            }}
                            className="bg-blue-50/50 rounded-lg overflow-hidden hover:shadow-lg transition duration-300 border border-gray-100" >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover hover:scale-105 transition duration-500"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="font-bold text-gray-900 mb-2">{project.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-8 py-2.5 rounded-md font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
                    >
                        View More
                    </button>
                </div>
            </div>
        </section >

    );
}