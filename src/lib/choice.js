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
      answers: [
        {
          id: "I am a non-EU citizen",
          nextQuestion: 9,
        },
        {
          id: "I am an Italian Citizen",
          nextQuestion: 2,
        },
        {
          id: "I am a EU citizen",
          nextQuestion: 3,
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
          id: "EU Citizen Relative",
          nextQuestion: 2,
        },
        {
          id: "I have the Residence permit",
          nextQuestion: 9,
        },
        {
          id: "I am renewing my Residence permit",
          nextQuestion: 2,
        },
        {
          id: "I am Waiting for a work permit",
          nextQuestion: 2,
        },
        {
          id: "Awaiting family reunification",
          nextQuestion: 2,
        },
      ],

      parentId: 1,
      choiceParentId: 3,
    },

    {
      type: "select",
      title: "ok?",
      label: "Select your Status",
      id: 3,

      answers: [
        {
          id: "EU Citizen Relative",
          nextQuestion: 2,
        },
        {
          id: "I have the Residence permit",
          nextQuestion: 2,
        },
        {
          id: "I am renewing my Residence permit",
          nextQuestion: 2,
        },
      ],

      parentId: 9,
      choiceParentId: 3,
    },

    {
      type: "form",
      title: "What Country and what city?",
      id: 9,
      parentId: 4,
      nextQuestion: 10,
      answers: [
        {
          id: "country",
          label: "write your Country",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          // add input validate
        },
        {
          id: "city",
          label: "Write yout city",
          type: "text",
          helperText: "Ex. Turin, Milan, Pavia",
        },
      ],
    },
    {
      type: "checkbox",
      title: "Do you have a job?",
      id: 10,
      answers: [
        {
          id: "yes",
          nextQuestion: 11,
        },
        {
          id: "no",
          nextQuestion: 12,
        },
      ],
    },
  ],
};

export default choiceTree;
