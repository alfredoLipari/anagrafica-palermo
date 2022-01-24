/*
 *   entry point for the download component
 */
import React, { useState, useEffect, useContext } from "react";
import { Box, Button, Spinner, Text } from "@chakra-ui/react";
import axios from "../../axios";
import { Context } from "../../App";
import Footer from "../footer";
import Navbar from "../navbar";

const DownloadResult = () => {
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
        setResult(resData);
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

  const retryDownload = () => {
    window.open(
      axios.defaults.baseURL + result,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  useEffect(() => {
    startDownload();
  }, []);

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
    >
      <Navbar />
      <Box h="65vh">
        {isLoading ? (
          <Box display="flex" flexDir="column" alignItems="center" mt="32">
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.400"
              size="xl"
              label="your pdf is loading..."
            />
            <Text mt="5" fontSize="xl">
              Your pdf is almost ready...
            </Text>
          </Box>
        ) : (
          <Box mt="20" display="flex" flexDir="column" alignItems="center">
            <Text fontSize="2xl">Your pdf is ready to be dowloaded!</Text>
            <Text fontSize="xl">
              <Text as="ins" onClick={() => retryDownload()}>
                Click here
              </Text>{" "}
              if the download didn't occur
            </Text>
            <Button
              color="white"
              bg="#0073E6"
              marginTop="5"
              w="50%"
              borderRadius="4"
              paddingY="6"
              mt="20"
            >
              Continue with booking
            </Button>
            <Button
              color="white"
              bg="#0073E6"
              marginTop="5"
              w="50%"
              borderRadius="4"
              paddingY="6"
              mt="10"
            >
              recompile the form
            </Button>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default DownloadResult;
