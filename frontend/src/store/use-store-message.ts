import { create } from 'zustand';
import { chatService, type ChatResponse } from "../api/chat/services";
import { getErrorMessage } from "../utils/errors.ts";

type Message = {
    id: number;
    text: string;
    isMe: boolean;
    time: string;
};

interface ChatStore {
    messages: Message[];
    isLoading: boolean;
    error: string | null;
    sendMessage: (text: string) => Promise<void>;
}

export const useChatStore = create<ChatStore>((set, get) => ({
    messages: [],
    isLoading: false,
    error: null,

    sendMessage: async (text: string) => {
        set({ isLoading: true, error: null });
        const { messages } = get();
        const userMsg = {
            id: Date.now(),
            text: text,
            isMe: true,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        set({
            messages: [...messages, userMsg],
            isLoading: true,
        });

        try {
            const data: ChatResponse = await chatService.sendMessage(text);
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
                isLoading: false,
            }));

        } catch (error: unknown) {
            const errorMessage = getErrorMessage(error);
            set({ isLoading: false, error: errorMessage });
            console.error("Error sending:", error);
        }
    },
}));