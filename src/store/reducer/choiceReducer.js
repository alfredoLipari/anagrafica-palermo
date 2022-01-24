// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION_SELECT":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent

      let newAnswersSelect = [...state.answers];

      const nextQuestion = action.answer.nextQuestion;

      // check if its a checkbox
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
      }

      return {
        ...state,
        answers: newAnswersSelect,
        currentQuestion: parseInt(nextQuestion),
      };

    case "ANSWER_QUESTION_FORM":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent

      if (action.state.id === 22) {
        action.state.nextQuestion = 22;
      }

      const newAnswersForm = [
        ...state.answers,
        {
          answer: action.answer,
        },
      ];

      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // checbox is for controll, it means we are not pushing any new answer, just switching question
      return {
        ...state,
        currentQuestion: parseInt(action.nextQuestion),
      };

    case "ANSWER_QUESTION_COMPONENT_NUMBER":
      // create the tree object for every components
      let componentsTree = [];

      for (let i = 2; i <= action.answer + 1; i++) {
        componentsTree.push({
          type: "longform",
          title: "Component",
          id: 29 + i,
          parentId: 4,
          nextQuestion: 30 + i,
          answers: [
            {
              id: "Nome_" + i,
              label: "Name",
              type: "text",
              helperText: "Ex. Moussa",
              // add input validate
            },
            {
              id: "Cognome_" + i,
              label: "Surname",
              type: "text",
              helperText: "Ex. Semprini",
            },
            {
              id: "Data di nascita_" + i,
              label: "Date of birth",
              type: "date",
              helperText: "Date of birth",
              // add input validate
            },
            {
              id: "Luogo di nascita_" + i,
              label: "Where were you born?",
              type: "text",
              helperText: "Indicate your city of birth",
            },
            {
              id: "Sesso_" + i,
              label: "Gender",
              type: "select",
              helperText: "Ex. Ghane, France, Russia",
              // add input validate
            },
            {
              id: "Stato Civile_" + i,
              label: "Are you married?",
              type: "text",
              helperText: "",
            },
            {
              id: "Cittadinanza_" + i,
              label: "Citizenship",
              type: "text",
              helperText: "Ex. Ghanian, Francaise, Russian...",
              // add input validate
            },
            {
              id: "Codice Fiscale_" + i,
              label: "Codice Fiscale",
              type: "text",
              helperText: "Ex. R5MRI88L73G273E",
              // add input validate
            },
            {
              id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
              label: "Relation to the applicant",
              type: "text",
              helperText: "Ex. Wife, Son",
              // add input validate
            },
          ],
        });
      }

      return {
        ...state,
        componentTree: componentsTree,
        currentQuestion: parseInt(action.nextQuestion),
      };
    case "ANSWER_QUESTION_COMPONENT_FORM":
      const newAnswersFormComponent = [
        ...state.answers,
        {
          answer: action.answer,
        },
      ];

      // delete the first item fromt the componentTree
      state.componentTree.shift();

      if (state.componentTree.length === 0) {
        console.log("ehehe");
        action.state.nextQuestion = 19;
      }

      return {
        ...state,
        answers: newAnswersFormComponent,
        currentQuestion: parseInt(action.state.nextQuestion),
      };

    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
