import React, { useState, useContext } from "react";
import CustomInput from "./customInput";
import {
  FormControl,
  FormErrorMessage,
  Button,
  Text,
  Divider,
  Box,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const CustomForm = ({ stateTemp }) => {
  const questions = {};
  const { state, dispatch } = useContext(Context);
  const navigate = useNavigate();

  //contenuto props with initial status
  const [content] = useState(
    stateTemp.answers.map((question) => (questions[question.id] = ""))
  );

  // write validators
  const validateText = (value) => {
    let error;
    if (value === "") {
      error = "please insert something";
    }
    return error;
  };

  // handler when the form is submitted, call the dispatcher
  const submitForm = (values) => {
    dispatch({
      type: "ANSWER_QUESTION_FORM",
      answer: values,
      state: stateTemp,
    });

    if (stateTemp.id === 22) {
      navigate("/download-pdf");
    }
  };

  return (
    <Formik
      initialValues={questions}
      onSubmit={(values, actions) => {
        submitForm(values);
      }}
    >
      {(props) => (
        <Form
          style={{
            display: "flex",
            alignItems: "center",

            flexDirection: "column",
          }}
        >
          <Divider mb="5" />

          <Text
            as="h2"
            color="#000"
            fontSize="xl"
            marginTop="2em"
            marginBottom="5"
          >
            {stateTemp.title}
          </Text>

          <Box
            width={{ base: "40%", md: "35%", lg: "30%" }}
            alignItems="center"
            display="flex"
            alignSelf="center"
            flexDir="column"
          >
            {stateTemp.answers.map((answ) => (
              <Field name={answ.id} validate={validateText} key={answ.id}>
                {({ field, form }) => (
                  <FormControl mb="10">
                    <CustomInput {...field} m="1" state={answ} />

                    <FormErrorMessage>{form.errors[answ.id]}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            ))}
          </Box>

          <Button
            type="submit"
            color="white"
            bg="#0073E6"
            marginTop="5"
            w="15%"
            borderRadius="4"
            paddingY="6"
            disabled={!props.isValid}
          >
            {stateTemp.id !== 22 ? "Continue" : "Generate pdf"}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
