/*
    starting point for the complex tree choice
*/

const choiceTree = {
  questions: [
    {
      type: "select",
      title: "What citizenship do you have?",
      label: "Select your Citizenship",
      id: 1,
      answer: [
        "I am a EU Citizens",
        "I am an Italian Citizen",
        "I am a non-EU citizen",
      ],
    },
    {
      type: "select",
      title: "What is your status?",
      label: "Select your Status",
      id: 2,
      answer: {
        1: "EU Citizen Relative",
        2: "I have the Residence permit",
        3: "I am renewing my Residence permit",
        4: "I am Waiting for a work permit",
        5: "Awaiting family reunification",
      },
      parentId: 1,
      choiceParentId: 3,
    },
  ],
};

export default choiceTree;
