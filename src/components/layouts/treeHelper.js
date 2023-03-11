import choiceTree from "../../lib/choice";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CustomSelect from "../custom/customInput/customSelect";
import CustomCheckbox from "../custom/customInput/customCheckbox";
import CustomLongForm from "../custom/customLongForm";
import CustomInputNumber from "../custom/customInput/customInputNumber";
import CustomForm from "../custom/customForm";

const TreeHelper = () => {
  // import the dispatch object from the entry point
  const { state } = useContext(Context);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [type, setType] = useState();

  // function that dispatch an action to decide the next question
  const changeCurrentQuestion = () => {
    let currentQuestion = [];

      currentQuestion = choiceTree.language[state.language].questions.find(
        (el) => el.id === state.currentQuestion
      );
    
    setType(currentQuestion.type);
    setCurrentQuestion(currentQuestion);
  };

  // retrieve the next question
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
            return <CustomSelect stateQuestion={currentQuestion} />;
          case "form":
            return <CustomForm stateTemp={currentQuestion} />;
          case "checkbox":
            return <CustomCheckbox stateQuestion={currentQuestion} />;
          case "longform":
            return <CustomLongForm stateQuestions={currentQuestion} />;
          case "number":
            return <CustomInputNumber state={currentQuestion} />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default TreeHelper;
