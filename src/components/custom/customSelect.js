import { useContext, useState } from "react";
import { Context } from "../../App";
import { Select, Text, Box, Button } from "@chakra-ui/react";

const CustomSelect = ({ state }) => {
  const { dispatch } = useContext(Context);
  const [selectAnswer, setSelectAnswer] = useState({});

  const dispatchAnswer = () => {
    if (Object.keys(selectAnswer).length === 0) {
      //the user didnt select anything
      return;
    }
    //retrieve the object answer from the id
    const answer = state.answers.find((answ) => {
      return answ.id === selectAnswer;
    });

    // dispatch the answer action to the choice reducer
    dispatch({
      type: "ANSWER_QUESTION_SELECT",
      answer: answer,
      state: state,
    });
    setSelectAnswer({});
  };

  return (
    <Box marginTop="48" display="flex" alignItems="center" flexDir="column">
      <Text fontWeight="bold" fontSize="3xl" color="#000">
        {state.title}
      </Text>
      <Select
        iconColor="#0E78E2"
        iconSize="50"
        color="#000"
        placeholder={state.label}
        width="25%"
        fontSize="xl"
        marginTop="10"
        onChange={(something) => setSelectAnswer(something.target.value)}
        bg="white"
        marginBottom="12"
      >
        {state.answers.map((el) => (
          <option value={el.id} key={el.id}>
            {el.label}
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
        colorScheme={"facebook"}
        marginBottom={"10"}
      >
        Continue
      </Button>
    </Box>
  );
};

export default CustomSelect;
