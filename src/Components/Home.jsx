import React from 'react';
import Champo from '../Assets/champo1.jpg'

export default function Home() {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                <div>
                    <span className="text-blue-600 font-semibold text-lg mb-2 block">Hello, I am</span>
                    <h1 className="text-5xl font-bold text-gray-900 mb-4 tracking-tight">Wongani Nyirenda</h1>
                    <p className="text-xl text-gray-700 font-medium mb-6">FrontEnd Developer</p>
                    <p className="text-gray-500 mb-8 max-w-lg leading-relaxed text-lg">
                        I have been practising FrontEnd development and its related field for a while now.
                        I am fluent in UI/UX designing, research, and Web Development
                    </p>
                    <button
                        type="button"
                        className="bg-blue-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-blue-700 transition shadow-lg shadow-blue-200 cursor-pointer"
                    >
                        Download CV
                    </button>
                </div>

                <div className="flex justify-center md:justify-end">
                    <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-gray-100 shadow-2xl">
                        <img
                            src={Champo}
                            alt="Wongani Nyirenda"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}