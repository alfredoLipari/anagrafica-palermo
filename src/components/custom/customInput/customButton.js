import { Button } from "@chakra-ui/react";

const CustomButton = (props) => {
  return (
    <Button
      color="white"
      bg="#0073E6"
      marginTop="5"
      w={{ base: "50%", md: "15%" }}
      borderRadius="4"
      paddingY="6"
      colorScheme={"facebook"}
      onClick={props.handler}
      type={props.submit ? "submit" : "button"}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
