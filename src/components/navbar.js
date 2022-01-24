import { Box, Link } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Image, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button } from '@chakra-ui/react'
import Logo from './asset/logoComuneDiPalermo.svg'
import { ChevronDownIcon } from '@chakra-ui/icons'

const Navbar = (props) => {
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
      <Text fontWeight="bold" textColor={"black"}>Comune di Palermo</Text>
        <Menu>
          <MenuButton textColor={"black"} bg={"transparent"} as={Button} rightIcon={<ChevronDownIcon />}>
            ENG
          </MenuButton>
          <MenuList bg={"#0073E6"}>
            <MenuItem>ENG</MenuItem>
            <MenuItem>ITA</MenuItem>
            <MenuItem>SPN</MenuItem>
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
        <Box h="70px" w='70px'>
          <Image src={Logo} alt='logo comune' />
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
