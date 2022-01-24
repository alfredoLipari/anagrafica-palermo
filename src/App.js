import React, { createContext, useReducer } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/layouts/homepage";
import Fonts from "./components/fonts";
import theme from "./lib/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reducer } from "./store/reducer/choiceReducer";
import DownloadResult from "./components/layouts/donwloadResult";

export const Context = createContext();

const Website = () => {
  const initialState = {
    currentQuestion: 1,
    answers: [],
    componentTree: [],
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log(state.answers, "risposte attuali");

  return (
    <Context.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <ChakraProvider theme={theme}>
          <Fonts />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/download-pdf" element={<DownloadResult />} />
          </Routes>
        </ChakraProvider>
      </BrowserRouter>
    </Context.Provider>
  );
};

export default Website;
