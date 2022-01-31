import React, { useState, useContext } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Context } from "../../App";

const CustomCheckbox = ({ state }) => {
  const [answer, setAnswer] = useState(true);
  const { dispatch } = useContext(Context);

  const submitAnswer = () => {
    const nextQuestion = answer
      ? state.answers[0].nextQuestion
      : state.answers[1].nextQuestion;

    dispatch({
      type: "ANSWER_QUESTION_CHECKBOX",
      answer: answer,
      nextQuestion: nextQuestion,
    });
  };

  return (
    <Box alignItems="center" display="flex" flexDir="column">
      <Text
        as="h2"
        color="#000"
        fontSize="2xl"
        marginBottom="5"
        marginTop={{ sm: "3em", lg: "5em" }}
      >
        {state.title}
      </Text>
      <Box
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
          {state.answers[0].id}
        </Text>
        <Text
          bg={answer ? "blue.400" : "white"}
          color={!answer ? "blue.400" : "white"}
          width="100%"
          borderRadius="4"
          onClick={() => setAnswer(false)}
          padding={{ lg: "1" }}
        >
          {state.answers[1].id}
        </Text>
      </Box>
      <Button
        color="white"
        bg="#0073E6"
        w="15%"
        borderRadius="4"
        paddingY="6"
        marginTop="4em"
        onClick={() => submitAnswer()}
        colorScheme={"facebook"}
        marginBottom={"10"}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CustomCheckbox;
