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
  language: {
    English: {
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
              documentazione: [
                "identity document of the applicant and of the persons transferring residence together with the applicant",
                "remember to sign the document",
              ],
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
                "copy of your passport.*",
                "residence card of a family member of an EU citizen, or receipt of the application for the issuance of a residence card.*",
                "remember to sign the document",
              ],
            },
            {
              id: "I have the Residence permit",
              label: "I've the Residence permit",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid passport or equivalent document.* ",
                "copy of valid residence permit.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label: "I'm renewing my Residence permi",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid passport or equivalent document.* ",
                "copy of expired residence permit.*",
                "receipt of application for renewal of residence permit.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label: "I am waiting for a residence permit",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid passport or equivalent document.* ",
                "copy of the residence contract at the Sportello Unico per l'immigrazione *",
                "receipt issued by the post office certifying the submission of the application for residence permit.*",
                "application for the issuance of a residence permit for subordinate work submitted to the Sportello Unico.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "Awaiting family reunification",
              label: "Awaiting family reunification",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid passport or equivalent document.* ",
                "unauthenticated photocopy of the clearance issued by the Single Desk.*",
                "receipt issued by the post office certifying the submission of the request for permission.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
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
                "documentation proving the quality of worker.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "f.i",
              label: "Financially independent (no worker)",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid ID.*",
                "autodichiarazione del possesso di risorse economiche.*",
                " copia di un'assicurazione sanitaria.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "student",
              label: "Student",
              documentazione: [
                "copy of a valid identification document.*",
                "documentation proving enrollment at a school or vocational training institution.*",
                "self-declaration of possession of economic resources.*",
                "coverage of health risks.*",
                "remember to sign the document",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label: "Relative of (woker, student ecc..)",
              documentazione: [
                "copy of a valid identification document.*",
                "copy of original deeds of residence.*",
                "remember to sign the document",
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
              type: "autocomplete",
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
              helperText: "Date of birth",
              validate: "dateValidation",
              isRequired: true,
              // add input validate
            },
            {
              id: "Luogo di nascita",
              label: "Where were you born?",
              type: "autocomplete",
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
              helperText: "Indicate his/her city of birth",
              isRequired: true,
              validate: "RequiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia già residente",
              label: "Specify the family relationship",
              type: "select",
              options: [
                "none",
                "mother",
                "father",
                "son",
                "daughter",
                "brother",
                "sister",
                "grandfather",
                "grandmother",
                "uncle",
                "aunt",
                "cousin",
              ],
              helperText: "Select none if there is any",
              isRequired: false,
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
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
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
    },
    Italian: {
      questions: [
        {
          type: "select",
          title: "Che cittadinanza ha?",
          label: "Seleziona la tua Cittadinanza",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label: "Sono un cittadino extracomunitario",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label: "Sono un cittadino italiano",
              nextQuestion: 4,
              documentazione: [
                "documento d'identità del richiedente e delle persone che trasferiscono la residenza insieme al richiedente",
                "ricordarsi di firmare il documento",
              ],
            },
            {
              id: "I am a EU citizen",
              label: "Sono un cittadino dell'UE",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title: "Qual \u00e8 il suo stato?",
          label: "Seleziona il tuo stato",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label: "Parente di cittadino UE",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto.*",
                "carta di soggiorno di familiare di cittadino dell'Unione, oppure ricevuta ella richiesta di rilascio di carta di soggiorno.*",
              ],
            },
            {
              id: "I have the Residence permit",
              label: "Ho il permesso di soggiorno",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto o documento equipollente in corso di validit\u00c3\u00a0.* ",
                "copia del titolo di soggiorno in corso di validit\u00c3\u00a0.*",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label: "Sto rinnovando il mio Residence permi",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto o documento equipollente in corso di validit\u00c3\u00a0.* ",
                "copia del titolo di soggiorno scaduto.*",
                "ricevuta della richiesta di rinnovo del titolo di soggiorno.*",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label: "Sono in attesa di un permesso di soggiorno",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto o documento equipollente in corso di validit\u00c3\u00a0.* ",
                "copia del contratto di soggiorno presso lo Sportello Unico per l immigrazione ;*",
                "ricevuta rilasciata dall ufficio postale attestante l avvenuta presentazione della richiesta dipermesso di soggiorno;*",
                "domanda di rilascio del permesso di soggiorno per lavoro subordinato presentata allo Sportello Unico*",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "Awaiting family reunification",
              label: "In attesa di ricongiungimento familiare",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto o documento equipollente in corso di validit\u00c3\u00a0.* ",
                "fotocopia non autenticata del nulla osta rilasciato dallo Sportello unico;*",
                "ricevuta rilasciata dall ufficio postale attestante l avvenuta presentazione della richiesta dipermesso*;",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
          ],
          parentId: 1,
        },
        {
          type: "select",
          title: "Qual \u00e8 il suo stato?",
          label: "Seleziona il tuo stato",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "lavoratore",
              nextQuestion: 4,
              documentazione: [
                "documento di identit\u00c3\u00a0.*",
                " documentazione comprovante la qualit\u00c3\u00a0 di lavoratore.*",
                " copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "f.i",
              label: "Finanziariamente indipendente (nessun lavoratore)",
              nextQuestion: 4,
              documentazione: [
                "copia di un documento di identit\u00c3\u00a0 valido.*",
                "autodichiarazione del possesso di risorse economiche.*",
                " copia di un'assicurazione sanitaria.*",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "student",
              label: "Studente",
              documentazione: [
                "copia di un documento di identit\u00c3\u00a0 valido.*",
                ") documentazione attestante l'iscrizione presso un istituto scolastico o di formazione professionale.*",
                "autodichiarazione del possesso di risorse economiche.*",
                " copertura dei rischi sanitari:*",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label: "Parente di (woker, studente ecc.)",
              documentazione: [
                "copia di un documento di identit\u00c3\u00a0 valido.*",
                "copia degli atti originali di soggiorno.*",
              ],
              nextQuestion: 4,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "Da dove ti stai muovendo?",
          label: "Seleziona la tua Cittadinanza",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "Paese straniero",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label: "Italiano AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label: "Stessa citt\u00e0",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label: "Citt\u00e0 diversa",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label: "Prima richiesta",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Quale paese?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "scrivi il tuo paese",
              type: "text",
              helperText: "Ex. Ghana, Francia, Russia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Quale paese?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "Per favore, scrivi prima il tuo paese",
              type: "text",
              helperText: "Ex. Ghana, Francia, Russia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Quale citt\u00e0?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label: "Scrivi la tua citt\u00e0",
              type: "text",
              helperText: "Ex. Torino, Milano, Pavia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Parliamo di te",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label: "Come ti chiami?",
              type: "text",
              helperText: "Ex. Moussa",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "Qual \u00e8 il tuo cognome",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Data di nascita",
              type: "date",
              helperText: "GG/MM/AAAA",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "Dove sei nato?",
              type: "text",
              helperText: "Indichi la sua citt\u00e0 di nascita",
              autocomplete: true,
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "Genere",
              type: "select",
              options: ["maschio", "femmina"],
              validate: "RequiredField",
              isRequired: true,
              helperText: "seleziona il tuo sesso",
            },
            {
              id: "Stato Civile",
              label: "il suo stato civile?",
              type: "select",
              options: ["nubile", "sposato/a", "divorziato/a", "vedovo/a"],
              helperText: "seleziona il tuo stato",
              validate: "RequiredField",
            },
            {
              id: "Cittadinanza",
              label: "Cittadinanza",
              type: "text",
              helperText: "Ex. Francese",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "Codice Fiscale",
              type: "text",
              helperText: "Ex. R5MRI88L73G273E",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title: "Hai un lavoro?",
          id: 9,
          answers: [
            {
              id: "si",
              nextQuestion: 12,
            },
            {
              id: "no",
              nextQuestion: 11,
            },
          ],
        },
        {
          type: "select",
          title: "Qual \u00e8 il tuo stato non professionale?",
          label: "Seleziona il tuo stato",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "Casalinga",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "Studente",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "Disoccupato",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "In pensione",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "Altro",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "Qual \u00e8 il suo status professionale?",
          label: "Seleziona il tuo stato",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "Lavoratore",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label: "Lavoratore familiare",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label: "Freelance / Imprenditore",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label: "Lavoratore autonomo",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label: "Dirigente / Impiegato",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          title: "Hai una patente di guida italiana?",
          id: 14,
          answers: [
            {
              id: "sì",
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
          title: "Dettagli della patente di guida",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "Numero",
              type: "number",
              helperText: "Ex. 91828930",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label: "Tipo di licenza",
              type: "text",
              helperText: "Ex. A,B,C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label: "Data di rilascio",
              type: "Date",
              helperText: "Data di rilascio",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label: "Ente emittente",
              type: "text",
              helperText: "Motorizzazione",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Provincia",
              type: "text",
              helperText: "Palermo",
              validate: "RequiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title: "Qual \u00e8 il suo livello di istruzione?",
          label: "Seleziona la tua laurea",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label: "Scuola elementare",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label: "Certificato di scuola secondaria",
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
              label: "Laurea magistrale",
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
        {
          type: "longform",
          title: "La tua nuova residenza",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "Citt\u00e0",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Prov",
              label: "Provincia",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "ViaPiazza",
              label: "Indirizzo",
              type: "text",
              helperText: "Via della libert\u00e0",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Numero civico",
              label: "Numero civico",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Scala",
              label: "Scale",
              type: "number",
              helperText: "Ex. 1\u00ba",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Piano",
              label: "Pavimento",
              type: "number",
              helperText: "Es. 2",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Interno",
              label: "Unit\u00e0",
              type: "number",
              helperText: "Ex. A",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "Ti muovi da solo?",
          id: 17,
          answers: [
            {
              id: "sì",
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
          title: "Quante persone accanto a te?",
          id: 18,
          nextQuestion: 51,
        },
        {
          type: "checkbox",
          title: "C'\u00e8 gi\u00e0 qualcuno che risiede nella propriet\u00e0?",
          id: 19,
          answers: [
            {
              id: "sì",
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
          title: "Dicci chi (solo un componente)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label: "Come si chiama?",
              type: "text",
              helperText: "Ex. Moussa",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Cognome_6",
              label: "Qual \u00e8 il suo cognome",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo",
              label: "Data di nascita",
              type: "date",
              helperText: "GG/MM/AAAA",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Luogo di nascita",
              type: "text",
              helperText: "Indichi la sua citt\u00e0 di nascita",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Specificare il rapporto di parentela",
              type: "text",
              helperText:
                "Se c'\u00e8 qualche rapporto di parentela lasciare questo campo vuoto",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "form",
          title: "Il suo contatto",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label: "Numero di telefono",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label: "Numero di cellulare",
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
          title: "A quale categoria appartiene la vostra casa?",
          label: "Seleziona il tuo stato",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label: "Uso gratuito",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label: "Casa di propriet\u00e0",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "Affitto",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "Casa pubblica",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Usufrutto",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Dettagli del contratto",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "Sezione",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "Foglio",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label: "Parziale o mappale",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label: "Subalterno",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Dettagli del contratto",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label: "Agenzia delle entrate di",
              type: "text",
              helperText: "Ex. Palermo",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "Data",
              type: "date",
              helperText: "GG/MM/AAAA",
              isRequired: true,
            },
            {
              id: "al n",
              label: "Numero",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Dettagli del contratto",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label: "Agenzia delle entrate di",
              type: "text",
              helperText: "Ex. Palermo",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "Data",
              type: "date",
              helperText: "GG/MM/AAAA",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "Numero",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Dettagli del contratto",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label: "Scrivere i dettagli",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          title: "Qualcuno paga gi\u00e0 la TARI?",
          id: 30,
          answers: [
            {
              id: "sì",
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
          title: "Dettagli del contratto",
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
              label: "Relativo",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Abbonamento TARI",
          id: 32,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "foglio10",
              label: "Foglio (Foglio)",
              type: "text",
              isRequired: true,
              validate: "RequiredField",
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
              helperText: "Ex. 1\u00ba",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "data",
              label: "Dati fine occupazione",
              type: "date",
              isRequired: true,
              validate: "RequiredField",
              helperText: "Dati fine occupazione",
            },
            {
              id: "superficie in mq",
              label: "superficie in mq",
              type: "number",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "select",
          title: "Titolo dell'occupazione",
          label: "Grazie per la pazienza",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "Propriet\u00e0",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Posizione",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "prestito per l'uso",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufrutto",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Assegnazione di alloggi di un ente pubblico",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
      ],
    },
    Spanish: {
      questions: [
        {
          type: "select",
          title: "\u00bfQu\u00e9 nacionalidad tiene?",
          label: "Seleccione su nacionalidad",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label: "Soy un ciudadano de fuera de la UE",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label: "Soy ciudadano italiano",
              nextQuestion: 4,
              documentazione: [
                "documento de identidad del solicitante y de las personas que transfieren su residencia con el solicitante",
                "recuerda firmar el documento",
              ],
            },
            {
              id: "I am a EU citizen",
              label: "Soy ciudadano de la UE",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title: "\u00bfCu\u00e1l es su situaci\u00f3n?",
          label: "Seleccione su estado",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label: "Familiar de ciudadano de la UE",
              nextQuestion: 4,
              documentazione: [
                "copia del pasaporte.*",
                "tarjeta de residencia de un miembro de la familia de un ciudadano de la UE, o recepción de una solicitud de tarjeta de residencia*",
              ],
            },
            {
              id: "I have the Residence permit",
              label: "Tengo el permiso de residencia",
              nextQuestion: 4,
              documentazione: [
                "copia del pasaporte válido o documento equivalente",
                "copia del permiso de residencia válido",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar**",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label: "Voy a renovar mi permiso de residencia",
              nextQuestion: 4,
              documentazione: [
                "copia del pasaporte válido o documento equivalente",
                "copia del permiso de residencia caducado.*",
                "recepción de la solicitud de renovación del permiso de residencia*",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar**",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label: "Estoy esperando un permiso de residencia",
              nextQuestion: 4,
              documentazione: [
                "copia del pasaporte válido o documento equivalente",
                "copia del contrato de residencia en el Sportello Unico per l'immigrazione",
                "recibo emitido por la oficina de correos que certifica la presentación de la solicitud de permiso de residencia*",
                "solicitud de permiso de residencia por trabajo subordinado presentada al Sportello Unico*",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar**",
              ],
            },
            {
              id: "Awaiting family reunification",
              label: "A la espera de la reagrupaci\u00f3n familiar",
              nextQuestion: 4,
              documentazione: [
                "copia del pasaporte válido o documento equivalente",
                "fotocopia no autentificada del nulla osta emitido por el Sportello Unico*",
                "recibo emitido por la oficina de correos que certifica la presentación de la solicitud de autorización*;",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar**",
              ],
            },
          ],
          parentId: 1,
        },
        {
          type: "select",
          title: "\u00bfCu\u00e1l es su situaci\u00f3n?",
          label: "Seleccione su estado",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "trabajador",
              nextQuestion: 4,
              documentazione: [
                "documento de identidad.*",
                " documentación que acredite la condición de trabajador",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar",
              ],
            },
            {
              id: "f.i",
              label: "Independiente econ\u00f3micamente (sin trabajador)",
              nextQuestion: 4,
              documentazione: [
                "copia de un documento de identidad válido",
                "autodeclaración de posesión de recursos económicos",
                "copia del seguro de salud",
                "copia de los documentos originales, traducidos y legalizados, que acrediten el estado civil y la composición familiar**",
              ],
            },
            {
              id: "student",
              label: "Estudiante",
              documentazione: [
                "copia de un documento de identidad válido",
                "documentación que acredite la matriculación en un centro escolar o de formación profesional*",
                "autodeclaración de posesión de recursos económicos",
                "cobertura de los riesgos sanitarios:*",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label: "Pariente de (woker, estudiante ecc..)",
              documentazione: [
                "copia de un documento de identidad válido",
                "copia de los documentos originales de residencia",
              ],
              nextQuestion: 4,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "\u00bfDe d\u00f3nde te vas a mover?",
          label: "Seleccione su nacionalidad",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "Pa\u00eds extranjero",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label: "AIRE italiano",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label: "La misma ciudad",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label: "Ciudades diferentes",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label: "Primera solicitud",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "\u00bfQu\u00e9 pa\u00eds?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "escriba su pa\u00eds",
              type: "text",
              helperText: "Ex. Ghana, Francia, Rusia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u00bfQu\u00e9 pa\u00eds?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "Por favor, escriba primero su pa\u00eds",
              type: "text",
              helperText: "Ex. Ghana, Francia, Rusia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u00bfQu\u00e9 ciudad?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label: "Escribe tu ciudad",
              type: "text",
              helperText: "Ex. Tur\u00edn, Mil\u00e1n, Pav\u00eda",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Hablemos de ti",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label: "\u00bfC\u00f3mo te llamas?",
              type: "text",
              helperText: "Ex. Moussa",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "\u00bfCu\u00e1l es su apellido?",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Fecha de nacimiento",
              type: "date",
              helperText: "DD/MM/AAAA",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "\u00bfD\u00f3nde naci\u00f3?",
              type: "text",
              helperText: "Indique su ciudad de nacimiento",
              autocomplete: true,
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "G\u00e9nero",
              type: "select",
              options: ["male", "female"],
              validate: "RequiredField",
              isRequired: true,
              helperText: "seleccione su g\u00e9nero",
            },
            {
              id: "Stato Civile",
              label: "\u00bfSu estado civil?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "seleccione su estado",
              validate: "RequiredField",
            },
            {
              id: "Cittadinanza",
              label: "Ciudadan\u00eda",
              type: "text",
              helperText: "Ex. Ghanesa, Francesa, Rusa...",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "C\u00f3digo fiscal",
              type: "text",
              helperText: "Ex. R5MRI88L73G273E",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title: "\u00bfTienes un trabajo?",
          id: 9,
          answers: [
            {
              id: "sí",
              nextQuestion: 12,
            },
            {
              id: "no",
              nextQuestion: 11,
            },
          ],
        },
        {
          type: "select",
          title: "\u00bfCu\u00e1l es su estado no profesional?",
          label: "Seleccione su estado",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "Ama de casa",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "Estudiante",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "Desempleados",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "Retirado",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "Otros",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "\u00bfCu\u00e1l es su situaci\u00f3n profesional?",
          label: "Seleccione su estado",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "Trabajador",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label: "Trabajador familiar",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label: "Aut\u00f3nomo / Empresario",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label: "Aut\u00f3nomos",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label: "Ejecutivo / Empleado",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          title: "\u00bfTiene permiso de conducir italiano?",
          id: 14,
          answers: [
            {
              id: "sí",
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
          title: "Datos del permiso de conducir",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "N\u00famero",
              type: "number",
              helperText: "Ex. 91828930",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label: "Tipo de licencia",
              type: "text",
              helperText: "Ex. A,B,C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label: "Fecha de publicaci\u00f3n",
              type: "Date",
              helperText: "Fecha de publicaci\u00f3n",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label: "Organismo emisor",
              type: "text",
              helperText: "Motorizaci\u00f3n",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Provincia",
              type: "text",
              helperText: "Palermo",
              validate: "RequiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title: "\u00bfCu\u00e1l es su nivel educativo?",
          label: "Seleccione su titulaci\u00f3n",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label: "Escuela primaria",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label: "Certificado de estudios secundarios",
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
              label: "Licenciado",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label: "M\u00e1ster",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_6",
              label: "Doctorado",
              nextQuestion: 16,
            },
          ],
          parentId: 9,
        },
        {
          type: "longform",
          title: "Su nueva residencia",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "Ciudad",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Prov",
              label: "Provincia",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "ViaPiazza",
              label: "Direcci\u00f3n",
              type: "text",
              helperText: "Via della libert\u00c3\u00a2a",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Numero civico",
              label: "N\u00famero de identificaci\u00f3n",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Scala",
              label: "Escaleras",
              type: "number",
              helperText: "Ex. 1er.",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Piano",
              label: "Suelo",
              type: "number",
              helperText: "Ej. 2",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Interno",
              label: "Unidad",
              type: "number",
              helperText: "Ex. A",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "\u00bfTe mudas solo?",
          id: 17,
          answers: [
            {
              id: "sí",
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
          title: "\u00bfCu\u00e1ntas personas hay a tu lado?",
          id: 18,
          nextQuestion: 51,
        },
        {
          type: "checkbox",
          title: "\u00bfReside ya alguien en el inmueble?",
          id: 19,
          answers: [
            {
              id: "sí",
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
          title: "D\u00edganos qui\u00e9n (s\u00f3lo un componente)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label: "\u00bfC\u00f3mo se llama?",
              type: "text",
              helperText: "Ex. Moussa",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Cognome_6",
              label: "\u00bfCu\u00e1l es su apellido?",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo",
              label: "Fecha de nacimiento",
              type: "date",
              helperText: "DD/MM/AAAA",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Lugar de nacimiento",
              type: "text",
              helperText: "Indique su ciudad de nacimiento",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Especifique la relaci\u00f3n familiar",
              type: "text",
              helperText:
                "Si hay alguna relaci\u00f3n familiar, deje este campo vac\u00edo",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "form",
          title: "Su contacto",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label: "N\u00famero de tel\u00e9fono",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label: "N\u00famero de m\u00f3vil",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "emailPec",
              label: "Correo electr\u00f3nico/Pec",
              type: "email",
              helperText: "test@email.com",
              validate: "requiredField",
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
          title: "\u00bfA qu\u00e9 categor\u00eda pertenece su casa?",
          label: "Seleccione su estado",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label: "Uso gratuito",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label: "Casa propia",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "Alquilar",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "Casa p\u00fablica",
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
          title: "Detalles del contrato",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "Secci\u00f3n",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "Hoja",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label: "Parcialmente o en forma de mapa",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label: "Subalterno",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Detalles del contrato",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label: "Agencia Tributaria de",
              type: "text",
              helperText: "Ex. Palermo",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "Fecha",
              type: "date",
              helperText: "DD/MM/AAAA",
              isRequired: true,
            },
            {
              id: "al n",
              label: "N\u00famero",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Detalles del contrato",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label: "Agencia Tributaria de",
              type: "text",
              helperText: "Ex. Palermo",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "Fecha",
              type: "date",
              helperText: "DD/MM/AAAA",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "N\u00famero",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "Detalles del contrato",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label: "Escriba los detalles",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          title: "\u00bfAlguien paga ya la TARI?",
          id: 30,
          answers: [
            {
              id: "sí",
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
          title: "Detalles del contrato",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label: "Nombre y cognici\u00f3n",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label: "C\u00f3digo fiscal",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
            },
            {
              id: "Relazione_di_parentela",
              label: "Relativo",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Suscripci\u00f3n a TARI",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label: "Hoja (Foglio)",
              type: "text",
              isRequired: true,
              validate: "RequiredField",
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
              helperText: "Ex. 1er.",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "data",
              label: "Datos de ocupaci\u00f3n fina",
              type: "date",
              isRequired: true,
              validate: "RequiredField",
              helperText: "Datos de ocupaci\u00f3n fina",
            },
            {
              id: "superficie in mq",
              label: "superficie en metros cuadrados",
              type: "number",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "select",
          title: "T\u00edtulo de la ocupaci\u00f3n",
          label: "Gracias por la paciencia",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "Propriedad",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Ubicaci\u00f3n",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "pr\u00e9stamo para su uso",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufructo",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Cesi\u00f3n de vivienda de un organismo p\u00fablico",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
      ],
    },
  },
};
export default choiceTree;
