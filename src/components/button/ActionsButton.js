import React from "react";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Box, Button, useDisclosure,
} from "@chakra-ui/react";
import CustomButton from "../custom/customInput/customButton";

const ActionsButton = (props) => {
  const {
    stateQuestionId,
    goBackButtonHandler,
    continueButtonHandler,
    colorSchemeContinueButton,
    colorSchemeBackButton,
    continueSubmit,
    state,
  } = props;

  const cancelRef = React.useRef()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const translateContinueButton = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Continua";
      case "French":
        return "Continuez";
      case "Spanish":
        return "continuar";
      case "Ukranian":
        return "Продовжуйте";
      case "Arab":
        return "متواصل";
      case "Tamil":
        return "தொடர்கிறது";
      case "Bengali":
        return "চলতে থাকে";
      default:
        return "Continue";
    }
  };

  const translateButtonBack = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Torna indietro";
      case "French":
        return "Revenir";
      case "Spanish":
        return "Regresar";
      case "Повертатися":
        return "Продовжуйте";
      case "Tamil":
        return "திரும்பி வா";
      case "Arab":
        return "عد‎";
      case "Bengali":
        return "আরবি";
      default:
        return "Go back";
    }
  };

  const translateCloseButton = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Chiudi";
      case "French":
        return "Fermez";
      case "Spanish":
        return "Cerca";
      case "Повертатися":
        return "Закрити";
      case "Tamil":
        return "நெருக்கமான";
      case "Arab":
        return "يغلق";
      case "Bengali":
        return "বন্ধ";
      default:
        return "Close";
    }
  };

  const translateAlertLabel = () => {
    switch (props?.state.language) {
      case "Italian":
        return "Sei sicuro di voler andare indietro? Perderai i dati di questa pagina";
      case "French":
        return "Êtes-vous sûr de vouloir revenir en arrièr? Vous perdrez les données de cette page";
      case "Spanish":
        return "Êtes-vous sûr de vouloir revenir en arrière? Vous perdrez les données de cette page";
      case "Повертатися":
        return "Ви впевнені, що хочете повернутися? Ви втратите дані на цій сторінці";
      case "Tamil":
        return "நீங்கள் நிச்சயமாக திரும்பிச் செல்ல விரும்புகிறீர்களா? இந்தப் பக்கத்தில் உள்ள தரவை இழப்பீர்கள்";
      case "Arab":
        return "هل أنت متأكد أنك تريد العودة؟ ستفقد البيانات الموجودة في هذه الصفحة";
      case "Bengali":
        return "আপনি কি নিশ্চিত আপনি ফিরে যেতে চান? আপনি এই পৃষ্ঠার ডেটা হারাবেন";
      default:
        return "Are you sure you want to go back? You will lose the data on this page";
    }
  };


  return (
    <>
      <Box
        display={"flex"}
        flexDir={
          props?.state.language !== "Arab"
            ? {
                lg: "row-reverse",
                md: "column",
                sm: "column",
                base: "column",
              }
            : {
                lg: "row",
                md: "column-reverse",
                sm: "column-reverse",
                base: "column-reverse",
              }
        }
        alignItems={"center"}
        width={"100%"}
        justifyContent={"center"}
        gap={10}
        marginBottom={"40px"}
      >
        <CustomButton
          submit={continueSubmit}
          handler={continueButtonHandler ? continueButtonHandler : null}
          state={state}
          colorScheme={colorSchemeContinueButton}
        >
          {translateContinueButton()}
        </CustomButton>

        {stateQuestionId !== 1 && (
          <CustomButton
            handler={onOpen}
            state={state}
            colorScheme={colorSchemeBackButton}
          >
            {translateButtonBack()}
          </CustomButton>
        )}
      </Box>
      <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              {translateButtonBack()}
            </AlertDialogHeader>

            <AlertDialogBody>
              {translateAlertLabel()}
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                {translateCloseButton()}
              </Button>
              <Button colorScheme='red' onClick={()=> {
                goBackButtonHandler()
                onClose()
              }} ml={3}>
                {translateButtonBack()}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default ActionsButton;
