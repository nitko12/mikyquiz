import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const Question = (props: {
  save: (arg0: boolean) => void;
  data: {
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
  };
}) => {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const submitAnswer = () => {
    setSubmitted(true);
  };
  const nextQuestion = () => {
    props.save(answer == props.data.correct);
  };
  const checkAnswer = (val: string) => {
    //console.log(props.data.correct == answer)
    if (val == answer && val == props.data.correct) {
      return true;
    }
    if (val == answer && val != props.data.correct) {
      return false;
    }
    if (val != answer && val == props.data.correct) {
      return true;
    }
  };
  return (
    <div className="flex flex-col">
      <Label className="text-3xl mb-4" htmlFor="">
        {props.data.question}
      </Label>
      {props.data.answers.map((x: any, i:any) => {
        return (
          <div
            key={i}
            className={`${
              answer == x ? "border-[#aaa]" : ""
            } border px-2 py-2 mt-1 mb-1 rounded flex justify-between items-center cursor-pointer`}
            onClick={() => (submitted ? "" : setAnswer(x))}
          >
            <span>{x}</span>
            {submitted && checkAnswer(x) == true && (
              <FaCheckCircle size={20} color="#0cde0c"></FaCheckCircle>
            )}
            {submitted && checkAnswer(x) == false && (
              <FaTimesCircle size={20} color="#de3c3c"></FaTimesCircle>
            )}
          </div>
        );
      })}
      <Separator className="my-2" />
      {submitted ? (
        <Button className="mt-1" onClick={() => nextQuestion()}>
          Next
        </Button>
      ) : (
        <Button className="mt-1" onClick={() => submitAnswer()}>
          Submit
        </Button>
      )}
    </div>
  );
};

export default Question;
