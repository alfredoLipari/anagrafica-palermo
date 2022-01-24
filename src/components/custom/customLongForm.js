/*
 *   when a form is bigger than 4 field
 */

import React, { useState, useContext, useEffect, useCallback } from "react";
import CustomInput from "./customInput";
import {
  FormControl,
  FormErrorMessage,
  Button,
  Text,
  Divider,
  Box,
  useEditable,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Context } from "../../App";

const CustomLongForm = ({ state }) => {
  let questions = {};
  const { dispatch } = useContext(Context);

  //contenuto props with initial status
  const [content] = useState(
    state.answers.map((question) => (questions[question.id] = ""))
  );

  //build the interface for long forms conditionally
  const [formSize] = useState(state.answers.length);

  // logic for the long form
  const [firstColumnForm, setzeroLongForm] = useState([]);
  const [secondColumnForm, setfirstLongForm] = useState([]);

  const populateLongForm = useCallback(() => {
    const firstColumnForm = [];
    const secondColumnForm = [];

    state.answers.forEach((answ, index) => {
      if (index < 4) {
        firstColumnForm.push(answ);
      } else {
        secondColumnForm.push(answ);
      }
    });

    setzeroLongForm(firstColumnForm);
    setfirstLongForm(secondColumnForm);
  }, [state]);

  useEffect(() => {
    populateLongForm();
  }, [state, formSize, populateLongForm]);

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
    questions = {};

    setTimeout(() => {
      if (state.id >= 30) {
        dispatch({
          type: "ANSWER_QUESTION_COMPONENT_FORM",
          answer: values,
          state: state,
        });
      } else {
        dispatch({
          type: "ANSWER_QUESTION_FORM",
          answer: values,
          state: state,
        });
      }
    }, 500);
    //if we are in component tree, dispatch a different thing
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
            {state.title}
          </Text>

          <Box
            width={
              formSize < 4
                ? { base: "40%", md: "35%", lg: "30%" }
                : { base: "40%", md: "35%", lg: "50%" }
            }
            alignItems="center"
            display="flex"
            alignSelf="center"
            justifyContent="space-between"
            flexDir={formSize > 4 ? "row" : "column"}
          >
            <>
              <Box>
                {firstColumnForm.map((answ) => (
                  <Field name={answ.id} validate={validateText} key={answ.id}>
                    {({ field, form }) => (
                      <FormControl mb="10">
                        <CustomInput {...field} m="1" state={answ} />

                        <FormErrorMessage>
                          {form.errors[answ.id]}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                ))}
              </Box>
              <Box>
                {secondColumnForm.map((answ) => (
                  <Field name={answ.id} validate={validateText} key={answ.id}>
                    {({ field, form }) => (
                      <FormControl mb="10">
                        <CustomInput {...field} m="1" state={answ} />

                        <FormErrorMessage>
                          {form.errors[answ.id]}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                ))}
              </Box>
            </>
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
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomLongForm;
