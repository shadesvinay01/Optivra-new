from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
import os

from crew import create_marketing_crew

# Load environment variables from .env file
load_dotenv()

app = FastAPI(title="Optivra AI Backend")

# Allow Next.js frontend to communicate with this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001"], # Add your frontend URLs here
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RunCrewRequest(BaseModel):
    topic: str

@app.get("/")
def read_root():
    return {"status": "Optivra AI Backend is running!"}

@app.post("/api/run-marketing-crew")
def run_marketing_crew(request: RunCrewRequest):
    try:
        print(f"Starting marketing crew for topic: {request.topic}")
        # Execute the CrewAI logic
        result = create_marketing_crew(request.topic)
        return {"success": True, "result": result}
    except Exception as e:
        print(f"Error running crew: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))
