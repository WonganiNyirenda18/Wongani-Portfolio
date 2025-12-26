export default function About() {
    return (
        <section className="bg-blue-50 py-24" id="about">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    <div className="md:w-1/4">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
                    </div>

                    <div className="md:w-3/4 space-y-8 text-gray-600 leading-relaxed text-lg">
                        <p>
                            I am a third-year Bachelor of Science in Information Systems student at the University of Malawi (UNIMA) and the founder of Tech Addicts,
                            a tech company focused on driving digital transformation through innovative software and hardware solutions.
                        </p>
                        <p>
                            I am also a digital marketer specializing in building strong online presence for businesses, from small-scale startups to large enterprises.
                            I thrive in collaborative environments, bringing both leadership and a willingness to learn, while contributing effectively to team success and shared goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}