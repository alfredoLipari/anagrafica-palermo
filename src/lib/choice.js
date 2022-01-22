/*
    starting point for the complex tree choice
*/

import { Input } from "@chakra-ui/react";

const choiceTree = {
  questions: [
    {
      type: "select",
      title: "What citizenship do you have?",
      label: "Select your Citizenship",
      id: 1,
      answers: [
        {
          id: 9,
          label: "I am a non-EU citizen",
        },
        {
          id: 3,
          label: "I am an Italian Citizen",
        },
        {
          id: 4,
          label: "I am a EU citizen",
        },
      ],
    },

    {
      type: "select",
      title: "What is your status?",
      label: "Select your Status",
      id: 2,

      answers: [
        {
          id: 4,
          label: "EU Citizen Relative",
        },
        {
          id: 5,
          label: "I have the Residence permit",
        },
        {
          id: 6,
          label: "I am renewing my Residence permit",
        },
        {
          id: 7,
          label: "I am Waiting for a work permit",
        },
        {
          id: 8,
          label: "Awaiting family reunification",
        },
      ],

      parentId: 1,
      choiceParentId: 3,
    },

    {
      type: "form",
      title: "What Country and what city?",
      id: 9,
      parentId: 4,
      answers: [
        {
          id: 10,
          label: "write your Country",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          // add input validate
        },
        {
          id: 11,
          label: "Write yout city",
          type: "text",
          helperText: "Ex. Turin, Milan, Pavia",
        },
      ],
    },
  ],
};

export default choiceTree;
