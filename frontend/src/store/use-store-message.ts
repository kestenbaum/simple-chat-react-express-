import { create } from 'zustand';

type Message = {
    id: number;
    text: string;
    isMe: boolean;
    time: string;
};

interface ChatStore {
    messages: Message[];
    sendMessage: (text: string) => void;
    clearChat: () => void;
}

export const useChatStore = create<ChatStore>((set) => ({
    messages: [
        { id: 1, text: "Hello", isMe: false, time: "10:00" },
        { id: 2, text: "Hi", isMe: true, time: "10:05" },
    ],

    sendMessage: (text) => set((state) => ({
        messages: [
            ...state.messages,
            {
                id: Date.now(),
                text: text,
                isMe: true,
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }
        ]
    })),
    clearChat: () => set({ messages: [] })
}));