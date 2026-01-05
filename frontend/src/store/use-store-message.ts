import { create } from 'zustand';

type Message = {
    id: number;
    text: string;
    isMe: boolean;
    time: string;
};

interface ChatStore {
    messages: Message[];
    isLoading: boolean;
    sendMessage: (text: string) => Promise<void>;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    messages: [],
    isLoading: false,

    sendMessage: async (text: string) => {
        const { messages } = get();
        const userMsg = {
            id: Date.now(),
            text: text,
            isMe: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        set({
            messages: [...messages, userMsg],
            isLoading: true
        });

        try {
            const response = await fetch('http://localhost:5000/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: text })
            });

            const data = await response.json();

            set((state) => ({
                messages: [
                    ...state.messages,
                    {
                        id: Date.now() + 1,
                        text: data.reply,
                        isMe: false,
                        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                ],
                isLoading: false
            }));

        } catch (error) {
            console.error(error);
            set({ isLoading: false });
        }
    },
}));