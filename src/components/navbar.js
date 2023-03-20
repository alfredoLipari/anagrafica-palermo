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
  const [language, setLanguage] = useState("English");
  const { dispatch } = useContext(Context);
  const changeLanguage = (item) => {
    dispatch({
      type: "CHANGE_LANGUAGE",
      language: item.target.value,
    });
    setLanguage(item.target.value);
  };
  console.log("lan", language);
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
          <MenuList
            background="rgba(8, 100, 186, 0.3)"
            borderRadius="6px"
            boxShadow="0 4px 30px rgba(0, 0, 0, 0.1)"
            backdropFilter="blur(5px)"
            border="none"
            minWidth="106px"
          >
            <MenuItem value="English" onClick={(item) => changeLanguage(item)}>
              English
            </MenuItem>
            <MenuItem value="Italian" onClick={(item) => changeLanguage(item)}>
              Italian
            </MenuItem>
            <MenuItem value="French" onClick={(item) => changeLanguage(item)}>
              French
            </MenuItem>
            <MenuItem value="Spanish" onClick={(item) => changeLanguage(item)}>
              Spanish
            </MenuItem>

            <MenuItem value="Ukranian" onClick={(item) => changeLanguage(item)}>
              Ukranian
            </MenuItem>
            <MenuItem value="Arab" onClick={(item) => changeLanguage(item)}>
              Arab
            </MenuItem>
            <MenuItem value="Tamil" onClick={(item) => changeLanguage(item)}>
              Tamil
            </MenuItem>
            <MenuItem value="Bengali" onClick={(item) => changeLanguage(item)}>
              Bengali
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
