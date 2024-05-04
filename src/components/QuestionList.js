import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [question, setQuestion] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((res) => res.json())
      .then((data) => {
        setQuestion(data);
      });
  }, []);
  function updateQuestionList(deleteItem) {
    const newQuestionList = question.filter(
      (item) => item.id !== deleteItem.id
    );
    setQuestion(newQuestionList);
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {question.map((questions) => {
          return (
            <QuestionItem
              key={questions.id}
              updateQuestionList={updateQuestionList}
              question={questions}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default QuestionList;
