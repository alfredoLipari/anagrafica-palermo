import { Box, Text, Divider, Link, Stack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Logo from "./asset/logoComuneDiPalermo.svg";

const Footer = () => {
  return (
    <Box 
    h="20%" bg="#FEBB2C" w="100%">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="8px 40px"
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
          <Divider width={5} borderColor={"black"} orientation="vertical" />
          <Box alignSelf="center">
            <Link href="https://chakra-ui.com" isExternal color="black">
              <Text textColor={"black"} fontWeight="bold" as="u">
                Dichiarazione di Accessibilità
              </Text>
            </Link>
          </Box>
        </Stack>
      </Box>

      <Box
        display="flex"
        marginTop="5"
        alignItems="center"
        w="40%"
        justifyContent="space-between"
        padding="8px 40px"
        pb={8}
      >
        <Text textColor={"black"} fontWeight="bold">
          Media Policy
        </Text>
        <Text textColor={"black"} fontWeight="bold">
          Note legali
        </Text>
        <Text textColor={"black"} fontWeight="bold">
          Privacy Policy
        </Text>
        <Text textColor={"black"} fontWeight="bold">
          Mappa del sito
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
