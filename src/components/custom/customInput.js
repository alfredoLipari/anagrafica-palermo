import React from "react";
import {
  FormControl,
  FormLabel,
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
        textAlign="center"
        name={props.name}
        borderBottomColor={props.error !== undefined ? "#D2072A" : "gray.300"}
        placeholder={props.state.label + (props.state.isRequired ? " *" : "")}
        focusBorderColor="white"
      />
      <FormHelperText
        marginBottom="10"
        color={props.error !== undefined ? "#D2072A" : "#718096"}
      >
        {props.error !== undefined ? props.error : props.state.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
