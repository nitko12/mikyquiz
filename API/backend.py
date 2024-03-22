from fastapi import FastAPI
from fastapi.responses import JSONResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

import json
import os
import random

app = FastAPI()

origins = [
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:4321"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

dir = os.path.dirname(__file__)

class CorrectAnswer(BaseModel):
    jmbag: str
    correct: int

@app.get("/quizquestions")
async def root():
    random_questions = []
    with open(os.path.join(dir, "pitanja.json")) as f:
        questions = json.load(f)
        random_questions = random.sample(questions, 5)
    return random_questions

@app.post("/end")
async def end(correct_answer: CorrectAnswer):
    with open(os.path.join(dir, "rezultati.txt"), "a") as f:
        f.write(f"{correct_answer.jmbag} {correct_answer.correct}\n")
    return JSONResponse(content={"message": "Success"})