import { Box, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const Navbar = (props) => {
  return (
    <Box as="nav" w="100%">
      <Box
        bg="yellow.800"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="8px 40px"
        height="48px"
      >
        <Text fontWeight="bold">Comune di Palermo</Text>

        <Text fontWeight="bold">Eng</Text>
      </Box>
      <Link href="/" color="#000" style={{ textDecoration: "none" }}>
        <Box
          bg="yellow.600"
          height="104px"
          display="flex"
          alignItems="center"
          padding="8px 40px"
        >
          <Box w="70px" h="70px" bg="white"></Box>
          <Box h="70px" marginLeft="20px">
            <Text fontWeight="bold" fontSize="xl">
              Comune di Palermo
            </Text>
            <Text>Servizio Anagrafe</Text>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Navbar;
