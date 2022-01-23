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
          idQuestion: action.answer.label,
        },
      ];

      console.log(action.answer, "ok");

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
          idQuestion: action.answer.id,
        },
      ];

      return {
        ...state,
        answers: newAnswersForm,
        currentQuestion: parseInt(action.state.nextQuestion),
      };
    case "ANSWER_QUESTION_CHECKBOX":
      // checbox is for controll, it means we are not pushing any new answer, just switching question

      console.log(action.nextQuestion, "question");

      return {
        ...state,
        currentQuestion: parseInt(action.nextQuestion),
      };

    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
