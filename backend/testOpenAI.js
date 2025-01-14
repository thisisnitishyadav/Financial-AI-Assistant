const axios = require('axios');

const API_KEY = process.env.OPENAI_API_KEY;
if (!API_KEY) {
    console.error('Error: OPENAI_API_KEY is not defined in .env');
    process.exit(1);
}
const API_URL = 'https://api.openai.com/v1/chat/completions';

const testOpenAI = async () => {
    try {
        const response = await axios.post(
            API_URL,
            {
                model: 'gpt-3.5-turbo',
                messages: [
                    { role: 'system', content: 'You are a helpful assistant.' },
                    { role: 'user', content: 'Hello, AI!' },
                ],
            },
            {
                headers: {
                    'Authorization': `Bearer ${API_KEY}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        console.log('API Response:', JSON.stringify(response.data, null, 2));
    } catch (error) {
        // error handling
        if (error.response) {
            console.error('Error Response:', error.response.data);
        } else if (error.request) {
            console.error('No response received:', error.request);
        } else {
            console.error('Request Error:', error.message);
        }
    }
};

testOpenAI();