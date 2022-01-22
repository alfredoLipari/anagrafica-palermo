// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "ANSWER_QUESTION":
      // push the answer as Id in the object answer
      // retrive the id of the question and the id parent
      console.log(parseInt(action.answer));

      const newAnswers = [
        ...state.answers,
        {
          idAnswer: parseInt(action.answer),
          idParent: parseInt(action.state.idParent),
        },
      ];

      // change the question passing the id

      console.log(newAnswers, "new answer");

      return {
        ...state,
        answers: newAnswers,
        currentQuestion: parseInt(action.answer),
      };
    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
