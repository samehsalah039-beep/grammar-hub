import React from "react";

export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">
      <span className="logo">Grammar Hub</span>
      <button onClick={() => setPage("home")}>Home</button>
      <button onClick={() => setPage("lessons")}>Lessons</button>
      <button onClick={() => setPage("quizzes")}>Quizzes</button>
    </nav>
  );
}
