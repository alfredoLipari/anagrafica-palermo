import { useContext } from "react";
import { Context } from "../../App";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import TreeHelper from "./treeHelper";
import { Image } from "@chakra-ui/react";
import People from "../asset/homepageimg.svg";
import CustomButton from "../custom/customInput/customButton";

const Main = () => {
  const [isFormStarted, setIsFormStarted] = useState(false);
  const { state } = useContext(Context);

  const translateFirstHeading = () => {
    switch (state.language) {
      case "Italian":
        return "Benvenuto nel comune di Palermo";
      case "Spanish":
        return "Bienvenido al municipio de Palermo";
      default:
        return "Welcome to the Comune di Palermo ";
    }
  };

  const translateSecondHeading = () => {
    switch (state.language) {
      case "Italian":
        return "Servizio di anagrafe online";
      case "Spanish":
        return "Servicio de registro en línea";
      default:
        return "Registry office";
    }
  };

  const translateText = () => {
    switch (state.language) {
      case "Italian":
        return "Tramite questo servizio, potrai compilare velocemente la richiesta di cambio residenza";
      case "Spanish":
        return "Con esta herramienta, podrá rellenar la solicitud de residencia documento";
      default:
        return " With this tool, you will able to fill in the residence application document";
    }
  };

  const translateButton = () => {
    switch (state.language) {
      case "Italian":
        return "Iniziamo";
      case "Spanish":
        return "comencemos";
      default:
        return "Let's start";
    }
  };

  return (
    <Box bg="white" textAlign="center">
      {!isFormStarted ? (
        <Box marginTop="20">
          <Text fontSize="2xl" fontWeight="extrabold" color="#000">
            {translateFirstHeading()}
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="#000">
            {translateSecondHeading()}
          </Text>
          <Text marginTop="5" color="#000">
            {translateText()}
          </Text>
          <CustomButton handler={() => setIsFormStarted(true)}>
            {translateButton()}
          </CustomButton>
          <Flex marginTop={10} justifyContent={"center"}>
            <Box w="825px" margin={18}>
              <Image src={People} alt="logo comune" />
            </Box>
          </Flex>
        </Box>
      ) : (
        <TreeHelper />
      )}
    </Box>
  );
};

export default Main;
