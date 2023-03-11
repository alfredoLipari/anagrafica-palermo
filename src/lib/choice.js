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

export const choiceTree = {
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
              nextQuestion: 18,
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
                "copy of a valid Id.*",
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
              type: "text",
              helperText: "Ex. 1st",
              // add input validate
            },
            {
              id: "Piano",
              label: "Floor",
              type: "text",
              isRequired: true,
              helperText: "Ex. 2",
              validate: "RequiredField",
            },
            {
              id: "Interno",
              label: "Unit",
              type: "text",
              helperText: "Ex. 1",
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
              label: "Name and surname",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
              // add input validate
            },
            {
              id: "F",
              label: "Fiscal Code",
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
              label: "Effective date of occupation",
              type: "date",
              isRequired: true,
              validate: "RequiredField",
              helperText: "",
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

    /*       START       FRENCH                                    */
    French: {
      questions: [
        {
          type: "select",
          title: "Quelle est votre nationalit\u00e9 ?",
          label: "S\u00e9lectionnez votre citoyennet\u00e9",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label: "Je ne suis pas citoyen de l'UE",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label: "Je suis un citoyen italien",
              nextQuestion: 4,
              documentazione: [],
            },
            {
              id: "I am a EU citizen",
              label: "Je suis un citoyen de l'UE",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title: "Quel est votre statut ?",
          label: "S\u00e9lectionnez votre statut",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label: "Parent citoyen de l'UE",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto.*",
                "carta di soggiorno di familiare di cittadino dell'Unione, oppure ricevuta ella richiesta di rilascio di carta di soggiorno.*",
              ],
            },
            {
              id: "I have the Residence permit",
              label: "J'ai le permis de s\u00e9jour",
              nextQuestion: 4,
              documentazione: [
                "copia del passaporto o documento equipollente in corso di validit\u00c3\u00a0.* ",
                "copia del titolo di soggiorno in corso di validit\u00c3\u00a0.*",
                "copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label: "Je renouvelle mon permis de r\u00e9sidence",
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
              label: "J'attends un permis de s\u00e9jour",
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
              label: "En attente d'un regroupement familial",
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
          title: "Quel est votre statut ?",
          label: "S\u00e9lectionnez votre statut",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "travailleur",
              nextQuestion: 4,
              documentazione: [
                "documento di identit\u00c3\u00a0.*",
                " documentazione comprovante la qualit\u00c3\u00a0 di lavoratore.*",
                " copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "f.i",
              label:
                "Ind\u00e9pendant financi\u00e8rement (pas de travailleur)",
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
              label: "\u00c9tudiant",
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
              label: "Parent de (woker, \u00e9tudiant ecc..)",
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
          title: "D'o\u00f9 venez-vous ?",
          label: "S\u00e9lectionnez votre citoyennet\u00e9",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "Pays \u00e9tranger",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label: "Italien AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label: "M\u00eame ville",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label: "Une autre ville",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label: "Premi\u00e8re demande",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Quel pays ?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "\u00e9crivez votre pays",
              type: "text",
              helperText: "Ex. Ghana, France, Russie",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Quel pays ?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "Veuillez d'abord indiquer votre pays",
              type: "text",
              helperText: "Ex. Ghana, France, Russie",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Quelle ville ?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label: "\u00c9crivez votre ville",
              type: "text",
              helperText: "Ex. Turin, Milan, Pavie",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Parlons de vous.",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label: "Quel est votre nom ?",
              type: "text",
              helperText: "Ex. Moussa",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "Quel est votre nom de famille ?",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Date de naissance",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "O\u00f9 \u00eates-vous n\u00e9 ?",
              type: "text",
              helperText: "Indiquez votre ville de naissance",
              autocomplete: true,
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "Genre",
              type: "select",
              options: ["male", "female"],
              validate: "RequiredField",
              isRequired: true,
              helperText: "s\u00e9lectionnez votre sexe",
            },
            {
              id: "Stato Civile",
              label: "votre statut marital ?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "s\u00e9lectionnez votre statut",
              validate: "RequiredField",
            },
            {
              id: "Cittadinanza",
              label: "Citoyennet\u00e9",
              type: "text",
              helperText: "Ex. Ghan\u00e9en, Francaise, Russe...",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "Code Fiscal",
              type: "text",
              helperText: "Ex. R5MRI88L73G273E",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title: "Vous avez un travail ?",
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
        {
          type: "select",
          title: "Quel est votre statut de non-professionnel ?",
          label: "S\u00e9lectionnez votre statut",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "Femme au foyer",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "\u00c9tudiant",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "Ch\u00f4meurs",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "Retrait\u00e9",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "Autre",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "Quel est votre statut professionnel ?",
          label: "S\u00e9lectionnez votre statut",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "Travailleur",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label: "Travailleuse familiale",
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
              label: "Travailleurs ind\u00e9pendants",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label: "Cadre / Employ\u00e9",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          title: "Avez-vous un permis de conduire italien ?",
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
          title: "D\u00e9tails du permis de conduire",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "Num\u00e9ro",
              type: "number",
              helperText: "Ex. 91828930",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label: "Type de licence",
              type: "text",
              helperText: "Ex. A, B, C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label: "Date de sortie",
              type: "Date",
              helperText: "Date de sortie",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label: "Organisme \u00e9metteur",
              type: "text",
              helperText: "Motorizzazione",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Province",
              type: "text",
              helperText: "Palerme",
              validate: "RequiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title: "Quel est votre niveau d'\u00e9ducation ?",
          label: "S\u00e9lectionnez votre dipl\u00f4me",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label: "\u00c9cole primaire",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label: "Certificat d'\u00e9tudes secondaires",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_13",
              label: "Dipl\u00f4me",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_14",
              label: "Baccalaur\u00e9at",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label: "Ma\u00eetrise",
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
          title: "Votre nouvelle r\u00e9sidence",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "Ville",
              type: "text",
              helperText: "Ex. Palerme",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Prov",
              label: "Province",
              type: "text",
              helperText: "Ex. Palerme",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "ViaPiazza",
              label: "Adresse",
              type: "text",
              helperText: "Via della libert\u00c3",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Numero civico",
              label: "Num\u00e9ro civique",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Scala",
              label: "Escaliers",
              type: "number",
              helperText: "Ex. 1er",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Piano",
              label: "Plancher",
              type: "number",
              helperText: "Ex. 2",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Interno",
              label: "Unit\u00e9",
              type: "number",
              helperText: "Ex. A",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "Vous d\u00e9m\u00e9nagez seul ?",
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
          title: "Combien de personnes \u00e0 c\u00f4t\u00e9 de vous ?",
          id: 18,
          nextQuestion: 51,
        },
        {
          type: "checkbox",
          title:
            "Quelqu'un r\u00e9side-t-il d\u00e9j\u00e0 dans la propri\u00e9t\u00e9 ?",
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
          title: "Dites-nous qui (un seul \u00e9l\u00e9ment)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label: "Quel est son nom ?",
              type: "text",
              helperText: "Ex. Moussa",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Cognome_6",
              label: "Quel est son nom de famille ?",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo",
              label: "Date de naissance",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Lieu de naissance",
              type: "text",
              helperText: "Indiquez votre ville de naissance",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Pr\u00e9cisez le lien de parent\u00e9",
              type: "text",
              helperText:
                "S'il existe un lien de parent\u00e9, laissez ce champ vide.",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "form",
          title: "Votre contact",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label: "Num\u00e9ro de t\u00e9l\u00e9phone",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label: "Num\u00e9ro de t\u00e9l\u00e9phone mobile",
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
          title: "\u00c0 quelle cat\u00e9gorie appartient votre maison ?",
          label: "S\u00e9lectionnez votre statut",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label: "Utilisation gratuite",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label: "Maison en propri\u00e9t\u00e9",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "Location",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "Maison publique",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Usufructuaire",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "D\u00e9tails du contrat",
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
            },
            {
              id: "foglio",
              label: "Feuille",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label: "Partielle ou mappale",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label: "Subalterne",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "D\u00e9tails du contrat",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label: "Agence du revenu du Canada",
              type: "text",
              helperText: "Ex. Palerme",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
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
              label: "Num\u00e9ro",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "D\u00e9tails du contrat",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label: "Agence du revenu du Canada",
              type: "text",
              helperText: "Ex. Palerme",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
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
              label: "Num\u00e9ro",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title: "D\u00e9tails du contrat",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label: "\u00c9crire les d\u00e9tails",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          title: "Quelqu'un paie-t-il d\u00e9j\u00e0 le TARI ?",
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
          title: "D\u00e9tails du contrat",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label: "Nom et pr\u00e9nom",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label: "Code Fiscal",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
            },
            {
              id: "Relazione_di_parentela",
              label: "Relative",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title: "Abonnement TARI",
          id: 32,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "foglio10",
              label: "Feuille (Foglio)",
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
              helperText: "Ex. 1er",
              isRequired: true,
              validate: "RequiredField",
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
              label: "surface en m\u00e8tres carr\u00e9s",
              type: "number",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "select",
          title: "Titre de la profession",
          label: "Merci de votre patience",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "Propri\u00e9t\u00e9",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Localisation",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "pr\u00eat \u00e0 l'emploi",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufruit",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Affectation des logements d'un organisme public",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
      ],
    },

    /*       END       FRENCH                                    */
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
              nextQuestion: 18,
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
              helperText: "Data di nascita",
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
              type: "text",
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
          nextQuestion: 41,
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
          nextQuestion: 33,
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
              label: "Data decorrenza occupazione",
              type: "date",
              isRequired: true,
              validate: "RequiredField",
              helperText: "Data decorrenza occupazione",
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
              helperText: "fecha de nacimiento",
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
              type: "text",
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
          nextQuestion: 41,
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
              helperText: "Fecha",
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
    Ukranian: {
      questions: [
        {
          type: "select",
          title:
            "\u042f\u043a\u0435 \u0443 \u0432\u0430\u0441 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u0442\u0432\u043e?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u0442\u0432\u043e",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label:
                "\u042f \u043d\u0435 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0438\u043d \u0404\u0421",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label:
                "\u042f \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0438\u043d \u0406\u0442\u0430\u043b\u0456\u0457",
              nextQuestion: 4,
              documentazione: [
                "identity document of the applicant and of the persons transferring residence together with the applicant",
                "remember to sign the document",
              ],
            },
            {
              id: "I am a EU citizen",
              label:
                "\u042f \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0438\u043d \u0404\u0421",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title:
            "\u042f\u043a\u0438\u0439 \u0442\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label:
                "\u0420\u043e\u0434\u0438\u0447 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0438\u043d\u0430 \u0404\u0421",
              nextQuestion: 4,
              documentazione: [
                "copy of your passport.*",
                "residence card of a family member of an EU citizen, or receipt of the application for the issuance of a residence card.*",
                "remember to sign the document",
              ],
            },
            {
              id: "I have the Residence permit",
              label:
                "\u042f \u043c\u0430\u044e \u0434\u043e\u0437\u0432\u0456\u043b \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
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
              label:
                "\u041f\u043e\u043d\u043e\u0432\u043b\u044e\u044e \u0434\u043e\u0437\u0432\u0456\u043b \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
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
              label:
                "\u0427\u0435\u043a\u0430\u044e \u043f\u043e\u0441\u0432\u0456\u0434\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
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
              label:
                "\u0412 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u0456 \u0432\u043e\u0437\u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0441\u0456\u043c'\u0457",
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
        {
          type: "select",
          title:
            "\u042f\u043a\u0438\u0439 \u0442\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "\u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a",
              nextQuestion: 4,
              documentazione: [
                "documento di identit\u00c3\u00a0.*",
                "documentation proving the quality of worker.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
                "remember to sign the document",
              ],
            },
            {
              id: "f.i",
              label:
                "\u0424\u0456\u043d\u0430\u043d\u0441\u043e\u0432\u043e \u043d\u0435\u0437\u0430\u043b\u0435\u0436\u043d\u0438\u0439 (\u0431\u0435\u0437 \u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a\u0430)",
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
              label: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442",
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
              label:
                "\u0420\u043e\u0434\u0438\u0447 (\u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a, \u0441\u0442\u0443\u0434\u0435\u043d\u0442 \u0442\u043e\u0449\u043e)",
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
        {
          type: "select",
          title:
            "\u0417\u0432\u0456\u0434\u043a\u0438 \u0442\u0438 \u043f\u0435\u0440\u0435\u0457\u0436\u0434\u0436\u0430\u0454\u0448?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u0433\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u0442\u0432\u043e",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label:
                "\u0417\u0430\u0440\u0443\u0431\u0456\u0436\u043d\u0430 \u043a\u0440\u0430\u0457\u043d\u0430",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label:
                "\u0406\u0442\u0430\u043b\u0456\u0439\u0441\u044c\u043a\u0438\u0439 AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label:
                "\u0422\u0435 \u0441\u0430\u043c\u0435 \u043c\u0456\u0441\u0442\u043e",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label: "\u0406\u043d\u0448\u0435 \u043c\u0456\u0441\u0442\u043e",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label:
                "\u041f\u0435\u0440\u0448\u0438\u0439 \u0437\u0430\u043f\u0438\u0442",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "\u042f\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u043d\u0430\u043f\u0438\u0448\u0438 \u0441\u0432\u043e\u044e \u043a\u0440\u0430\u0457\u043d\u0443",
              type: "autocomplete",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0413\u0430\u043d\u0430, \u0424\u0440\u0430\u043d\u0446\u0456\u044f, \u0420\u043e\u0441\u0456\u044f",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u042f\u043a\u0430 \u043a\u0440\u0430\u0457\u043d\u0430?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0411\u0443\u0434\u044c \u043b\u0430\u0441\u043a\u0430, \u0441\u043f\u043e\u0447\u0430\u0442\u043a\u0443 \u043d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u043a\u0440\u0430\u0457\u043d\u0443",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0413\u0430\u043d\u0430, \u0424\u0440\u0430\u043d\u0446\u0456\u044f, \u0420\u043e\u0441\u0456\u044f",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u042f\u043a\u0435 \u043c\u0456\u0441\u0442\u043e?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label:
                "\u041d\u0430\u043f\u0438\u0448\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043c\u0456\u0441\u0442\u043e",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0422\u0443\u0440\u0438\u043d, \u041c\u0456\u043b\u0430\u043d, \u041f\u0430\u0432\u0456\u044f",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0433\u043e\u0432\u043e\u0440\u0438\u043c\u043e \u043f\u0440\u043e \u0432\u0430\u0441",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label:
                "\u042f\u043a \u0432\u0430\u0441 \u0437\u0432\u0430\u0442\u0438?",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. \u041c\u0443\u0441\u0430",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label:
                "\u042f\u043a \u0442\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0421\u0435\u043c\u043f\u0440\u0456\u043d\u0456",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              type: "date",
              helperText:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              validate: "dateValidation",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label:
                "\u0414\u0435 \u0442\u0438 \u043d\u0430\u0440\u043e\u0434\u0438\u0432\u0441\u044f?",
              type: "autocomplete",
              helperText:
                "\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0441\u0432\u043e\u0454 \u043c\u0456\u0441\u0442\u043e \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              autocomplete: true,
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "\u0421\u0442\u0430\u0442\u044c",
              type: "select",
              options: ["male", "female"],
              validate: "RequiredField",
              isRequired: true,
              helperText:
                "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0441\u0442\u0430\u0442\u044c",
            },
            {
              id: "Stato Civile",
              label:
                "\u0442\u0432\u0456\u0439 \u0441\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText:
                "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
              validate: "RequiredField",
            },
            {
              id: "Cittadinanza",
              label:
                "\u0413\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u0442\u0432\u043e",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0444\u0440\u0430\u043d\u0446\u0443\u0437\u044c\u043a\u0438\u0439",
              validate: "RequiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "\u041a\u043e\u0434\u0435\u043a\u0441 Fiscale",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. R5MRI88L73G273E",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title:
            "\u0423 \u0432\u0430\u0441 \u0454 \u0440\u043e\u0431\u043e\u0442\u0430?",
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
        {
          type: "select",
          title:
            "\u042f\u043a\u0438\u0439 \u0442\u0432\u0456\u0439 \u043d\u0435\u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label:
                "\u0434\u043e\u043c\u043e\u0433\u043e\u0441\u043f\u043e\u0434\u0430\u0440\u043a\u0430",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label:
                "\u0411\u0435\u0437\u0440\u043e\u0431\u0456\u0442\u043d\u0438\u0439",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "\u043d\u0430 \u043f\u0435\u043d\u0441\u0456\u0457",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "\u0406\u043d\u0448\u0438\u0439",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u042f\u043a\u0438\u0439 \u0443 \u0432\u0430\u0441 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u0442\u0443\u0441?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "\u0420\u043e\u0431\u0456\u0442\u043d\u0438\u043a",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label:
                "\u0421\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label:
                "\u0424\u0440\u0456\u043b\u0430\u043d\u0441\u0435\u0440 / \u041f\u0456\u0434\u043f\u0440\u0438\u0454\u043c\u0435\u0446\u044c",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label:
                "\u0421\u0430\u043c\u043e\u0437\u0430\u0439\u043d\u044f\u0442\u0438\u0439",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label:
                "\u041a\u0435\u0440\u0456\u0432\u043d\u0438\u043a / \u0421\u043f\u0456\u0432\u0440\u043e\u0431\u0456\u0442\u043d\u0438\u043a",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          title:
            "\u0423 \u0432\u0430\u0441 \u0454 \u0456\u0442\u0430\u043b\u0456\u0439\u0441\u044c\u043a\u0456 \u0432\u043e\u0434\u0456\u0439\u0441\u044c\u043a\u0456 \u043f\u0440\u0430\u0432\u0430?",
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
          title:
            "\u0412\u0456\u0434\u043e\u043c\u043e\u0441\u0442\u0456 \u043f\u0440\u043e \u0432\u043e\u0434\u0456\u0439\u0441\u044c\u043a\u0456 \u043f\u0440\u0430\u0432\u0430",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "\u041d\u043e\u043c\u0435\u0440",
              type: "number",
              helperText: "\u041d\u0430\u043f\u0440. 91828930",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label:
                "\u0422\u0438\u043f \u043b\u0456\u0446\u0435\u043d\u0437\u0456\u0457",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. A,B,C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label:
                "\u0414\u0430\u0442\u0430 \u0432\u0438\u043f\u0443\u0441\u043a\u0443",
              type: "Date",
              helperText:
                "\u0414\u0430\u0442\u0430 \u0432\u0438\u043f\u0443\u0441\u043a\u0443",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label:
                "\u041e\u0440\u0433\u0430\u043d \u0432\u0438\u0434\u0430\u0447\u0456",
              type: "text",
              helperText: "Motorizzazione",
              validate: "RequiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "\u043f\u0440\u043e\u0432\u0456\u043d\u0446\u0456\u044f",
              type: "text",
              helperText: "\u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              validate: "RequiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title:
            "\u042f\u043a\u0438\u0439 \u0443 \u0432\u0430\u0441 \u043e\u0441\u0432\u0456\u0442\u043d\u0456\u0439 \u0440\u0456\u0432\u0435\u043d\u044c?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0443\u043f\u0456\u043d\u044c",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label:
                "\u041f\u043e\u0447\u0430\u0442\u043a\u043e\u0432\u0430 \u0448\u043a\u043e\u043b\u0430",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label:
                "\u0410\u0442\u0435\u0441\u0442\u0430\u0442 \u043f\u0440\u043e \u0441\u0435\u0440\u0435\u0434\u043d\u044e \u0448\u043a\u043e\u043b\u0443",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_13",
              label: "\u0434\u0438\u043f\u043b\u043e\u043c",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_14",
              label: "\u0431\u0430\u043a\u0430\u043b\u0430\u0432\u0440",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label:
                "\u0421\u0442\u0443\u043f\u0456\u043d\u044c \u043c\u0430\u0433\u0456\u0441\u0442\u0440\u0430",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_6",
              label: "\u043a.\u0442.\u043d",
              nextQuestion: 16,
            },
          ],
          parentId: 9,
        },
        {
          type: "longform",
          title:
            "\u0412\u0430\u0448\u0435 \u043d\u043e\u0432\u0435 \u043c\u0456\u0441\u0446\u0435 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "\u041c\u0456\u0441\u0442\u043e",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Prov",
              label: "\u043f\u0440\u043e\u0432\u0456\u043d\u0446\u0456\u044f",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "ViaPiazza",
              label: "\u0410\u0434\u0440\u0435\u0441\u0430",
              type: "text",
              helperText: "Via della libert\u00c3",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Numero civico",
              label:
                "\u0413\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u044c\u043a\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. 36",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Scala",
              label: "\u0421\u0445\u043e\u0434\u0438",
              type: "number",
              helperText: "\u041d\u0430\u043f\u0440. 1-\u0439",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Piano",
              label: "\u043f\u0456\u0434\u043b\u043e\u0433\u0430",
              type: "number",
              helperText: "\u041d\u0430\u043f\u0440. 2",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Interno",
              label: "\u043e\u0434\u0438\u043d\u0438\u0446\u044f",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. \u0410",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title:
            "\u0422\u0438 \u0440\u0443\u0445\u0430\u0454\u0448\u0441\u044f \u043e\u0434\u0438\u043d?",
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
          title:
            "\u0421\u043a\u0456\u043b\u044c\u043a\u0438 \u043b\u044e\u0434\u0435\u0439 \u043f\u043e\u0440\u0443\u0447 \u0437 \u0442\u043e\u0431\u043e\u044e?",
          id: 18,
          nextQuestion: 41,
        },
        {
          type: "checkbox",
          title:
            "\u0425\u0442\u043e\u0441\u044c \u0443\u0436\u0435 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u0454 \u043d\u0430 \u0442\u0435\u0440\u0438\u0442\u043e\u0440\u0456\u0457 \u043f\u043e\u043c\u0435\u0448\u043a\u0430\u043d\u043d\u044f?",
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
          title:
            "\u0421\u043a\u0430\u0436\u0456\u0442\u044c \u043d\u0430\u043c \u0445\u0442\u043e (\u043b\u0438\u0448\u0435 \u043e\u0434\u0438\u043d \u043a\u043e\u043c\u043f\u043e\u043d\u0435\u043d\u0442)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label:
                "\u042f\u043a \u0439\u043e\u0433\u043e/\u0457\u0457 \u0437\u0432\u0430\u0442\u0438?",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. \u041c\u0443\u0441\u0430",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Cognome_6",
              label:
                "\u042f\u043a\u0435 \u0439\u043e\u0433\u043e/\u0457\u0457 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0421\u0435\u043c\u043f\u0440\u0456\u043d\u0456",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo",
              label:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              type: "date",
              helperText: "\u0414\u0414/\u041c\u041c/\u0420\u0420\u0420\u0420",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "Luogo di nascita_6",
              label:
                "\u041c\u0456\u0441\u0446\u0435 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              type: "text",
              helperText:
                "\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0439\u043e\u0433\u043e/\u0457\u0457 \u043c\u0456\u0441\u0442\u043e \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              isRequired: true,
              validate: "RequiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label:
                "\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0440\u043e\u0434\u0438\u043d\u043d\u0456 \u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0438",
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
              helperText:
                "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0436\u043e\u0434\u043d\u043e\u0433\u043e, \u044f\u043a\u0449\u043e \u0432\u0456\u043d \u0454",
              isRequired: false,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0412\u0430\u0448 \u043a\u043e\u043d\u0442\u0430\u043a\u0442",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label:
                "\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0443",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label:
                "\u041d\u043e\u043c\u0435\u0440 \u043c\u043e\u0431\u0456\u043b\u044c\u043d\u043e\u0433\u043e",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "emailPec",
              label:
                "\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430/\u041f\u0435\u0446",
              type: "email",
              helperText: "test@email.com",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Fax",
              label: "\u0444\u0430\u043a\u0441",
              type: "text",
              helperText: "091666555",
              validate: "",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0414\u043e \u044f\u043a\u043e\u0457 \u043a\u0430\u0442\u0435\u0433\u043e\u0440\u0456\u0457 \u043d\u0430\u043b\u0435\u0436\u0438\u0442\u044c \u0432\u0430\u0448 \u0431\u0443\u0434\u0438\u043d\u043e\u043a?",
          label:
            "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label:
                "\u0411\u0435\u0437\u043a\u043e\u0448\u0442\u043e\u0432\u043d\u0435 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label:
                "\u0412\u043b\u0430\u0441\u043d\u0438\u0439 \u0431\u0443\u0434\u0438\u043d\u043e\u043a",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "\u041e\u0440\u0435\u043d\u0434\u0430",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label:
                "\u0413\u0440\u043e\u043c\u0430\u0434\u0441\u044c\u043a\u0438\u0439 \u0431\u0443\u0434\u0438\u043d\u043e\u043a",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u0423\u0437\u0443\u0444\u0440\u0443\u043a\u0442\u0443\u0430\u0440\u0456\u0439",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title:
            "\u0414\u0435\u0442\u0430\u043b\u0456 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "\u0420\u043e\u0437\u0434\u0456\u043b",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "\u043b\u0438\u0441\u0442",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label:
                "\u0427\u0430\u0441\u0442\u043a\u043e\u0432\u0430 \u0430\u0431\u043e \u0431\u043b\u0456\u0434\u0430",
              type: "text",
              validate: "requiredField",
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
          title:
            "\u0414\u0435\u0442\u0430\u043b\u0456 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label:
                "\u0410\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e \u0434\u043e\u0445\u043e\u0434\u0456\u0432 \u0441",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "\u0414\u0430\u0442\u0430",
              type: "date",
              helperText: "\u0414\u0414/\u041c\u041c/\u0420\u0420\u0420\u0420",
              isRequired: true,
            },
            {
              id: "al n",
              label: "\u041d\u043e\u043c\u0435\u0440",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0414\u0435\u0442\u0430\u043b\u0456 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label:
                "\u0410\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e \u0434\u043e\u0445\u043e\u0434\u0456\u0432 \u0441",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "\u0414\u0430\u0442\u0430",
              type: "date",
              helperText: "\u0414\u0414/\u041c\u041c/\u0420\u0420\u0420\u0420",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "\u041d\u043e\u043c\u0435\u0440",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0414\u0435\u0442\u0430\u043b\u0456 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label:
                "\u041f\u0438\u0448\u0456\u0442\u044c \u0434\u0435\u0442\u0430\u043b\u0456",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          title:
            "\u0425\u0442\u043e\u0441\u044c \u0443\u0436\u0435 \u0441\u043f\u043b\u0430\u0447\u0443\u0454 TARI?",
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
          title:
            "\u0414\u0435\u0442\u0430\u043b\u0456 \u0434\u043e\u0433\u043e\u0432\u043e\u0440\u0443",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label:
                "\u0406\u043c'\u044f \u0442\u0430 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label:
                "\u0424\u0456\u0441\u043a\u0430\u043b\u044c\u043d\u0438\u0439 \u043a\u043e\u0434\u0435\u043a\u0441",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
            },
            {
              id: "Relazione_di_parentela",
              label: "\u0412\u0456\u0434\u043d\u043e\u0441\u043d\u0438\u0439",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u041f\u0456\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 TARI",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label: "\u0410\u0440\u043a\u0443\u0448 (Foglio)",
              type: "text",
              isRequired: true,
              validate: "RequiredField",
            },
            {
              id: "particella10",
              label: "\u0447\u0430\u0441\u0442\u0438\u043d\u043a\u0438",
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
            },
            {
              id: "data",
              label:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0431\u0443\u0442\u0442\u044f \u0447\u0438\u043d\u043d\u043e\u0441\u0442\u0456 \u043e\u043a\u0443\u043f\u0430\u0446\u0456\u0457",
              type: "date",
              isRequired: true,
              validate: "RequiredField",
              helperText: "ERROR TRANSLATING",
            },
            {
              id: "superficie in mq",
              label:
                "\u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f \u0432 \u043a\u0432",
              type: "number",
              isRequired: true,
              validate: "RequiredField",
            },
          ],
        },
        {
          type: "select",
          title:
            "\u041d\u0430\u0437\u0432\u0430 \u043f\u0440\u043e\u0444\u0435\u0441\u0456\u0457",
          label:
            "\u0414\u044f\u043a\u0443\u044e \u0437\u0430 \u0442\u0435\u0440\u043f\u0456\u043d\u043d\u044f",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label:
                "\u041f\u0440\u0438\u0441\u0442\u043e\u0439\u043d\u0456\u0441\u0442\u044c",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_2",
              label:
                "\u0420\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_3",
              label:
                "\u043f\u043e\u0437\u0438\u043a\u0430 \u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "\u0443\u0437\u0443\u0444\u0440\u0443\u043a\u0442",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0436\u0438\u0442\u043b\u0430 \u0434\u0435\u0440\u0436\u0430\u0432\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0443",
              nextQuestion: 17,
            },
          ],
          parentId: 9,
        },
      ],
    },
  },
};
export default choiceTree;
