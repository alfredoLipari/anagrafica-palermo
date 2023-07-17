import React, { useContext, useState } from "react";
import { Context } from "../../../App";
import { Select, Text, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import ActionsButton from "../../button/ActionsButton";

const CustomSelect = ({ stateQuestion }) => {
  const { dispatch, state } = useContext(Context);
  const [selectAnswer, setSelectAnswer] = useState({});
  const navigate = useNavigate();

  console.log("familyName", state.familyName)

  const dispatchAnswer = () => {
    if (Object.keys(selectAnswer).length === 0) {
      //the user didnt select anything
      return;
    }
    //retrieve the object answer from the id
    const answer = stateQuestion.answers.find((answ) => {
      return answ.id === selectAnswer;
    });

    // dispatch the answer action to the choice reducer
    dispatch({
      type: "ANSWER_QUESTION_SELECT",
      answer: answer,
      state: stateQuestion,
    });
    setSelectAnswer({});
    if (stateQuestion.id === 34) {
      navigate("/download-pdf");
    }
  };

  return (
    <Box marginTop="12" display="flex" alignItems="center" flexDir="column">
      <Text
        fontWeight="bold"
        fontSize="3xl"
        color="#000"
        padding={{ base: 5, md: 0 }}
      >
        {state.familyName !== ""
          ? stateQuestion.title.replace(
              "X",
              state.familyName.charAt(0).toUpperCase() +
                state.familyName.slice(1)
            )
          : stateQuestion.title}
      </Text>
      <Select
        iconColor="#0E78E2"
        iconSize="50"
        color="#000"
        placeholder={stateQuestion.label}
        width={{ base: "75%", md: "25%" }}
        fontSize="md"
        marginTop="10"
        onChange={(something) => setSelectAnswer(something.target.value)}
        bg="white"
        marginBottom="12"
      >
        {stateQuestion.answers.map((el) => (
          <option value={el.id} key={el.id}>
            {el.label}
          </option>
        ))}
      </Select>

      <ActionsButton
        stateQuestionId={stateQuestion.id}
        goBackButtonHandler={() =>
          dispatch({ type: "GO BACK", answer: stateQuestion })
        }
        continueButtonHandler={() => dispatchAnswer()}
        colorSchemeContinueButton="facebook"
        state={state}
      />
    </Box>
  );
};

export default CustomSelect;


[
  {
    answer: {
      "Si allegano i seguenti documenti 1": "copia del passaporto.*",
      "Si allegano i seguenti documenti 2":
        "carta di soggiorno di familiare di cittadino dell'Unione, oppure ricevuta ella richiesta di rilascio di carta di soggiorno.*",
    },
  },
  {
    answer: {
      C1_1_4: "X",
    },
  },
  {
    answer: {
      "Indicare il comune di provenienza": "Palermo",
    },
  },
  {
    answer: {
      Nome: "MOusasa",
      Cognome: "cognome",
      "Data di nascita": "2023-07-11",
      "Luogo di nascita": "a",
      Sesso: "Maschile",
      "Stato Civile": "Nubile",
      Cittadinanza: "italiana",
      "Codice Fiscale": "test",
      "il sottoscritto": "MOusasa cognome",
      cf: "test",
      giorno: 11,
      mese: 6,
      anno: 2023,
    },
  },
  {
    answer: {
      C1_2_1: "X",
    },
  },
  {
    answer: {
      C1_2_15: "X",
    },
  },
  {
    answer: {
      Comune: "Palermo",
      Prov: "Palermo",
      Scala: "A",
      Piano: "a",
      Interno: "A",
      ViaPiazza: "via liberta",
      "Numero civico": "2",
      Via10: "via liberta",
      scala: "A",
      n10: "2",
      Piano10: "a",
      interno10: "A",
    },
  },
  {
    answer: {
      Nome_2: "Alfredo",
      "Stato Civile_2": "Nubile",
      Sesso_2: "Femminile",
      "Rapporto di parentela con il richiedente_0": "zio",
      Cognome_2: "a",
      "Data di nascita_2": "2023-07-04",
      Cittadinanza_2: "italiana",
      "Luogo di nascita_2": "Pale",
      "Codice Fiscale_2": "test",
    },
  },
  {
    answer: {
      C2_1_5: "X",
    },
  },
  {
    answer: {
      C2_1_15: "X",
    },
  },
  {
    answer: {
      Nome_6: "COmponente aggiu",
      Cognome_6: "aggiunitvo",
      Luogo: "2023-07-05",
      "Luogo di nascita_6": "palermo 3",
      "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia giÃ  residente":
        "Nonno",
    },
  },
  {
    answer: {
      Telefono: 3881432111,
      Cellulare: "3881432111",
      emailPec: "alfri.lipari@gmailcom",
      Fax: "fax",
      telefono: 3881432111,
      Cell: "3881432111",
      email: "alfri.lipari@gmailcom",
    },
  },
  {
    answer: {
      C9_1_2: "X",
    },
  },
  {
    answer: {
      Sezione: "A",
      foglio: "A",
      "particella o mappale": "A",
      subalterno: "A",
    },
  },
  {
    answer: {
      "che la tassa per il nuovo": "ok",
      F: "testa",
      Relazione_di_parentela: "teste",
    },
  },
  {
    answer: {
      selected: false,
      id: "10_1_2",
      label: "Locazione",
      nextQuestion: 34,
    },
  },
  {
    answer: {
      Note: "note aggiuntive",
    },
  },
];
