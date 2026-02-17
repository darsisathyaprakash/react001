import React, { useState, useRef, useEffect } from 'react';
import AIPromptUI from '../components/AIPromptUI';
import AIResponseUI from '../components/AIResponseUI';
import FloatingAIButton from '../components/FloatingAIButton'; // Import if needed for consistent layout or removing it conditionally

const NizamAI = () => {
    const [response, setResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        // Focus input on mount with a slight delay for smooth transition
        setTimeout(() => {
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }, 100);
    }, []);

    const handleSend = async (promptText) => {
        if (isLoading || !promptText.trim()) return;

        setIsLoading(true);
        setResponse(null);

        try {
            // POST request to local n8n webhook (requires CORS allowed on n8n side or browser extension)
            const res = await fetch('https://sathyaprakash0001.app.n8n.cloud/webhook/nizam', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: promptText }),
            });

            if (!res.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await res.json();

            // Extract clean text only
            const cleanText = typeof data === 'string' ? data : (data.answer || "");

            setResponse(cleanText);
        } catch (error) {
            console.error("Webhook error:", error);
            setResponse(`Error: ${error.message}. Please ensure the n8n server is running and you have restarted the React dev server.`);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 animate-fade-in relative">
            <div className="max-w-4xl mx-auto text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 tracking-tight">
                    Nizam AI
                    <span className="text-teal-600 block text-2xl md:text-3xl mt-2 font-light">Biomedical Assistant</span>
                </h1>
                <p className="text-gray-500 font-medium">Fast, reliable educational insights.</p>
            </div>

            <AIPromptUI onSend={handleSend} inputRef={inputRef} isWaiting={isLoading} />
            <AIResponseUI response={response} isLoading={isLoading} />
        </div>
    );
};

export default NizamAI;
