import { Select, FormHelperText, FormControl } from "@chakra-ui/react";

const CustomInputSelect = (props) => {
  return (
    <FormControl>
      <Select
        {...props}
        border="none"
        borderBottom="1px"
        borderBottomColor={
          props.error.errors[props.state.id] !== undefined
            ? "#D2072A"
            : "gray.300"
        }
        borderRadius="0px"
        as="select"
        iconColor="#0E78E2"
        iconSize="50"
        color="#404B57"
        placeholder={props.state.label}
        fontSize="md"
        bg="white"
        id={props.state.id}
        marginTop="8px"
        name={props.state.id}
      >
        {props.state.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </Select>
      <FormHelperText
        marginBottom="10"
        color={
          props.error.errors[props.state.id] !== undefined
            ? "#D2072A"
            : "#718096"
        }
      >
        {props.error.errors[props.state.id] !== undefined
          ? props.error.errors[props.state.id]
          : props.state.helperText}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInputSelect;
