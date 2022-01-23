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
          id: "I have the Residence permit",
          label: "Financially independent",
          nextQuestion: 4,
        },
        {
          id: "I am renewing my Residence permit",
          label: "F. independent (Temporary Residence)",
          nextQuestion: 4,
        },
        {
          id: "I am renewing my Residence permit",
          label: "Student",
          nextQuestion: 4,
        },
        {
          id: "I am renewing my Residence permit",
          label: "Student (Temporary Residence)",
          nextQuestion: 4,
        },
        {
          id: "I am renewing my Residence permit",
          label: "Relative of (woker, student ecc..)",
          nextQuestion: 4,
        },
      ],

      parentId: 9,
    },

    //    SE SEI CITTADINO ITALIANO
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
          id: "I am renewing my Residence permit",
          label: "Different city",
          nextQuestion: 6,
        },
        {
          id: "I am renewing my Residence permit",
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
      type: "form",
      title: "What city?",
      id: 6,
      parentId: 4,
      nextQuestion: 10,
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
      nextQuestion: 10,
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
      type: "form",
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
      id: 1,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
      ],

      parentId: 9,
    },

    //        CONDIZIONE NON PROFESSIONALE:

    {
      type: "select",
      title: "What's your Non-professional status?",
      label: "Select your Status",
      id: 1,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Housewife",
          nextQuestion: 2,
        },
      ],

      parentId: 9,
    },

    //        Titolo di studio:

    {
      type: "select",
      title: "What's your educational level?",
      label: "Select your Degree",
      id: 1,

      answers: [
        {
          selected: false,
          id: "1Casilinga",
          label: "Primary School",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "undefined_2",
          label: "Secondary School Certificate",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Diploma",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Bachelor",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Master Degree",
          nextQuestion: 2,
        },
        {
          selected: false,
          id: "1Casilinga",
          label: "Phd",
          nextQuestion: 2,
        },
      ],

      parentId: 9,
    },

    //    PATENTE

    {
      type: "checkbox",
      title: "Do you have an Italian Driving License?",
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

    {
      type: "form",
      title: "Your new residence",
      id: 9,
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
      type: "form",
      title: "Your new residence",
      id: 9,
      parentId: 4,
      nextQuestion: 10,
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
    {
      type: "number",
      title: "How many members will reside in the new apartment?",
      id: 10,
      nextQuestion: 13,
    },
    {
      type: "form",
      title: "Component",
      id: 9,
      parentId: 4,
      nextQuestion: 10,
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

    {
      type: "form",
      title: "Tell us who (just one component)",
      id: 9,
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
      id: 9,
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
          type: "number",
          helperText: "3332423421",
        },
        {
          id: "Email",
          label: "Email",
          type: "text",
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

  mappedPdf: {
    Prot: "",
    Data: "",
    "Indicare il comune di provenienza": "",
    "Indicare lo Stato estero di provenienza": "",
    "Dichiarazione di cambiamento di abitazione nellambito dello stesso comune":
      "",
    "Iscrizione per altro motivo specificare il": "",

    "Posizione nella professione se occupato": "",
    "1 Imprenditore Libero": "",
    "2 Dirigente": "",
    "3 Lavoratore in": "",
    "4 Operaio e": "",
    undefined: "",
    "5 Coadiuvante": "",
    "Condizione non professionale": "",
    "1Casilinga": "",
    undefined_2: "",
    "2 Studente": "",
    undefined_3: "",
    "3 Disoccupato in cerca di": "",
    "4 Pensionato": "",
    "5 Altra condizione": "",
    "Titolo di studio": "",
    "1 Nessun titolo": "",
    "2 Licenza": "",
    undefined_4: "",
    "4 Laurea": "",
    undefined_5: "",
    undefined_6: "",
    "3 Diploma": "",
    "5 Laurea": "",
    "6 Dottorato": "",
    "Patente tipo": "",
    Numero: "",
    "Data di rilascio": "",
    "Organo di rilascio": "",
    "Provincia di": "",
    Autoveicoli: "",
    Rimorchi: "",
    Motoveicoli: "",
    Ciclomotori: "",
    Cognome_2: "",
    Nome_2: "",
    "Data di nascita_2": "",
    "Luogo di nascita_2": "",
    Sesso_2: "",
    "Stato civile_2": "",
    Cittadinanza_2: "",
    "Codice Fiscale_2": "",
    "Rapporto di parentela con il richiedente": "",
    "Posizione nella professione se occupato_2": "",
    "1 Imprenditore Libero_2": "",
    "2 Dirigente_2": "",
    "3 Lavoratore in_2": "",
    "4 Operaio e_2": "",
    undefined_7: "",
    "5 Coadiuvante_2": "",
    "Condizione non professionale_2": "",
    "1Casilinga_2": "",
    undefined_8: "",
    "2 Studente_2": "",
    undefined_9: "",
    "3 Disoccupato in cerca di_2": "",
    "4 Pensionato_2": "",
    "5 Altra condizione_2": "",
    "Titolo di studio_2": "",
    "1 Nessun titolo_2": "",
    "2 Licenza_2": "",
    undefined_10: "",
    "4 Laurea_2": "",
    undefined_11: "",
    undefined_12: "",
    "3 Diploma_2": "",
    "5 Laurea_2": "",
    "6 Dottorato_2": "",
    "Patente tipo_2": "",
    Numero_2: "",
    "Data di rilascio_2": "",
    "Organo di rilascio_2": "",
    "Provincia di_2": "",
    Autoveicoli_2: "",
    Rimorchi_2: "",
    Motoveicoli_2: "",
    Ciclomotori_2: "",
    Cognome_3: "",
    Nome_3: "",
    "Data di nascita_3": "",
    "Luogo di nascita_3": "",
    Sesso_3: "",
    "Stato civile_3": "",
    Cittadinanza_3: "",
    "Codice Fiscale_3": "",
    "Rapporto di parentela con il richiedente_2": "",
    "Posizione nella professione se occupato_3": "",
    "1 Imprenditore Libero_3": "",
    "2 Dirigente_3": "",
    "3 Lavoratore in_3": "",
    "4 Operaio e_3": "",
    undefined_13: "",
    "5 Coadiuvante_3": "",
    "Condizione non professionale_3": "",
    "1Casilinga_3": "",
    undefined_14: "",
    "2 Studente_3": "",
    undefined_15: "",
    "3 Disoccupato in cerca di_3": "",
    "4 Pensionato_3": "",
    "5 Altra condizione_3": "",
    "Titolo di studio_3": "",
    "1 Nessun titolo_3": "",
    "2 Licenza_3": "",
    undefined_16: "",
    "4 Laurea_3": "",
    undefined_17: "",
    undefined_18: "",
    "3 Diploma_3": "",
    "5 Laurea_3": "",
    "6 Dottorato_3": "",
    "Patente tipo_3": "",
    Numero_3: "",
    "Data di rilascio_3": "",
    "Organo di rilascio_3": "",
    "Provincia di_3": "",
    Autoveicoli_3: "",
    Rimorchi_3: "",
    Motoveicoli_3: "",
    Ciclomotori_3: "",
    Cognome_4: "",
    Nome_4: "",
    "Data di nascita_4": "",
    "Luogo di nascita_4": "",
    Sesso_4: "",
    "Stato civile_4": "",
    Cittadinanza_4: "",
    "Codice Fiscale_4": "",
    "Rapporto di parentela con il richiedente_3": "",
    "Posizione nella professione se occupato_4": "",
    "1 Imprenditore Libero_4": "",
    "2 Dirigente_4": "",
    "3 Lavoratore in_4": "",
    "4 Operaio e_4": "",
    undefined_19: "",
    "5 Coadiuvante_4": "",
    "Condizione non professionale_4": "",
    "1Casilinga_4": "",
    undefined_20: "",
    "2 Studente_4": "",
    undefined_21: "",
    "3 Disoccupato in cerca di_4": "",
    "4 Pensionato_4": "",
    "5 Altra condizione_4": "",
    "Titolo di studio_4": "",
    "1 Nessun titolo_4": "",
    "2 Licenza_4": "",
    undefined_22: "",
    "4 Laurea_4": "",
    undefined_23: "",
    undefined_24: "",
    "3 Diploma_4": "",
    "5 Laurea_4": "",
    "6 Dottorato_4": "",
    "Patente tipo_4": "",
    Numero_4: "",

    "Data di rilascio_4": "",
    "Organo di rilascio_4": "",
    "Provincia di_4": "",
    Autoveicoli_4: "",
    Rimorchi_4: "",
    Motoveicoli_4: "",
    Ciclomotori_4: "",
    Cognome_5: "",
    Nome_5: "",
    "Data di nascita_5": "",
    "Luogo di nascita_5": "",
    Sesso_5: "",
    "Stato civile_5": "",
    Cittadinanza_5: "",
    "Codice Fiscale_5": "",
    "Rapporto di parentela con il richiedente_4": "",
    "Posizione nella professione se occupato_5": "",
    "1 Imprenditore Libero_5": "",
    "2 Dirigente_5": "",
    "3 Lavoratore in_5": "",
    "4 Operaio e_5": "",
    undefined_25: "",
    "5 Coadiuvante_5": "",
    "Condizione non professionale_5": "",
    "1Casilinga_5": "",
    undefined_26: "",
    "2 Studente_5": "",
    undefined_27: "",
    "3 Disoccupato in cerca di_5": "",
    "4 Pensionato_5": "",
    "5 Altra condizione_5": "",
    "Titolo di studio_5": "",
    "1 Nessun titolo_5": "",
    "2 Licenza_5": "",
    undefined_28: "",
    "4 Laurea_5": "",
    undefined_29: "",
    undefined_30: "",
    "3 Diploma_5": "",
    "5 Laurea_5": "",
    "6 Dottorato_5": "",
    "Patente tipo_5": "",
    Numero_5: "",
    "Data di rilascio_5": "",
    "Organo di rilascio_5": "",
    "Provincia di_5": "",
    Autoveicoli_5: "",
    Rimorchi_5: "",
    Motoveicoli_5: "",
    Ciclomotori_5: "",
    Cognome_6: "",
    Nome_6: "",
    Luogo: "",
    "Data di nascita_6": "",
    "Non sussistono rapporti di coniugio parentela affinità": "",
    undefined_31: "",
    "Sussiste il seguente vincolo rispetto al su indicato componente della famiglia già residente":
      "",
    "Si allegano i seguenti documenti 1": "",
    "Si allegano i seguenti documenti 2": "",
    "Si allegano i seguenti documenti 3": "",
    "Si allegano i seguenti documenti 4": "",
    Cellulare: "",
    emailPec: "",
    Data_2: "",
    undefined_32: "",
    "Cognome e nome": "",
    "Cognome e nome_2": "",
    "Cognome e nome_3": "",
    "Cognome e nome_4": "",
    "Firma per aggregazione": "",
    "Limpiegato responsabile": "",
    "1Cittadino in possesso di titolo di soggiorno in corso di validità": "",
    "2Cittadino in possesso di titolo di soggiorno in corso di rinnovo": "",
    "documentazione obbligatoria": "",
    "1 Cittadino lavoratore subordinato o autonomo 1": "",
    "1 Art 7 comma 3 dlgs n 302007": "",
    "3 Cittadino studente non lavoratore": "",
    "4 Familiare 2 UE di cittadino di cui ai punti precedenti": "",
    "Limite di reddito": "",
    "Numero componenti": "",
    "\xa0 557700": "",
    "Solo richiedente": "",
    "\xa0 836500": "",
    "Richiedente un familiare": "",
    "\xa0 1115400": "",
    "Richiedente due familiari": "",
    "\xa0 1394250": "",
    "Richiedente tre familiari": "",
    "\xa0 1673100": "",
    "Richiedente quattro familiari": "",
    "\xa0 1084980": "",
    "Richiedente due o minori di 14 anni": "",
    "\xa0 1356225": "",
    2: "",
    "documentazione obbligatoria_2": "",
    "5 del DL 28032014 n 47 convertito nella legge 2352014 n80 in caso di dichiarazione mendace liscrizione":
      "None",
    Sezione: "",
    foglio: "",
    "particella o mappale": "",
    subalterno: "",
    undefined_33: "",
    "in data": "",
    "al n": "",
    "Entrate di": "",
    "in data_2": "",
    "al n_2": "",
    "1_2": "",
    "2_3": "",
    "3_2": "",
    6: "",
    "1_3": "",
    "2_4": "",
    "3_3": "",
    "4_2": "",
    Cell: "",
    undefined_34: "",
    email: "",
    "Relazione di parentela": "",
    Interno_2: "",
    undefined_35: "",
    undefined_36: "",
    undefined_37: "",
    Interno_3: "",
    Sub: "",
    "Comodato duso": "",
    Usufrutto: "",
    "Assegnazione alloggio di un ente pubblico": "",
    "Altro diritto": "",
    "Superficie in Mq": "",
    "Data decorrenza occupazione giornomeseanno": "",
    undefined_38: "",
    undefined_39: "",
    Interno_4: "",
    Sub_2: "",
    "Comodato duso_2": false,
    "Altro diritto_2": "",
    Locazione: "",
    "Superficie in Mq_2": "",
    "Data decorrenza occupazione giornomeseanno_2": "",
    undefined_40: "",
    undefined_41: "",
    Via: "",
    undefined_42: "",
    Interno_5: "",
    Foglio: "",
    Particella: "",
    Sub_3: "",
    "Titolo di occupazione": false,
    "Causale cessazione": "",
    "Altro diritto_3": "",
    Vendita: "",
    "Locazione a terzi": "",
    "Fine Comodato duso": "",
    "Fine Usufrutto": "",
    "Fine Assegnazione alloggio di un ente pubblico": "",
    "Fine altro diritto": "",
    undefined_43: "",
    "Data fine occupazione giornomeseanno": "",
    undefined_44: "",
    undefined_45: "",
    CognomeDenominazione: "",

    Nome_7: "",
    "Codice Fiscale Partita IVA": "",
    "Luogo di nascita_6": "",
    undefined_46: "",
    "che il precedente immobile rimane nella propria disponibilità": "",
    "Fir ma del dichiarante": "",
    "Illa sottoscrittoa": "",
    "nato a": "",
    Data_3: "",
    il: "",
  },
};

export default choiceTree;
