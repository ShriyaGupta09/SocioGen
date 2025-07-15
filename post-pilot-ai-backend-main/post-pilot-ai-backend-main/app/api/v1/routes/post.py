from fastapi import APIRouter, Depends, HTTPException
from fastapi.responses import JSONResponse
from sqlalchemy.ext.asyncio import AsyncSession
from app.schemas.post import PostCreate
from app.db.session import get_db
from app.repositories.post import PostRepository


router = APIRouter(
    prefix="/posts",
    tags=["posts"],
    responses={404: {"description": "Not found"}},
)

@router.get("/")
async def get_tasks(db: AsyncSession=Depends(get_db)):
    data = await PostRepository.get_all(db)
    if not data:
        raise HTTPException(status_code=404, detail="No tasks found")
    return data

@router.get("/{task_id}")
async def get_task(task_id: int):
    if task_id < 1:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"task_id": task_id, "message": "Task details"}


@router.post("/")
async def create(request: PostCreate, db: AsyncSession=Depends(get_db)):
    task = await PostRepository.create(request.model_dump(), db)
    if not task:
        raise HTTPException(status_code=400, detail="Task creation failed")
    return {"message": "Post Saved", "data": task}


@router.put("/{task_id}")
async def update_task(task_id: int, request: PostCreate, db: AsyncSession=Depends(get_db)):
    task= await PostRepository.get_by_id(task_id, db)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    
    payload = {
        **task.to_dict(),
        **request.model_dump(),
    }

    task = await PostRepository.update(task_id, payload, db)
    if not task:
        raise HTTPException(status_code=404, detail="Task not found")
    return {"task_id": task_id, "message": "Task updated"}


@router.delete("/{task_id}")
async def delete_task(task_id: int, db: AsyncSession=Depends(get_db)):
    deleted = await PostRepository.delete(task_id, db)
    if not deleted:
        raise HTTPException(status_code=404, detail="Task not found")

    return {"task_id": task_id, "message": "Task deleted"}
