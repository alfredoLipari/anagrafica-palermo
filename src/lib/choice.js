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
      controller: true,
      answers: [
        {
          id: "I am a non-EU citizen",
          label: "I'm a non-EU Citizen",
          nextQuestion: 22,
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
          nextQuestion: 5,
        },
        {
          id: "C1_1_4",
          label: "Same city",
          nextQuestion: 8,
        },
        {
          id: "C1_1_1",
          label: "Different city",
          nextQuestion: 6,
        },
        {
          id: "C_1_5",
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
          id: "Indicare il comune di provenienza",
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
          id: "Indicare lo Stato estero di provenienza",
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
          id: "c1_2_6",
          label: "Housewife",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "c1_2_7",
          label: "Student",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "c1_2_8",
          label: "Unemployed",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "c1_2_9",
          label: "Retired",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "c1_2_10",
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
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_5",
          label: "Family Worker",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_3",
          label: "Freelance / Entrepreneur",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_1",
          label: "Self-Employed",
          nextQuestion: 13,
        },
        {
          selected: false,
          id: "C1_2_2",
          label: "Executive / Employee",
          nextQuestion: 13,
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
          helperText: "Release Date",
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
          id: "C1_2_5",
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
          label: "Civic number",
          type: "text",
          helperText: "Ex. 36",
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
          // add input validate
        },
        {
          id: "Cellulare",
          label: "Mobile number",
          type: "tel",
          helperText: "3332423421",
        },
        {
          id: "emailPec",
          label: "Email/Pec",
          type: "email",
          helperText: "test@email.com",
          // add input validate
        },
        {
          id: "Fax",
          label: "Fax",
          type: "text",
          helperText: "091666555",
        },
      ],
    },
  ],
};
export default choiceTree;

/*


{
'Sussiste il seguente vincolo rispetto al su indicato componente della famiglia già residente': '',
'Si allegano i seguenti documenti 1': '',
'Si allegano i seguenti documenti 2': '',
'Si allegano i seguenti documenti 3': '',
'Si allegano i seguenti documenti 4': '',
'Cellulare': '',
'emailPec': '',
'Data_2': '',
'C4_1_1': '',
'C4_1_2': '',

'Sezione': '',
'foglio': '',
'particella o mappale': '',


'Cognome_6': '',
'Nome_6': '',
'Luogo': '',
'Data di nascita_6': '',

'subalterno': '',
'undefined_33': '',
'in data': '',
'al n': '',
'C9_1_1': '',
'C9_1_2': '',
'C9_1_3': '',
'C9_1_4': '',
'C9_1_5': '',
'C9_1_6': '',
'C9_1_7': '',

'Entrate di': '',
'in data_2': '',
'al n_2': '',

'dati utili 7': '',
'dati utili 6': '',
'dati utili 5': '',
'dati utili 4': '',
'dati utili 1': '',
'dati utili 2': '',
'dati utili 3': '',

'giorno': '',
'il sottoscritto': '',
'mese': '',
'cf': '',
'anno': '',
'telefono': '',
'Cell': '',
'email': '',
'che il precedente immobile rimane nella propria disponibilità': '',
'Illa sottoscrittoa': '',
'nato a': None,
'il': '',
'Data_3': ''}





*/
