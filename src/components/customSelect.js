import { useContext, useState } from "react";
import { Context } from "../App";
import { Select, Text, Box, Button } from "@chakra-ui/react";

const CustomSelect = ({ state }) => {
  const { dispatch } = useContext(Context);
  const [selectAnswer, setSelectAnswer] = useState("");

  console.log(state, "si");

  const dispatchAnswer = () => {};

  return (
    <Box marginTop="48" display="flex" alignItems="center" flexDir="column">
      <Text fontWeight="bold" fontSize="3xl" color="#000">
        {state.title}
      </Text>
      <Select
        color="#000"
        placeholder={state.label}
        width="30%"
        fontSize="xl"
        marginTop="10"
        onClick={(something) => setSelectAnswer(something.target.value)}
        bg="white"
      >
        {state.answer.map((el, index) => (
          <option value={el} key={index}>
            {el}
          </option>
        ))}
      </Select>
      <Button
        color="white"
        bg="#0073E6"
        marginTop="5"
        w="15%"
        borderRadius="4"
        paddingY="6"
        onClick={() => dispatchAnswer()}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CustomSelect;
