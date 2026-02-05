import React from 'react';

const InfoCards = () => {
    const cards = [
        {
            title: "Diseases Overview",
            icon: "🧬",
            desc: "Comprehensive guides on symptoms, causes, and treatments.",
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Medicines & Drugs",
            icon: "💊",
            desc: "Detailed pharmacology, dosage, and interaction data.",
            color: "bg-emerald-50 text-emerald-600"
        },
        {
            title: "Research & Studies",
            icon: "🔬",
            desc: "Latest clinical trials and biomedical breakthroughs.",
            color: "bg-purple-50 text-purple-600"
        },
    ];

    return (
        <section className="py-20 px-6 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {cards.map((card, idx) => (
                    <div key={idx} className="group bg-white p-8 rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 cursor-pointer">
                        <div className={`text-4xl mb-6 w-20 h-20 flex items-center justify-center rounded-2xl ${card.color} transition-transform duration-500 group-hover:scale-110 rotate-3 group-hover:rotate-6 shadow-sm`}>
                            {card.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-teal-700 transition-colors">{card.title}</h3>
                        <p className="text-gray-500 leading-relaxed font-medium">{card.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default InfoCards;
