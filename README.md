# AI Financial Chat Application

The AI Financial Chat Application allows users to interact with an AI assistant to get professional and detailed answers to financial questions.
The app leverages OpenAI's API for natural language processing and is built with a React.js frontend and a Node.js backend.

## Technologies Used

### Frontend
- React.js: For building the user interface.
- Axios: For making HTTP requests to the backend.
- CSS: For styling the components.

### Backend
- Node.js: For handling server-side logic.
- Express.js: For creating RESTful API endpoints.
- OpenAI API: For AI assistant functionality.
- Dotenv: For managing environment variables.

## Setup Instructions

### Clone the Repository
- `git clone https://github.com/thisisnitishyadav/AI-Financial-Assistant`
- `cd AI-Financial-Assistant`

### Backend Setup
1. **Navigate to the backend directory:**\
  `cd backend`
2. **Install dependencies:**\
  `npm install`
3. **Create a .env file in the backend directory and add the following:**\
  `PORT=5001`\
  `OPENAI_API_KEY=openai-api-key`
4. **Start backend:**\
 `npm run dev`

### Frontend Setup
1. **Navigate to the frontend directory:**\
  `cd frontend`
2. **Install dependencies:**\
  `npm install`
3. **Start the frontend development server:**\
  `npm start`

### Testing the Application

#### Sample Questions

- "Share my revenue during March."
- "Forecast my expenses for the next month."
- "What was my net profit in Q1?"

#### Expected Behaviour

- The assistant will fetch the necessary data from the backend (using dummy financial data) and respond in a detailed manner.

