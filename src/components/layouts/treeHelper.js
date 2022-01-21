import choiceTree from "../../lib/choice";
import { Text } from "@chakra-ui/react";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CustomSelect from "../customSelect";

const TreeHelper = () => {
  // import the dispatch object from the entry point
  const { state } = useContext(Context);
  const [currentAnswer, setCurrentAnswer] = useState();
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [type, setType] = useState();

  // function that dispatch an action to decide the next question
  const changeCurrentQuestion = () => {
    const currentQuestion = choiceTree.questions.find((el) => (el.id = state));
    console.log(currentQuestion, "here");
    setType(currentQuestion.type);
    setCurrentQuestion(currentQuestion);
  };

  // retrieve the first question
  useEffect(() => {
    changeCurrentQuestion();

    return () => {
      console.log("unmounting");
    };
  }, []);

  // it exist three type of input

  return (
    <div>
      {(() => {
        switch (type) {
          case "select":
            return <CustomSelect state={currentQuestion} />;

          default:
            return null;
        }
      })()}
    </div>
  );
};

export default TreeHelper;
