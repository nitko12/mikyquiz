import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Question from "@/components/shared/Question";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import ConfettiExplosion from "react-confetti-explosion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import axios from "axios";

const QuizComponent = () => {
  const confettiOptions = {
    force: 0.9,
    duration: 6000,
    particleCount: 100,
    width: 800,
  };
  const [jmbag, setJmbag] = useState("");
  const [question, setQuestion] = useState(1);
  const [answers, setAnswers] = useState<
    { question: number; answer: boolean }[]
  >([]);
  const [quizdone, setQuizdone] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState<any>([]);
  const [endCorrect, setEndCorrect] = useState(false);

  const saveAnswer = (e: boolean, q: number) => {
    let newAnswers: { question: number; answer: boolean }[] = [...answers];
    newAnswers.push({
      question: q,
      answer: e,
    });
    setAnswers(newAnswers);
    if (e) {
      setScore(score + 1);
    }
    if (question < quizData.length) {
      setQuestion(question + 1);
    }
    if (question === quizData.length) {
      console.log(question);
      setQuizdone(true);
    }
  };

  useEffect(() => {
    if (quizdone) {
      sendResults();
    }
  }, [quizdone]);

  function sendResults() {
    console.log(score);
    axios
      .post("http://157.230.31.248:8000/end", {
        jmbag: localStorage.getItem("jmbag"),
        correct: score,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const goHome = () => {
    window.location.href = "/";
  }

  useEffect(() => {
    setJmbag(localStorage.getItem("jmbag") || "");
    if (localStorage.getItem("jmbag") === null) {
      alert("Treba jmbag!");
      window.location.href = "/";
    }
    axios
      .get("http://157.230.31.248:8000/quizquestions")
      .then((res) => {
        setQuizData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return quizData.length != 0 ? (
    <Card>
      {quizData.map}
      <CardHeader>
        {!quizdone && (
          <div>
            <Progress
              ref={null}
              {...{ value: (question / quizData.length) * 100 }}
            />
            <CardTitle className="text-sm">
              Question {question}/{quizData.length}
            </CardTitle>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <div className="w-[400px]">
          {!quizdone &&
            quizData.map(
              (
                x: {
                  answers: any;
                  question: string;
                  correct: string;
                  answer: string;
                  text:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | null
                    | undefined;
                  options: any[];
                },
                i: React.Key | null | undefined
              ) => {
                if ((i as number) + 1 === question) {
                  return (
                    <Question
                      key={i}
                      data={x}
                      save={(e) => saveAnswer(e, (i as number) + 1)}
                    ></Question>
                  );
                }
              }
            )}

          {quizdone && (
            <div className="flex flex-col items-center">
              <Label className="text-3xl">Rezultat</Label>
              <Separator className="my-2" />
              <ConfettiExplosion {...confettiOptions} />
              <span className="text-2xl">
                {score}/{quizData.length} odgovora je tocno!
              </span>

              <Button className="mt-5" onClick={goHome}>Povratak</Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  ) : (
    <div>Loading...</div>
  );
};

export default QuizComponent;
