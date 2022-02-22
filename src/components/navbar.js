import { useState, useContext } from "react";
import { Box, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import {
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import Logo from "./asset/logoComuneDiPalermo.svg";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Context } from "../App";

const Navbar = (props) => {
  const [language, setLanguage] = useState("ENG");
  const { dispatch } = useContext(Context);

  const changeLanguage = (item) => {
    dispatch({
      type: "CHANGE_LANGUAGE",
      language: item.target.value,
    });
    setLanguage(item.target.value);
  };

  return (
    <Box as="nav" w="100%">
      <Box
        bg="#E4AA2C"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        padding="8px 40px"
        height="48px"
      >
        <Text fontWeight="bold" textColor={"black"}>
          Comune di Palermo
        </Text>
        <Menu>
          <MenuButton
            textColor={"black"}
            bg={"transparent"}
            as={Button}
            rightIcon={<ChevronDownIcon />}
          >
            {language}
          </MenuButton>
          <MenuList bg={"#0073E6"}>
            <MenuItem value="ENG" onClick={(item) => changeLanguage(item)}>
              ENG
            </MenuItem>
            <MenuItem value="ITA" onClick={(item) => changeLanguage(item)}>
              🇮🇹 ITA
            </MenuItem>
            <MenuItem value="ESP" onClick={(item) => changeLanguage(item)}>
              SPN
            </MenuItem>
          </MenuList>
        </Menu>
      </Box>
      <Link href="/" color="#000" style={{ textDecoration: "none" }}>
        <Box
          bg="#FEBB2C"
          height="104px"
          display="flex"
          alignItems="center"
          padding="8px 40px"
        >
          <Box h="70px" w="70px">
            <Image src={Logo} alt="logo comune" />
          </Box>
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
