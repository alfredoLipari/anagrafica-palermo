import { Button } from "@chakra-ui/react";

export const translateButtonBack = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Torna indietro";
    case "French":
      return "Revenir";
    case "Spanish":
      return "Regresar";
    case "Повертатися":
      return "Продовжуйте";
    case "Tamil":
     return "திரும்பி வா";
    case "Arab":
      return "عد‎"
      case "Bengali":
      return "ফিরে এসো"
    default:
      return "Go back";
  }
};


export const translateButton = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Continua";
    case "French":
      return "Continuez";
    case "Spanish":
      return "continuar";
    case "Ukranian":
      return "Продовжуйте";
    case "Arab":
      return "متواصل";
    case "Tamil":
      return "தொடர்கிறது";
      case "Bengali":
      return "চলতে থাকে"
    default:
      return "Continue";
  }
};


const CustomButton = (props) => {

  translateButtonBack(props.state)  
  translateButton(props.state)


  return (
    <Button
      color="white"
      marginTop="6"
      bg={props.colorScheme &&  "#0073E6"}
      w={{ base: "75%", md: "15%" }}
      borderRadius="4"
      paddingY="6"
      colorScheme="facebook"
      onClick={props.handler}
      type={props.submit ? "submit" : "button"}
      disabled={props.disabled}
    >
      {props.children}
    </Button>
  );
};

export default CustomButton;
