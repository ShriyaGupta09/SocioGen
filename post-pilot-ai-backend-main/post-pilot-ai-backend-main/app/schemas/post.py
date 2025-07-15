from pydantic import BaseModel, Field
from typing import Optional, List
from datetime import datetime


class PostBase(BaseModel):
    platform: str = Field(title="Platform", example="Platform")
    topic: Optional[str] = Field(None, example="Post Topic")
    response: Optional[str] = Field(None, example="Post Response")

    class Config:
        orm_mode = True
class PostCreate(PostBase):
    pass
