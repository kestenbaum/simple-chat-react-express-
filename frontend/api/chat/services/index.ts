import { type AxiosInstance } from "axios";
import { apiInstance } from "../../index";

class ChatService {
    private axios: AxiosInstance = apiInstance;

    public async sendMessage(text: string) {
        try {
            const response = await this.axios.post('/api/chat', { message: text });
            return response.data;
        } catch (e: unknown) {
            throw e instanceof Error ? e : new Error(String(e));
        }
    }
}

export const chatService = new ChatService();