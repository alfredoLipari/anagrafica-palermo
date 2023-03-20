import React, { useContext } from "react";
import { Box, Stack } from "@chakra-ui/react";
import CustomButton from "../custom/customInput/customButton";
import { Context } from "../../App";

const ActionsButton = (props) => {
  const {
    stateQuestionId,
    goBackButtonHandler,
    continueButtonHandler,
    colorSchemeContinueButton,
    colorSchemeBackButton,
    continueSubmit,
    state,
  } = props;

  const translateContinueButton = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Continua";
      case "French":
        return "Continuez";
      case "Spanish":
        return "continuar";
      case "Ukranian":
        return "Продовжуйте";
      case "Arab":
        return "متواصل";
      case "Tamil":
        return "தொடர்கிறது";
      case "Bengali":
        return "চলতে থাকে";
      default:
        return "Continue";
    }
  };

  const translateButtonBack = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Torna indietro";
      case "French":
        return "Revenir";
      case "Spanish":
        return "Regresar";
      case "Повертатися":
        return "Продовжуйте";
      case "Tamil":
        return "திரும்பி வா";
      case "Arab":
        return "عد‎";
      case "Bengali":
        return "ফিরে এসো";
      default:
        return "Go back";
    }
  };

  return (
    <>
      <Box
        display={"flex"}
        flexDir={
          props?.state.language !== "Arab"
            ? {
                lg: "row-reverse",
                md: "column",
                sm: "column",
                base: "column",
              }
            : {
                lg: "row",
                md: "column-reverse",
                sm: "column-reverse",
                base: "column-reverse",
              }
        }
        alignItems={"center"}
        width={"100%"}
        justifyContent={"center"}
        gap={10}
      >
        <CustomButton
          submit={continueSubmit}
          handler={continueButtonHandler ? continueButtonHandler : null}
          state={state}
          colorScheme={colorSchemeContinueButton}
        >
          {translateContinueButton()}
        </CustomButton>

        {stateQuestionId !== 1 && (
          <CustomButton
            handler={goBackButtonHandler}
            state={state}
            colorScheme={colorSchemeBackButton}
          >
            {translateButtonBack()}
          </CustomButton>
        )}
      </Box>
    </>
  );
};

export default ActionsButton;
