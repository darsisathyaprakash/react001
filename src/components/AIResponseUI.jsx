import React from 'react';

const AIResponseUI = ({ response, isLoading }) => {
    if (!response && !isLoading) return null;

    return (
        <div className="w-full max-w-3xl mx-auto mt-8 transition-all duration-500 ease-out transform translate-y-0 opacity-100">
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl shadow-teal-900/5 relative overflow-hidden">

                {/* Header */}
                <div className="flex items-center gap-3 mb-6 border-b border-gray-50 pb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-teal-500 to-emerald-500 flex items-center justify-center shadow-md animate-pulse-slow">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                        </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">Nizam AI</h3>
                </div>

                {/* Content */}
                {/* Content */}
                <div className="min-h-[60px]">
                    {isLoading ? (
                        <div className="space-y-4 animate-pulse max-w-lg">
                            <div className="h-3 bg-gray-100 rounded w-full"></div>
                            <div className="h-3 bg-gray-100 rounded w-5/6"></div>
                            <div className="h-3 bg-gray-100 rounded w-4/6"></div>
                        </div>
                    ) : (
                        response && (
                            <div className="whitespace-pre-wrap text-gray-800 text-lg leading-relaxed">
                                {response}
                            </div>
                        )
                    )}
                </div>

                {/* Disclaimer */}
                <div className="mt-8 pt-4 border-t border-gray-50 flex items-center text-xs text-gray-400 bg-gray-50/50 -mx-8 -mb-8 px-8 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-1.5 text-teal-500">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    This information is for educational purposes only.
                </div>
            </div>
        </div>
    );
};

export default AIResponseUI;
