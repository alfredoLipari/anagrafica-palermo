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
        type={props.type}
        border="none"
        borderBottom="1px"
        borderRadius="0px"
        value={props.value}
        name={props.name}
        placeholder={props.state.label}
        borderBottomColor="gray.300"
        focusBorderColor="white"
      />

      {props.children}
    </FormControl>
  );
};

export default CustomInput;
