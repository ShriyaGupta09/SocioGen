import io
import os
from fastapi import HTTPException
from dotenv import load_dotenv
from langchain_core.prompts import PromptTemplate
from langchain_openai import ChatOpenAI

load_dotenv()

OPENAI_API_KEY = os.getenv("OPENAI_API_KEY")

class AiService:

    async def preparePost(topic, platform):

        template = """
                Write one detailed social media post about "{topic}" tailored for the platform "{platform}".
                Make sure the post matches the style, tone, and format typical for {platform}:

                - If {platform} is Twitter, keep it short and catchy with relevant hashtags.
                - If {platform} is Instagram, write a creative caption using emojis and hashtags, casual and engaging.
                - If {platform} is LinkedIn, make it professional, informative, and formal without slang.
                - If {platform} is Facebook, write a detailed, informative, friendly and engaging post that encourages sharing and comments.

                Return only the post content without any extra explanation.
            """
        
        inputs = {
            "topic": topic,
            "platform": platform
        }

        prompt = PromptTemplate(template=template, input_variables=["topic", "platform"])


        return {
            "template": prompt,
            "inputs": inputs
        }
    

    async def run(prompt):
        llm = ChatOpenAI(model_name="gpt-3.5-turbo", openai_api_key=OPENAI_API_KEY)

        chain= prompt["template"] | llm

        response = chain.invoke(prompt["inputs"])

        responseContent = response.content

        return responseContent
