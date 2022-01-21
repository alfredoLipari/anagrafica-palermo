import { Box, Text, Divider, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box h="20%" bg="yellow.600">
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="8px 40px"
      >
        <Box display="flex" alignItems="center" w="70%">
          <Box display="flex" flexDir="column" alignItems="center">
            <Text marginY="4" color="brown.300">
              Progetto di
            </Text>
            <Box w="50px" h="50px" bg="white"></Box>
          </Box>

          <Box
            display="flex"
            flexDir="column"
            alignItems="center"
            marginLeft="32"
          >
            <Text marginY="4" color="brown.300">
              con la collaborazione di
            </Text>
            <Text>Team Next Integration</Text>
          </Box>
        </Box>

        <Box alignSelf="center">
          <Link href="https://chakra-ui.com" isExternal color="brown.300">
            <Text as="u">Dichiarazione di Accessibilità</Text>
          </Link>
        </Box>
      </Box>

      <Box
        display="flex"
        marginTop="5"
        alignItems="center"
        w="40%"
        justifyContent="space-between"
        padding="8px 40px"
      >
        <Text fontWeight="bold">Media Policy</Text>
        <Text fontWeight="bold">Note legali</Text>
        <Text fontWeight="bold">Privacy Policy</Text>
        <Text fontWeight="bold">Mappa del sito</Text>
      </Box>
    </Box>
  );
};

export default Footer;
