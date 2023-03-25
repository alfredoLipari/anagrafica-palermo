/*
 *   entry point for the download component
 */
import React, { useState, useEffect, useContext, useCallback } from "react";
import {
  Box,
  Button,
  Spinner,
  Text,
  Flex,
  Tooltip,
  List,
  ListItem,
  ListIcon,
  Link,
} from "@chakra-ui/react";
import axios from "../../axios";
import { Context } from "../../App";
import Footer from "../footer";
import Navbar from "../navbar";
import CustomModal from "../custom/customModal";
import { CheckCircleIcon } from "@chakra-ui/icons";

const DownloadResult = () => {
  const [result, setResult] = useState("");
  const { state } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const startDownload = useCallback(async () => {
    try {
      const answ = state.answers;

      // do the fetch
      const data = await axios.post("create-pdf", answ);

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
      return e
    }
  }, [state.answers]);

  const retryDownload = () => {
    window.open(
      axios.defaults.baseURL + result,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  useEffect(() => {
    startDownload();
  }, [startDownload]);

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
              </Text>
              &nbsp;if the download didn't occur
            </Text>
            <Tooltip label="Coming soon !" hasArrow placement="top">
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
            </Tooltip>
            <Link href="/" style={{ textDecoration: "none" }}>
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
            </Link>
            <Tooltip
              colorScheme="twitter"
              aria-label="important documents"
              hasArrow
              label="important documents"
              placement="top"
            >
              <Button
                colorScheme="blue"
                variant="outline"
                marginTop="5"
                w="50%"
                borderRadius="4"
                paddingY="6"
                mt="10"
                onClick={() => setIsModalOpen(true)}
              >
                Check documentation
              </Button>
            </Tooltip>
            <CustomModal
              isCentered
              header={"You need to bring this documentation with you"}
              blockScrollOnMount={false}
              size="xl"
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
            >
              <Flex alignItems="center" justifyContent="space-between">
                <List spacing={5}>
                  {state.documents?.map((document) => (
                    <ListItem>
                      <ListIcon as={CheckCircleIcon} color="#0073E6" />
                      {document}
                    </ListItem>
                  ))}
                </List>
              </Flex>
            </CustomModal>
          </Box>
        )}
      </Box>
      <Footer />
    </Box>
  );
};

export default DownloadResult;
