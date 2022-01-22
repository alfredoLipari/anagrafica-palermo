// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION_SELECT":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent

      const newAnswersSelect = [
        ...state.answers,
        {
          answer: action.answer.id,
          idQuestion: parseInt(action.state.id),
        },
      ];

      return {
        ...state,
        answers: newAnswersSelect,
        currentQuestion: parseInt(action.answer.nextQuestion),
      };

    case "ANSWER_QUESTION_FORM":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent

      const newAnswersForm = [
        ...state.answers,
        {
          answers: action.answer,
          idQuestion: parseInt(action.state.id),
        },
      ];

      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent
      console.log(action.answer);

      const newAnswersCheckbox = [
        ...state.answers,
        {
          answer: action.answer,
          idQuestion: parseInt(action.state.id),
        },
      ];

      return {
        ...state,
        answers: newAnswersCheckbox,
        currentQuestion: parseInt(action.answer.nextQuestion),
      };

    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
