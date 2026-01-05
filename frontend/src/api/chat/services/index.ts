import { type AxiosInstance } from "axios";
import { apiInstance } from "../../index.ts";
import { handleApiError } from "../../../utils/errors.ts";

export interface ChatResponse {
    reply: string;
}

interface ChatRequest {
    message: string;
}

class ChatService {
    private axios: AxiosInstance = apiInstance;

    public async sendMessage(text: string): Promise<ChatResponse> {
        try {
            const response =
                await this.axios.post<ChatResponse>('/api/chat', { message: text } as ChatRequest);
            return response.data;
        } catch (e: unknown) {
            handleApiError(e);
            throw e;
        }
    }
}

export const chatService = new ChatService();