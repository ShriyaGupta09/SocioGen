# 🛠️ SocioGen — AI Social Media Content Generator

SocioGen is a full-stack AI-powered application that generates platform-specific social media content using LangChain and OpenAI. It uses a Next.js frontend, FastAPI backend, and PostgreSQL for data storage. The system is modular, scalable, and perfect for building content generation tools or AI-powered SaaS products.

## 🚀 Features

- Generate posts for Twitter, Instagram, LinkedIn, and Facebook
- Modular prompt templates powered by LangChain
- FastAPI backend with OpenAI GPT integration
- PostgreSQL database to store generated posts
- REST API communication between frontend and backend
- Clean architecture and scalable codebase

## 🧱 Tech Stack

- Frontend: Next.js (React + TypeScript)
- Backend: FastAPI (Python)
- AI Layer: LangChain + OpenAI GPT
- Database: PostgreSQL
- ORM: SQLAlchemy + asyncpg
- Communication: REST API

## 📁 Project Structure

/postcraft  
├── backend/  
│   ├── app/  
│   │   ├── routers/ → API endpoints  
│   │   ├── services/ → OpenAI + LangChain logic  
│   │   ├── schemas/ → Request/response models  
│   │   ├── db/ → Database models & config  
│   │   └── main.py → FastAPI entry point  
│   ├── .env → Environment variables  
│   └── requirements.txt → Backend dependencies  
├── frontend/  
│   ├── pages/ → Next.js routes  
│   ├── components/ → UI components  
│   ├── lib/ → API clients  
│   ├── public/  
│   └── .env.local → Frontend environment variables  
└── README.md

## ⚙️ Backend Setup (FastAPI)

1. Go to the `backend` directory:  
   `cd backend`

2. Create and activate a virtual environment:  
   `python -m venv venv`  
   `source venv/bin/activate` (Windows: `venv\Scripts\activate`)

3. Install dependencies:  
   `pip install -r requirements.txt`

4. Create a `.env` file inside `backend/` with the following content:
   
   `OPENAI_API_KEY=your-openai-api-key`
   
   `DATABASE_URL=postgresql+asyncpg://username:password@localhost:5432/postcraft`

6. Run the backend server:  
   `uvicorn app.main:app --reload`

7. The API will be available at:  
   `http://localhost:8000`

## 🌐 Frontend Setup (Next.js)

1. Go to the `frontend` directory:  
   `cd frontend`

2. Install dependencies:  
   `npm install`

3. Create a `.env.local` file in the `frontend/` directory with the following content:
   `NEXT_PUBLIC_API_URL=http://localhost:8000`

4. Start the frontend development server:  
   `npm run dev`

5. The frontend will be running at:  
   `http://localhost:3000`

## 🔗 Connecting Frontend to Backend

The frontend communicates with the FastAPI backend using the base URL defined in `NEXT_PUBLIC_API_URL`. Make sure the backend is running at `http://localhost:8000` when the frontend is started. Example API call from the frontend:

```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/generate`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    platform: 'twitter',
    topic: 'langchain use in ai marketing'
  })
});
const data = await res.json();
```

## 📦API Endpoints

- GET /posts → Returns all saved posts

- POST /save → Save a generated post to PostgreSQL

## 💡Use Cases

- AI tools for automated social media management
- SaaS prototypes for marketing automation
- LangChain + OpenAI integration showcase
- MVPs for AI-powered content startups

## 🛠️ Future Enhancements

- Add JWT or OAuth authentication
- Add dashboard for post history and analytics
- Support scheduled post generation
- Allow dynamic prompt customization
- Multi-language support

## 📜 License
MIT License
