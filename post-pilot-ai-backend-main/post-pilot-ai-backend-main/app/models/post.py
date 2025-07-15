from sqlalchemy import Column, Integer, String
from app.db.base import Base
from .timestamp import TimestampMixin

class Post(Base, TimestampMixin):
    __tablename__ = "posts"

    id = Column(Integer, primary_key=True, index=True)
    platform = Column(String, index=True)
    topic = Column(String, index=False)
    response = Column(String, index=False)

    def to_dict(self):
        return {column.name: getattr(self, column.name) for column in self.__table__.columns}
