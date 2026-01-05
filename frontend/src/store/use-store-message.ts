import { create } from 'zustand';
import { chatService } from "../../api/chat/services";

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
            const data = await chatService.sendMessage(text);
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

        } catch (error: unknown) {
            set({ isLoading: false });
            console.error("Error sending:", error);
        }
    },
}));