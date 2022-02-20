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
          documentazione: [],
        },
        {
          id: "I'm an Italian Citizen",
          label: "I'm an Italian Citizen",
          nextQuestion: 4,
          documentazione: [],
        },
        {
          id: "I am a EU citizen",
          label: "I'm a EU Citizen",
          nextQuestion: 3,
          documentazione: [],
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
          documentazione: [
            "copia del passaporto.*",
            "carta di soggiorno di familiare di cittadino dell'Unione, oppure ricevuta ella richiesta di rilascio di carta di soggiorno.*",
          ],
        },
        {
          id: "I have the Residence permit",
          label: "I've the Residence permit",
          nextQuestion: 4,
          documentazione: [
            "copia del passaporto o documento equipollente in corso di validità.* ",
            "copia del titolo di soggiorno in corso di validità.*",
            "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
        },
        {
          id: "I am renewing my Residence permit",
          label: "I'm renewing my Residence permi",
          nextQuestion: 4,
          documentazione: [
            "copia del passaporto o documento equipollente in corso di validità.* ",
            "copia del titolo di soggiorno scaduto.*",
            "ricevuta della richiesta di rinnovo del titolo di soggiorno.*",
            "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
        },
        {
          id: "I am Waiting for a work permit",
          label: "I am waiting for a residence permit",
          nextQuestion: 4,
          documentazione: [
            "copia del passaporto o documento equipollente in corso di validità.* ",
            "copia del contratto di soggiorno presso lo Sportello Unico per l immigrazione ;*",
            "ricevuta rilasciata dall ufficio postale attestante l avvenuta presentazione della richiesta dipermesso di soggiorno;*",
            "domanda di rilascio del permesso di soggiorno per lavoro subordinato presentata allo Sportello Unico*",
            "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
        },
        {
          id: "Awaiting family reunification",
          label: "Awaiting family reunification",
          nextQuestion: 4,
          documentazione: [
            "copia del passaporto o documento equipollente in corso di validità.* ",
            "fotocopia non autenticata del nulla osta rilasciato dallo Sportello unico;*",
            "ricevuta rilasciata dall ufficio postale attestante l avvenuta presentazione della richiesta dipermesso*;",
            "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
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
          id: "worker",
          label: "worker",
          nextQuestion: 4,
          documentazione: [
            "documento di identità.*",
            " documentazione comprovante la qualità di lavoratore.*",
            " copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
        },
        {
          id: "f.i",
          label: "Financially independent (no worker)",
          nextQuestion: 4,
          documentazione: [
            "copia di un documento di identità valido.*",
            "autodichiarazione del possesso di risorse economiche.*",
            " copia di un'assicurazione sanitaria.*",
            "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
          ],
        },
        {
          id: "student",
          label: "Student",
          documentazione: [
            "copia di un documento di identità valido.*",
            ") documentazione attestante l'iscrizione presso un istituto scolastico o di formazione professionale.*",
            "autodichiarazione del possesso di risorse economiche.*",
            " copertura dei rischi sanitari:*",
          ],
          nextQuestion: 4,
        },
        {
          id: "relative",
          label: "Relative of (woker, student ecc..)",
          documentazione: [
            "copia di un documento di identità valido.*",
            "copia degli atti originali di soggiorno.*",
          ],
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
          helperText: "Ex. Ghana, France, Russia",
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
          helperText: "Ex. Ghana, France, Russia",
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
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "select your gender",
          // add input validate
        },
        {
          id: "Stato Civile",
          label: "your marital status?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "select your status",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza",
          label: "Citizenship",
          type: "text",
          helperText: "Ex. French",
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
          type: "number",
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
          type: "number",
          helperText: "Ex. 1st",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Piano",
          label: "Floor",
          type: "number",
          helperText: "Ex. 2",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "Interno",
          label: "Unit",
          type: "number",
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
      nextQuestion: 41,
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
          label: "What's his/her name?",
          type: "text",
          helperText: "Ex. Moussa",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Cognome_6",
          label: "What's his/her surname",
          type: "text",
          helperText: "Ex. Semprini",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "Luogo",
          label: "Date of birth",
          type: "date",
          helperText: "DD/MM/YYYY",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Luogo di nascita_6",
          label: "Place of Birth",
          type: "text",
          helperText: "Indicate your city of birth",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia già residente",
          label: "Specify the family relationship",
          type: "text",
          helperText:
            "If there is any family relationship leave this field empty",
          isRequired: true,
          validate: "RequiredField",
        },
      ],
    },

    {
      type: "form",
      title: "Your contact",
      id: 22,
      parentId: 4,
      nextQuestion: 23,
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
    {
      type: "select",
      title: "To which category your home belongs?",
      label: "Select your Status",
      id: 23,

      answers: [
        {
          selected: false,
          id: "C9_1_5",
          label: "Free usage",
          nextQuestion: 25,
        },
        {
          selected: false,
          id: "C9_1_2",
          label: "Owned house",
          nextQuestion: 24,
        },
        {
          selected: false,
          id: "C9_1_3",
          label: "Rent",
          nextQuestion: 26,
        },
        {
          selected: false,
          id: "C9_1_4",
          label: "Public house",
          nextQuestion: 30,
        },
        {
          selected: false,
          id: "C9_1_6",
          label: "Usufructuary",
          nextQuestion: 27,
        },
      ],

      parentId: 9,
    },

    {
      type: "form",
      title: "Contract details",
      id: 24,
      parentId: 4,
      nextQuestion: 30,
      answers: [
        {
          id: "Sezione",
          label: "Section",
          type: "text",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
        {
          id: "foglio",
          label: "Sheet",
          type: "tel",
          helperText: "3332423421",
          validate: "",
          isRequired: false,
        },
        {
          id: "particella o mappale",
          label: "Partial or mappale",
          type: "text",
          validate: "requiredField",
          // add input validate
          isRequired: true,
        },
        {
          id: "subalterno",
          label: "Subaltern",
          type: "text",
          validate: "requiredField",
          isRequired: true,
        },
      ],
    },

    {
      type: "form",
      title: "Contract details",
      id: 26,
      parentId: 4,
      nextQuestion: 30,
      answers: [
        {
          id: "undefined_33",
          label: "Revenue Agency of",
          type: "text",
          helperText: "Ex. Palermo",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
        {
          id: "in data",
          label: "Date",
          type: "date",
          helperText: "DD/MM/YYYY",
          isRequired: true,
        },
        {
          id: "al n",
          label: "Number",
          type: "number",
          validate: "requiredField",
          // add input validate
          isRequired: true,
        },
      ],
    },

    {
      type: "form",
      title: "Contract details",
      id: 25,
      parentId: 4,
      nextQuestion: 30,
      answers: [
        {
          id: "Entrate di",
          label: "Revenue Agency of",
          type: "text",
          helperText: "Ex. Palermo",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
        {
          id: "in data_2",
          label: "Date",
          type: "date",
          helperText: "DD/MM/YYYY",
          isRequired: true,
        },
        {
          id: "al n_2",
          label: "Number",
          type: "number",
          validate: "requiredField",
          // add input validate
          isRequired: true,
        },
      ],
    },

    {
      type: "form",
      title: "Contract details",
      id: 26,
      parentId: 4,
      nextQuestion: 30,
      answers: [
        {
          id: "dati utili 1",
          label: "Write details",
          type: "text",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
      ],
    },
    // TARI
    {
      type: "checkbox",
      title: "Does someone already pay the TARI?",
      id: 30,
      answers: [
        {
          id: "yes",
          nextQuestion: 31,
        },
        {
          id: "no",
          nextQuestion: 32,
        },
      ],
    },

    {
      type: "form",
      title: "Contract details",
      id: 31,
      parentId: 4,
      nextQuestion: 32,
      answers: [
        {
          id: "che la tassa per il nuovo",
          label: "Nome e cognome",
          type: "text",
          validate: "requiredField",
          isRequired: true,
          autocomplete: false,
          // add input validate
        },
        {
          id: "F",
          label: "Codice Fiscale",
          type: "text",
          isRequired: true,
          validate: "fiscalCodeField",
        },
        {
          id: "Relazione_di_parentela",
          label: "Relative",
          type: "select",
          validate: "requiredField",
          // add input validate
          isRequired: true,
        },
      ],
    },
    // OVVERO CHIEDE LE SEGUENTI ISCRIZIONI TARI
    {
      type: "longform",
      title: "TARI subscription",
      id: 32,
      parentId: 4,
      nextQuestion: 33,
      answers: [
        {
          id: "foglio10",
          label: "Sheet (Foglio)",
          type: "text",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "particella10",
          label: "particella",
          type: "text",
          helperText: "Ex. 36",
          isRequired: true,
          validate: "RequiredField",
        },
        {
          id: "sub10",
          label: "subalterno",
          type: "text",
          helperText: "Ex. 1st",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "data",
          label: "Data fine occupazione",
          type: "date",
          isRequired: true,
          validate: "RequiredField",
          helperText: "Data fine occupazione",
        },
        {
          id: "superficie in mq",
          label: "surface in sq. m",
          type: "number",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
      ],
    },

    {
      type: "select",
      title: "Title of occupation",
      label: "Thanks for the patience",
      id: 33,

      answers: [
        {
          selected: false,
          id: "10_1_1",
          label: "Propriety",
          nextQuestion: 17,
        },
        {
          selected: false,
          id: "10_1_2",
          label: "Location",
          nextQuestion: 17,
        },
        {
          selected: false,
          id: "10_1_3",
          label: "loan for use",
          nextQuestion: 17,
        },
        {
          selected: false,
          id: "10_1_4",
          label: "usufruct",
          nextQuestion: 17,
        },
        {
          selected: false,
          id: "C9_1_6",
          label: "Housing assignment of a public body",
          nextQuestion: 17,
        },
      ],

      parentId: 9,
    },
  ],
};
export default choiceTree;
