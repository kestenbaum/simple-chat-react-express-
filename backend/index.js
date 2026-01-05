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

app.post('/api/chat', async (req, res) => {
		try {
				const { message } = req.body;
				const completion = await openai.chat.completions.create({
						messages: [
								{ role: "system", content: "Bot" },
								{ role: "user", content: message }
						],
						model: "gpt-3.5-turbo",
				});
				
				const botResponse = completion.choices[0].message.content;
				res.json({ reply: botResponse });
				
		} catch (error) {
				console.error("error OpenAI:", error);
				res.status(500).json({ error: "error server" });
		}
});

app.listen(PORT, () => {
		console.log(`server start http://localhost:${PORT}`);
});