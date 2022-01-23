import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const CustomInput = (props) => {
  return (
    <FormControl id={props.id}>
      <FormLabel>{props.label}</FormLabel>
      <Input
        {...props}
        type={props.state.type}
        border="none"
        borderBottom="1px"
        borderRadius="0px"
        value={props.value}
        name={props.name}
        placeholder={props.state.label}
        borderBottomColor="gray.300"
        focusBorderColor="white"
      />
      <FormHelperText>{props.state.helperText}</FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
