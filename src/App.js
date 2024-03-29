import React, {createContext, useEffect, useReducer} from "react";
import { ChakraProvider } from "@chakra-ui/react";
import HomePage from "./components/layouts/homepage";
import Fonts from "./components/fonts";
import theme from "./lib/theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { reducer } from "./store/reducer/choiceReducer";
import DownloadResult from "./components/layouts/donwloadResult";
import Footer from "./components/footer";

export const Context = createContext();
export let Language = "";
const Website = () => {
  const initialState = {
    currentQuestion: 1,
    answers: [],
    documents: [],
    language: "English",
    questionHistory: [1],
    familyName: "",
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  console.log("answer", state.answers)

  useEffect(() => {
    Language = state.language
  }, [state])



  return (
      <Context.Provider value={{ state, dispatch }}>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <Fonts />
            <Routes>
              <Route path="/" element={<HomePage history={state}/>} />
              <Route path="/download-pdf" element={<DownloadResult />} />
            </Routes>
          </ChakraProvider>
        </BrowserRouter>
      </Context.Provider>
  );
};

export default Website;
