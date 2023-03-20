import {useContext, useEffect} from "react";
import { Context } from "../../App";
import { Box, Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { useState } from "react";
import TreeHelper from "./treeHelper";
import { Image } from "@chakra-ui/react";
import People from "../asset/homepageimg.svg";
import CustomButton from "../custom/customInput/customButton";

const Main = ({ history }) => {
  const [isFormStarted, setIsFormStarted] = useState(false);
  const { state } = useContext(Context);



  const translateFirstHeading = () => {
    switch (state.language) {
      case "Italian":
        return "Benvenuto nel comune di Palermo";
      case "French":
        return "Bienvenue dans la Commune de Palerme";
      case "Spanish":
        return "Bienvenido al municipio de Palermo";
      case "Ukranian":
        return "Ласкаво просимо до Комуни ді Палермо";
      case "Arab":
        return "متواصلمرحبا بكم في بلدية باليرمو مكتب التسجيلمرحبا بكم في بلدية باليرمو مكتب التسجيل";
      case "Tamil":
        return "পালেরমো পৌরসভায় স্বাগতম নিবন্ধন অফিস";
      case "Bengali":
        return "চলতে থাকে";
      default:
        return "Welcome to the Comune di Palermo";
    }
  };

  const translateSecondHeading = () => {
    switch (state.language) {
      case "Italian":
        return "Servizio di anagrafe online";
      case "French":
        return "Bureau d'enregistrement";
      case "Spanish":
        return "Servicio de registro en línea";
      case "Ukranian":
        return "РАЦС";
      case "Arab":
        return "خدمة التسجيل";
      case "Tamil":
        return "பதிவு சேவை";
      case "Bengali":
        return "রেজিস্ট্রি পরিষেবা";
      default:
        return "Registry office";
    }
  };

  const translateText = () => {
    switch (state.language) {
      case "Italian":
        return "Tramite questo servizio, potrai compilare velocemente la richiesta di cambio residenza";
      case "French":
        return "Avec cet outil, vous pourrez remplir le dossier de demande de résidence";
      case "Spanish":
        return "Con esta herramienta, podrá rellenar la solicitud de residencia documento";
      case "Ukranian":
        return "За допомогою цього інструменту ви зможете заповнити заяву на проживання";
      case "Arab":
        return "باستخدام هذه الأداة ، ستتمكن من ملء وثيقة طلب الإقامة";
      case "Tamil":
        return "இந்த கருவி மூலம், நீங்கள் குடியிருப்பு விண்ணப்ப ஆவணத்தை நிரப்ப முடியும்";
      case "Bengali":
        return "এই টুলের সাহায্যে, আপনি আবাসিক আবেদনের নথি পূরণ করতে সক্ষম হবেন";
      default:
        return "With this tool, you will able to fill in the residence application document";
    }
  };

  const translateButton = () => {
    switch (state.language) {
      case "Italian":
        return "Iniziamo";
      case "French":
        return "Commençons";
      case "Spanish":
        return "comencemos";
      case "Ukranian":
        return "Давайте розпочнемо";
      case "Arab":
        return "لنبدأ";
      case "Tamil":
        return "ஆரம்பிக்கலாம்";
      case "Bengali":
        return "চল শুরু করি";
      default:
        return "Let's start";
    }
  };

  return (
      <Box bg="white" textAlign="center" minH="85vh">
        {!isFormStarted ? (
            <Box marginTop="20">
              <Text fontSize="2xl" fontWeight="extrabold" color="#000">
                {translateFirstHeading()}
              </Text>
              <Text
                  fontSize="2xl"
                  fontWeight="bold"
                  color="#000"
                  padding={{ base: 5, md: 0 }}
              >
                {translateSecondHeading()}
              </Text>
              <Text marginTop="5" color="#000" padding={{ base: 5, md: 0 }}>
                {translateText()}
              </Text>

              <CustomButton handler={() => setIsFormStarted(true)} state={state}>
                {translateButton()}
              </CustomButton>

              <Flex marginTop={10} justifyContent={"center"}>
                <Box w="825px" margin={18}>
                  <Image src={People} alt="logo comune" />
                </Box>
              </Flex>
            </Box>
        ) : (
            <TreeHelper history={history} />
        )}
      </Box>
  );
};

export default Main;
