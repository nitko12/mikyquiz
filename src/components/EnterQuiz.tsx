"use client";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, {useState} from "react";
import axios from "axios";

export function EnterQuiz() {

    const [jmbag, setJmbag] = useState("");
    const [quizCode, setQuizCode] = useState("");

    const handleJmbagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setJmbag(e.target.value);
    }

    const handleQuizCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuizCode(e.target.value);
    }

    function handleEnter() {
        axios.post("http://localhost:3000/quiz/enter", {
            jmbag: jmbag,
            quizCode: quizCode
        }).then((res) => {
            if(res.status === 200) {
                window.location.href = "/quiz";
            }
        }).catch((err) => {
            alert("Nesto je krepalo");
        });
    }

    return (
        <Card>
          <CardHeader className="space-y-1 flex flex-col items-center">
            <CardTitle className="text-2xl">Pristupi kvizu</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-2">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Amogus
                </span>
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">JMBAG</Label>
              <Input id="email" type="email" placeholder="00365xxxxx" onChange={handleJmbagChange} />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Quiz code</Label>
              <Input id="password" onChange={handleQuizCodeChange} />
            </div>
          </CardContent>
          <CardContent>
            <Button className="w-full" onClick={handleEnter}>Enter</Button>
          </CardContent>
        </Card>
      );
}
    