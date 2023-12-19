import { useState } from "react";
import Result from "../result";
import { useNavigate } from "react-router-dom";
function Question() {
    const questionsData = [
      {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        answer: "Paris",
      },
      {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: "Mars",
      },
      {
        question: "Who wrote 'Romeo and Juliet'?",
        options: [
          "Charles Dickens",
          "William Shakespeare",
          "Jane Austen",
          "Mark Twain",
        ],
        answer: "William Shakespeare",
      },
      {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale",
      },
      {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1920", "1931"],
        answer: "1912",
      },
    ];

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [userAnswers, setUserAnswers] = useState("");
    const [showAnswers, setShowAnswers] = useState(false);
  
    const handleAnswerClick = (selectedOption) => {
      // Update user's answer for the current question
      setUserAnswers(selectedOption);
      setShowAnswers(true);
  
      // Check if the answer is correct and update the score
      if (selectedOption === questionsData[currentQuestion].answer) {
        setScore(score + 1);
      }
    };
  
    const handleNextQuestion = () => {
      // Move to the next question
      if (currentQuestion < questionsData.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setUserAnswers("");
        setShowAnswers(false);
      } else {
        // Quiz completed
        navigate(`/result?score=${score}&total=${questionsData.length}`);

      }
    };
    return (
      <div className="page">
        <div>
          <h1>Quiz App</h1>
          {currentQuestion < questionsData.length && (
            <div>
              <h2>Question {currentQuestion + 1}:</h2>
              <p>{questionsData[currentQuestion].question}</p>
              <ul>
                {questionsData[currentQuestion].options.map((option, index) => (
                  <li key={index}>
                    <input
                      type="radio"
                      id={index}
                      checked={userAnswers === option}
                      onChange={() => handleAnswerClick(option)}
                      disabled={showAnswers}
                    />
                    <label htmlFor={index}>{option}</label>
                  </li>
                ))}
              </ul>
              {showAnswers && (
                <div>
                  <p
                    style={{
                      color:
                        userAnswers === questionsData[currentQuestion].answer
                          ? "green"
                          : "red",
                    }}
                  >
                    Your answer: {userAnswers}
                  </p>
                  <p
                    style={{
                      color: "green",
                    }}
                  >
                    Correct answer: {questionsData[currentQuestion].answer}
                  </p>
                </div>
              )}
              <button onClick={handleNextQuestion}>
                {currentQuestion < questionsData.length - 1 ? "Next" : "Finish"}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
  export default Question;