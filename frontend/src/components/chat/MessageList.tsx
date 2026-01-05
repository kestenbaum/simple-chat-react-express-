import MessageBubble from "./MessageBubble.tsx";
import { useChatStore } from "../../store/use-store-message.ts";

const MessageList = () => {
    const { messages } = useChatStore();

    return (
        <div className="flex-1 overflow-y-auto p-6 space-y-4 custom-scrollbar">
            {messages.map((msg) => (
                <MessageBubble id={msg.id } isMe={msg.isMe} text={msg.text} time={msg.time} />
            ))}
        </div>
    );
};

export default MessageList;