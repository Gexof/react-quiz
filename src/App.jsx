import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    case "dataRecevied":
      return { ...state, questions: action.payload, status: "ready" };

    case "dataFailed":
      return { ...state, status: "error" };

    case "start":
      return { ...state, status: "active" };

    case "newAnswer":
      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === question.correctOption
            ? state.points + question.points
            : state.points,
      };

    case "nextQuestion":
      return { ...state, index: state.index + 1, answer: null };

    default:
      throw new Error("Action Unkown");
  }
}

function App() {
  const [{ questions, status, index, answer }, dispatch] = useReducer(
    reducer,
    initialState,
  );

  const numQuestions = questions.length;

  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataRecevied", payload: data }))
      .catch(() => dispatch({ type: "dataFailed" }));
  }, []);

  return (
    <div className="min-h-screen bg-[#16181d] text-white">
      <Header />

      <MainScreen>
        {status === "loading" && <Loader />}

        {status === "error" && <Error />}

        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}

        {status === "active" && (
          <div className="w-full max-w-3xl">
            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <div className="mt-8 flex justify-end">
              <NextButton dispatch={dispatch} answer={answer} />
            </div>
          </div>
        )}
      </MainScreen>
    </div>
  );
}

export default App;
