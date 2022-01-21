// create reducer
export function reducer(state, action) {
  switch (action.type) {
    case "SET_QUESTION":
      return { ...state, user: action.user, error: "" };
    case "RETRIEVE_ANSWERS":
      return { ...state, user: "", error: "" };

    default:
      return state;
  }
}
