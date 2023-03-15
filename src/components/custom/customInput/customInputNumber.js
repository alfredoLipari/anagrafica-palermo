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
import { Context } from "../../../App";
import CustomButton from "./customButton";
import ActionsButton from "../../button/ActionsButton";


export let howManyPeopleBesideYou = 0
const CustomInputNumber = ({ state }) => {


  const [answer, setAnswer] = useState(1);
  const { dispatch } = useContext(Context);


  howManyPeopleBesideYou = answer

  const submitAnswer = () => {
    dispatch({
      type: "ANSWER_QUESTION_COMPONENT_NUMBER",
      answer: answer,
      nextQuestion: state.nextQuestion,
    });
  };

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
            w={{ base: "75%", md: "20%" }}
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


        <ActionsButton
            goBackButtonHandler = {() => dispatch({type: "GO BACK"}) }
            continueButtonHandler = {() => submitAnswer()}
            colorSchemeContinueButton = "facebook"
            state = {state}
        />

      </Box>
  );
};

export default CustomInputNumber;
