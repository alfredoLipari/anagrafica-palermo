import React, { useState, useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Context } from "../../../App";
import CustomButton from "./customButton";

const CustomCheckbox = ({ stateQuestion }) => {
  const [answer, setAnswer] = useState(true);
  const { dispatch, state } = useContext(Context);

  const translateButton = () => {
    switch (state.language) {
      case "ITA":
        return "Continua";
      case "ESP":
        return "continuar";
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
        marginTop={{ sm: "3em", lg: "5em" }}
      >
        {stateQuestion.title}
      </Text>
      <Box
        marginTop={"8"}
        bg="blue.400"
        width={{ sm: "40%", md: "15%" }}
        padding="1"
        display="flex"
        justifyContent="space-between"
        borderRadius="4"
      >
        <Text
          bg={!answer ? "blue.400" : "white"}
          color={answer ? "blue.400" : "white"}
          width="100%"
          borderRadius="4"
          onClick={() => setAnswer(true)}
          padding={{ lg: "1" }}
        >
          {stateQuestion.answers[0].id}
        </Text>
        <Text
          bg={answer ? "blue.400" : "white"}
          color={!answer ? "blue.400" : "white"}
          width="100%"
          borderRadius="4"
          onClick={() => setAnswer(false)}
          padding={{ lg: "1" }}
        >
          {stateQuestion.answers[1].id}
        </Text>
      </Box>
      <CustomButton handler={() => submitAnswer()}>
        {translateButton()}
      </CustomButton>
    </Box>
  );
};

export default CustomCheckbox;
