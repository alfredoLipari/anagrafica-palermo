import React, {useState, useEffect} from "react";
import { Select, FormHelperText, FormControl } from "@chakra-ui/react";

export let selected = false;
export const resetSelectedSelect = () => selected = false;

const CustomInputSelect = (props) => {

  const [selectedScreen, setSelectedScreen] = useState(selected);

  const onFocusHanlder = () => {  
    selected = true;
    setSelectedScreen(selected)
  }

  useEffect(() => {
    console.log('called!', selected)
    if(!selected){
      setSelectedScreen(selected)
    }
  }, [selected])

  console.log(props.error.errors[props.state.id])
  console.log('errrr',props.error)

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
        onFocus={onFocusHanlder}
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
          props.error.errors[props.state.id] !== undefined && !selectedScreen
            ? "#D2072A"
            : "#718096"
        }
      >
        {props.error.errors[props.state.id] !== undefined && !selectedScreen
          ? props.error.errors[props.state.id]
          : props.state.helperText + (props.state.isRequired ? " *" : "")}
      </FormHelperText>
    </FormControl>
  );
};

export default CustomInputSelect;
