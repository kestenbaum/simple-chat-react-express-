import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const sessions = {};
app.post('/api/chat', async (req, res) => {
		try {
				const { message, sessionId } = req.body;
				
				if (!sessions[sessionId]) {
						sessions[sessionId] = [
								{
										role: "system",
										content: "You bot, saving info chat."
								}
						]
				}
				sessions[sessionId].push({ role: "user", content: message });
				
				const completion = await openai.chat.completions.create({
						messages: sessions[sessionId],
						model: "gpt-3.5-turbo",
				});
				
				const botMessage = completion.choices[0].message;
				sessions[sessionId].push(botMessage);
				
				res.json({ reply: botMessage.content });
				
		} catch (error) {
				console.error("error OpenAI:", error);
				res.status(500).json({ error: "error server" });
		}
});

app.listen(PORT, () => {
		console.log(`server start http://localhost:${PORT}`);
});