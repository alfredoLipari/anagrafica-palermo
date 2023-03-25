import { Box } from "@chakra-ui/react";
import Navbar from "../navbar.js";
import Footer from "../footer.js";
import Main from "./main.js";
import { Link } from "react-router-dom";

const HomePage = ({ history }) => {
  const fetchpdf = async () => {

    return(

        <Link
            to="https://8408-78-40-163-30.ngrok.io/pdf"
            download
            target="_blank"
            replace
        >
          ..
        </Link>
    )
  };

  fetchpdf().then(r => r);

  return (
      <Box
          as="main"
          display="flex"
          flexDir="column"
          justifyContent="space-between"
      >
        <Navbar />
        <Main history={history} />
        <Footer />
      </Box>
  );
};

export default HomePage;
