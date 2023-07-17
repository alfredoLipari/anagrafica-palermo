import React from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Textarea,
} from "@chakra-ui/react";

const CustomInput = (props) => {
  return (
    <FormControl id={props.id}>
      <FormLabel color={"#404B57"}>{props.label}</FormLabel>
      {props.state.type === "textarea" ? (
        <Textarea
          {...props}
          type={props.state.type}
          textColor={"#404B57"}
          value={props.value}
          textAlign="center"
          name={props.name}
          placeholder={props.state.helperText}
          _focus={{ borderBottomColor: "#0E78E2" }}
        />
      ) : (
        <Input
          {...props}
          type={props.state.type}
          max={props.state.type ? "2999-12-31" : ""}
          textColor={"#404B57"}
          border="none"
          borderBottom="1px"
          borderRadius="0px"
          value={props.value}
          textAlign="center"
          name={props.name}
          borderBottomColor={props.error !== undefined ? "#D2072A" : "gray.300"}
          placeholder={props.state.helperText}
          fontSize={{ base: "md", md: "xs" }}
          _focus={{ borderBottomColor: "#0E78E2" }}
        />
      )}

      <FormHelperText
        marginBottom="10"
        color={props.error !== undefined ? "#D2072A" : "#718096"}
      >
        {props.error !== undefined
          ? props.error
          : props.state.label + (props.state.isRequired ? " *" : "")}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInput;
