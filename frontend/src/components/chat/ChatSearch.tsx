
const ChatSearch = () => {
    return (
        <div className="p-4 border-b border-white/10">
            <input
                type="text"
                placeholder="Search..."
                className="w-full bg-slate-800 text-slate-200 placeholder-slate-500 text-sm rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
            />
        </div>
    );
};

export default ChatSearch;