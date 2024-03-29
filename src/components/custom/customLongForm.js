/*
 *   when a form is bigger than 4 field
 */

import React, {useState, useContext, useEffect} from "react";
import CustomInput from "./customInput/customInput";
import { FormControl, Text, Divider, Box, Flex } from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import { Context } from "../../App";
import CustomAutosuggest from "./customInput/customAutosuggest";
import {
  validateText,
  validateFiscalCode,
  validateDate, validateTextTranslated,
} from "../../lib/validation";
import "./customDatePicker.css";
import CustomInputSelect from "./customInput/customInputSelect";
import ActionsButton from "../button/ActionsButton";

const CustomLongForm = ({ stateQuestions }) => {
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

  const[reset, setReset] = useState(false)


  // initial values of the form, without the autosuggest input



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
  const validateInput = (value, reset) => {

      switch (value) {
        case "requiredField":
          return reset ? "": validateText;
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
                  validate={validateInput(answ.validate, false)}

              >
                {({ field }) => (
                    <CustomInputSelect  {...field} state={answ} error={props} onClick={() => setReset(true)} />
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
              questId={answ.id}
            />
          );
          break;
        default:
          containerColumn.push(
              <Field
                  name={answ.id}
                  validate={validateInput(answ.validate, false)}
                  key={answ.id}
              >
                {({ field }) => (
                    <FormControl>
                      <CustomInput
                          {...field}
                          state={answ}
                          error={
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
    return  Object.values(formContainer).map((container, index) => (
        <Box key={index} marginY={{ base: "0", md: "5" }} marginX="20">
          {container.map((item) => item)}
        </Box>
    ));

  };

  return (

      <Formik
          initialValues={questions}
          onSubmit={(values) => {
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
                  fontSize="3xl"
                  fontWeight={"bold"}
                  marginTop="1em"
                  margin="8"
              >
                {stateQuestions.title}
              </Text>

              <Flex direction={{ base: "column", md: "row" }}>
                {renderForm(props)}
              </Flex>

              <ActionsButton
                  goBackButtonHandler = {() => dispatch({type: "GO BACK", answer: stateQuestions }) }
                  continueSubmit = {"submit"}
                  colorSchemeContinueButton = "facebook"
                  state = {state}
              />

            </Form>
        )}
      </Formik>
  );
};

export default CustomLongForm;
