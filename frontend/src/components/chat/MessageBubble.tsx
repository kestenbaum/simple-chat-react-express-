import type { FC } from "react";

interface MessageProps {
    id: string | number,
    isMe: boolean,
    text: string,
    time: string,
}

const MessageBubble: FC<MessageProps> = ({ id, time, text, isMe }) => {
    return (
        <div
            key={id}
            className={`flex ${isMe ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`max-w-[70%] rounded-2xl px-5 py-3 shadow-sm relative ${
                    isMe
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-200 rounded-tl-none'
                }`}
            >
                <p className="text-sm leading-relaxed">{text}</p>
                <span className={`text-[10px] absolute bottom-1 right-3 ${isMe ? 'text-blue-200' : 'text-slate-500'}`}>
                    {time}
                </span>
            </div>
        </div>
    );
};

export default MessageBubble;