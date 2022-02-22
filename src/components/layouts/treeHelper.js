import choiceTree from "../../lib/choice";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CustomSelect from "../custom/customInput/customSelect";
import CustomCheckbox from "../custom/customInput/customCheckbox";
import CustomLongForm from "../custom/customLongForm";
import CustomInputNumber from "../custom/customInput/customInputNumber";
import CustomFormTest from "../custom/customFormTest";

const TreeHelper = () => {
  // import the dispatch object from the entry point
  const { state } = useContext(Context);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [type, setType] = useState();

  // function that dispatch an action to decide the next question
  const changeCurrentQuestion = () => {
    let currentQuestion = [];

    // see if we are inside the tree components
    if (state.componentTree.length) {
      currentQuestion = state.componentTree.find(
        (el) => el.id === state.currentQuestion
      );
    } else {
      currentQuestion = choiceTree.language[state.language].questions.find(
        (el) => el.id === state.currentQuestion
      );
    }

    setType(currentQuestion.type);
    setCurrentQuestion(currentQuestion);
  };

  console.log(currentQuestion);

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
            return <CustomSelect state={currentQuestion} />;
          case "form":
            return <CustomFormTest stateTemp={currentQuestion} />;
          case "checkbox":
            return <CustomCheckbox state={currentQuestion} />;
          case "longform":
            return <CustomLongForm state={currentQuestion} />;
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
