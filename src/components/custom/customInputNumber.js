import React, { useState, useContext } from "react";
import {
  Box,
  Text,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";
import { Context } from "../../App";

const CustomInputNumber = ({ state }) => {
  const [answer, setAnswer] = useState(1);
  const { dispatch } = useContext(Context);

  const submitAnswer = () => {
    dispatch({
      type: "ANSWER_QUESTION_COMPONENT_NUMBER",
      answer: answer,
      nextQuestion: state.nextQuestion,
    });
  };

  return (
    <Box display="flex" alignItems="center" alignSelf="center" flexDir="column">
      <Text marginTop="3em">{state.title}</Text>
      <NumberInput
        defaultValue={1}
        min={1}
        max={4}
        w="20%"
        marginTop="2em"
        onChange={(val) => setAnswer(val)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Button
        color="white"
        bg="#0073E6"
        w="15%"
        borderRadius="4"
        paddingY="6"
        marginTop="4em"
        onClick={() => submitAnswer()}
        colorScheme="linkedin"
      >
        Continue
      </Button>
    </Box>
  );
};

export default CustomInputNumber;
