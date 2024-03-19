"use client";

import { Separator } from "@/components/ui/separator";
import React from "react";

export function Navbar(props: { onChange: (selected: string) => void }) {
  const [selected, setSelected] = React.useState("home");

  const handleSelected = (selected: string) => {
    setSelected(selected);
    console.log(props);
    props.onChange(selected);
  };

  return (
    <>
      <nav className="flex flex-col items-center justify-center space-y-3 w-full pt-4 h-full">
        <h1 className="text-xl font-bold text-center w-full p-4 bg-background text-primary-foreground">
          Welcome! 🎉
        </h1>
        <a
          className={
            (selected === "home"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("home")}
        >
          New quiz
        </a>
        <a
          className={
            (selected === "about"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("about")}
        >
          My quizzes
        </a>
        <a
          className={
            (selected === "contact"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("contact")}
        >
          Statistics
        </a>
        <Separator className="mt-10" />
        <h1 className="text-xl font-bold text-center w-full p-4 bg-background text-primary-foreground">
          Thanks for stopping by! 😊
        </h1>
        <a
          className={
            (selected === "contact"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("contact")}
        >
          Statistics
        </a>
        <a
          className={
            (selected === "contact"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("contact")}
        >
          Donate
        </a>
        <a
          className={
            (selected === "contact"
              ? " bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline") +
            " hover:bg-accent hover:text-accent-foreground w-11/12 flex items-center justify-center p-1 rounded-md"
          }
          onClick={() => handleSelected("contact")}
        >
          About us
        </a>
        <Separator className="mt-10" />

        <div className="flex flex-col items-center justify-center space-y-3 w-full pt-4 h-full mt-auto">
          <p>Adds to keep the lights on 💡</p>
          <img src="/ad.jpg" alt="Ad" className="w-11/12 rounded-md mt-auto" />
        </div>
      </nav>
    </>
  );
}
