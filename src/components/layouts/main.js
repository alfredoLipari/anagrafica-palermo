import { Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import TreeHelper from "./treeHelper";

const Main = () => {
  const [isFormStarted, setIsFormStarted] = useState(false);

  return (
    <Box bg="white" h="80vh" textAlign="center">
      {!isFormStarted ? (
        <Box marginTop="20">
          <Text fontSize="2xl" fontWeight="extrabold" color="#000">
            Welcome to the Comune di Palermo
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="#000">
            online registry office
          </Text>
          <Text marginTop="5" color="#000">
            With this tool, you will able to fill in the residence application
            document
          </Text>
          <Button
            color="white"
            bg="#0073E6"
            marginTop="5"
            w="15%"
            borderRadius="4"
            paddingY="6"
            onClick={() => setIsFormStarted(true)}
          >
            Let's Start
          </Button>
          <Box
            w="auto"
            h="auto"
            backgroundImage="url('../asset/people.png')"
            zIndex={10}
          />
        </Box>
      ) : (
        <TreeHelper />
      )}
    </Box>
  );
};

export default Main;
