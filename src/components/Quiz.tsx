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

const Quiz = () => {
  const confettiOptions = {
    force: 0.9,
    duration: 6000,
    particleCount: 100,
    width: 800,
  };
  const [question, setQuestion] = useState(1);
  const [answers, setAnswers] = useState<
    { question: number; answer: boolean }[]
  >([]);
  const [quizdone, setQuizdone] = useState(false);
  const [score, setScore] = useState(0);
  const [quizData, setQuizData] = useState<any>([
    {
      text: "What is openAI 1 ?",
      options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      answer: "Opt 2",
    },
    {
      text: "What is openAI 2 ?",
      options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      answer: "Opt 3",
    },
    {
      text: "What is openAI 3 ?",
      options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      answer: "Opt 4",
    },
    {
      text: "What is openAI 4 ?",
      options: ["Opt 1", "Opt 2", "Opt 3", "Opt 4"],
      answer: "Opt 1",
    },
  ]);

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
      setQuizdone(true);
    }
    console.log(answers);
  };

  const goHome = () => {
    window.location.href = "/";
  }

  useEffect(() => {
    axios
      .get("http://localhost:3000/quiz/questions")
      .then((res) => {
        setQuizData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Card>
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
                  answer: string;
                  text:
                    | string
                    | number
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | React.ReactPortal
                    | Iterable<React.ReactNode>
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
  );
};

export default Quiz;
