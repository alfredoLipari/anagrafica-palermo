/*
 *   when a form is bigger than 4 field
 */

import React, { useState, useContext } from "react";
import CustomInput from "./customInput/customInput";
import { FormControl, Text, Divider, Box, Flex } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Context } from "../../App";
import CustomAutosuggest from "./customInput/customAutosuggest";
import {
  validateText,
  validateFiscalCode,
  validateDate,
} from "../../lib/validation";
import "./customDatePicker.css";
import CustomInputSelect from "./customInput/customInputSelect";
import CustomButton from "./customInput/customButton";

console.log("test");

const CustomLongForm = ({ stateQuestions }) => {
  console.log(stateQuestions);
  let questions = {};
  const { dispatch, state } = useContext(Context);
  let country = {
    answer: {
      "Indicare lo Stato estero di provenienza": "Italy",
    },
  };

  // adding autosuggest logic
  const [answers, setAnswers] = useState({ "Luogo di nascita": "" });
  const [error, setError] = useState(false);

  // initial values of the form, without the autosuggest input
  const [content] = useState(
    stateQuestions.answers
      .filter(function (question) {
        return question.autocomplete !== true;
      })
      .map((quest) => (questions[quest.id] = ""))
  );

  const translateButton = () => {
    switch (state.language) {
      case "Italian":
        return "Continua";
      case "Spanish":
        return "continuar";
      default:
        return "Continue";
    }
  };

  const autosuggestHandler = (value, tag) => {
    if (!tag) {
      return;
    }
    setAnswers({
      [tag]: value,
    });
  };

  // handler when the form is submitted, call the dispatcher
  const submitForm = (values) => {
    console.log(values);
    let newAnswers = {};

    const isAutosuggestPresent = stateQuestions.answers.some(
      (question) => question.autocomplete === true
    );
    if (isAutosuggestPresent) {
      // check if answers is not empty
      if (
        answers["Luogo di nascita"] === "" &&
        values["Luogo di nascita"] === ""
      ) {
        setError(true);
        return;
      }
      if (answers["Luogo di nascita"] === "") {
        answers["Luogo di nascita"] = values["Luogo di nascita"];
      }
      newAnswers = {
        ...values,
        "Luogo di nascita": answers["Luogo di nascita"],
      };
    } else {
      newAnswers = { ...values };
    }

    if (stateQuestions.id >= 40) {
      dispatch({
        type: "ANSWER_QUESTION_COMPONENT_FORM",
        answer: newAnswers,
        state: stateQuestions,
      });
    } else {
      dispatch({
        type: "ANSWER_QUESTION_FORM",
        answer: newAnswers,
        state: stateQuestions,
      });
    }

    setAnswers([]);
    setError(false);

    //if we are in component tree, dispatch a different thing
  };

  // decide the validation conditionally
  // decide the validation conditionally
  const validateInput = (value) => {
    switch (value) {
      case "RequiredField":
        return validateText;
      case "fiscalCodeField":
        return validateFiscalCode;
      case "dateValidation":
        return validateDate;
      default:
        return undefined;
    }
  };

  // function to build the ui form
  const renderForm = (props) => {
    let i = 0;
    let counter = 0;

    let containerColumn = [];
    let formContainer = {};

    stateQuestions.answers.forEach((answ, index) => {
      switch (answ.type) {
        case "select":
          containerColumn.push(
            <Field
              key={answ.id}
              id={answ.id}
              name={answ.id}
              validate={validateInput(answ.validate)}
            >
              {({ field, form }) => (
                <CustomInputSelect {...field} state={answ} error={props} />
              )}
            </Field>
          );
          break;
        case "autocomplete":
          containerColumn.push(
            <CustomAutosuggest
              keyAuto={answ.id}
              value={answers}
              autosuggestHandler={autosuggestHandler}
              tag={answ}
              country={country}
              error={error}
            />
          );
          break;
        default:
          containerColumn.push(
            <Field
              name={answ.id}
              validate={validateInput(answ.validate)}
              key={answ.id}
            >
              {({ field, form }) => (
                <FormControl>
                  <CustomInput
                    {...field}
                    state={answ}
                    error={
                      props.errors[answ.id] &&
                      props.touched[answ.id] &&
                      props.errors[answ.id]
                    }
                  />
                </FormControl>
              )}
            </Field>
          );
      }
      i++;

      if (i === 4 || stateQuestions.answers.length - index === 1) {
        formContainer[counter] = containerColumn;

        counter++;
        i = 0;
        containerColumn = [];
      }
    });

    // now return every key return a column
    const result = Object.values(formContainer).map((container, index) => (
      <Box key={index} marginY="5" marginX="12">
        {container.map((item) => item)}
      </Box>
    ));

    return result;
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
            fontWeight={"bold"}
            marginTop="1em"
            margin="8"
          >
            {stateQuestions.title}
          </Text>

          <Flex direction={{ base: "column", md: "row" }}>
            {renderForm(props)}
          </Flex>

          <CustomButton submit="submit" handler={() => console.log("click")}>
            {translateButton()}
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default CustomLongForm;
