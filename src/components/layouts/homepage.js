import { Box, Container } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import Main from "./main.js";
import { Link } from "react-router-dom";

const HomePage = ({ children, router }) => {
  const fetchpdf = async () => {
    <Link
      to="https://8408-78-40-163-30.ngrok.io/pdf"
      download
      target="_blank"
      replace
    >
      ..
    </Link>;
  };

  fetchpdf();

  return (
    <Box
      as="main"
      pb={8}
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      bg="yellow.600"
    >
      <Link
        to="https://8408-78-40-163-30.ngrok.io/pdf"
        download
        target="_blank"
        replace
      >
        ..
      </Link>

      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
};

export default HomePage;
