import { ModeToggle } from "@/components/ModeToggle";

function navigateToHome() {
  window.location.href = "/";
}

export function Header() {
  return (
    <div
      className="flex justify-between items-center p-4 border-b"
      style={{ backdropFilter: "blur(6px)" }}
    >
      <img src="/mickey.svg" width="40" alt="Mickey Mouse" onClick={navigateToHome} style={{ cursor: "pointer" }} />

      <h2 className="text-2xl font-bold">MikyQuiz</h2>
      {/* <ModeToggle client:load /> */}
      <ModeToggle />
    </div>
  );
}
