import React from "react";

import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
} from "@chakra-ui/modal";

const CustomModal = (props) => {
  return (
    <>
      <Modal {...props} colorScheme="twitter">
        <ModalContent p="5">
          <ModalHeader>{props.header}</ModalHeader>
          <ModalCloseButton />
          {props.children}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CustomModal;
