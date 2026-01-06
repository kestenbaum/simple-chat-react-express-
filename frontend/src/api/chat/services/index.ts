import { type AxiosInstance } from "axios";
import { apiInstance } from "@/api";
import { handleApiError } from "@/utils/errors";
import { getSessionId } from "@/utils/session";

export interface ChatResponse {
    reply: string;
}

interface ChatRequest {
    message: string;
    sessionId: string;
}

class ChatService {
    private axios: AxiosInstance = apiInstance;

    public async sendMessage(text: string): Promise<ChatResponse> {
        const sessionId: string = getSessionId();

        try {
            const response =
                await this.axios.post<ChatResponse>('/api/chat', {
                    message: text,
                    sessionId,
                } as ChatRequest);
            return response.data;
        } catch (e: unknown) {
            handleApiError(e);
            throw e;
        }
    }
}

export const chatService = new ChatService();