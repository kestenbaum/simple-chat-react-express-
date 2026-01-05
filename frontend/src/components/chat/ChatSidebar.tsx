
const ChatSidebar = () => {
    return (
        <div className="w-80 border-r border-white/10 hidden md:flex flex-col bg-slate-900/40">
            <div className="flex-1 overflow-y-auto p-2 space-y-1">
                <div className="p-3 bg-blue-600/20 border border-blue-500/30 rounded-xl cursor-pointer">
                    <h4 className="text-sm font-medium text-white">Chat history</h4>
                </div>
            </div>
        </div>
    );
};

export default ChatSidebar;