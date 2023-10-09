import choiceTree from "../../lib/choice";
import {
  calculateComponentArabTree,
  calculateComponentBengaliTree,
  calculateComponentEnglishTree,
  calculateComponentFrenchTree,
  calculateComponentItalianTree,
  calculateComponentSpanishTree,
  calculateComponentTamilTree,
  calculateComponentUkrainianTree,
} from "../../lib/familyComponents";

// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_LANGUAGE":
      return {
        ...state,
        language: action.language,
      };

    case "GO BACK":
    console.log("state",state)
    console.log("action", action) 
    console.log("state.questionHistory", state.questionHistory[state.questionHistory.length - 1])

    /*
    * Retrieve the previous question from the questionHistory state
    */
        let previousQuestion = choiceTree.language[state.language].questions.find((question) => {
          return question.id === state.questionHistory[state.questionHistory.length - 2];
        }
      );      

      console.log("previousQuestion",previousQuestion)

      // take the history, pop the element
      let history = state.questionHistory;
      history.pop();

      let previousAnswers = [...state.answers];

      // also pop out the last answer
      if (!previousQuestion?.controller) {
        previousAnswers.pop();
      }

      // restart the componentFamily

      return {
        ...state,
        currentQuestion: history[history.length - 1],
        questionHistory: history,
        answers: previousAnswers,
      };
    case "ANSWER_QUESTION_SELECT":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent
      // gestire nuova navigazione indietro:
      let documents =
        action.answer?.documentazione?.length > 0 ? [] : [...state.documents];

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
          if (state.answers.length === 0) {
            newAnswersSelect = [
              ...state.answers,
              {
                answer: newObject,
              },
            ];
          }
        }
      }

      // add the question to the history
      let newHistory = state.questionHistory;
      newHistory.push(parseInt(nextQuestion));

      return {
        ...state,
        answers: newAnswersSelect,
        currentQuestion: parseInt(nextQuestion),
        documents: documents,
        questionHistory: newHistory,
        familyName: parseInt(nextQuestion) === 19 ? "" : state.familyName,
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

      if (action.state.id === 34) {

        if(action.answer["Note"] === undefined){
          action.answer["Note"] = "";
        }

        answers = {
          ...action.answer,
          Note: action.answer["Note"],
        };
      }

      const newAnswersForm = [
        ...state.answers,
        {
          answer: answers,
        },
      ];

      // add the question to the history
      let newHistoryForm = state.questionHistory;
      newHistoryForm.push(parseInt(action.state.nextQuestion));

      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
        questionHistory: newHistoryForm,
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // checbox is for controll, it means we are not pushing any new answer, just switching question
      // the next question is calculated by adding 8 to the first one

      // add the question to the history
      let checkNewHistory = state.questionHistory;
      checkNewHistory.push(parseInt(action.nextQuestion));

      return {
        ...state,
        currentQuestion: parseInt(action.nextQuestion),
        questionHistory: checkNewHistory,
      };

    case "ANSWER_QUESTION_COMPONENT_NUMBER":
      // create the tree object for every components

      // add the question to the history
      let newHistoryComponent = state.questionHistory;
      newHistoryComponent.push(parseInt(action.nextQuestion));

      const englishComponentsTree = calculateComponentEnglishTree(action);
      const arabComponentsTree = calculateComponentArabTree(action);
      const tamilComponentsTree = calculateComponentTamilTree(action);
      const italianComponentsTree = calculateComponentItalianTree(action);
      const bengaliComponentsTree = calculateComponentBengaliTree(action);
      const frenchComponentsTree = calculateComponentFrenchTree(action);
      const spanishComponentsTree = calculateComponentSpanishTree(action);
      const ukranianComponentsTree = calculateComponentUkrainianTree(action);

      // if the length of the question is less than this number dont add the components question as already are added
      if (choiceTree.language[state.language].questions.length < 35) {
        const languages = [
          "Italian",
          "French",
          "Spanish",
          "Ukranian",
          "Tamil",
          "Arab",
          "Bengali",
          "English",
        ];
        languages.forEach((language) => {
          switch (language) {
            case "English":
              englishComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "French":
              frenchComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Spanish":
              spanishComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Ukranian":
              ukranianComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Arab":
              arabComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Tamil":
              tamilComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Italian":
              italianComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            case "Bengali":
              bengaliComponentsTree.map((component) =>
                choiceTree.language[language].questions.push(component)
              );
              break;
            default:
              englishComponentsTree.map((component) =>
                choiceTree.language[state.language].questions.push(component)
              );
              break;
          }
        });
      }

      return {
        ...state,
        //componentTree: componentsTree,
        currentQuestion: parseInt(action.nextQuestion),
        history: newHistoryComponent,
      };
    case "ANSWER_QUESTION_COMPONENT_FORM":
      const newAnswersFormComponent = [
        ...state.answers,
        {
          answer: action.answer,
        },
      ];

      let componentName = state.familyName;

      let newHistoryComponentForm = state.questionHistory;
      newHistoryComponentForm.push(parseInt(action.state.nextQuestion));

      console.log("action.state in form", action.state);

      // check if the actual answer is a family component form to retrieve the name of the component
      if (action.state.firstQuestion === true) {
        console.log("component");
        console.log(action.answer);

        // retrieve the name of the component
        const index = [2, 3, 4, 5, 6].find(
          (value) => action.answer["Nome_" + value] !== undefined
          );
        componentName = action.answer["Nome_" + index];
        console.log("componentName", componentName);
      }
      

      return {
        ...state,
        answers: newAnswersFormComponent,
        currentQuestion: parseInt(action.state.nextQuestion),
        history: newHistoryComponentForm,
        familyName: componentName,
      };

    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
