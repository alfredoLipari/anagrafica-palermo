import choiceTree from "../../lib/choice";

console.log(choiceTree)

// create reducer
export function reducer(state, action) {

  console.log("state: ", state)
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.language,
      };

    case "GO BACK":
      // take the history, pop the element 
      let history = state.questionHistory;
      history.pop();

      let previousAnswers = [...state.answers]


      // also pop out the last answer
      if(!action.state?.controller){
        previousAnswers.pop();
      }

      // restart the componentFamily


      console.log("previousAnswers", previousAnswers)

      return {
        ...state,
        currentQuestion: history[history.length - 1],
        questionHistory: history,
        answers: previousAnswers
      }
    case "ANSWER_QUESTION_SELECT":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent
      // gestire nuova navigazione indietro:
      let documents = action.answer?.documentazione?.length > 0 ? [] : [...state.documents];

      let newAnswersSelect = [...state.answers];

      let nextQuestion = action.answer.nextQuestion;

      // check if its a checkbox
        // commento di prova
      if (action.answer.id[0].toUpperCase() === "C") {
        action.answer = {
          [action.answer.id]: "X",
        };
      }

      if (!action.state.controller) {
        newAnswersSelect = [
          ...state.answers,
          {
            answer: action.answer,
          },
        ];
      } else {
        // retrieve only the documentation
        if (action.answer?.documentazione.length > 0) {
          let newObject = {};
          action.answer?.documentazione.forEach((doc, index) => {
            newObject["Si allegano i seguenti documenti " + (index + 1)] = doc;
            documents.push(doc);
          });

          // gestione documentazione 
          if(state.answers.length == 0){
            newAnswersSelect = [
              ...state.answers,
              {
                answer: newObject,
              },
            ];
          }

          
        }
      }

      console.log(documents);

      // add the question to the history
      let newHistory = state.questionHistory
      newHistory.push(parseInt(nextQuestion))

      return {
        ...state,
        answers: newAnswersSelect,
        currentQuestion: parseInt(nextQuestion),
        documents: documents,
        questionHistory: newHistory
      };

    case "ANSWER_QUESTION_FORM":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent
      let answers = action.answer;

      if (action.state.id === 22) {
        answers = {
          ...action.answer,
          telefono: action.answer["Telefono"],
          Cell: action.answer["Cellulare"],
          email: action.answer["emailPec"],
        };
      }

      if (action.state.id === 32) {
        let date = new Date(action.answer["data"]);
        // add the duplicate id in the answer
        answers = {
          ...action.answer,

          "data decorrenza giorno": date.getDate(),
          "data decorrenza mese": date.getUTCMonth(),
          "data decorrenza anno": date.getFullYear(),
        };
      }

      if (action.state.id === 8) {
        let date = new Date(action.answer["Data di nascita"]);
        // add the duplicate id in the answer
        answers = {
          ...action.answer,
          "il sottoscritto":
            action.answer["Nome"] + " " + action.answer["Cognome"],
          cf: action.answer["Codice Fiscale"],
          giorno: date.getDate(),
          mese: date.getUTCMonth(),
          anno: date.getFullYear(),
        };
      }

      if (action.state.id === 16) {
        answers = {
          ...action.answer,
          Via10: action.answer["ViaPiazza"],
          scala: action.answer["Scala"],
          n10: action.answer["Numero civico"],
          Piano10: action.answer["Piano"],
          interno10: action.answer["Interno"],
        };
      }

      const newAnswersForm = [
        ...state.answers,
        {
          answer: answers,
        },
      ];

      console.log("action.answer",action.answer)


      // add the question to the history
      let newHistoryForm = state.questionHistory
      newHistoryForm.push(parseInt(action.state.nextQuestion))


      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
        questionHistory: newHistoryForm
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // checbox is for controll, it means we are not pushing any new answer, just switching question
      // the next question is calculated by adding 8 to the first one

  
    // add the question to the history
      let checkNewHistory = state.questionHistory
      checkNewHistory.push(parseInt(action.nextQuestion))

      return {
        ...state,
        currentQuestion: parseInt(action.nextQuestion),
        questionHistory: checkNewHistory
      };

    case "ANSWER_QUESTION_COMPONENT_NUMBER":
      // create the tree object for every components
      let componentsTree = [];

      // add the question to the history
      let newHistoryComponent = state.questionHistory
      newHistoryComponent.push(parseInt(action.nextQuestion))

      // controller for the checkbox
      let page = 2;
      let moduls = 1;
      let currentIndex = 0;
      
      for (let i = 2; i <= parseInt(action.answer) + 1; i++) {

        console.log("Iindex: ", i)
        if (page === 3) {
          moduls = 1;
        }

        componentsTree.push({
          type: "longform",
          title: "Component N." + (i - 1),
          id: 39 + i + currentIndex,
          parentId: 4,
          nextQuestion: 40 + i + currentIndex,
          answers: [
            {
              id: "Nome_" + i,
              label: "Name",
              type: "text",
              helperText: "Ex. Moussa",
              validate: "RequiredField",
              isRequired: true,
              // add input validate
            },
            {
              id: "Cognome_" + i,
              label: "Surname",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita_" + i,
              label: "Date of birth",
              type: "date",
              helperText: "Date of birth",
              validate: "dateValidation",
              isRequired: true,
              // add input validate
            },
            {
              id: "Luogo di nascita_" + i,
              label: "Where were you born?",
              type: "text",
              helperText: "Indicate your city of birth",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Sesso_" + i,
              label: "Gender",
              type: "select",
              options: ["male", "female"],
              validate: "RequiredField",
              isRequired: true,
              helperText: "select your gender",
              // add input validate
            },
            {
              id: "Stato Civile_" + i,
              label: "your marital status?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "select your status",
              validate: "RequiredField",
            },
            {
              id: "Cittadinanza_" + i,
              label: "Citizenship",
              type: "text",
              helperText: "Ex. Ghanian, Francaise, Russian...",
              validate: "RequiredField",
              isRequired: true,
              // add input validate
            },
            {
              id: "Codice Fiscale_" + i,
              label: "Codice Fiscale",
              type: "text",
              helperText: "Ex. R5MRI88L73G273E",
              validate: "RequiredField",
              isRequired: true,
              // add input validate
            },
            {
              id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
              label: "Relation to the applicant",
              type: "select",
              options: [
                "mother",
                "father",
                "son",
                "daughter",
                "brother",
                "sister",
                "grandfather",
                "grandmother",
                "uncle",
                "aunt",
                "cousin",
              ],
              helperText: "Ex. Wife, Son",
              validate: "RequiredField",
              isRequired: true,
              // add input validate
            },
          ],
        });

        componentsTree.push({
          type: "checkbox",
          title: "Does she/he has a job?",
          id: 40 + i + currentIndex,
          answers: [
            {
              id: "yes",
              nextQuestion: 42 + i + currentIndex,
            },
            {
              id: "no",
              nextQuestion: 41 + i + currentIndex,
            },
          ],
        });

        componentsTree.push({
          type: "select",
          title: "What's her/his Non-professional status?",
          label: "Select her/his Status",
          id: 41 + i + currentIndex,
          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_6",
              label: "Housewife",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_7",
              label: "Student",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_8",
              label: "Unemployed",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_9",
              label: "Retired",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_10",
              label: "Other",
              nextQuestion: 43 + i + currentIndex,
            },
          ],
        });

        componentsTree.push({
          type: "select",
          title: "What's his/her professional status?",
          label: "Select her/his Status",
          id: 42 + i + currentIndex,

          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_4",
              label: "Worker",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_5",
              label: "Family Worker",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_3",
              label: "Freelance / Entrepreneur",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_1",
              label: "Self-Employed",
              nextQuestion: 43 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_2",
              label: "Executive / Employee",
              nextQuestion: 43 + i + currentIndex,
            },
          ],

          parentId: 9,
        });

        componentsTree.push(
          {
            type: "checkbox",
            title: "Does she/he has an Italian Driving License?",
            id: 43 + i + currentIndex,
            answers: [
              {
                id: "yes",
                nextQuestion: 44 + i + currentIndex,
              },
              {
                id: "no",
                nextQuestion: 45 + i + currentIndex,
              },
            ],
          },

          {
            type: "longform",
            title: "Driving License Details, this details are not mandatory",
            id: 44 + i + currentIndex,
            parentId: 4,
            nextQuestion: 45 + i + currentIndex,
            answers: [
              {
                id: "Numero",
                label: "Number",
                type: "text",
                helperText: "Ex. 91828930",
                validate: "RequiredField",
                isRequired: false,
              },
              {
                id: "Patente tipo",
                label: "License Type",
                type: "text",
                helperText: "Ex. A,B,C",
                validate: "RequiredField",
                isRequired: false,
                // add input validate
              },
              {
                id: "Data di rilascio",
                label: "Release Date",
                type: "Date",
                helperText: "Release Date",
                validate: "dateValidation",
                isRequired: false,
              },
              {
                id: "Organo di rilascio",
                label: "Issuing body",
                type: "text",
                helperText: "Motorizzazione",
                // validate: "RequiredField", // change validation
                isRequired: false,
              },
              {
                id: "Provincia di",
                label: "Province",
                type: "text",
                helperText: "Palermo",
                isRequired: false,
                // add input validate
              },
            ],
          }
        );

        componentsTree.push({
          type: "select",
          title: "What's her/his educational level?",
          label: "Select her/his Degree",
          id: 45 + i + currentIndex,

          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_11",
              label: "Primary School",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_12",
              label: "Secondary School Certificate",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_13",
              label: "Diploma",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_14",
              label: "Bachelor",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_15",
              label: "Master Degree",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_16",
              label: "Phd",
              nextQuestion: i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
            },
          ],

          parentId: 9,
        });

        // controller for the page
        if (i === 3) {
          page++;
        }
        moduls++;
        currentIndex += 7;
      }
      console.log("LOL")
      
      // if the length of the question is less than this number dont add the components question as already are added
      if( choiceTree.language[state.language].questions.length < 35){
      componentsTree.map(component =>  choiceTree.language[state.language].questions.push(component))

      }

    

      return {
        ...state,
        //componentTree: componentsTree,
        currentQuestion: parseInt(action.nextQuestion),
        history: newHistoryComponent
      };
    case "ANSWER_QUESTION_COMPONENT_FORM":
      const newAnswersFormComponent = [
        ...state.answers,
        {
          answer: action.answer,
        },
      ];

      let newHistoryComponentForm = state.questionHistory
      newHistoryComponentForm.push(parseInt(action.state.nextQuestion))

      console.log("parseInt(action.state.nextQuestion)", )

      return {
        ...state,
        answers: newAnswersFormComponent,
        currentQuestion: parseInt(action.state.nextQuestion),
           history: newHistoryComponentForm
      };

    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
