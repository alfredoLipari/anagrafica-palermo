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
    <Box
      display="flex"
      alignItems="center"
      alignSelf="center"
      flexDir="column"
      marginBottom={"32"}
    >
      <Text as="h2" color="#000" fontSize="xl" marginTop="2em" margin="14">
        {state.title}
      </Text>
      <NumberInput
        defaultValue={1}
        min={1}
        max={4}
        w="20%"
        onChange={(val) => setAnswer(val)}
        textColor={"#404B57"}
        border="1px solid trasparent"
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper
            bg="white"
            _active={{ bg: "green.300" }}
            color={"#404B57"}
          />
          <NumberDecrementStepper
            bg="white"
            _active={{ bg: "pink.300" }}
            color={"#404B57"}
          />
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
        marginBottom={"10"}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CustomInputNumber;
