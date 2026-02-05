import React from 'react';

const AIPromptUI = ({ onSend, inputRef, isWaiting }) => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            onSend(inputRef.current.value);
        }
    };

    return (
        <div className="w-full max-w-3xl mx-auto transform transition-all">
            <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-teal-400 to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative bg-white rounded-3xl shadow-xl ring-1 ring-gray-900/5">
                    <textarea
                        ref={inputRef}
                        onKeyDown={handleKeyDown}
                        disabled={isWaiting}
                        placeholder="Ask a biomedical question..."
                        className="w-full h-48 p-8 text-xl text-gray-700 bg-transparent border-none focus:ring-0 outline-none resize-none placeholder-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                    />

                    <div className="flex justify-between items-center px-8 pb-6 pt-2 border-t border-gray-50">
                        <span className="text-sm font-medium text-gray-400 bg-gray-50 px-3 py-1 rounded-lg">
                            Press <kbd className="font-sans px-1 border rounded bg-white">Enter</kbd> to submit
                        </span>
                        <button
                            disabled
                            className="bg-teal-600 text-white rounded-2xl p-3 opacity-90 shadow-lg shadow-teal-500/30"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIPromptUI;
