import React, { useContext, useState } from "react";
import { Context } from "../../../App";
import { Select, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CustomButton, {translateButtonBack, translateButton} from "./customButton";
import ActionsButton from "../../button/ActionsButton";

const CustomSelect = ({ stateQuestion }) => {
  const { dispatch, state } = useContext(Context);
  const [selectAnswer, setSelectAnswer] = useState({});
  const navigate = useNavigate();


  const dispatchAnswer = () => {
    if (Object.keys(selectAnswer).length === 0) {
      //the user didnt select anything
      return;
    }
    //retrieve the object answer from the id
    const answer = stateQuestion.answers.find((answ) => {
      return answ.id === selectAnswer;
    });

    console.log("stateQuestion",answer)

    // dispatch the answer action to the choice reducer
    dispatch({
      type: "ANSWER_QUESTION_SELECT",
      answer: answer,
      state: stateQuestion,
    });
    setSelectAnswer({});
    if (stateQuestion.id === 33) {
      navigate("/download-pdf");
    }
  };

  return (
    <Box marginTop="48" display="flex" alignItems="center" flexDir="column">
      <Text
        fontWeight="bold"
        fontSize="3xl"
        color="#000"
        padding={{ base: 5, md: 0 }}
      >
        {stateQuestion.title}
      </Text>
      <Select
        iconColor="#0E78E2"
        iconSize="50"
        color="#000"
        placeholder={stateQuestion.label}
        width={{ base: "75%", md: "25%" }}
        fontSize="xl"
        marginTop="10"
        onChange={(something) => setSelectAnswer(something.target.value)}
        bg="white"
        marginBottom="12"
      >
        {stateQuestion.answers.map((el) => (
          <option value={el.id} key={el.id}>
            {el.label}
          </option>
        ))}
      </Select>

        <ActionsButton
            stateQuestionId ={stateQuestion.id}
            goBackButtonHandler = {() => dispatch({type: "GO BACK"}) }
            continueButtonHandler = {() => dispatchAnswer()}
            colorSchemeContinueButton = "facebook"
            state = {state}
        />
    
    </Box>
  );
};

export default CustomSelect;
