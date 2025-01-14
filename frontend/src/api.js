import axios from 'axios';

export const fetchAssistantResponse = async (userId, query) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL}/api/assistant/query`, {
      userId,
      query,
    });

    return response.data.reply;
  } catch (error) {
    console.error("Error fetching assistant response:", error);
    return "I'm sorry, I couldn't process your request at the moment.";
  }
};
