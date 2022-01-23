/*
    starting point for the complex tree choice
*/

const choiceTree = {
  questions: [
    // DICHIARAZIONE DI RESIDENZA

    {
      type: "select",
      title: "What citizenship do you have?",
      label: "Select your Citizenship",
      id: 1,
      answers: [
        {
          id: "I am a non-EU citizen",
          label: "I'm a non-EU Citizen",
          nextQuestion: 9,
        },
        {
          id: "controller",
          label: "I'm an Italian Citizen",
          nextQuestion: 4,
        },
        {
          id: "I am a EU citizen",
          label: "I'm a EU Citizen",
          nextQuestion: 3,
        },
      ],
    },

    // Se cittadino estero fuori dall'unione europe, mettere la documentazione

    {
      type: "select",
      title: "What is your status?",
      label: "Select your Status",
      id: 2,

      answers: [
        {
          id: "EU Citizen Relative",
          label: "EU Citizen Relative",
          nextQuestion: 4,
          documentazione: "ok", // mettere la documentazione utile
        },
        {
          id: "I have the Residence permit",
          label: "I've the Residence permit",
          nextQuestion: 4,
        },
        {
          id: "I am renewing my Residence permit",
          label: "I'm renewing my Residence permi",
          nextQuestion: 4,
        },
        {
          id: "I am Waiting for a work permit",
          label: "I am waiting for a work permit",
          nextQuestion: 4,
        },
        {
          id: "Awaiting family reunification",
          label: "Awaiting family reunification",
          nextQuestion: 4,
        },
      ],

      parentId: 1,
    },

    // se cittadino dell'unione europea, mettere la documentazione necessaria

    {
      type: "select",
      title: "What is your status?",
      label: "Select your Status",
      id: 3,

      answers: [
        {
          id: "EU Citizen Relative",
          label: "worker",
          nextQuestion: 4,
          documents: "",
        },
        {
          id: "mh",
          label: "Financially independent",
          nextQuestion: 4,
        },
        {
          id: "mhhh",
          label: "F. independent (Temporary Residence)",
          nextQuestion: 4,
        },
        {
          id: "St",
          label: "Student",
          nextQuestion: 4,
        },
        {
          id: "STO",
          label: "Student (Temporary Residence)",
          nextQuestion: 4,
        },
        {
          id: "OKOKO",
          label: "Relative of (woker, student ecc..)",
          nextQuestion: 4,
        },
      ],

      parentId: 9,
    },

    //
    {
      type: "select",
      title: "Where are you moving from?",
      label: "Select your Citizenship",
      id: 4,

      answers: [
        {
          id: "Foreign Country",
          label: "Foreign Country",
          nextQuestion: 7,
          documents: "",
        },
        {
          id: "Italian",
          label: "Italian AIRE",
          nextQuestion: 5,
        },
        {
          id: "Same city",
          label: "Same city",
          nextQuestion: 8,
        },
        {
          id: "sanjals",
          label: "Different city",
          nextQuestion: 6,
        },
        {
          id: "sanjansjla",
          label: "First Request",
          nextQuestion: 8,
        },
      ],

      parentId: 9,
    },

    {
      type: "form",
      title: "What Country and what city?",
      id: 5,
      parentId: 4,
      nextQuestion: 8,
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
      type: "form",
      title: "What city?",
      id: 6,
      parentId: 4,
      nextQuestion: 8,
      answers: [
        {
          id: "city",
          label: "Write yout city",
          type: "text",
          helperText: "Ex. Turin, Milan, Pavia",
        },
      ],
    },
    {
      type: "form",
      title: "What Country?",
      id: 7,
      parentId: 4,
      nextQuestion: 8,
      answers: [
        {
          id: "country",
          label: "write your Country",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          // add input validate
        },
      ],
    },

    ///

    //          IL SOTTOSCRITTO:

    {
      type: "longform",
      title: "Let's talk about you",
      id: 8,
      parentId: 4,
      nextQuestion: 9,
      answers: [
        {
          id: "Nome",
          label: "What's your name?",
          type: "text",
          helperText: "Ex. Moussa",
          // add input validate
        },
        {
          id: "Cognome",
          label: "What's your surname",
          type: "text",
          helperText: "Ex. Semprini",
        },
        {
          id: "Data di nascita",
          label: "Date of birth",
          type: "date",
          helperText: "DD/MM/YYYY",
          // add input validate
        },
        {
          id: "Luogo di nascita",
          label: "Where were you born?",
          type: "text",
          helperText: "Indicate your city of birth",
        },
        {
          id: "Sesso",
          label: "Gender",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          // add input validate
        },
        {
          id: "Stato Civile",
          label: "Are you married?",
          type: "text",
          helperText: "write yes or no",
        },
        {
          id: "Cittadinanza",
          label: "Citizenship",
          type: "text",
          helperText: "Ex. Ghanian, Francaise, Russian...",
          // add input validate
        },
        {
          id: "Codice Fiscale",
          label: "Codice Fiscale",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          // add input validate
        },
      ],
    },

    {
      type: "checkbox",
      title: "Do you have a job?",
      id: 9,
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

    //          Posizione nella professione se occupato:

    {
      type: "select",
      title: "What's your Non-professional status?",
      label: "Select your Status",
      id: 11,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Student",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Unemployed",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Retired",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Other",
          nextQuestion: 13,
        },
      ],

      parentId: 9,
    },

    //        CONDIZIONE NON PROFESSIONALE:

    {
      type: "select",
      title: "What's your professional status?",
      label: "Select your Status",
      id: 12,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Worker",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Family Worker",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Freelance / Entrepreneur",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Self-Employed",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Executive / Employee",
          nextQuestion: 13,
        },
      ],

      parentId: 9,
    },

    //        Titolo di studio:

    {
      type: "select",
      title: "What's your educational level?",
      label: "Select your Degree",
      id: 13,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Primary School",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Secondary School Certificate",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Diploma",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Bachelor",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Master Degree",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Phd",
          nextQuestion: 14,
        },
      ],

      parentId: 9,
    },

    //    PATENTE

    {
      type: "checkbox",
      title: "Do you have an Italian Driving License?",
      id: 14,
      answers: [
        {
          id: "yes",
          nextQuestion: 15,
        },
        {
          id: "no",
          nextQuestion: 16,
        },
      ],
    },

    {
      type: "longform",
      title: "Driving License Details",
      id: 15,
      parentId: 4,
      nextQuestion: 10,
      answers: [
        {
          id: "Numero",
          label: "Number",
          type: "text",
          helperText: "Ex. 91828930",
          // add input validate
        },
        {
          id: "Patente tipo",
          label: "License Type",
          type: "text",
          helperText: "Ex. A,B,C",
        },
        {
          id: "Data di rilascio",
          label: "Release Date",
          type: "Date",
          helperText: "DD/MM/YYYY",
          // add input validate
        },
        {
          id: "Organo di rilascio",
          label: "Issuing body",
          type: "text",
          helperText: "Motorizzazione",
        },
        {
          id: "Provincia di",
          label: "Province",
          type: "text",
          helperText: "Palermo",
          // add input validate
        },
      ],
    },

    //////////////////////////////////////////////////////////////////77
    //            Dichiara
    {
      type: "longform",
      title: "Your new residence",
      id: 16,
      parentId: 4,
      nextQuestion: 17,
      answers: [
        {
          id: "Comune",
          label: "City",
          type: "text",
          helperText: "Ex. Palermo",
          // add input validate
        },
        {
          id: "Prov",
          label: "Province",
          type: "text",
          helperText: "Ex. Palermo",
        },
        {
          id: "ViaPiazza",
          label: "Address",
          type: "text",
          helperText: "Via della libertà",
          // add input validate
        },
        {
          id: "Numero civico",
          label: "Ex 36",
          type: "text",
          helperText: "Indicate your city of birth",
        },
        {
          id: "Scala",
          label: "Stairs",
          type: "text",
          helperText: "Ex. 1st",
          // add input validate
        },
        {
          id: "Piano",
          label: "Floor",
          type: "text",
          helperText: "Ex. 2",
        },
        {
          id: "Interno",
          label: "Unit",
          type: "text",
          helperText: "Ex. A",
          // add input validate
        },
      ],
    },

    {
      type: "checkbox",
      title: "Are you moving alone?",
      id: 17,
      answers: [
        {
          id: "yes",
          nextQuestion: 18,
        },
        {
          id: "no",
          nextQuestion: 19,
        },
      ],
    },
    {
      type: "number",
      title: "How many members will reside in the new apartment?",
      id: 18,
      nextQuestion: 13,
    },
    {
      type: "longform",
      title: "Component",
      id: 9,
      parentId: 4,
      nextQuestion: 19,
      answers: [
        {
          id: "Nome",
          label: "What's your name?",
          type: "text",
          helperText: "Ex. Moussa",
          // add input validate
        },
        {
          id: "Cognome",
          label: "What's your surname",
          type: "text",
          helperText: "Ex. Semprini",
        },
        {
          id: "Data di nascita",
          label: "Date of birth",
          type: "date",
          helperText: "DD/MM/YYYY",
          // add input validate
        },
        {
          id: "Luogo di nascita",
          label: "Where were you born?",
          type: "text",
          helperText: "Indicate your city of birth",
        },
        {
          id: "Sesso",
          label: "Gender",
          type: "select",
          helperText: "Ex. Ghane, France, Russia",
          // add input validate
        },
        {
          id: "Stato Civile",
          label: "Are you married?",
          type: "checkbox",
          helperText: "",
        },
        {
          id: "Cittadinanza",
          label: "Citizenship",
          type: "text",
          helperText: "Ex. Ghanian, Francaise, Russian...",
          // add input validate
        },
        {
          id: "Codice Fiscale",
          label: "Codice Fiscale",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente",
          label: "Relation to the applicant",
          type: "text",
          helperText: "Ex. Wife, Son",
          // add input validate
        },
      ],
    },

    //  CHE NELL'ABITAZIONE SITA AL NUOVO INDIRZZO SONO GIA' ISCRITTE LE SEGUENTI PERSONE

    {
      type: "checkbox",
      title: "Does anyone already reside in the property?",
      id: 19,
      answers: [
        {
          id: "yes",
          nextQuestion: 20,
        },
        {
          id: "no",
          nextQuestion: 21,
        },
      ],
    },

    {
      type: "longform",
      title: "Tell us who (just one component)",
      id: 21,
      parentId: 4,
      nextQuestion: 10,
      answers: [
        {
          id: "Nome_6",
          label: "What's your name?",
          type: "text",
          helperText: "Ex. Moussa",
          // add input validate
        },
        {
          id: "Cognome_6",
          label: "What's your surname",
          type: "text",
          helperText: "Ex. Semprini",
        },
        {
          id: "Luogo",
          label: "Date of birth",
          type: "date",
          helperText: "DD/MM/YYYY",
          // add input validate
        },
        {
          id: "Luogo di nascita",
          label: "Place of Birth",
          type: "text",
          helperText: "Indicate your city of birth",
        },
        {
          id: "Relative",
          label: "Is your realtive?",
          type: "checkbox",
          helperText: "",
        },
      ],
    },

    {
      type: "form",
      title: "Your contact",
      id: 21,
      parentId: 4,
      nextQuestion: 10,
      answers: [
        {
          id: "Nome_6",
          label: "Phone number",
          type: "number",
          helperText: "091665442",
          // add input validate
        },
        {
          id: "Cognome_6",
          label: "Mobile number",
          type: "tel",
          helperText: "3332423421",
        },
        {
          id: "Email",
          label: "Email",
          type: "email",
          helperText: "test@email.com",
          // add input validate
        },
        {
          id: "Luogo di nascita",
          label: "Fax",
          type: "text",
          helperText: "091666555",
        },
      ],
    },
  ],
};
export default choiceTree;
