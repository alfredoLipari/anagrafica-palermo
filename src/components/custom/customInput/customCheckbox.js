import React, { useState, useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Context } from "../../../App";
import CustomButton from "./customButton";
import ActionsButton from "../../button/ActionsButton";

const CustomCheckbox = ({ stateQuestion }) => {
  const [answer, setAnswer] = useState(true);
  const { dispatch, state } = useContext(Context);

  const translateButton = () => {
    switch (state.language) {
      case "Italian":
        return "Continua";
      case "French":
        return "Continuez";
      case "Spanish":
        return "continuar";
      case "Ukranian":
        return "Продовжуйте";
      default:
        return "Continue";
    }
  };

  const submitAnswer = () => {
    const nextQuestion = answer
      ? stateQuestion.answers[0].nextQuestion
      : stateQuestion.answers[1].nextQuestion;

    dispatch({
      type: "ANSWER_QUESTION_CHECKBOX",
      answer: answer,
      nextQuestion: nextQuestion,
    });
  };

  return (
    <Box
      alignItems="center"
      display="flex"
      flexDir="column"
      marginBottom={"24"}
    >
      <Text
        as="h2"
        color="#000"
        fontSize="2xl"
        marginBottom="5"
        marginTop={{ base: "3em", md: "5em" }}
        padding={{ base: 5, md: 0 }}
      >
        {stateQuestion.title}
      </Text>
      <Box
        marginTop={"8"}
        bg="blue.400"
        width={{ base: "75%", md: "15%" }}
        padding={{ base: 2, md: 1 }}
        display="flex"
        justifyContent="space-between"
        borderRadius="4"
        marginBottom={{ base: 10, md: 2 }}
      >
        <Text
          bg={!answer ? "blue.400" : "white"}
          color={answer ? "blue.400" : "white"}
          width="100%"
          borderRadius="4"
          onClick={() => setAnswer(true)}
          padding={1}
        >
          {stateQuestion.answers[0].id}
        </Text>
        <Text
          bg={answer ? "blue.400" : "white"}
          color={!answer ? "blue.400" : "white"}
          width="100%"
          borderRadius="4"
          onClick={() => setAnswer(false)}
          padding={1}
        >
          {stateQuestion.answers[1].id}
        </Text>
      </Box>

      <ActionsButton
          goBackButtonHandler = {() => dispatch({type: "GO BACK", answer: stateQuestion}) }
          continueButtonHandler = {() => submitAnswer()}
          colorSchemeContinueButton = "facebook"
          state = {state}
      />

    </Box>
  );
};

export default CustomCheckbox;
