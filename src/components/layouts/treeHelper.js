import choiceTree from "../../lib/choice";
import { Text } from "@chakra-ui/react";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CustomSelect from "../customSelect";
import CustomForm from "../customForm";

const TreeHelper = () => {
  // import the dispatch object from the entry point
  const { state, dispatch } = useContext(Context);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [type, setType] = useState();

  // function that dispatch an action to decide the next question
  const changeCurrentQuestion = () => {
    const currentQuestion = choiceTree.questions.find(
      (el) => el.id === state.currentQuestion
    );

    console.log(currentQuestion, "currentQuestion");
    setType(currentQuestion.type);
    setCurrentQuestion(currentQuestion);
  };

  // retrieve the first question
  useEffect(() => {
    changeCurrentQuestion();

    return () => {
      console.log("unmounting");
    };
  }, [state]);

  // it exist three type of input

  return (
    <div>
      {(() => {
        switch (type) {
          case "select":
            return <CustomSelect state={currentQuestion} />;
          case "form":
            return <CustomForm state={currentQuestion} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default TreeHelper;
