import React, {
  useState,
  useContext,
  useEffect,
  useCallback,
  useRef,
} from "react";
import CustomInput from "./customInput/customInput";
import { FormControl, Button, Text, Divider, Box } from "@chakra-ui/react";
import { Formik, Field, Form } from "formik";
import { Context } from "../../App";
import CustomAutosuggest from "./customInput/customAutosuggest";
import { validateText, validateCountry } from "../../lib/validation";
import "./customDatePicker.css";
import CustomButton from "./customInput/customButton";

const CustomForm = ({ stateTemp }) => {
  let questions = {};
  let country = useRef("");
  const { state, dispatch } = useContext(Context);

  // initial values of the form, without the autosuggest input
  const [content] = useState(
    stateTemp.answers
      .filter(function (question) {
        return question.autocomplete !== true;
      })
      .map((quest) => (questions[quest.id] = ""))
  );

  const translateButton = () => {
    switch (state.language) {
      case "Italian":
        return "Continua";
      case "French":
        return "Continuez";
      case "Spanish":
        return "continuar";
      case "Ukranian":
        return "Продовжуйте";
      default:
        return "Continue";
    }
  };

  // adding autosuggest logic
  const [answers, setAnswers] = useState({});
  const [isValid, setIsValid] = useState(false);
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
      console.log(country.current, "ok");
    }
  }, [state]);

  useEffect(() => {
    renderAutoSuggest();
    return () => {
      console.log();
    };
  }, [renderAutoSuggest]);

  const autosuggestHandler = (value, tag) => {
    if (!tag) {
      return;
    }
    if (value === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    console.log(tag, value);
    setAnswers({
      ...answers,
      [tag]: value,
    });
  };

  // decide the validation conditionally
  const validateInput = (value) => {
    switch (value) {
      case "requiredField":
        return validateText;
      case "other":
        break;

      default:
        return null;
    }
  };

  // handler when the form is submitted, call the dispatcher
  const submitForm = (values) => {
    let newValues = values;

    if (Object.keys(answers).length > 0 && !country.current) {
      newValues = validateCountry(values, answers);
    } else if (Object.keys(answers).length > 0 && country.current) {
      newValues["Indicare il comune di provenienza"] =
        answers["Indicare il comune di provenienza"];
    }
    // if the return type is invalid return the errore message

    if (!isValid || !Object.keys(newValues).length > 0) {
      if (!Object.keys(newValues).length > 0) {
        setShowError(true);
        return;
      }
    } else {
      setShowError(false);
    }

    dispatch({
      type: "ANSWER_QUESTION_FORM",
      answer: newValues,
      state: stateTemp,
    });

    setAnswers({});
    questions = {};
  };

  return (
    <Formik
      initialValues={questions}
      validateOnChange={false}
      validateOnBlur={false}
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
            {stateTemp.answers.map((answ) =>
              answ.autocomplete === undefined || answ.autocomplete !== true ? (
                <Field
                  name={answ.id}
                  validate={validateInput(answ.validate)}
                  key={answ.id}
                >
                  {({ field, form }) => (
                    <FormControl>
                      <CustomInput {...field} state={answ} />
                    </FormControl>
                  )}
                </Field>
              ) : (
                <Box key={answ.id}>
                  <CustomAutosuggest
                    value={answers}
                    autosuggestHandler={autosuggestHandler}
                    tag={answ}
                    country={country.current}
                    error={showError}
                  />
                </Box>
              )
            )}
          </Box>

          <CustomButton submit="submit" handler={() => console.log("click")} state={state}>
            {translateButton()}
          </CustomButton>
          <CustomButton handler={() => dispatch({type: "GO BACK"})} state={state}>
            Torna indietro
          </CustomButton>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
