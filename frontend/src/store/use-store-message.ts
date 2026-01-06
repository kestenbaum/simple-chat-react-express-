import { create } from 'zustand';
import { chatService, type ChatResponse } from "../api/chat/services";
import { getErrorMessage } from "../utils/errors.ts";
import { formatMessageTime } from "../utils/date.ts";

type Message = {
    id: string;
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
        const { messages } = get();
        const userMsg = {
            id: crypto.randomUUID(),
            text: text,
            isMe: true,
            time: formatMessageTime()
        };

        set({
            messages: [...messages, userMsg],
            isLoading: true,
            error: null,
        });

        try {
            const data: ChatResponse = await chatService.sendMessage(text);
            set((state) => ({
                messages: [
                    ...state.messages,
                    {
                        id: crypto.randomUUID(),
                        text: data.reply,
                        isMe: false,
                        time: formatMessageTime()
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