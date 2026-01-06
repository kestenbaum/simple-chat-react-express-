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
            className={`flex w-full mb-4 ${isMe ? 'justify-end' : 'justify-start'}`}
        >
            <div
                className={`max-w-[75%] rounded-2xl px-4 pt-3 pb-5 shadow-sm relative break-all ${
                    isMe
                        ? 'bg-blue-600 text-white rounded-tr-none'
                        : 'bg-slate-800 text-slate-200 rounded-tl-none'
                }`}
            >
                <p className="text-sm leading-relaxed whitespace-pre-wrap">
                    {text}
                </p>

                <span className={`text-[10px] absolute bottom-1 right-3 select-none ${
                    isMe ? 'text-blue-100/70' : 'text-slate-500'
                }`}>
            {time}
        </span>
            </div>
        </div>
    );
};

export default MessageBubble;