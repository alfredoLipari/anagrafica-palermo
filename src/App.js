import React, { createContext, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/layouts/homepage";
import Fonts from "./components/fonts";
import theme from "./lib/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reducer } from "./store/reducer/choiceReducer";

export const Context = createContext();

const Website = () => {
  const initialState = {
    currentQuestion: 1,
    answers: [],
    componentTree: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.answers, "le risposte");

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default Website;
