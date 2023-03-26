import { Box, Text, Divider, Link, Flex } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import comuneLogo from "./asset/comune.svg";
import EasyRightsLogo from "./asset/easyright.svg";
import neuLogo from "./asset/neu2.svg";
import UELogo from "./asset/UE.svg";

const Footer = () => {
  return (
    <Box
        bg="#FEBB2C"
        w="100%"
        paddingY="3em"
        position={"relative"}
        left={"0"}
        bottom={"0"}
    >
      <Flex
        alignItems={{ base: "flex-start", md: "center" }}
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
      >
        {/* Left part footer */}
        <Flex
          w={{ base: "100%", md: "50%" }}
          flexDir="column"
          justifyContent="space-around"
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justifyContent="space-evenly"
            alignItems="center"
          >
            <Box
              w={{ base: "130px", md: "80px", lg: "130px" }}
              marginY={{ base: "1em", md: "0em" }}
            >
              <Image src={EasyRightsLogo} alt="logo comune" />
            </Box>

            <Flex
              w={{ base: "100px", md: "80px", lg: "100px" }}
              alignItems="center"
              marginY={{ base: "1em", md: "0em" }}
            >
              <Image src={neuLogo} alt="logo comune" />
            </Flex>

            <Text
              as="h1"
              fontSize={{ base: "xl", md: "lg", lg: "xl" }}
              fontWeight="bold"
              marginY={{ base: "1em", md: "0em" }}
            >
              Next Integration
            </Text>
          </Flex>

          <Flex
            alignItems={{ base: "center", md: "flex-start" }}
            marginTop={{ base: "2em", md: "3em" }}
            w={{ base: "100%", md: "50%" }}
            justifyContent="space-between"
            ml={{ base: "0em", md: "3em", xl: "15%" }}
            direction={{ base: "column", md: "row" }}
          >
            <Box w={{ base: "70px", md: "170px" }}>
              <Image src={UELogo} alt="logo comune" />
            </Box>
            <Text
              fontSize={{ base: "small", md: "x-small", lg: "small" }}
              marginLeft="1em"
              fontWeight="black"
              lineHeight="3"
              mb={{ base: "2em", md: "0" }}
              paddingX={{ base: "5em", md: 0 }}
              mt={{ base: "0.5em", md: 0 }}
            >
              easyrights has received funding from the EU Horizon 2020 research
              and innovation programme under grant agreement No 970980.
            </Text>
          </Flex>
        </Flex>
        <Divider
          height="150px"
          borderColor={"black"}
          orientation="vertical"
          display={{ base: "none", md: "block" }}
        />
        <Flex
          mt={{ base: "1em", md: 0 }}
          direction={{ base: "column", md: "row" }}
          w={{ base: "100%", md: "50%" }}
          marginLeft={{ base: 0, md: "0" }}
          alignItems="center"
          paddingLeft={{ base: 0, md: "10px", lg: "50px" }}
        >
          <Box w="100px">
            <Image src={comuneLogo} alt="logo comune" />
          </Box>
          <Flex
            flexDir="column"
            alignItems="flex-start"
            mt={{ base: "0.5em", md: 0 }}
            ml={{ base: "0", md: "1em" }}
          >
            <Text fontSize="small" fontWeight="black" lineHeight="3">
              © 2021 Comune di Palermo - Tutti i diritti riservati
            </Text>
            <Flex
              marginTop="1em"
              alignItems={{ base: "flex-start", md: "flex-start" }}
              justifyContent="space-between"
              direction="column"
            >
              <Flex>
                <Link
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="bold"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                >
                  Credits
                </Link>
                <Link
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="bold"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                >
                  Note legali
                </Link>
                <Link
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="black"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                >
                  Cookie policy
                </Link>
              </Flex>
              <Flex>
                <Link
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="bold"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                >
                  Mappa del sito
                </Link>
                <Link
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="bold"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                >
                  Dichiarazione di accessibilità
                </Link>
                <Text
                  fontSize="small"
                  textColor={"black"}
                  fontWeight="bold"
                  marginY={{ base: "2", md: 0 }}
                  mr="1em"
                  display={{ base: "none", lg: "block" }}
                >
                  V. 1.2.2
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
