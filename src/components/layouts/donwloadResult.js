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
import {
  clickHereTranslations,
  continueWithBookingTranslation,
  downloadDontOccurTranslation,
  pdfReadyTranslations,
  recompileFormTranslations,
} from "../../lib/familyComponents";

const DownloadResult = () => {
  const [result, setResult] = useState("");
  const { state } = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);

  const translateLoadingText = (state) => {
    switch (state?.language) {
      case "Italian":
        return "Il tuo pdf è quasi pronto... Ricordati di firmare la documentazione!";
      case "French":
        return "Votre pdf est presque prêt... N'oubliez pas de signer les documentations !";
      case "Spanish":
        return "Tu pdf está casi listo... ¡Recuerda firmar la documentación!";
      case "Повертатися":
        return "Ваш pdf майже готовий... Не забудьте підписати документи!";
      case "Tamil":
        return "உங்கள் pdf கிட்டத்தட்ட தயாராகிவிட்டது... ஆவணங்களில் கையொப்பமிட மறக்காதீர்கள்!";
      case "Arab":
        return "ملف pdf جاهز تقريبًا ... تذكر التوقيع على المستندات!";
      case "Bengali":
        return "আপনার পিডিএফ প্রায় প্রস্তুত... ডকুমেন্টেশনে স্বাক্ষর করতে মনে রাখবেন!";
      default:
        return "Your pdf is almost ready... Remember to sign the documentations!";
    }
  };

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
      return e;
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
              {translateLoadingText(state)}
            </Text>
          </Box>
        ) : (
          <Box mt="20" display="flex" flexDir="column" alignItems="center">
            <Text fontSize="2xl">{pdfReadyTranslations(state)}</Text>
            <Text fontSize="xl">
              <Text as="ins" onClick={() => retryDownload()}>
                {clickHereTranslations(state)}
              </Text>
              &nbsp;{downloadDontOccurTranslation(state)}
            </Text>
            <Tooltip label="Coming soon !" hasArrow placement="top">
              <Button
                color="white"
                bg="#0073E6"
                marginTop="5"
                borderRadius="4"
                padding="6"
                mt="20"
              >
                {continueWithBookingTranslation(state)}
              </Button>
            </Tooltip>
            <Link href="/" style={{ textDecoration: "none" }}>
              <Button
                color="white"
                bg="#0073E6"
                marginTop="5"
                borderRadius="4"
                paddingY="6"
                mt="10"
              >
                {recompileFormTranslations(state)}
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
