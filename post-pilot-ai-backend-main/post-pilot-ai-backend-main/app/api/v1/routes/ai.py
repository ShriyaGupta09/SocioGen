import os
import json
from dotenv import load_dotenv
from fastapi import APIRouter, Depends
from fastapi.responses import JSONResponse
from app.db.session import get_db
from app.services.ai_service import AiService

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

router = APIRouter(
    prefix="/ai",
    tags=["ai"],
    responses={404: {"description": "Not found"}},
)

@router.post("/generate/post")
async def generatePost(request: dict):
    try:
       prompt = await AiService.preparePost(request["topic"], request["platform"])
       responseData = await AiService.run(prompt)
       return {"message": "Success response", "data": responseData}
    except:
        return {"message": "Error response", "data": ""}
