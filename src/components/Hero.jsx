import React from 'react';

const Hero = () => {
    return (
        <section className="relative bg-gradient-to-br from-teal-50 via-white to-blue-50 py-24 px-6 text-center overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                <div className="absolute top-[-5%] right-[-5%] w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <div className="relative max-w-4xl mx-auto mt-8">
                <div className="inline-block px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-teal-800 uppercase bg-teal-100 rounded-full">
                    Medical Intelligence
                </div>
                <h2 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight tracking-tight">
                    Trusted <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-blue-600">Biomedical</span> <br /> Information
                </h2>
                <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
                    Educational biomedical knowledge empowered by advanced AI.
                </p>
            </div>
        </section>
    );
};

export default Hero;
