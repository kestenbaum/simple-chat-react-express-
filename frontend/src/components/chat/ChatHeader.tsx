
const ChatHeader = () => {
    return (
        <div className="h-16 border-b border-white/10 flex items-center px-6 justify-between bg-slate-900/20">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
                    CG
                </div>
                <div>
                    <h3 className="text-white font-medium">Chat with bot</h3>
                </div>
            </div>
        </div>
    );
};

export default ChatHeader;