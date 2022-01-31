/*
 *   when a form is bigger than 4 field
 */

import React, { useState, useContext, useEffect, useCallback } from "react";
import CustomInput from "./customInput";
import { FormControl, Button, Text, Divider, Box } from "@chakra-ui/react";
import { Formik, FastField, Form } from "formik";
import { Context } from "../../App";
import CustomAutosuggest from "./customAutosuggest";
import {
  validateText,
  validateGender,
  validateFiscalCode,
} from "../../lib/validation";
import { useNavigate } from "react-router-dom";

const CustomLongForm = ({ state }) => {
  let questions = {};
  const { dispatch } = useContext(Context);
  let country = {
    answer: {
      "Indicare lo Stato estero di provenienza": "Italy",
    },
  };

  const navigate = useNavigate();

  // adding autosuggest logic
  const [answers, setAnswers] = useState({ "Luogo di nascita": "" });
  const [error, setError] = useState(false);

  // initial values of the form, without the autosuggest input
  const [content] = useState(
    state.answers
      .filter(function (question) {
        return question.autocomplete !== true;
      })
      .map((quest) => (questions[quest.id] = ""))
  );

  //build the interface for long forms conditionally
  const [formSize] = useState(state.answers.length);

  // logic for the long form
  const [firstColumnForm, setzeroLongForm] = useState([]);
  const [secondColumnForm, setfirstLongForm] = useState([]);

  // handler to render the form
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

  const autosuggestHandler = (value, tag) => {
    if (!tag) {
      return;
    }
    setAnswers({
      [tag]: value,
    });
  };

  useEffect(() => {
    populateLongForm();
  }, [state, formSize, populateLongForm]);

  // handler when the form is submitted, call the dispatcher
  const submitForm = (values) => {
    let newAnswers = {};

    const isAutosuggestPresent = state.answers.some(
      (question) => question.autocomplete === true
    );
    if (isAutosuggestPresent) {
      // check if answers is not empty
      if (answers["Luogo di nascita"] === "") {
        setError(true);
        return;
      }
      newAnswers = {
        ...values,
        "Luogo di nascita": answers["Luogo di nascita"],
      };
    } else {
      newAnswers = { ...values };
    }

    console.log(newAnswers);

    if (state.id >= 40) {
      dispatch({
        type: "ANSWER_QUESTION_COMPONENT_FORM",
        answer: newAnswers,
        state: state,
      });
    } else {
      dispatch({
        type: "ANSWER_QUESTION_FORM",
        answer: newAnswers,
        state: state,
      });
    }
    if (state.id === 32) {
      navigate("/download-pdf");
    }

    setAnswers([]);
    setError(false);

    //if we are in component tree, dispatch a different thing
  };

  // decide the validation conditionally
  const validateInput = (value) => {
    switch (value) {
      case "gender":
        return validateGender;
      case "RequiredField":
        return validateText;
      case "fiscalCodeField":
        return validateFiscalCode;
      default:
        return undefined;
    }
  };

  return (
    <Formik
      initialValues={questions}
      onSubmit={(values, actions) => {
        submitForm(values);
      }}
      validateOnChange={false}
      validateOnBlur={false}
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
            display="flex"
            justifyContent="space-between"
            flexDir={formSize > 4 ? "row" : "column"}
          >
            <>
              <Box>
                {firstColumnForm.map((answ) =>
                  answ.autocomplete === undefined ? (
                    <Box key={answ.id}>
                      <FastField
                        name={answ.id}
                        validate={validateInput(answ.validate)}
                      >
                        {({ field, form }) => (
                          <FormControl mb="10">
                            <CustomInput
                              {...field}
                              m="1"
                              state={answ}
                              error={
                                props.errors[answ.id] &&
                                props.touched[answ.id] &&
                                props.errors[answ.id]
                              }
                            />
                          </FormControl>
                        )}
                      </FastField>
                    </Box>
                  ) : (
                    <CustomAutosuggest
                      key={answ.id}
                      value={answers}
                      autosuggestHandler={autosuggestHandler}
                      tag={answ}
                      country={country}
                      error={error}
                    />
                  )
                )}
                {formSize > 8 && (
                  <Button
                    type="submit"
                    color="white"
                    bg="#0073E6"
                    marginTop="5"
                    w="65%"
                    borderRadius="4"
                    paddingY="6"
                    colorScheme={"facebook"}
                  >
                    Continue
                  </Button>
                )}
              </Box>
              <Box>
                {secondColumnForm.map((answ) => (
                  <Box key={answ.id}>
                    <FastField
                      name={answ.id}
                      validate={validateInput(answ.validate)}
                    >
                      {({ field, form }) => (
                        <FormControl mb="10">
                          <CustomInput
                            {...field}
                            m="1"
                            state={answ}
                            error={
                              props.errors[answ.id] &&
                              props.touched[answ.id] &&
                              props.errors[answ.id]
                            }
                          />
                        </FormControl>
                      )}
                    </FastField>
                  </Box>
                ))}
              </Box>
            </>
          </Box>
          {formSize <= 8 && (
            <Button
              type="submit"
              color="white"
              bg="#0073E6"
              marginTop="5"
              w="15%"
              borderRadius="4"
              paddingY="6"
              colorScheme={"facebook"}
              disabled={false}
            >
              Continue
            </Button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default CustomLongForm;
