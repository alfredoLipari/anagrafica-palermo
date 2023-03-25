import choiceTree from "../../lib/choice";
import { Context } from "../../App";
import { useContext, useEffect, useState } from "react";
import CustomSelect from "../custom/customInput/customSelect";
import CustomCheckbox from "../custom/customInput/customCheckbox";
import CustomLongForm from "../custom/customLongForm";
import CustomInputNumber, {howManyPeopleBesideYou} from "../custom/customInput/customInputNumber";
import CustomForm from "../custom/customForm";
import {Box, Progress} from "@chakra-ui/react";

const TreeHelper = ({history}) => {
  // import the dispatch object from the entry point
  const { state } = useContext(Context);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [type, setType] = useState();

  // function that dispatch an action to decide the next question
  const changeCurrentQuestion = () => {
    let currentQuestion;

      currentQuestion = choiceTree.language[state.language].questions.find(
        (el) => el.id === state.currentQuestion
      );

    setType(currentQuestion.type);
    setCurrentQuestion(currentQuestion);
  };



  const progressFunction = () => {


    //if 41 is will be change, check the constant below
    const moltFactor = history.currentQuestion === 41 ? howManyPeopleBesideYou * 2 : 2

    const totalAnswers = 46
    const percentage = 100
    const numberOfAnswers = history?.questionHistory.length
    const t = percentage * numberOfAnswers * moltFactor

    return Math.ceil(t/totalAnswers)

  }


  // retrieve the next question
  useEffect(() => {

    changeCurrentQuestion();

  }, [state, changeCurrentQuestion]);

  // it exists three type of input

  return (

      <>

        <Box>

            <Progress
                colorScheme={"messenger"}
                className={"progressBar"}
                value={progressFunction()}
                size={"sm"}
                margin={1}
            />

        </Box>


        <div>
          {(() => {
            switch (type) {
              case "select":
                return <CustomSelect stateQuestion={currentQuestion}/>;
              case "form":
                return <CustomForm stateTemp={currentQuestion}/>;
              case "checkbox":
                return <CustomCheckbox stateQuestion={currentQuestion}/>;
              case "longform":
                return <CustomLongForm stateQuestions={currentQuestion}/>;
              case "number":
                return <CustomInputNumber state={currentQuestion}/>;
              default:
                return null;
            }
          })()}
        </div>
      </>
  );
};

export default TreeHelper;
