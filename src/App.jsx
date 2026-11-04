import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import MainScreen from "./components/MainScreen";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StartScreen from "./components/StartScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";

const SEC_PER_QUESTION = 30;

const initialState = {
  questions: [],
  status: "home",
  selectedCategory: null,
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};

function reducer(state, action) {
  const question = state.questions.at(state.index);

  switch (action.type) {
    case "selectCategory":
      return {
        ...state,
        selectedCategory: action.payload,
        questions: [],
        status: "loadingQuestions",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: null,
      };

    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "active",
        secondsRemaining: action.payload.length * SEC_PER_QUESTION,
      };

    case "dataFailed":
      return { ...state, status: "error" };

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

    case "finish":
      return {
        ...state,
        status: "finished",
        highScore:
          state.points > state.highScore ? state.points : state.highScore,
      };

    case "restart":
      return {
        ...state,
        status: "home",
        index: 0,
        answer: null,
        points: 0,
        secondsRemaining: null,
      };

    case "tick":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Action Unknown");
  }
}

function App() {
  const [
    {
      questions,
      status,
      index,
      answer,
      points,
      highScore,
      secondsRemaining,
      selectedCategory,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const numQuestions = questions.length;

  const maxPossiblePoints = questions.reduce(
    (prev, cur) => prev + cur.points,
    0,
  );

  useEffect(() => {
    if (status !== "loadingQuestions") return;

    let isActive = true;

    fetch(`http://localhost:8000/categories/${selectedCategory}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch category");
        return res.json();
      })
      .then((data) => {
        if (isActive) {
          dispatch({
            type: "dataReceived",
            payload: data.questions,
          });
        }
      })
      .catch(() => {
        if (isActive) dispatch({ type: "dataFailed" });
      });

    return () => {
      isActive = false;
    };
  }, [status, selectedCategory]);

  return (
    <div className="min-h-screen bg-[#16181d] text-white">
      <Header />

      <MainScreen>
        {status === "home" && <StartScreen dispatch={dispatch} />}

        {status === "loadingQuestions" && <Loader />}

        {status === "error" && <Error />}

        {status === "active" && (
          <div className="w-full max-w-3xl">
            <Progress
              index={index}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />

            <Question
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />

            <div className="mt-8 flex min-h-11 items-center justify-between gap-4">
              <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />

              <NextButton
                dispatch={dispatch}
                answer={answer}
                index={index}
                numQuestions={numQuestions}
              />
            </div>
          </div>
        )}

        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </MainScreen>
    </div>
  );
}

export default App;
