import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lessons from "./components/Lessons";
import Quizzes from "./components/Quizzes";

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div>
      <Navbar setPage={setPage} />
      <main>
        {page === "home" && <Home />}
        {page === "lessons" && <Lessons />}
        {page === "quizzes" && <Quizzes />}
      </main>
    </div>
  );
}
