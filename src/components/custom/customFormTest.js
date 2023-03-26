import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import CustomInput from "./customInput/customInput";
import {
  FormControl,
  Button,
  Text,
  Divider,
  Box,
  Flex,
} from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Context } from "../../App";
import CustomAutosuggest from "./customInput/customAutosuggest";
import {
  validateText,
  validateCountry,
  validateFiscalCode,
  validateDate,
} from "../../lib/validation";
import "./customDatePicker.css";
import CustomInputSelect from "./customInput/customInputSelect";
import CustomButton, {translateButtonBack} from "./customInput/customButton";

const CustomFormTest = ({ stateTemp }) => {
  let country = useRef("");
  const { state, dispatch } = useContext(Context);

  // initial values of the form, without the autosuggest input
  const [content, setContent] = useState({});

  const [error, setError] = useState(false);
  // adding autosuggest logic

  const [answers, setAnswers] = useState({});

  const [showError, setShowError] = useState(false);

  const renderAutoSuggest = useCallback(() => {
    // logic to decide the cities to show
    if (state.answers.length > 0) {
      // retrieve the country
      country.current = state.answers.find((answ) =>
          answ.answer.hasOwnProperty("Indicare lo Stato estero di provenienza")
      );

      // if the user press "different city" we should render the autosuggest with only italian cities
      const isOnlyItalianCity = state.answers.find((answ) =>
          answ.answer.hasOwnProperty("C1_1_1")
      );

      if (isOnlyItalianCity) {
        country.current = {
          answer: {
            "Indicare lo Stato estero di provenienza": "Italy",
          },
        };
      }
      if (country.current === undefined) {
        country.current = {
          answer: {
            "Indicare lo Stato estero di provenienza": "Italy",
          },
        };
      }
    }
  }, [state]);



  const renderQuestions = useCallback(() => {
    let questions = {};
    stateTemp.answers
        .filter(function (question) {
          return question.autocomplete !== true;
        })
        .map((quest) => (questions[quest.id] = ""));
    setContent(questions);
  }, [stateTemp.answers]);

  useEffect(() => {
    renderQuestions();
    renderAutoSuggest();
  }, [renderAutoSuggest, setContent, renderQuestions]);

  const autosuggestHandler = (value, tag) => {
    if (!tag) {
      return;
    }
    setAnswers({
      [tag]: value,
    });
  };

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

  // handler when the form is submitted, call the dispatcher
  const submitForm = (values) => {
    let newValues = values;

    const isAutosuggestPresent = state.answers.some(
        (question) => question.autocomplete === true
    );
    if (isAutosuggestPresent) {
      // check if answers is not empty
      if (answers["Luogo di nascita"] === "") {
        setError(true);
        return;
      }
      newValues = {
        ...values,
        "Luogo di nascita": answers["Luogo di nascita"],
      };
    } else {
      newValues = { ...values };
    }

    if (Object.keys(answers).length > 0 && !country.current) {
      newValues = validateCountry(values, answers);
    } else if (Object.keys(answers).length > 0 && country.current) {
      newValues["Indicare il comune di provenienza"] =
          answers["Indicare il comune di provenienza"];
    }

    if (state.id >= 40) {
      dispatch({
        type: "ANSWER_QUESTION_COMPONENT_FORM",
        answer: newValues,
        state: state,
      });
    } else {
      dispatch({
        type: "ANSWER_QUESTION_FORM",
        answer: newValues,
        state: state,
      });
    }

    dispatch({
      type: "ANSWER_QUESTION_FORM",
      answer: newValues,
      state: stateTemp,
    });

    setAnswers({});
    setError();
  };

  // function to build the ui form
  const renderForm = (props) => {

    let i = 0;
    let counter = 0;

    let containerColumn = [];
    let formContainer = {};

    stateTemp.answers.forEach((answ, index) => {
      switch (answ.type) {
        case "select":
          containerColumn.push(
              <Field
                  key={answ.id}
                  id={answ.id}
                  name={answ.id}
                  validate={validateInput(answ.validate)}
              >
                {({ field }) => (
                    <CustomInputSelect {...field} state={answ} error={props} />
                )}
              </Field>
          );
          break;
        case "autocomplete":
          containerColumn.push(
              <Box key={answ.id}>
                <CustomAutosuggest
                    value={answers}
                    autosuggestHandler={autosuggestHandler}
                    tag={answ}
                    country={country.current}
                    error={showError}
                />
              </Box>
          );
          break;
        default:
          containerColumn.push(
              <Field
                  name={answ.id}
                  validate={validateInput(answ.validate)}
                  key={answ.id}
              >
                {({ field }) => (
                    <FormControl>
                      <CustomInput
                          {...field}
                          state={answ}
                          error={props.errors[answ.id]}
                      />
                    </FormControl>
                )}
              </Field>
          );
      }
      i++;

      if (i === 4 || stateTemp.answers.length - index === 1) {
        formContainer[counter] = containerColumn;

        counter++;
        i = 0;
        containerColumn = [];
      }
    });

    // now return every key return a column
    return  Object.values(formContainer).map((container, index) => (
        <Box key={index} marginX="10" marginY="5">
          {container.map((item) => item)}
        </Box>
    ));


  };

  return (
      <Formik
          initialValues={content}
          validateOnChange={false}
          validateOnBlur={false}
          onSubmit={(values) => {
            submitForm(values);
          }}
      >
        {(props) => (
            <Form
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent:"center",
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

              <Flex direction={{ base: "column", md: "row" }}>
                {renderForm(props)}
              </Flex>

              <Button
                  type="submit"
                  color="white"
                  bg="#0073E6"
                  marginTop="5"
                  w="15%"
                  borderRadius="4"
                  paddingY="6"
                  marginBottom={"10"}
              >
                {stateTemp.id !== 33 ? "Continue" : "Generate pdf"}
              </Button>

              <CustomButton handler={() => dispatch({type: "GO BACK"})} state={state}>
                {translateButtonBack()}
              </CustomButton>

            </Form>
        )}
      </Formik>
  );
};

export default CustomFormTest;
