import React, { useState } from 'react';
import { useChatStore } from "../../store/use-store-message.ts";

const MessageInput = () => {
    const [text, setText] = useState<string>('');
    const { sendMessage, isLoading } = useChatStore();

    async function handleSendMessage() {
        if (!text.trim() || isLoading) return;
        await sendMessage(text);
        setText('');
    }

    async function handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>){
        if (e.key === 'Enter') {
            e.preventDefault();
            await handleSendMessage()
        }
    }

    return (
        <div className="p-4 border-t border-white/10 bg-slate-900/40">
            <div className={`flex items-center gap-2 bg-slate-800 rounded-xl px-2 py-2 border border-white/5 transition-colors ${isLoading ? 'opacity-50' : 'focus-within:border-blue-500/50'}`}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={isLoading ? "ChatGPT writing..." : "Write your message..."}
                    disabled={isLoading}
                    className="flex-1 bg-transparent text-white placeholder-slate-500 text-sm focus:outline-none px-2 disabled:cursor-not-allowed"
                />
                <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !text.trim()}
                    className={`p-2 rounded-lg transition-colors text-white ${
                        isLoading || !text.trim()
                            ? 'bg-slate-700 cursor-not-allowed text-slate-400'
                            : 'bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/20'
                    }`}
                >
                    {isLoading ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default MessageInput;