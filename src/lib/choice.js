/*
    starting point for the complex tree choice
    decalration of the properties:
    {
      id: Int, the id of the question, reachable by nextQuesiton prop
      type: String("select", "number", "form", "longform");
      title: String, the title of the question;
      label: String, if type select, the placeholder of the question;
      controller: Boolean, if true this question is not necessary to compile the form, only to decide which is the next question
      nextQuestion: Int
      answers: [
        {
          id: String, this id maps the question with the pdf,
          label: String, the label of the question,
          nextQuestion: Integer, in a select this determine the next question id in the tree choice,
          documentazione: "",
          type: String,  in a form determine the type of the input (es. text or date)
          helperText: String, the help message under the input,,
          autocomplete: Boolean, in a form if true show the Autosuggest component,
          required: Boolean, in a form if true the label will show an * to indicate that the field is required.
          validate: String, in a form this maps the input with a function validation declared in validation.js
        }
      ]
    }
*/

const choiceTree = {
  questions: [
    // DICHIARAZIONE DI RESIDENZA

    {
      type: "select",
      title: "What citizenship do you have?",
      label: "Select your Citizenship",
      id: 1,
      controller: true,
      answers: [
        {
          id: "I am a non-EU citizen",
          label: "I'm a non-EU Citizen",
          nextQuestion: 2,
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
      controller: true,
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
      controller: true,

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
          id: "C1_1_2",
          label: "Foreign Country",
          nextQuestion: 7,
          documents: "",
        },
        {
          id: "C1_1_3",
          label: "Italian AIRE",
          nextQuestion: 62,
        },
        {
          id: "C1_1_4",
          label: "Same city",
          nextQuestion: 8,
        },
        {
          id: "C1_1_1",
          label: "Different city",
          nextQuestion: 63,
        },
        {
          id: "C_1_5",
          label: "First Request",
          nextQuestion: 8,
        },
      ],

      parentId: 9,
    },

    // we need duplicate for different choices.
    {
      type: "form",
      title: "What Country?",
      id: 7,
      nextQuestion: 8,
      answers: [
        {
          id: "Indicare lo Stato estero di provenienza",
          label: "write your Country",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          autocomplete: true,
          // add input validate
        },
      ],
    },

    {
      type: "form",
      title: "What Country?",
      id: 62,
      nextQuestion: 63,
      answers: [
        {
          id: "Indicare lo Stato estero di provenienza",
          label: "Please write you country first",
          type: "text",
          helperText: "Ex. Ghane, France, Russia",
          autocomplete: true,
          // add input validate
        },
      ],
    },

    {
      type: "form",
      title: "What city?",
      id: 63,
      nextQuestion: 8,
      answers: [
        {
          id: "Indicare il comune di provenienza",
          label: "Write yout city",
          type: "text",
          helperText: "Ex. Turin, Milan, Pavia",
          autocomplete: true,
        },
      ],
    },

    ///

    //          IL SOTTOSCRITTO:

    {
      type: "longform",
      title: "Let's talk about you",
      id: 8,
      nextQuestion: 9,
      answers: [
        {
          id: "Nome",
          label: "What's your name?",
          type: "text",
          helperText: "Ex. Moussa",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome",
          label: "What's your surname",
          type: "text",
          helperText: "Ex. Semprini",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita",
          label: "Date of birth",
          type: "date",
          helperText: "DD/MM/YYYY",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita",
          label: "Where were you born?",
          type: "text",
          helperText: "Indicate your city of birth",
          autocomplete: true,
          isRequired: true,
        },
        {
          id: "Sesso",
          label: "Gender",
          type: "text",
          helperText: "Write M or F",
          validate: "gender",
          isRequired: true,
          // add input validate
        },
        {
          id: "Stato Civile",
          label: "Are you married?",
          type: "text",
          helperText: "write yes or no",
          validate: "statoCivile",
        },
        {
          id: "Cittadinanza",
          label: "Citizenship",
          type: "text",
          helperText: "Ex. Ghanian, Francaise, Russian...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale",
          label: "Codice Fiscale",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "fiscalCodeField",
          isRequired: true,
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
          nextQuestion: 12,
        },
        {
          id: "no",
          nextQuestion: 11,
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
          id: "C1_2_6",
          label: "Housewife",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_7",
          label: "Student",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_8",
          label: "Unemployed",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_9",
          label: "Retired",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_10",
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
          id: "C1_2_4",
          label: "Worker",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "C1_2_5",
          label: "Family Worker",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "C1_2_3",
          label: "Freelance / Entrepreneur",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "C1_2_1",
          label: "Self-Employed",
          nextQuestion: 14,
        },
        {
          selected: false,
          id: "C1_2_2",
          label: "Executive / Employee",
          nextQuestion: 14,
        },
      ],

      parentId: 9,
    },

    //        Titolo di studio:
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
          nextQuestion: 13,
        },
      ],
    },

    {
      type: "longform",
      title: "Driving License Details",
      id: 15,
      parentId: 4,
      nextQuestion: 13,
      answers: [
        {
          id: "Numero",
          label: "Number",
          type: "text",
          helperText: "Ex. 91828930",
          validate: "RequiredField",
          isRequired: false,
          // add input validate
        },
        {
          id: "Patente tipo",
          label: "License Type",
          type: "text",
          helperText: "Ex. A,B,C",
          //validate: "RequiredField",
          isRequired: false,
        },
        {
          id: "Data di rilascio",
          label: "Release Date",
          type: "Date",
          helperText: "Release Date",
          validate: "RequiredField",
          isRequired: false,
          // add input validate
        },
        {
          id: "Organo di rilascio",
          label: "Issuing body",
          type: "text",
          helperText: "Motorizzazione",
          validate: "RequiredField",
          isRequired: false,
        },
        {
          id: "Provincia di",
          label: "Province",
          type: "text",
          helperText: "Palermo",
          validate: "RequiredField",
          isRequired: false,
          // add input validate
        },
      ],
    },

    {
      type: "select",
      title: "What's your educational level?",
      label: "Select your Degree",
      id: 13,

      answers: [
        {
          selected: false,
          id: "C1_2_11",
          label: "Primary School",
          nextQuestion: 16,
        },
        {
          selected: false,
          id: "C1_2_12",
          label: "Secondary School Certificate",
          nextQuestion: 16,
        },
        {
          selected: false,
          id: "C1_2_13",
          label: "Diploma",
          nextQuestion: 16,
        },
        {
          selected: false,
          id: "C1_2_14",
          label: "Bachelor",
          nextQuestion: 16,
        },
        {
          selected: false,
          id: "C1_2_15",
          label: "Master Degree",
          nextQuestion: 16,
        },
        {
          selected: false,
          id: "C1_2_6",
          label: "Phd",
          nextQuestion: 16,
        },
      ],

      parentId: 9,
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
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Prov",
          label: "Province",
          type: "text",
          helperText: "Ex. Palermo",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "ViaPiazza",
          label: "Address",
          type: "text",
          helperText: "Via della libertà",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Numero civico",
          label: "Civic number",
          type: "text",
          helperText: "Ex. 36",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "Scala",
          label: "Stairs",
          type: "text",
          helperText: "Ex. 1st",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Piano",
          label: "Floor",
          type: "text",
          helperText: "Ex. 2",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "Interno",
          label: "Unit",
          type: "text",
          helperText: "Ex. A",
          isRequired: true,
          validate: "RequiredField",
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
          nextQuestion: 19,
        },
        {
          id: "no",
          nextQuestion: 18,
        },
      ],
    },
    {
      type: "number",
      title: "How many people beside you?",
      id: 18,
      nextQuestion: 31,
    },

    //  CHE NELL'ABITAZIONE SITA AL NUOVO INDIRZZO SONO GIA' ISCRITTE LE SEGUENTI PERSONE

    {
      type: "checkbox",
      title: "Does anyone already reside in the property?",
      id: 19,
      answers: [
        {
          id: "yes",
          nextQuestion: 21,
        },
        {
          id: "no",
          nextQuestion: 22,
        },
      ],
    },

    {
      type: "longform",
      title: "Tell us who (just one component)",
      id: 21,
      parentId: 4,
      nextQuestion: 22,
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
      id: 22,
      parentId: 4,
      nextQuestion: 1,
      answers: [
        {
          id: "Telefono",
          label: "Phone number",
          type: "number",
          helperText: "091665442",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
        {
          id: "Cellulare",
          label: "Mobile number",
          type: "tel",
          helperText: "3332423421",
          validate: "",
          isRequired: false,
        },
        {
          id: "emailPec",
          label: "Email/Pec",
          type: "email",
          helperText: "test@email.com",
          validate: "requiredField",
          // add input validate
          isRequired: true,
        },
        {
          id: "Fax",
          label: "Fax",
          type: "text",
          helperText: "091666555",
          validate: "",
          isRequired: false,
        },
      ],
    },
  ],
};
export default choiceTree;
