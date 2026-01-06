import ChatSidebar from "./ChatSidebar";
import MessageList from "./MessageList";
import ChatHeader from "./ChatHeader";
import MessageInput from "./MessageInput";

const Chat = () => {
    return (
        <section className="bg-blue-950 h-[calc(100vh-56px)] flex items-center justify-center p-4">
            <div className="w-full max-w-5xl h-full bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex">
                <ChatSidebar />
                <div className="flex-1 flex flex-col bg-slate-950/30 relative">
                    <ChatHeader />
                    <MessageList />
                    <MessageInput />
                </div>
            </div>
        </section>
    );
};

export default Chat;