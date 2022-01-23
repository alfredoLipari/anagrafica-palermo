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
import axios from "../../axios";

const CustomForm = ({ stateTemp }) => {
  const questions = {};
  const { state, dispatch } = useContext(Context);

  console.log(stateTemp);

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
  const submitForm = async (values) => {
    if (stateTemp.id !== 22) {
      try {
        const headers = {
          headers: { "Access-Control-Allow-Origin": "*" },
        };

        const answ = state.answers;

        // do the fetch
        const data = await axios.post(
          "create-pdf",
          [
            {
              answer: {
                C1_1_2: "X",
              },
            },
            {
              answer: {
                "Indicare lo Stato estero di provenienza": "France",
              },
            },
            {
              answer: {
                Nome: "Moussa",
                Cognome: "Semprini",
                "Data di nascita": "2022-01-27",
                "Luogo di nascita": "Italy",
                Sesso: "M",
                "Stato Civile": "yes",
                Cittadinanza: "Italian",
                "Codice Fiscale": "RRRRRR",
              },
            },
            {
              answer: {
                C1_2_4: "X",
              },
            },
            {
              answer: {
                C1_2_11: "X",
              },
            },
            {
              answer: {
                Comune: "Palermo",
                Prov: "PA",
                ViaPiazza: "Via Abruzzi",
                "Numero civico": "34",
                Scala: "1st",
                Piano: "2",
                Interno: "V",
              },
            },
            {
              answer: {
                Nome_1: "Alfredo",
                Cognome_1: "Lipari",
                "Data di nascita_1": "2022-01-18",
                "Luogo di nascita_1": "A",
                Sesso_1: "A",
                "Stato Civile_1": "s",
                Cittadinanza_1: "A",
                "Codice Fiscale_1": "Aasa",
                "Rapporto di parentela con il richiedente_0": "PA",
              },
            },
            {
              answer: {
                Telefono: 3881432111,
                Cellulare: "3881432111",
                emailPec: "alfri.lipari@gmail.com",
                Fax: "666",
              },
            },
          ],
          { headers }
        );

        const resData = await data.data;
        console.log(resData);
      } catch (e) {
        console.log(e);
      }
    }

    dispatch({
      type: "ANSWER_QUESTION_FORM",
      answer: values,
      state: stateTemp,
    });
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
            Continue
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default CustomForm;
