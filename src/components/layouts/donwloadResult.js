/*
 *   entry point for the download component
 */
import React, { useState, useEffect, useContext } from "react";
import { Box, Spinner, Text } from "@chakra-ui/react";
import axios from "../../axios";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

const DownloadResult = () => {
  const navigate = useNavigate();

  const [result, setResult] = useState("");
  const { state } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);

  const startDownload = async () => {
    try {
      const headers = {
        headers: { "Access-Control-Allow-Origin": "*" },
      };
      const answ = state.answers;

      console.log(answ, "body");

      // do the fetch
      const data = await axios.post("create-pdf", answ, { headers });

      const resData = await data.data;

      if (resData) {
        console.log("lol");
        window.open(
          axios.defaults.baseURL + resData,
          "_blank" // <- This is what makes it open in a new window.
        );
      }
      setIsLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  console.log(axios.defaults.baseURL);

  useEffect(() => {
    startDownload();
  }, []);

  return (
    <Box>
      {isLoading ? (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      ) : (
        <Text>Your pdf is ready to be dowloaded!</Text>
      )}
    </Box>
  );
};

export default DownloadResult;
