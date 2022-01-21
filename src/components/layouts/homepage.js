import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import { Text } from "@chakra-ui/react";
import Footer from "../footer.js";
import Main from "./main.js";

const HomePage = ({ children, router }) => {
  return (
    <Box
      as="main"
      pb={8}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      bg="yellow.600"
    >
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
};

export default HomePage;
