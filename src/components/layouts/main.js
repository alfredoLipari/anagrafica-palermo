import { Box, Button, Center, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import TreeHelper from "./treeHelper";
import { Image } from '@chakra-ui/react'
import People from '../asset/homepageimg.svg'

const Main = () => {
  const [isFormStarted, setIsFormStarted] = useState(false);

  return (
    <Box bg="white" h="75vh" textAlign="center">
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
            colorScheme={"facebook"}
            onClick={() => setIsFormStarted(true)}
          >
            Let's Start
          </Button>
          <Flex justifyContent={"center"}>   
            <Box h="215px" w='825px' marginTop={18}>
              <Image  src={People} alt='logo comune' />
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
