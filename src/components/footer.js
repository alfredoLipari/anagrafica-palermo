import { Box, Text, Divider, Link, Stack, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "./asset/logoComuneDiPalermo.svg";

const Footer = () => {
  return (
    <Box bg="#FEBB2C" w="100%" marginTop={"28"}>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        padding="8px 40px"
        direction={{ base: "column", md: "row" }}
      >
        <Box display="flex" alignItems="center" w="70%">
          <Box display="flex" flexDir="column" alignItems="center">
            <Text marginY="4" color="black">
              Progetto di
            </Text>
            <Box w="60px" h="60px">
              <Image src={Logo} alt="logo comune" />
            </Box>
          </Box>
          <Box
            mt={"7"}
            display="flex"
            flexDir="column"
            alignItems="right"
            marginLeft="32"
          >
            <Text color="black">Con la collaborazione di</Text>
            <Text textColor={"black"} fontWeight="bold">
              {" "}
              Next Integration
            </Text>
          </Box>
        </Box>
        <Stack direction="row" h="90px" mt={8} mr={20}>
          <Divider
            width={5}
            borderColor={"black"}
            orientation="vertical"
            display={{ base: "none", md: "block" }}
          />
          <Box alignSelf="center">
            <Link href="https://chakra-ui.com" isExternal color="black">
              <Text textColor={"black"} fontWeight="bold" as="u">
                Dichiarazione di Accessibilità
              </Text>
            </Link>
          </Box>
        </Stack>
      </Flex>
      <Flex justifyContent="space-between" alignItems="center">
        <Flex
          marginTop="5"
          alignItems={{ base: "flex-start", md: "center" }}
          w="60%"
          justifyContent="space-between"
          padding="8px 40px"
          pb={8}
          direction={{ base: "column", md: "row" }}
        >
          <Text
            textColor={"black"}
            fontWeight="bold"
            marginY={{ base: "2", md: 0 }}
          >
            Media Policy
          </Text>
          <Text
            textColor={"black"}
            fontWeight="bold"
            marginY={{ base: "2", md: 0 }}
          >
            Note legali
          </Text>
          <Text
            textColor={"black"}
            fontWeight="bold"
            marginY={{ base: "2", md: 0 }}
          >
            Privacy Policy
          </Text>
          <Text
            textColor={"black"}
            fontWeight="bold"
            marginY={{ base: "2", md: 0 }}
          >
            Mappa del sito
          </Text>
        </Flex>
        <Text width="10%" textColor={"black"} marginY={{ base: "2", md: 0 }}>
          V. 1.2.1
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
