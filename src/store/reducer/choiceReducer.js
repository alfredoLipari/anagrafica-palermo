// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION_SELECT":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent

      let newAnswersSelect = [...state.answers];

      let nextQuestion = action.answer.nextQuestion;

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

      // delete the first item fromt the componentTree
      state.componentTree.shift();

      // control for the components tree
      if (action.state.label === "Select her/his Status") {
        state.componentTree.shift();
      }

      // control for the components tree
      if (
        state.componentTree.length === 0 &&
        action.state.label === "Select her/his Degree"
      ) {
        console.log("finish");
        nextQuestion = 19;
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

      // delete the first item fromt the componentTree
      state.componentTree.shift();

      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // checbox is for controll, it means we are not pushing any new answer, just switching question
      // the next question is calculated by adding 8 to the first one
      if (
        !action.answer &&
        (action.nextQuestion === 37 ||
          action.nextQuestion === 45 ||
          action.nextQuestion === 53 ||
          action.nextQuestion === 61)
      ) {
        state.componentTree.shift();
      }
      // delete the first item fromt the componentTree
      state.componentTree.shift();

      return {
        ...state,
        currentQuestion: parseInt(action.nextQuestion),
      };

    case "ANSWER_QUESTION_COMPONENT_NUMBER":
      // create the tree object for every components
      let componentsTree = [];

      // controller for the checkbox
      let page = 2;
      let moduls = 1;
      let currentIndex = 0;

      for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
        if (page === 3) {
          moduls = 1;
        }

        componentsTree.push({
          type: "longform",
          title: "Component N." + (i - 1),
          id: 29 + i + currentIndex,
          parentId: 4,
          nextQuestion: 30 + i + currentIndex,
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
              validate: "RequiredField",
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
              helperText: "Ex. Ghane, France, Russia",
              validate: "gender",
              isRequired: true,
              // add input validate
            },
            {
              id: "Stato Civile_" + i,
              label: "Are you married?",
              type: "text",
              helperText: "",
              validate: "RequiredField",
              isRequired: true,
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
              type: "text",
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
          id: 30 + i + currentIndex,
          answers: [
            {
              id: "yes",
              nextQuestion: 32 + i + currentIndex,
            },
            {
              id: "no",
              nextQuestion: 31 + i + currentIndex,
            },
          ],
        });

        componentsTree.push({
          type: "select",
          title: "What's her/his Non-professional status?",
          label: "Select her/his Status",
          id: 31 + i + currentIndex,
          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_6",
              label: "Housewife",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_7",
              label: "Student",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_8",
              label: "Unemployed",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_9",
              label: "Retired",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_10",
              label: "Other",
              nextQuestion: 33 + i + currentIndex,
            },
          ],
        });

        componentsTree.push({
          type: "select",
          title: "What's his/her professional status?",
          label: "Select her/his Status",
          id: 32 + i + currentIndex,

          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_4",
              label: "Worker",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_5",
              label: "Family Worker",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_3",
              label: "Freelance / Entrepreneur",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_1",
              label: "Self-Employed",
              nextQuestion: 33 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_2",
              label: "Executive / Employee",
              nextQuestion: 33 + i + currentIndex,
            },
          ],

          parentId: 9,
        });

        componentsTree.push(
          {
            type: "checkbox",
            title: "Does she/he has an Italian Driving License?",
            id: 33 + i + currentIndex,
            answers: [
              {
                id: "yes",
                nextQuestion: 34 + i + currentIndex,
              },
              {
                id: "no",
                nextQuestion: 35 + i + currentIndex,
              },
            ],
          },

          {
            type: "longform",
            title: "Driving License Details, this details are not mandatory",
            id: 34 + i + currentIndex,
            parentId: 4,
            nextQuestion: 35 + i + currentIndex,
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
                validate: "RequiredField",
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
          id: 35 + i + currentIndex,

          answers: [
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_11",
              label: "Primary School",
              nextQuestion: 37 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_12",
              label: "Secondary School Certificate",
              nextQuestion: 37 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_13",
              label: "Diploma",
              nextQuestion: 37 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_14",
              label: "Bachelor",
              nextQuestion: 37 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_15",
              label: "Master Degree",
              nextQuestion: 37 + i + currentIndex,
            },
            {
              selected: false,
              id: "C" + page + "_" + moduls + "_16",
              label: "Phd",
              nextQuestion: 37 + i + currentIndex,
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
