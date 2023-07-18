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
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label: "I'm an Italian Citizen",
              nextQuestion: 4,
              documentazione: [
                "identity document of the applicant and of the persons transferring residence together with the applicant",
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
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label: "I am waiting for a work permit",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid passport or equivalent document.* ",
                "copy of the residence contract at the Sportello Unico per l'immigrazione *",
                "receipt issued by the post office certifying the submission of the application for residence permit.*",
                "application for the issuance of a residence permit for subordinate work submitted to the Sportello Unico.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
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
              ],
            },
            {
              id: "f.i",
              label: "Unemployed",
              nextQuestion: 4,
              documentazione: [
                "copy of a valid ID.*",
                "autodichiarazione del possesso di risorse economiche.*",
                " copia di un'assicurazione sanitaria.*",
                "copy of the original documents, translated and legalized, proving the civil status and family composition.**",
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
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label: "Relative of (woker, student ecc..)",
              documentazione: [
                "copy of a valid identification document.*",
                "copy of original deeds of residence.*",
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
              validate: "requiredField",
              isRequired: true,
              // add input validate
            },
            {
              id: "Cognome",
              label: "What's your surname",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "requiredField",
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
              validate: "requiredField",
              isRequired: true,
              helperText: "select your gender",
              // add input validate
            },
            {
              id: "Stato civile",
              label: "your marital status?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "select your status",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cittadinanza",
              label: "Citizenship",
              type: "text",
              helperText: "Ex. French",
              validate: "requiredField",
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
          controller: true,
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
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "Student",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "Unemployed",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "Retired",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "Other",
              nextQuestion: 14,
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
          controller: true,
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
              validate: "requiredField",
              isRequired: false,
              // add input validate
            },
            {
              id: "Patente tipo",
              label: "License Type",
              type: "text",
              helperText: "Ex. A,B,C",
              //validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label: "Release Date",
              type: "Date",
              helperText: "Release Date",
              validate: "requiredField",
              isRequired: false,
              // add input validate
            },
            {
              id: "Organo di rilascio",
              label: "Issuing body",
              type: "text",
              helperText: "Motorizzazione",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Province",
              type: "text",
              helperText: "Palermo",
              validate: "requiredField",
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
              id: "C1_2_16",
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
              validate: "requiredField",
              // add input validate
            },
            {
              id: "Prov",
              label: "Province",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "Address",
              type: "text",
              helperText: "Via della libertà",
              isRequired: true,
              validate: "requiredField",
              // add input validate
            },
            {
              id: "Numero civico",
              label: "Civic number",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
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
              validate: "requiredField",
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
          controller: true,
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
          controller: true,
          id: 18,
          nextQuestion: 41,
        },

        //  CHE NELL'ABITAZIONE SITA AL NUOVO INDIRZZO SONO GIA' ISCRITTE LE SEGUENTI PERSONE

        {
          type: "checkbox",
          title: "Does anyone already reside in the property?",
          controller: true,
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
              validate: "requiredField",
              // add input validate
            },
            {
              id: "Cognome_6",
              label: "What's his/her surname",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label: "Date of birth",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "requiredField",
              // add input validate
            },
            {
              id: "Luogo di nascita_6",
              label: "Place of Birth",
              type: "text",
              helperText: "Indicate his/her city of birth",
              isRequired: true,
              validate: "requiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia già residente",
              label: "Specify the family relationship",
              type: "select",
              options: [
                "Mother",
                "Father",
                "Son",
                "Daughter",
                "Wife",
                "Husband",
                "Uncle",
                "Aunt",
                "Nephew",
                "Brother",
                "Sister",
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
              helperText: "+203332423421",
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
              validate: "requiredField",
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
              helperText: "Date start contract",
              isRequired: true,
              validate: "requiredField",
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
          id: 27,
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
          controller: true,
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
              helperText: "Ex. R5MRI88L73G273E",
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
          title: "You request for the following TARI subscription",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label: "Sheet (Foglio)",
              type: "text",
              isRequired: true,
              validate: "requiredField",
              // add input validate
            },
            {
              id: "particella10",
              label: "particella",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              isRequired: true,
              validate: "requiredField",
              // add input validate
            },
            {
              id: "data",
              label: "Effective date of occupation",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "",
            },
            {
              id: "superficie in mq",
              label: "surface in sq. m",
              type: "number",
              isRequired: true,
              validate: "requiredField",
              // add input validate
            },
          ],
        },

        {
          type: "select",
          title: "Title of the occupation",
          label: "Choose the use",
          id: 33,

          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "Propriety",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Location",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "loan for use",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufruct",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Housing assignment of a public body",
              nextQuestion: 34,
            },
          ],

          parentId: 9,
        },
        {
          type: "form",
          title: "Additional Notes",
          id: 34,
          parentId: 33,
          nextQuestion: 17,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText: "Add here additional notes you want to present",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
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
              documentazione: [
                "pièce d'identité du demandeur et des personnes transférant leur résidence avec le demandeur",
                "n'oubliez pas de signer le document",
              ],
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
                "copie du passeport.*",
                "carte de séjour d'un membre de la famille d'un citoyen de l'Union, ou récépissé de la demande de délivrance d'une carte de séjour.*",
              ],
            },
            {
              id: "I have the Residence permit",
              label: "J'ai le permis de s\u00e9jour",
              nextQuestion: 4,
              documentazione: [
                "Copie du passeport en cours de validité ou document équivalent",
                "copie du titre de séjour en cours de validité.*",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.*",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label: "Je renouvelle mon permis de r\u00e9sidence",
              nextQuestion: 4,
              documentazione: [
                "Copie du passeport en cours de validité ou document équivalent*",
                "copie du titre de séjour expiré.*",
                "récépissé de la demande de renouvellement du titre de séjour.* ",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.*",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label: "J'attends un permis de travail",
              nextQuestion: 4,
              documentazione: [
                "Copie du passeport en cours de validité ou document équivalent*",
                "copie du contrat de séjour au Sportello Unico pour l'immigration;*",
                "récépissé délivré par la poste attestant de la présentation réussie de la demande de titre de séjour ;* ",
                "demande de libération du permis de séjour pour travail subalterne présentée au Sportello Unico*",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.**",
              ],
            },
            {
              id: "Awaiting family reunification",
              label: "En attente d'un regroupement familial",
              nextQuestion: 4,
              documentazione: [
                "Copie du passeport en cours de validité ou document équivalent*",
                "copie du contrat de séjour au Sportello Unico pour l'immigration;*",
                "récépissé délivré par la poste attestant de la présentation réussie de la demande de titre de séjour ;* ",
                "demande de libération du permis de séjour pour travail subalterne présentée au Sportello Unico*",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.**",
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
                "document d'identité.*",
                "document prouvant le statut de travailleur.*",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.**",
              ],
            },
            {
              id: "f.i",
              label: "Sans emploi",
              nextQuestion: 4,
              documentazione: [
                "copie d'une pièce d'identité valide.*",
                "auto-déclaration de possession de ressources économiques.*",
                " copie d'une assurance maladie.*",
                "copie des documents originaux, traduits et légalisés, prouvant l'état civil et la composition de la famille.*",
              ],
            },
            {
              id: "student",
              label: "\u00c9tudiant",
              documentazione: [
                "copie d'une pièce d'identité valide.*",
                "document prouvant l'inscription dans un établissement d'enseignement ou de formation professionnelle.*",
                "auto-déclaration de possession de ressources économiques.*",
                "couverture risque santé :* ",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label: "Parent de (woker, \u00e9tudiant ecc..)",
              documentazione: [
                "copie d'une pièce d'identité en cours de validité.*",
                "copie des documents de séjour originaux.*",
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
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "Quel est votre nom de famille ?",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Date de naissance",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "O\u00f9 \u00eates-vous n\u00e9 ?",
              type: "text",
              helperText: "Indiquez votre ville de naissance",
              autocomplete: true,
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "Genre",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText: "s\u00e9lectionnez votre sexe",
            },
            {
              id: "Stato civile",
              label: "votre statut marital ?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "s\u00e9lectionnez votre état civil",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label: "Citoyennet\u00e9",
              type: "text",
              helperText: "Ex. Ghan\u00e9en, Francaise, Russe...",
              validate: "requiredField",
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
          controller: true,
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
          controller: true,
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
              validate: "requiredField",
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
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label: "Organisme \u00e9metteur",
              type: "text",
              helperText: "Motorizzazione",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Province",
              type: "text",
              helperText: "Palerme",
              validate: "requiredField",
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
              id: "C1_2_16",
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
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "Province",
              type: "text",
              helperText: "Ex. Palerme",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "Adresse",
              type: "text",
              helperText: "Via della libert\u00c3",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label: "Num\u00e9ro civique",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "Escaliers",
              type: "number",
              helperText: "Ex. 1er",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Piano",
              label: "Plancher",
              type: "number",
              helperText: "Ex. 2",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "Unit\u00e9",
              type: "number",
              helperText: "Ex. A",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "Vous d\u00e9m\u00e9nagez seul ?",
          controller: true,
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
          controller: true,
          id: 18,
          nextQuestion: 51,
        },
        {
          type: "checkbox",
          title:
            "Quelqu'un r\u00e9side-t-il d\u00e9j\u00e0 dans la propri\u00e9t\u00e9 ?",
          controller: true,
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
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label: "Quel est son nom de famille ?",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label: "Date de naissance",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Lieu de naissance",
              type: "text",
              helperText: "Indiquez votre ville de naissance",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Pr\u00e9cisez le lien de parent\u00e9",
              type: "text",
              helperText:
                "S'il existe un lien de parent\u00e9, laissez ce champ vide.",
              isRequired: false,
              options: [
                "aucun",
                "mère",
                "père",
                "fils",
                "fille",
                "frère",
                "sœur",
                "grand-père",
                "grand-mère",
                "oncle",
                "tante",
                "cousin",
              ],
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
          controller: true,
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
              helperText: "Ex. R5MRI88L73G273E",
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
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "particella",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              helperText: "Ex. 1er",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label: "Data fine occupazione",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "Data fine occupazione",
            },
            {
              id: "superficie in mq",
              label: "surface en m\u00e8tres carr\u00e9s",
              type: "number",
              isRequired: true,
              validate: "requiredField",
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
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Localisation",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "pr\u00eat \u00e0 l'emploi",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufruit",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Affectation des logements d'un organisme public",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Notes complémentaires",
          id: 34,
          parentId: 33,
          nextQuestion: 17,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText:
                "Ajoutez ici des notes supplémentaires que vous souhaitez présenter",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
    Italian: {
      questions: [
        {
          type: "select",
          title: "Qual è la tua cittadinanza?",
          label: "Indica la tua provenienza",
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
          title: "Qual \u00e8 il tuo status da richiedente?",
          label: "Seleziona il tuo status",
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
              label: "Sto rinnovando il mio permesso di soggiorno",
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
              label: "Sono in attesa di un permesso per lavoro",
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
          title: "Qual \u00e8 il tuo stato?",
          label: "Seleziona il tuo status",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "Lavoratore",
              nextQuestion: 4,
              documentazione: [
                "documento di identit\u00c3\u00a0.*",
                " documentazione comprovante la qualit\u00c3\u00a0 di lavoratore.*",
                " copia degli atti originali, tradotti e legalizzati, comprovanti lo stato civile e la composizione della famiglia.**",
              ],
            },
            {
              id: "f.i",
              label: "Disoccupato",
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
              label: "Parente di (lavoratore, studente ecc.)",
              documentazione: [
                "copia di un documento di identit\u00c3\u00a0 valido.*",
                "copia degli atti originali di soggiorno.*",
              ],
              nextQuestion: 4,
            },
            {
              id: "worker-student",
              label: "Studente lavoratore",
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
          title: "Da dove ti trasferisci?",
          label: "Seleziona da dove ti stai muovendo",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "Stato estero",
              nextQuestion: 7,
            },
            {
              id: "C1_1_3",
              label: "Zona AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_1",
              label: "Comune diverso Italiano",
              nextQuestion: 63,
            },
            {
              id: "C1_1_4",
              label: "Stesso comune interessato",
              nextQuestion: 8,
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
          title: "Da quale Paese provieni?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "scrivi il tuo paese",
              type: "autocomplete",
              helperText: "Ex. Ghana, Francia, Russia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Da quale paese provieni?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "Scrivi il tuo paese",
              type: "text",
              helperText: "Ex. Ghana, Francia, Russia",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "Da quale comune provieni?",
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
              label: "Nome",
              type: "text",
              helperText: "Ex. Moussa",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "Cognome",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Data di nascita",
              type: "date",
              helperText: "Ex. 15/05/1998",
              validate: "requiredField",
              isRequired: true,
              max: "2100-01-01",
            },
            {
              id: "Luogo di nascita",
              label: "Luogo di nascita",
              type: "text",
              helperText: "Ex. Roma, Berlino, Parigi",
              autocomplete: true,
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Sesso",
              label: "Genere",
              type: "select",
              options: ["Maschile", "Femminile"],
              validate: "requiredField",
              isRequired: true,
              helperText: "seleziona il tuo genere",
            },
            {
              id: "Stato civile",
              label: "Stato civile",
              type: "select",
              options: [
                "Celibe",
                "Nubile",
                "Sposato/a",
                "Divorziato/a",
                "Vedovo/a",
              ],
              helperText: "seleziona il tuo stato civile",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cittadinanza",
              label: "Cittadinanza",
              type: "text",
              helperText: "Ex. Francese",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "Codice Fiscale",
              type: "text",
              helperText: "Ex. RSSMRA98E15G273F",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title: "Hai un lavoro?",
          id: 9,
          controller: true,
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
          label: "Seleziona il tuo status",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "Casalinga",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "Studente",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "Disoccupato",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "In pensione",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "Altro",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title: "Qual \u00e8 il tuo status professionale?",
          label: "Seleziona il tuo status",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "Operaio e assimilati",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_4",
              label: "Studente Lavoratore",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label: "Coadiuvante familiare",
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
              label: "Dirigente Impiegato",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          title: "Hai una patente di guida italiana?",
          controller: true,
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
              type: "text",
              helperText: "Ex. 91828930",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Patente tipo",
              label: "Tipo di licenza",
              type: "text",
              helperText: "Ex. A,B,C",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di rilascio",
              label: "Data di rilascio",
              type: "Date",
              helperText: "Data di rilascio",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Organo di rilascio",
              label: "Ente emittente",
              type: "text",
              helperText: "Motorizzazione",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Provincia di",
              label: "Provincia",
              type: "text",
              helperText: "Palermo",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "select",
          title: "Qual \u00e8 il tuo livello di istruzione?",
          label: "Seleziona il tuo livello di istruzione",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label: "Nessuno / Licenza Elementare",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label: "Licenza media",
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
              label: "Laurea Triennale",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label: "Laurea Magistrale",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_16",
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
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "Provincia",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "Indirizzo",
              type: "text",
              helperText: "Via della libert\u00e0",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label: "Numero civico",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "Scala",
              type: "text",
              helperText: "Ex. 1\u00ba",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Piano",
              label: "Piano",
              type: "text",
              helperText: "Es. 2",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "Interno",
              type: "text",
              helperText: "Ex. A",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "Ti muovi da solo?",
          controller: true,
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
          title: "In quanti si sposteranno oltre a te?",
          controller: true,
          id: 18,
          nextQuestion: 41,
        },
        {
          type: "checkbox",
          title: "C'\u00e8 gi\u00e0 qualcuno che risiede nella propriet\u00e0?",
          controller: true,
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
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label: "Qual \u00e8 il suo cognome",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label: "Data di nascita",
              type: "date",
              helperText: "GG/MM/AAAA",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Luogo di nascita",
              type: "text",
              helperText: "Indichi la sua citt\u00e0 di nascita",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Specificare il rapporto di parentela",
              type: "select",
              helperText: "Rapporto di parentela",
              validate: "requiredField",
              isRequired: false,
              options: [
                "Nessuno",
                "Madre",
                "Padre",
                "Figlio",
                "Figlia",
                "Fratello",
                "Sorella",
                "Nonno",
                "Nonna",
                "Zio",
                "Zia",
                "Cugino",
                "Cugina",
              ],
            },
          ],
        },
        {
          type: "form",
          title: "Il tuo contatto",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label: "Numero di telefono",
              type: "number",
              helperText: "0916654421",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label: "Numero di cellulare",
              type: "tel",
              helperText: "3332423421",
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
          title: "A quale categoria appartiene l'abitazione?",
          label: "Seleziona il tuo status",
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
              helperText: "Ex. F205",
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "Foglio",
              type: "tel",
              helperText: "Ex. 1234",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label: "Parziale o mappale",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              helperText: "Ex. 1234",
            },
            {
              id: "subalterno",
              label: "Subalterno",
              type: "text",
              validate: "requiredField",
              helperText: "Ex. 1234",
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
              validate: "requiredField",
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
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "Numero",
              type: "number",
              validate: "requiredField",
              isRequired: true,
              helperText: "Ex. 1234",
            },
          ],
        },
        {
          type: "form",
          title: "Dettagli del contratto",
          id: 27,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label: "Indicare gli estremi dell'atto e riferimenti catastali",
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
          controller: true,
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
          nextQuestion: 33,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label: "Nome e cognome",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
              helperText: "Mario Rossi",
            },
            {
              id: "F",
              label: "Codice Fiscale",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
              helperText: "Ex. RSSMRA80A01H501T",
            },
            {
              id: "Relazione_di_parentela",
              label: "Relazione di parentela",
              type: "select",
              validate: "requiredField",
              isRequired: true,
              helperText: "Ex. Coniuge",
            },
          ],
        },
        {
          type: "longform",
          title:
            "E' necessario attivare l'abbonamento TARI compila i seguenti campi",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label: "Foglio (Foglio)",
              type: "text",
              isRequired: true,
              validate: "requiredField",
              helperText: "Ex. 36",
            },
            {
              id: "particella10",
              label: "particella",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              helperText: "Ex. 1\u00ba",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label: "Data decorrenza occupazione",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "Data decorrenza occupazione",
            },
            {
              id: "superficie in mq",
              label: "superficie in mq",
              type: "number",
              isRequired: true,
              validate: "requiredField",
              helperText: "Ex. 100",
            },
          ],
        },
        {
          type: "select",
          title: "Titolo dell'occupazione",
          label: "Scegli il titolo",
          id: 33,
          answers: [
            {
              selected: false,
              id: "C10_1_1",
              label: "Propriet\u00e0",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C10_1_2",
              label: "Locazione",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C10_1_3",
              label: "Comodato d'uso",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C10_1_4",
              label: "Usufrutto",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C10_1_5",
              label: "Assegnazione di alloggi di un ente pubblico",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Note",
          id: 34,
          parentId: 33,
          nextQuestion: 17,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText: "Aggiungi qui note integrative che vuoi presentare",
              isRequired: false,
              autocomplete: false,
            },
          ],
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
              label: "Estoy esperando un permiso de trabajo",
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
              label: "Desempleados",
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
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label: "\u00bfCu\u00e1l es su apellido?",
              type: "text",
              helperText: "Ex. Semprini",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "Fecha de nacimiento",
              type: "date",
              helperText: "fecha de nacimiento",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "\u00bfD\u00f3nde naci\u00f3?",
              type: "text",
              helperText: "Indique su ciudad de nacimiento",
              autocomplete: true,
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "G\u00e9nero",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText: "seleccione su g\u00e9nero",
            },
            {
              id: "Stato civile",
              label: "\u00bfSu estado civil?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "seleccione su estado",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label: "Ciudadan\u00eda",
              type: "text",
              helperText: "Ex. Ghanesa, Francesa, Rusa...",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "C\u00f3digo fiscal",
              type: "text",
              helperText: "Ex. R5MRI88L73G273ES",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          title: "\u00bfTienes un trabajo?",
          controller: true,
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
          controller: true,
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
              validate: "requiredField",
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
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label: "Organismo emisor",
              type: "text",
              helperText: "Motorizaci\u00f3n",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "Provincia",
              type: "text",
              helperText: "Palermo",
              validate: "requiredField",
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
              id: "C1_2_16",
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
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "Provincia",
              type: "text",
              helperText: "Ex. Palermo",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "Direcci\u00f3n",
              type: "text",
              helperText: "Via della libert\u00c3\u00a2a",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label: "N\u00famero de identificaci\u00f3n",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "Escaleras",
              type: "number",
              helperText: "Ex. 1er.",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Piano",
              label: "Suelo",
              type: "number",
              helperText: "Ej. 2",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "Unidad",
              type: "text",
              helperText: "Ex. A",
              isRequired: false,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "checkbox",
          title: "\u00bfTe mudas solo?",
          controller: true,
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
          controller: true,
          id: 18,
          nextQuestion: 41,
        },
        {
          type: "checkbox",
          title: "\u00bfReside ya alguien en el inmueble?",
          controller: true,
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
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label: "\u00bfCu\u00e1l es su apellido?",
              type: "text",
              helperText: "Ex. Semprini",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label: "Fecha de nacimiento",
              type: "date",
              helperText: "DD/MM/AAAA",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "Lugar de nacimiento",
              type: "text",
              helperText: "Indique su ciudad de nacimiento",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label: "Especifique la relaci\u00f3n familiar",
              type: "text",
              helperText:
                "Si hay alguna relaci\u00f3n familiar, deje este campo vac\u00edo",
              isRequired: false,
              validate: "requiredField",
              options: [
                "ninguno",
                "madre",
                "padre",
                "hijo",
                "hija",
                "hermano",
                "hermana",
                "abuelo",
                "abuela",
                "tío",
                "tía",
                "primo",
              ],
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
              validate: "requiredField",
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
              validate: "requiredField",
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
          controller: true,
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
              helperText: "Ex. R5MRI88L73G273ES",
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
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "particella",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              helperText: "Ex. 1er.",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label: "Datos de ocupaci\u00f3n fina",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "Datos de ocupaci\u00f3n fina",
            },
            {
              id: "superficie in mq",
              label: "superficie en metros cuadrados",
              type: "number",
              isRequired: true,
              validate: "requiredField",
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
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "Ubicaci\u00f3n",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label: "pr\u00e9stamo para su uso",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "usufructo",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "Cesi\u00f3n de vivienda de un organismo p\u00fablico",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "Notas adicionales ",
          id: 34,
          parentId: 33,
          nextQuestion: 17,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText:
                "Agregue aquí las notas adicionales que desea presentar",
              isRequired: false,
              autocomplete: false,
            },
          ],
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
                "документ, що посвідчує особу заявника та осіб, які змінюють місце проживання разом із заявником",
                "не забудьте підписати документ",
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
                "копія вашого паспорта.*",
                "карта перебування члена сім’ї громадянина ЄС, або квитанція про видачу карти перебування.*",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "I have the Residence permit",
              label:
                "\u042f \u043c\u0430\u044e \u0434\u043e\u0437\u0432\u0456\u043b \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 4,
              documentazione: [
                "копія дійсного паспорта або еквівалентного документа.* ",
                "копія дійсного дозволу на проживання.*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.**",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label:
                "\u041f\u043e\u043d\u043e\u0432\u043b\u044e\u044e \u0434\u043e\u0437\u0432\u0456\u043b \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 4,
              documentazione: [
                "копія дійсного паспорта або еквівалентного документа.* ",
                "копія простроченої посвідки на проживання.*",
                "квитанція про продовження посвідки на проживання*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.*",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label:
                "\u0427\u0435\u043a\u0430\u044e \u043f\u043e\u0441\u0432\u0456\u0434\u043a\u0443 \u043d\u0430 \u043f\u0440\u043e\u0436\u0438\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 4,
              documentazione: [
                "копія дійсного паспорта або еквівалентного документа.* ",
                "копія договору про проживання в імміграційній службі *",
                "квитанція, видана поштою, що засвідчує подачу заяви про дозвіл на проживання.*",
                "заявка на видачу дозволу на проживання для підпорядкованої роботи, подана до Sportello Unico.*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.*",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "Awaiting family reunification",
              label:
                "\u0412 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u043d\u0456 \u0432\u043e\u0437\u0437'\u0454\u0434\u043d\u0430\u043d\u043d\u044f \u0441\u0456\u043c'\u0457",
              nextQuestion: 4,
              documentazione: [
                "копія дійсного паспорта або еквівалентного документа.* ",
                "незавірена ксерокопія допуску, виданого єдиним столом.*",
                "квитанція, видана поштою, що засвідчує подання запиту на дозвіл.*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.*",
                "не забудьте підписати документ",
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
                "документ, що посвідчує особу.*",
                "документація, що підтверджує кваліфікацію працівників.*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.*",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "f.i",
              label: "Безробітний",
              nextQuestion: 4,
              documentazione: [
                "копія дійсного посвідчення особи.*",
                "самодекларування володіння економічними ресурсами.*",
                "копія медичного страхування.*",
                "перекладені та легалізовані копії оригіналів документів, що підтверджують цивільний стан та склад сім’ї.*",
                "не забудьте підписати документ",
              ],
            },
            {
              id: "student",
              label: "\u0421\u0442\u0443\u0434\u0435\u043d\u0442",
              documentazione: [
                "копія дійсного документа, що посвідчує особу.*",
                "документи, що підтверджують зарахування до школи або професійно-технічного навчального закладу.*",
                "самодекларування володіння економічними ресурсами.*",
                "покриття ризиків для здоров'я.*",
                "не забудьте підписати документ",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label:
                "\u0420\u043e\u0434\u0438\u0447 (\u043f\u0440\u0430\u0446\u0456\u0432\u043d\u0438\u043a, \u0441\u0442\u0443\u0434\u0435\u043d\u0442 \u0442\u043e\u0449\u043e)",
              documentazione: [
                "копія дійсного документа, що посвідчує особу.*",
                "копія оригіналу акта про проживання.*",
                "не забудьте підписати документ",
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
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label:
                "\u042f\u043a \u0442\u0432\u043e\u0454 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0421\u0435\u043c\u043f\u0440\u0456\u043d\u0456",
              validate: "requiredField",
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
              validate: "requiredField",
            },
            {
              id: "Sesso",
              label: "\u0421\u0442\u0430\u0442\u044c",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText:
                "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0441\u0442\u0430\u0442\u044c",
            },
            {
              id: "Stato civile",
              label:
                "\u0442\u0432\u0456\u0439 \u0441\u0456\u043c\u0435\u0439\u043d\u0438\u0439 \u0441\u0442\u0430\u043d?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText:
                "\u0432\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u0441\u0432\u0456\u0439 \u0441\u0442\u0430\u0442\u0443\u0441",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label:
                "\u0413\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u0442\u0432\u043e",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0444\u0440\u0430\u043d\u0446\u0443\u0437\u044c\u043a\u0438\u0439",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label: "\u041a\u043e\u0434\u0435\u043a\u0441 Fiscale",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. R5MRI88L73G273ES",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
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
          controller: true,
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
              validate: "requiredField",
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
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label:
                "\u041e\u0440\u0433\u0430\u043d \u0432\u0438\u0434\u0430\u0447\u0456",
              type: "text",
              helperText: "Motorizzazione",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "\u043f\u0440\u043e\u0432\u0456\u043d\u0446\u0456\u044f",
              type: "text",
              helperText: "\u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              validate: "requiredField",
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
              id: "C1_2_16",
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
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "\u043f\u0440\u043e\u0432\u0456\u043d\u0446\u0456\u044f",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u041f\u0430\u043b\u0435\u0440\u043c\u043e",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "\u0410\u0434\u0440\u0435\u0441\u0430",
              type: "text",
              helperText: "Via della libert\u00c3",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label:
                "\u0413\u0440\u043e\u043c\u0430\u0434\u044f\u043d\u0441\u044c\u043a\u0438\u0439 \u043d\u043e\u043c\u0435\u0440",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "\u0421\u0445\u043e\u0434\u0438",
              type: "number",
              helperText: "\u041d\u0430\u043f\u0440. 1-\u0439",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Piano",
              label: "\u043f\u0456\u0434\u043b\u043e\u0433\u0430",
              type: "number",
              helperText: "\u041d\u0430\u043f\u0440. 2",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "\u043e\u0434\u0438\u043d\u0438\u0446\u044f",
              type: "text",
              helperText: "\u041d\u0430\u043f\u0440. \u0410",
              isRequired: false,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
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
          controller: true,
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
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label:
                "\u042f\u043a\u0435 \u0439\u043e\u0433\u043e/\u0457\u0457 \u043f\u0440\u0456\u0437\u0432\u0438\u0449\u0435",
              type: "text",
              helperText:
                "\u041d\u0430\u043f\u0440. \u0421\u0435\u043c\u043f\u0440\u0456\u043d\u0456",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              type: "date",
              helperText: "\u0414\u0414/\u041c\u041c/\u0420\u0420\u0420\u0420",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label:
                "\u041c\u0456\u0441\u0446\u0435 \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              type: "text",
              helperText:
                "\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0439\u043e\u0433\u043e/\u0457\u0457 \u043c\u0456\u0441\u0442\u043e \u043d\u0430\u0440\u043e\u0434\u0436\u0435\u043d\u043d\u044f",
              isRequired: true,
              validate: "requiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label:
                "\u0412\u043a\u0430\u0436\u0456\u0442\u044c \u0440\u043e\u0434\u0438\u043d\u043d\u0456 \u0441\u0442\u043e\u0441\u0443\u043d\u043a\u0438",
              type: "select",
              options: [
                "жоден",
                "мати",
                "батько",
                "син",
                "дочка",
                "брат",
                "сестра",
                "дідусь",
                "бабуся",
                "дядько",
                "тітка",
                "двоюрідний брат",
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
              validate: "dateValidation",
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
              validate: "dateValidation",
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
          controller: true,
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
              helperText: "\u041d\u0430\u043f\u0440. R5MRI88L73G273ES",

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
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "\u0447\u0430\u0441\u0442\u0438\u043d\u043a\u0438",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label:
                "\u0414\u0430\u0442\u0430 \u043d\u0430\u0431\u0443\u0442\u0442\u044f \u0447\u0438\u043d\u043d\u043e\u0441\u0442\u0456 \u043e\u043a\u0443\u043f\u0430\u0446\u0456\u0457",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "ERROR TRANSLATING",
            },
            {
              id: "superficie in mq",
              label:
                "\u043f\u043e\u0432\u0435\u0440\u0445\u043d\u044f \u0432 \u043a\u0432",
              type: "number",
              isRequired: true,
              validate: "requiredField",
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
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label:
                "\u0420\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label:
                "\u043f\u043e\u0437\u0438\u043a\u0430 \u0432 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "\u0443\u0437\u0443\u0444\u0440\u0443\u043a\u0442",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u041f\u0440\u0438\u0437\u043d\u0430\u0447\u0435\u043d\u043d\u044f \u0436\u0438\u0442\u043b\u0430 \u0434\u0435\u0440\u0436\u0430\u0432\u043d\u043e\u0433\u043e \u043e\u0440\u0433\u0430\u043d\u0443",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "додаткові нотатки",
          id: 34,
          parentId: 33,
          nextQuestion: 1,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText:
                "Додайте сюди додаткові примітки, які ви хочете представити",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
    Tamil: {
      questions: [
        {
          type: "select",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bc1\u0b95\u0bcd\u0b95\u0bc1 \u0b8e\u0ba9\u0bcd\u0ba9 \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8 \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label:
                "\u0ba8\u0bbe\u0ba9\u0bcd EU \u0b85\u0bb2\u0bcd\u0bb2\u0bbe\u0ba4 \u0b95\u0bc1\u0b9f\u0bbf\u0bae\u0b95\u0ba9\u0bcd",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label:
                "\u0ba8\u0bbe\u0ba9\u0bcd \u0b92\u0bb0\u0bc1 \u0b87\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bbf\u0baf \u0b95\u0bc1\u0b9f\u0bbf\u0bae\u0b95\u0ba9\u0bcd",
              nextQuestion: 4,
              documentazione: [
                "விண்ணப்பதாரர் மற்றும் விண்ணப்பதாரருடன் சேர்ந்து குடியிருப்பை மாற்றும் நபர்களின் அடையாள ஆவணம்",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "I am a EU citizen",
              label:
                "\u0ba8\u0bbe\u0ba9\u0bcd \u0b92\u0bb0\u0bc1 \u0b90\u0bb0\u0bcb\u0baa\u0bcd\u0baa\u0bbf\u0baf \u0b92\u0ba9\u0bcd\u0bb1\u0bbf\u0baf \u0b95\u0bc1\u0b9f\u0bbf\u0bae\u0b95\u0ba9\u0bcd",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8 \u0b8e\u0ba9\u0bcd\u0ba9?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label:
                "\u0b90\u0bb0\u0bcb\u0baa\u0bcd\u0baa\u0bbf\u0baf \u0b92\u0ba9\u0bcd\u0bb1\u0bbf\u0baf \u0b95\u0bc1\u0b9f\u0bbf\u0bae\u0b95\u0ba9\u0bcd \u0b89\u0bb1\u0bb5\u0bbf\u0ba9\u0bb0\u0bcd",
              nextQuestion: 4,
              documentazione: [
                "உங்கள் பாஸ்போர்ட்டின் நகல்.*",
                "ஐரோப்பிய ஒன்றிய குடிமகனின் குடும்ப உறுப்பினரின் வதிவிட அட்டை அல்லது குடியிருப்பு அட்டை வழங்குவதற்கான விண்ணப்பத்தின் ரசீது.*",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "I have the Residence permit",
              label:
                "\u0b8e\u0ba9\u0bcd\u0ba9\u0bbf\u0b9f\u0bae\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0b85\u0ba9\u0bc1\u0bae\u0ba4\u0bbf \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bc1",
              nextQuestion: 4,
              documentazione: [
                "செல்லுபடியாகும் பாஸ்போர்ட் அல்லது அதற்கு சமமான ஆவணத்தின் நகல்.* ",
                "செல்லுபடியாகும் குடியிருப்பு அனுமதியின் நகல்.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label:
                "\u0ba8\u0bbe\u0ba9\u0bcd \u0b8e\u0ba9\u0ba4\u0bc1 \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0b85\u0ba9\u0bc1\u0bae\u0ba4\u0bbf\u0baf\u0bc8 \u0baa\u0bc1\u0ba4\u0bc1\u0baa\u0bcd\u0baa\u0bbf\u0ba4\u0bcd\u0ba4\u0bc1 \u0bb5\u0bb0\u0bc1\u0b95\u0bbf\u0bb1\u0bc7\u0ba9\u0bcd",
              nextQuestion: 4,
              documentazione: [
                "செல்லுபடியாகும் பாஸ்போர்ட் அல்லது அதற்கு சமமான ஆவணத்தின் நகல்.* ",
                "காலாவதியான குடியிருப்பு அனுமதியின் நகல்.*",
                "குடியிருப்பு அனுமதியை புதுப்பிப்பதற்கான விண்ணப்ப ரசீது.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label:
                "\u0ba8\u0bbe\u0ba9\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1 \u0b85\u0ba9\u0bc1\u0bae\u0ba4\u0bbf\u0b95\u0bcd\u0b95\u0bbe\u0b95 \u0b95\u0bbe\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0bc7\u0ba9\u0bcd",
              nextQuestion: 4,
              documentazione: [
                "செல்லுபடியாகும் பாஸ்போர்ட் அல்லது அதற்கு சமமான ஆவணத்தின் நகல்.* ",
                "ஸ்போர்ட்டெல்லோ யூனிகோவில் குடியேற்ற ஒப்பந்தத்தின் நகல்*",
                "குடியிருப்பு அனுமதிக்கான விண்ணப்பத்தை சமர்ப்பித்ததை சான்றளித்து தபால் அலுவலகத்தால் வழங்கப்பட்ட ரசீது.*",
                "ஸ்போர்ட்டெல்லோ யூனிகோவிற்கு கீழ்படிந்த பணிக்கான குடியிருப்பு அனுமதி வழங்குவதற்கான விண்ணப்பம்.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "Awaiting family reunification",
              label:
                "\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa \u0b92\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bc8\u0b95\u0bcd\u0b95\u0bbe\u0b95 \u0b95\u0bbe\u0ba4\u0bcd\u0ba4\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bc1",
              nextQuestion: 4,
              documentazione: [
                "செல்லுபடியாகும் பாஸ்போர்ட் அல்லது அதற்கு சமமான ஆவணத்தின் நகல்.* ",
                "சிங்கிள் டெஸ்க் வழங்கிய அனுமதியின் அங்கீகரிக்கப்படாத நகல்.*",
                "அனுமதிக்கான கோரிக்கையை சமர்ப்பித்ததை சான்றளித்து தபால் அலுவலகத்தால் வழங்கப்பட்ட ரசீது.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
          ],
          parentId: 1,
        },
        {
          type: "select",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8 \u0b8e\u0ba9\u0bcd\u0ba9?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "\u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bbe\u0bb3\u0bbf",
              nextQuestion: 4,
              documentazione: [
                "சரியான ஐடியின் நகல்.*",
                "தொழிலாளியின் தரத்தை நிரூபிக்கும் ஆவணம்.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "f.i",
              label: "வேலையில்லாதவர்",
              nextQuestion: 4,
              documentazione: [
                "சரியான ஐடியின் நகல்.*",
                "பொருளாதார வளங்களை வைத்திருப்பதற்கான சுய அறிவிப்பு.*",
                "ஒரு சுகாதார காப்பீட்டின் நகல்.*",
                "அசல் ஆவணங்களின் நகல், மொழிபெயர்க்கப்பட்டு சட்டப்பூர்வமாக்கப்பட்டது, சிவில் நிலை மற்றும் குடும்ப அமைப்பை நிரூபிக்கிறது.**",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
            },
            {
              id: "student",
              label: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd",
              documentazione: [
                "சரியான அடையாள ஆவணத்தின் நகல்.*",
                "பள்ளி அல்லது தொழிற்பயிற்சி நிறுவனத்தில் சேர்க்கையை நிரூபிக்கும் ஆவணம்.*",
                "பொருளாதார வளங்களை வைத்திருப்பதற்கான சுய அறிவிப்பு.*",
                "சுகாதார அபாயங்களின் கவரேஜ்.*",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label:
                "\u0b89\u0bb1\u0bb5\u0bbf\u0ba9\u0bb0\u0bcd (\u0bb5\u0bc7\u0b95\u0bcd\u0b95\u0bb0\u0bcd, \u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd \u0baa\u0bcb\u0ba9\u0bcd\u0bb1\u0bb5\u0bc8..)",
              documentazione: [
                "சரியான அடையாள ஆவணத்தின் நகல்.*",
                "வசிப்பிடத்தின் அசல் பத்திரங்களின் நகல்.*",
                "ஆவணத்தில் கையொப்பமிட நினைவில் கொள்ளுங்கள்",
              ],
              nextQuestion: 4,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b8e\u0b99\u0bcd\u0b95\u0bbf\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bc1 \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "\u0bb5\u0bc6\u0bb3\u0bbf\u0ba8\u0bbe\u0b9f\u0bc1",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label: "\u0b87\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bbf\u0baf AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label: "\u0b85\u0ba4\u0bc7 \u0ba8\u0b95\u0bb0\u0bae\u0bcd",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label:
                "\u0bb5\u0bc6\u0bb5\u0bcd\u0bb5\u0bc7\u0bb1\u0bc1 \u0ba8\u0b95\u0bb0\u0bae\u0bcd",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label:
                "\u0bae\u0bc1\u0ba4\u0bb2\u0bcd \u0b95\u0bcb\u0bb0\u0bbf\u0b95\u0bcd\u0b95\u0bc8",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "\u0b8e\u0ba8\u0bcd\u0ba4 \u0ba8\u0bbe\u0b9f\u0bc1?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbe\u0b9f\u0bcd\u0b9f\u0bc8 \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
              type: "autocomplete",
              helperText:
                "Ex. \u0b95\u0bbe\u0ba9\u0bbe, \u0baa\u0bbf\u0bb0\u0bbe\u0ba9\u0bcd\u0bb8\u0bcd, \u0bb0\u0bb7\u0bcd\u0baf\u0bbe",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u0b8e\u0ba8\u0bcd\u0ba4 \u0ba8\u0bbe\u0b9f\u0bc1?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0bae\u0bc1\u0ba4\u0bb2\u0bbf\u0bb2\u0bcd \u0ba8\u0bbe\u0b9f\u0bcd\u0b9f\u0bc8 \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
              type: "text",
              helperText:
                "Ex. \u0b95\u0bbe\u0ba9\u0bbe, \u0baa\u0bbf\u0bb0\u0bbe\u0ba9\u0bcd\u0bb8\u0bcd, \u0bb0\u0bb7\u0bcd\u0baf\u0bbe",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u0b8e\u0ba8\u0bcd\u0ba4 \u0ba8\u0b95\u0bb0\u0bae\u0bcd?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0b95\u0bb0\u0ba4\u0bcd\u0ba4\u0bc8 \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
              type: "text",
              helperText:
                "Ex. \u0b9f\u0bc1\u0bb0\u0bbf\u0ba9\u0bcd, \u0bae\u0bbf\u0bb2\u0ba9\u0bcd, \u0baa\u0bbe\u0bb5\u0bbf\u0baf\u0bbe",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bc8\u0baa\u0bcd \u0baa\u0bb1\u0bcd\u0bb1\u0bbf \u0baa\u0bc7\u0b9a\u0bb2\u0bbe\u0bae\u0bcd",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label:
                "\u0b89\u0ba9\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0b8e\u0ba9\u0bcd\u0ba9?",
              type: "text",
              helperText: "Ex. \u0bae\u0bcc\u0b9a\u0bbe",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0baa\u0bcd\u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0b8e\u0ba9\u0bcd\u0ba9",
              type: "text",
              helperText:
                "Ex. \u0b9a\u0bc6\u0bae\u0bcd\u0baa\u0bcd\u0bb0\u0bbf\u0ba9\u0bbf",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label:
                "\u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0ba4\u0bc7\u0ba4\u0bbf",
              type: "date",
              helperText:
                "\u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0ba4\u0bc7\u0ba4\u0bbf",
              validate: "dateValidation",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label:
                "\u0ba8\u0bc0 \u0b8e\u0b99\u0bcd\u0b95\u0bc7 \u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4\u0bbe\u0baf\u0bcd?",
              type: "autocomplete",
              helperText:
                "\u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0ba8\u0b95\u0bb0\u0ba4\u0bcd\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
              autocomplete: true,
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "\u0baa\u0bbe\u0bb2\u0bbf\u0ba9\u0bae\u0bcd",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bbe\u0bb2\u0bbf\u0ba9\u0ba4\u0bcd\u0ba4\u0bc8 \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1\u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
            },
            {
              id: "Stato civile",
              label:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bbf\u0bb0\u0bc1\u0bae\u0ba3 \u0ba8\u0bbf\u0bb2\u0bc8?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText:
                "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8 \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label:
                "\u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bc1\u0bb0\u0bbf\u0bae\u0bc8",
              type: "text",
              helperText:
                "Ex. \u0baa\u0bbf\u0bb0\u0bc6\u0b9e\u0bcd\u0b9a\u0bc1",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label:
                "\u0b95\u0bcb\u0b9f\u0bbf\u0bb8\u0bcd \u0b83\u0baa\u0bbf\u0bb8\u0bcd\u0b95\u0bc7\u0bb2\u0bcd",
              type: "text",
              helperText: "முன்னாள். R5MRI88L73G273ES",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0b89\u0ba9\u0b95\u0bcd\u0b95\u0bc1 \u0bb5\u0bc7\u0bb2\u0bc8\u0baf\u0bbf\u0bb0\u0bc1\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0ba4\u0bbe?",
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
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd \u0b85\u0bb2\u0bcd\u0bb2\u0bbe\u0ba4 \u0ba8\u0bbf\u0bb2\u0bc8 \u0b8e\u0ba9\u0bcd\u0ba9?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label:
                "\u0b87\u0bb2\u0bcd\u0bb2\u0ba4\u0bcd\u0ba4\u0bb0\u0b9a\u0bbf",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "\u0bae\u0bbe\u0ba3\u0bb5\u0bb0\u0bcd",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label:
                "\u0bb5\u0bc7\u0bb2\u0bc8\u0baf\u0bbf\u0bb2\u0bcd\u0bb2\u0bbe\u0ba4\u0bb5\u0bb0\u0bcd",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label:
                "\u0b93\u0baf\u0bcd\u0bb5\u0bc1 \u0baa\u0bc6\u0bb1\u0bcd\u0bb1\u0bb5\u0bb0\u0bcd",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "\u0bae\u0bb1\u0bcd\u0bb1\u0bb5\u0bc8",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8 \u0b8e\u0ba9\u0bcd\u0ba9?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "\u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bbe\u0bb3\u0bbf",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label:
                "\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa \u0baa\u0ba3\u0bbf\u0baf\u0bbe\u0bb3\u0bb0\u0bcd",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label:
                "\u0b83\u0baa\u0bcd\u0bb0\u0bc0\u0bb2\u0bbe\u0ba9\u0bcd\u0bb8\u0bcd / \u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bcd\u0bae\u0bc1\u0ba9\u0bc8\u0bb5\u0bcb\u0bb0\u0bcd",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label:
                "\u0b9a\u0bc1\u0baf\u0ba4\u0bc6\u0bbe\u0bb4\u0bbf\u0bb2\u0bcd",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label:
                "\u0ba8\u0bbf\u0bb0\u0bcd\u0bb5\u0bbe\u0b95\u0bbf / \u0baa\u0ba3\u0bbf\u0baf\u0bbe\u0bb3\u0bb0\u0bcd",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0b9f\u0bae\u0bcd \u0b87\u0ba4\u0bcd\u0ba4\u0bbe\u0bb2\u0bbf\u0baf \u0b93\u0b9f\u0bcd\u0b9f\u0bc1\u0ba8\u0bb0\u0bcd \u0b89\u0bb0\u0bbf\u0bae\u0bae\u0bcd \u0b89\u0bb3\u0bcd\u0bb3\u0ba4\u0bbe?",
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
            "\u0b93\u0b9f\u0bcd\u0b9f\u0bc1\u0ba8\u0bb0\u0bcd \u0b89\u0bb0\u0bbf\u0bae \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "\u0b8e\u0ba3\u0bcd",
              type: "text",
              helperText: "Ex. 91828930",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label: "\u0b89\u0bb0\u0bbf\u0bae\u0bae\u0bcd \u0bb5\u0b95\u0bc8",
              type: "text",
              helperText: "Ex. A,B,C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label:
                "\u0bb5\u0bc6\u0bb3\u0bbf\u0bb5\u0bb0\u0bc1\u0bae\u0bcd \u0ba4\u0bc7\u0ba4\u0bbf",
              type: "Date",
              helperText:
                "\u0bb5\u0bc6\u0bb3\u0bbf\u0bb5\u0bb0\u0bc1\u0bae\u0bcd \u0ba4\u0bc7\u0ba4\u0bbf",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label:
                "\u0b89\u0b9f\u0bb2\u0bcd \u0bb5\u0bb4\u0b99\u0bcd\u0b95\u0bc1\u0ba4\u0bb2\u0bcd",
              type: "text",
              helperText: "Motorizazione",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "\u0bae\u0bbe\u0b95\u0bbe\u0ba3\u0bae\u0bcd",
              type: "text",
              helperText: "\u0baa\u0bb2\u0bc7\u0bb0\u0bcd\u0bae\u0bcb",
              validate: "requiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b95\u0bb2\u0bcd\u0bb5\u0bbf \u0ba8\u0bbf\u0bb2\u0bc8 \u0b8e\u0ba9\u0bcd\u0ba9?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0b9f\u0bcd\u0b9f\u0baa\u0bcd\u0baa\u0b9f\u0bbf\u0baa\u0bcd\u0baa\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label:
                "\u0b86\u0bb0\u0bae\u0bcd\u0baa \u0baa\u0bb3\u0bcd\u0bb3\u0bbf",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label:
                "\u0bae\u0bc7\u0bb2\u0bcd\u0ba8\u0bbf\u0bb2\u0bc8\u0baa\u0bcd \u0baa\u0bb3\u0bcd\u0bb3\u0bbf \u0b9a\u0bbe\u0ba9\u0bcd\u0bb1\u0bbf\u0ba4\u0bb4\u0bcd",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_13",
              label: "\u0b9f\u0bbf\u0baa\u0bcd\u0bb3\u0bae\u0bcb",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_14",
              label: "\u0b87\u0bb3\u0b99\u0bcd\u0b95\u0bb2\u0bc8",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label:
                "\u0bae\u0bc1\u0ba4\u0bc1\u0b95\u0bb2\u0bc8 \u0baa\u0b9f\u0bcd\u0b9f\u0bae\u0bcd",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_16",
              label: "Phd",
              nextQuestion: 16,
            },
          ],
          parentId: 9,
        },
        {
          type: "longform",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baa\u0bc1\u0ba4\u0bbf\u0baf \u0b95\u0bc1\u0b9f\u0bbf\u0baf\u0bbf\u0bb0\u0bc1\u0baa\u0bcd\u0baa\u0bc1",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "\u0ba8\u0b95\u0bb0\u0bae\u0bcd",
              type: "text",
              helperText: "Ex. \u0baa\u0bb2\u0bc7\u0bb0\u0bcd\u0bae\u0bcb",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "\u0bae\u0bbe\u0b95\u0bbe\u0ba3\u0bae\u0bcd",
              type: "text",
              helperText: "Ex. \u0baa\u0bb2\u0bc7\u0bb0\u0bcd\u0bae\u0bcb",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "\u0bae\u0bc1\u0b95\u0bb5\u0bb0\u0bbf",
              type: "text",
              helperText:
                "\u0b9f\u0bc6\u0bb2\u0bcd\u0bb2\u0bbe \u0bb2\u0bbf\u0baa\u0bb0\u0bcd\u0b9f\u0bcd\u0b9f\u0bbe \u0bb5\u0bb4\u0bbf\u0baf\u0bbe\u0b95",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label: "\u0b95\u0bc1\u0b9f\u0bbf\u0bae\u0bc8 \u0b8e\u0ba3\u0bcd",
              type: "text",
              helperText: "Ex. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label:
                "\u0baa\u0b9f\u0bbf\u0b95\u0bcd\u0b95\u0b9f\u0bcd\u0b9f\u0bc1\u0b95\u0bb3\u0bcd",
              type: "text",
              helperText: "Ex. 1\u0bb5\u0ba4\u0bc1",
            },
            {
              id: "Piano",
              label: "\u0ba4\u0bb0\u0bc8",
              type: "text",
              isRequired: true,
              helperText: "Ex. 2",
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "\u0b85\u0bb2\u0b95\u0bc1",
              type: "text",
              helperText: "Ex. 1",
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0ba8\u0bc0\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0ba9\u0bbf\u0baf\u0bbe\u0b95 \u0ba8\u0b95\u0bb0\u0bcd\u0b95\u0bbf\u0bb1\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bbe?",
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
          controller: true,
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0b85\u0bb0\u0bc1\u0b95\u0bbf\u0bb2\u0bcd \u0b8e\u0ba4\u0bcd\u0ba4\u0ba9\u0bc8 \u0baa\u0bc7\u0bb0\u0bcd?",
          id: 18,
          nextQuestion: 41,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0baf\u0bbe\u0bb0\u0bbe\u0bb5\u0ba4\u0bc1 \u0b8f\u0bb1\u0bcd\u0b95\u0ba9\u0bb5\u0bc7 \u0b85\u0ba8\u0bcd\u0ba4 \u0b9a\u0bca\u0ba4\u0bcd\u0ba4\u0bbf\u0bb2\u0bcd \u0bb5\u0b9a\u0bbf\u0b95\u0bcd\u0b95\u0bbf\u0bb1\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bbe?",
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
            "\u0b8e\u0b99\u0bcd\u0b95\u0bb3\u0bbf\u0b9f\u0bae\u0bcd \u0b95\u0bc2\u0bb1\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0baf\u0bbe\u0bb0\u0bcd (\u0b92\u0bb0\u0bc7 \u0b92\u0bb0\u0bc1 \u0b95\u0bc2\u0bb1\u0bc1)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label:
                "\u0b85\u0bb5\u0ba9\u0bcd/\u0b85\u0bb5\u0bb3\u0bcd \u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0b8e\u0ba9\u0bcd\u0ba9?",
              type: "text",
              helperText: "Ex. \u0bae\u0bcc\u0b9a\u0bbe",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label:
                "\u0b85\u0bb5\u0ba9\u0bcd/\u0b85\u0bb5\u0bb3\u0bcd \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0baa\u0bcd\u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0b8e\u0ba9\u0bcd\u0ba9",
              type: "text",
              helperText:
                "Ex. \u0b9a\u0bc6\u0bae\u0bcd\u0baa\u0bcd\u0bb0\u0bbf\u0ba9\u0bbf",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label:
                "\u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0ba4\u0bc7\u0ba4\u0bbf",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label:
                "\u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0b87\u0b9f\u0bae\u0bcd",
              type: "text",
              helperText:
                "\u0b85\u0bb5\u0bb0\u0bcd \u0baa\u0bbf\u0bb1\u0ba8\u0bcd\u0ba4 \u0ba8\u0b95\u0bb0\u0ba4\u0bcd\u0ba4\u0bc8\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd",
              isRequired: true,
              validate: "requiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00e0 residente",
              label:
                "\u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa \u0b89\u0bb1\u0bb5\u0bc8\u0b95\u0bcd \u0b95\u0bc1\u0bb1\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0b9f\u0bb5\u0bc1\u0bae\u0bcd",
              type: "select",
              options: [
                "இல்லை",
                "அம்மா",
                "அப்பா",
                "மகன்",
                "மகள்",
                "சகோதரன்",
                "சகோதரி",
                "தாத்தா",
                "பாட்டி",
                "மாமா",
                "அத்தை",
                "உறவினர்",
              ],
              helperText:
                "\u0b8f\u0ba4\u0bc7\u0ba9\u0bc1\u0bae\u0bcd \u0b87\u0bb0\u0bc1\u0ba8\u0bcd\u0ba4\u0bbe\u0bb2\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
              isRequired: false,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba4\u0bca\u0b9f\u0bb0\u0bcd\u0baa\u0bc1",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label:
                "\u0ba4\u0bc6\u0bbe\u0bb2\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label: "\u0b95\u0bc8\u0baa\u0bc7\u0b9a\u0bbf \u0b8e\u0ba3\u0bcd",
              type: "tel",
              helperText: "+203332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "emailPec",
              label:
                "\u0bae\u0bbf\u0ba9\u0bcd\u0ba9\u0b9e\u0bcd\u0b9a\u0bb2\u0bcd/\u0baa\u0bc6\u0b9a\u0bbf",
              type: "email",
              helperText: "test@email.com",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Fax",
              label: "\u0ba4\u0bca\u0bb2\u0bc8\u0ba8\u0b95\u0bb2\u0bcd",
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
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0bb5\u0bc0\u0b9f\u0bc1 \u0b8e\u0ba8\u0bcd\u0ba4 \u0bb5\u0b95\u0bc8\u0baf\u0bc8\u0b9a\u0bcd \u0b9a\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0ba4\u0bc1?",
          label:
            "\u0b89\u0b99\u0bcd\u0b95\u0bb3\u0bcd \u0ba8\u0bbf\u0bb2\u0bc8\u0baf\u0bc8\u0ba4\u0bcd \u0ba4\u0bc7\u0bb0\u0bcd\u0ba8\u0bcd\u0ba4\u0bc6\u0b9f\u0bc1\u0b95\u0bcd\u0b95\u0bb5\u0bc1\u0bae\u0bcd",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label:
                "\u0b87\u0bb2\u0bb5\u0b9a \u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bc1",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label: "\u0b9a\u0bca\u0ba8\u0bcd\u0ba4 \u0bb5\u0bc0\u0b9f\u0bc1",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "\u0bb5\u0bbe\u0b9f\u0b95\u0bc8",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "\u0baa\u0bc6\u0bbe\u0ba4\u0bc1 \u0bb5\u0bc0\u0b9f\u0bc1",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "\u0b89\u0baa\u0baf\u0bcb\u0b95\u0bae\u0bcd",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title:
            "\u0b92\u0baa\u0bcd\u0baa\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "\u0baa\u0bbf\u0bb0\u0bbf\u0bb5\u0bc1",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "\u0ba4\u0bbe\u0bb3\u0bcd",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label:
                "\u0baa\u0b95\u0bc1\u0ba4\u0bbf \u0b85\u0bb2\u0bcd\u0bb2\u0ba4\u0bc1 \u0bae\u0bc7\u0baa\u0bcd\u0baa\u0bb2\u0bcd",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label:
                "\u0b9a\u0baa\u0bbe\u0bb2\u0bcd\u0b9f\u0bb0\u0bcd\u0ba9\u0bcd",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0b92\u0baa\u0bcd\u0baa\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label:
                "\u0bb5\u0bb0\u0bc1\u0bb5\u0bbe\u0baf\u0bcd \u0bae\u0bc1\u0b95\u0bae\u0bc8",
              type: "text",
              helperText: "Ex. \u0baa\u0bb2\u0bc7\u0bb0\u0bcd\u0bae\u0bcb",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "\u0ba4\u0bc7\u0ba4\u0bbf",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "dateValidation",
              isRequired: true,
            },
            {
              id: "al n",
              label: "\u0b8e\u0ba3\u0bcd",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0b92\u0baa\u0bcd\u0baa\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label:
                "\u0bb5\u0bb0\u0bc1\u0bb5\u0bbe\u0baf\u0bcd \u0bae\u0bc1\u0b95\u0bae\u0bc8",
              type: "text",
              helperText: "Ex. \u0baa\u0bb2\u0bc7\u0bb0\u0bcd\u0bae\u0bcb",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "\u0ba4\u0bc7\u0ba4\u0bbf",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "dateValidation",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "\u0b8e\u0ba3\u0bcd",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0b92\u0baa\u0bcd\u0baa\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label:
                "\u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bc8 \u0b8e\u0bb4\u0bc1\u0ba4\u0bc1\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0baf\u0bbe\u0bb0\u0bbe\u0bb5\u0ba4\u0bc1 \u0b8f\u0bb1\u0bcd\u0b95\u0ba9\u0bb5\u0bc7 TARI \u0b9a\u0bc6\u0bb2\u0bc1\u0ba4\u0bcd\u0ba4\u0bc1\u0b95\u0bbf\u0bb1\u0bbe\u0bb0\u0bcd\u0b95\u0bb3\u0bbe?",
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
            "\u0b92\u0baa\u0bcd\u0baa\u0ba8\u0bcd\u0ba4 \u0bb5\u0bbf\u0bb5\u0bb0\u0b99\u0bcd\u0b95\u0bb3\u0bcd",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label:
                "\u0baa\u0bc6\u0baf\u0bb0\u0bcd \u0bae\u0bb1\u0bcd\u0bb1\u0bc1\u0bae\u0bcd \u0b95\u0bc1\u0b9f\u0bc1\u0bae\u0bcd\u0baa\u0baa\u0bcd\u0baa\u0bc6\u0baf\u0bb0\u0bcd",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label:
                "\u0ba8\u0bbf\u0ba4\u0bbf \u0b95\u0bc1\u0bb1\u0bbf\u0baf\u0bc0\u0b9f\u0bc1",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
              helperText: "முன்னாள். R5MRI88L73G273ES",

            },
            {
              id: "Relazione_di_parentela",
              label: "\u0b89\u0bb1\u0bb5\u0bbf\u0ba9\u0bb0\u0bcd",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u0baa\u0bbf\u0ba9\u0bcd\u0bb5\u0bb0\u0bc1\u0bae\u0bcd TARI \u0b9a\u0ba8\u0bcd\u0ba4\u0bbe\u0bb5\u0bc8\u0b95\u0bcd \u0b95\u0bcb\u0bb0\u0bc1\u0b95\u0bbf\u0bb1\u0bc0\u0bb0\u0bcd\u0b95\u0bb3\u0bcd",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label:
                "\u0ba4\u0bbe\u0bb3\u0bcd (\u0b83\u0baa\u0bcb\u0b95\u0bcd\u0bb2\u0bbf\u0baf\u0bcb)",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "\u0ba4\u0bc1\u0b95\u0bb3\u0bcd\u0b95\u0bb3\u0bcd",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "\u0ba4\u0bc1\u0ba3\u0bc8",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label:
                "\u0b86\u0b95\u0bcd\u0b95\u0bbf\u0bb0\u0bae\u0bbf\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0ba8\u0b9f\u0bc8\u0bae\u0bc1\u0bb1\u0bc8 \u0ba4\u0bc7\u0ba4\u0bbf",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "",
            },
            {
              id: "superficie in mq",
              label:
                "\u0b9a\u0ba4\u0bc1\u0bb0 \u0bae\u0bc0\u0b9f\u0bcd\u0b9f\u0bb0\u0bbf\u0bb2\u0bcd \u0bae\u0bc7\u0bb1\u0bcd\u0baa\u0bb0\u0baa\u0bcd\u0baa\u0bc1",
              type: "number",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0ba4\u0bca\u0bb4\u0bbf\u0bb2\u0bbf\u0ba9\u0bcd \u0ba4\u0bb2\u0bc8\u0baa\u0bcd\u0baa\u0bc1",
          label:
            "\u0baa\u0baf\u0ba9\u0bcd\u0baa\u0bbe\u0b9f\u0bcd\u0b9f\u0bc8 \u0ba4\u0bc7\u0bb0\u0bcd\u0bb5\u0bc1 \u0b9a\u0bc6\u0baf\u0bcd\u0baf\u0bb5\u0bc1\u0bae\u0bcd",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "\u0b89\u0bb0\u0bbf\u0bae\u0bc8",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "\u0b87\u0b9f\u0bae\u0bcd",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label:
                "\u0baa\u0baf\u0ba9\u0bcd\u0baa\u0b9f\u0bc1\u0ba4\u0bcd\u0ba4 \u0b95\u0b9f\u0ba9\u0bcd",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label:
                "\u0baa\u0baf\u0ba9\u0bb3\u0bbf\u0b95\u0bcd\u0b95\u0bc1\u0bae\u0bcd",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u0b92\u0bb0\u0bc1 \u0baa\u0bca\u0ba4\u0bc1 \u0b85\u0bae\u0bc8\u0baa\u0bcd\u0baa\u0bbf\u0ba9\u0bcd \u0bb5\u0bc0\u0b9f\u0bcd\u0b9f\u0bc1 \u0b92\u0ba4\u0bc1\u0b95\u0bcd\u0b95\u0bc0\u0b9f\u0bc1",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "கூடுதல் குறிப்புகள்",
          id: 34,
          parentId: 33,
          nextQuestion: 1,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText:
                "டோடைடே சிடி டோடட்கோவி பிரிமிட்கி, யாக்கி வி ஹொசெட் ப்ரெட்ஸ்டாவிட்டி",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
    Arab: {
      questions: [
        {
          type: "select",
          title:
            "\u0645\u0627 \u0647\u064a \u0627\u0644\u062c\u0646\u0633\u064a\u0629 \u0627\u0644\u062a\u064a \u0644\u062f\u064a\u0643\u061f",
          label: "\u062d\u062f\u062f \u062c\u0646\u0633\u064a\u062a\u0643",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label:
                "\u0623\u0646\u0627 \u0645\u0648\u0627\u0637\u0646 \u0645\u0646 \u062e\u0627\u0631\u062c \u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
              nextQuestion: 2,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label:
                "\u0623\u0646\u0627 \u0645\u0648\u0627\u0637\u0646 \u0625\u064a\u0637\u0627\u0644\u064a",
              nextQuestion: 4,
              documentazione: [
                "وثيقة هوية مقدم الطلب والأشخاص الذين نقلوا الإقامة مع مقدم الطلب",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "I am a EU citizen",
              label:
                "\u0623\u0646\u0627 \u0645\u0648\u0627\u0637\u0646 \u0641\u064a \u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0645\u0627 \u0647\u064a \u062d\u0627\u0644\u062a\u0643\u061f",
          label: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label:
                "\u0642\u0631\u064a\u0628 \u0645\u0646 \u0645\u0648\u0627\u0637\u0646\u064a \u0627\u0644\u0627\u062a\u062d\u0627\u062f \u0627\u0644\u0623\u0648\u0631\u0648\u0628\u064a",
              nextQuestion: 4,
              documentazione: [
                "نسخة من جواز سفرك. *",
                "بطاقة إقامة أحد أفراد عائلة أحد مواطني الاتحاد الأوروبي ، أو استلام طلب إصدار بطاقة إقامة. *",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "I have the Residence permit",
              label:
                "\u0644\u062f\u064a \u062a\u0635\u0631\u064a\u062d \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
              nextQuestion: 4,
              documentazione: [
                "نسخة من جواز سفر ساري المفعول أو وثيقة معادلة. *",
                "نسخة من تصريح إقامة ساري المفعول. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label:
                "\u0623\u0646\u0627 \u0623\u062c\u062f\u062f \u062a\u0635\u0631\u064a\u062d \u0625\u0642\u0627\u0645\u062a\u064a",
              nextQuestion: 4,
              documentazione: [
                "نسخة من جواز سفر ساري المفعول أو وثيقة معادلة. *",
                "نسخة من تصريح الإقامة منتهي الصلاحية. *",
                "استلام طلب تجديد تصريح الإقامة. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label:
                "\u0623\u0646\u0627 \u0641\u064a \u0627\u0646\u062a\u0638\u0627\u0631 \u062a\u0635\u0631\u064a\u062d \u0627\u0644\u0625\u0642\u0627\u0645\u0629",
              nextQuestion: 4,
              documentazione: [
                "نسخة من جواز سفر ساري المفعول أو وثيقة معادلة. *",
                "نسخة من عقد الإقامة في Sportello Unico per l'immigrazione *",
                "إيصال صادر عن مكتب البريد يشهد على تقديم طلب تصريح الإقامة. *",
                "طلب إصدار تصريح إقامة للعمل الثانوي المقدم إلى Sportello Unico. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "Awaiting family reunification",
              label:
                "\u0641\u064a \u0627\u0646\u062a\u0638\u0627\u0631 \u0644\u0645 \u0634\u0645\u0644 \u0627\u0644\u0623\u0633\u0631\u0629",
              nextQuestion: 4,
              documentazione: [
                "نسخة من جواز سفر ساري المفعول أو وثيقة معادلة. *",
                "نسخة غير مصدق عليها من الإذن الصادر عن المكتب الفردي. *",
                "إيصال صادر عن مكتب البريد يشهد على تقديم طلب الإذن. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
          ],
          parentId: 1,
        },
        {
          type: "select",
          title:
            "\u0645\u0627 \u0647\u064a \u062d\u0627\u0644\u062a\u0643\u061f",
          label: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "\u0639\u0627\u0645\u0644",
              nextQuestion: 4,
              documentazione: [
                "نسخة من معرف صالح. *",
                "وثائق تثبت جودة العامل. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "f.i",
              label: "غير موظف",
              nextQuestion: 4,
              documentazione: [
                "نسخة من هوية صالحة. *",
                "إعلان ذاتي عن امتلاك الموارد الاقتصادية. *",
                "نسخة من التأمين الصحي. *",
                "نسخة من أصل الوثائق مترجمة ومصدقة تثبت الحالة المدنية وتكوين الأسرة. **",
                "تذكر توقيع المستند",
              ],
            },
            {
              id: "student",
              label: "\u0637\u0627\u0644\u0628",
              documentazione: [
                "نسخة من وثيقة هوية صالحة. *",
                "وثائق تثبت التسجيل في مدرسة أو مؤسسة تدريب مهني. *",
                "إعلان ذاتي عن امتلاك الموارد الاقتصادية. *",
                "تغطية المخاطر الصحية. *",
                "تذكر توقيع المستند",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label:
                "\u0642\u0631\u064a\u0628 \u0645\u0646 (\u0648\u0643\u0631 \u060c \u0637\u0627\u0644\u0628 \u0625\u0644\u062e ..)",
              documentazione: [
                "نسخة من وثيقة هوية صالحة. *",
                "نسخة من سندات الإقامة الأصلية. *",
                "تذكر توقيع المستند",
              ],
              nextQuestion: 4,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0645\u0646 \u0627\u064a\u0646 \u062a\u0646\u062a\u0642\u0644\u061f",
          label: "\u062d\u062f\u062f \u062c\u0646\u0633\u064a\u062a\u0643",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label: "\u0628\u0644\u062f \u0623\u062c\u0646\u0628\u064a",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label:
                "\u0627\u0644\u0627\u064a\u0637\u0627\u0644\u064a\u0629 AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label:
                "\u0646\u0641\u0633 \u0627\u0644\u0645\u062f\u064a\u0646\u0629",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label:
                "\u0645\u062f\u064a\u0646\u0629 \u0645\u062e\u062a\u0644\u0641\u0629",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label:
                "\u0627\u0644\u0637\u0644\u0628 \u0627\u0644\u0623\u0648\u0644",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "\u0623\u064a \u0628\u0644\u062f\u061f",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label: "\u0627\u0643\u062a\u0628 \u0628\u0644\u062f\u0643",
              type: "autocomplete",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u063a\u0627\u0646\u0627 \u0648\u0641\u0631\u0646\u0633\u0627 \u0648\u0631\u0648\u0633\u064a\u0627",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u0623\u064a \u0628\u0644\u062f\u061f",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0645\u0646 \u0641\u0636\u0644\u0643 \u0627\u0643\u062a\u0628 \u0628\u0644\u062f\u0643 \u0627\u0648\u0644\u0627",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u063a\u0627\u0646\u0627 \u0648\u0641\u0631\u0646\u0633\u0627 \u0648\u0631\u0648\u0633\u064a\u0627",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u0645\u0627 \u0627\u0633\u0645  \u0627\u0644\u0645\u062f\u064a\u0646\u0629\u061f",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label:
                "\u0627\u0643\u062a\u0628 \u0645\u062f\u064a\u0646\u062a\u0643",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u062a\u0648\u0631\u064a\u0646\u0648 \u060c \u0645\u064a\u0644\u0627\u0646 \u060c \u0628\u0627\u0641\u064a\u0627",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title: "\u0644\u0646\u062a\u062d\u062f\u062b \u0639\u0646\u0643",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label: "\u0645\u0627 \u0627\u0633\u0645\u0643\u061f",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0645\u0648\u0633\u0649",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label:
                "\u0645\u0627 \u0647\u0648 \u0644\u0642\u0628\u0643 \u0627\u0644\u062e\u0627\u0635",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0633\u064a\u0645\u0628\u0631\u064a\u0646\u064a",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label:
                "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
              type: "date",
              helperText:
                "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
              validate: "dateValidation",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label: "\u0623\u064a\u0646 \u0648\u0644\u062f\u062a\u061f",
              type: "autocomplete",
              helperText:
                "\u062d\u062f\u062f \u0645\u062f\u064a\u0646\u0629 \u0645\u064a\u0644\u0627\u062f\u0643",
              autocomplete: true,
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "\u062c\u0646\u0633",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText: "\u0627\u062e\u062a\u0631 \u062c\u0646\u0633\u0643",
            },
            {
              id: "Stato civile",
              label:
                "\u0627\u0644\u062d\u0627\u0644\u0629 \u0627\u0644\u0627\u062c\u062a\u0645\u0627\u0639\u064a\u0629\u061f",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label: "\u0627\u0644\u0645\u0648\u0627\u0637\u0646\u0629",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0641\u0631\u0646\u0633\u064a",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label:
                "\u0643\u0648\u062f\u0633 \u0641\u064a\u0633\u0643\u0627\u0644\u064a",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. R5MRI88L73G273ES",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0648\u0638\u064a\u0641\u0629\u061f",
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
            "\u0645\u0627 \u0647\u0648 \u0648\u0636\u0639\u0643 \u063a\u064a\u0631 \u0627\u0644\u0645\u0647\u0646\u064a\u061f",
          label: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "\u0631\u0628\u0647 \u0645\u0646\u0632\u0644",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "\u0637\u0627\u0644\u0628",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "\u063a\u064a\u0631 \u0645\u0648\u0638\u0641",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label: "\u0645\u062a\u0642\u0627\u0639\u062f",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "\u0622\u062e\u0631",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0645\u0627 \u0647\u0648 \u0648\u0636\u0639\u0643 \u0627\u0644\u0645\u0647\u0646\u064a\u061f",
          label: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "\u0639\u0627\u0645\u0644",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label:
                "\u0639\u0627\u0645\u0644 \u0627\u0644\u0623\u0633\u0631\u0629",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label:
                "\u0644\u062d\u0633\u0627\u0628\u0647\u0645 \u0627\u0644\u062e\u0627\u0635 / \u0631\u062c\u0644 \u0623\u0639\u0645\u0627\u0644",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label:
                "\u0627\u0644\u0639\u0627\u0645\u0644\u0648\u0646 \u0644\u062d\u0633\u0627\u0628\u0647\u0645 \u0627\u0644\u062e\u0627\u0635",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label:
                "\u062a\u0646\u0641\u064a\u0630\u064a / \u0645\u0648\u0638\u0641",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0647\u0644 \u0644\u062f\u064a\u0643 \u0631\u062e\u0635\u0629 \u0642\u064a\u0627\u062f\u0629 \u0625\u064a\u0637\u0627\u0644\u064a\u0629\u061f",
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
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0631\u062e\u0635\u0629 \u0627\u0644\u0642\u064a\u0627\u062f\u0629",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "\u0631\u0642\u0645",
              type: "text",
              helperText: "\u0627\u0644\u0633\u0627\u0628\u0642. 91828930",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label: "\u0646\u0648\u0639 \u0627\u0644\u0631\u062e\u0635\u0629",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0623 \u060c \u0628 \u060c \u062c",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label:
                "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0641\u0631\u0627\u062c \u0639\u0646\u0647",
              type: "Date",
              helperText:
                "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0627\u0641\u0631\u0627\u062c \u0639\u0646\u0647",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label:
                "\u0627\u0644\u062c\u0647\u0629 \u0627\u0644\u0645\u0635\u062f\u0631\u0629",
              type: "text",
              helperText: "Motorizzazione",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "\u0645\u0642\u0627\u0637\u0639\u0629",
              type: "text",
              helperText: "\u0628\u0627\u0644\u064a\u0631\u0645\u0648",
              validate: "requiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0645\u0627 \u0647\u0648 \u0645\u0633\u062a\u0648\u0627\u0643 \u0627\u0644\u062a\u0639\u0644\u064a\u0645\u064a\u061f",
          label: "\u062d\u062f\u062f \u062f\u0631\u062c\u062a\u0643",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label:
                "\u0645\u062f\u0631\u0633\u0629 \u0625\u0628\u062a\u062f\u0627\u0626\u064a\u0629",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label:
                "\u0634\u0647\u0627\u062f\u0629 \u0627\u0644\u062b\u0627\u0646\u0648\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_13",
              label:
                "\u0634\u0647\u0627\u062f\u0629 \u062f\u0628\u0644\u0648\u0645",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_14",
              label: "\u0628\u0643\u0627\u0644\u0648\u0631\u064a\u0648\u0633",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label:
                "\u062f\u0631\u062c\u0629 \u0627\u0644\u0645\u0627\u062c\u0633\u062a\u064a\u0631",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_16",
              label: "\u062f\u0643\u062a\u0648\u0631\u0627\u0647",
              nextQuestion: 16,
            },
          ],
          parentId: 9,
        },
        {
          type: "longform",
          title:
            "\u0645\u0633\u0643\u0646\u0643 \u0627\u0644\u062c\u062f\u064a\u062f",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "\u0645\u062f\u064a\u0646\u0629",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0628\u0627\u0644\u064a\u0631\u0645\u0648",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "\u0645\u0642\u0627\u0637\u0639\u0629",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0628\u0627\u0644\u064a\u0631\u0645\u0648",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "\u0639\u0646\u0648\u0627\u0646",
              type: "text",
              helperText:
                "\u0639\u0628\u0631 \u062f\u064a\u0644\u0627 \u0644\u064a\u0628\u0631\u062a\u0627",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label: "\u0639\u062f\u062f \u0645\u062f\u0646\u064a",
              type: "text",
              helperText: "\u0627\u0644\u0633\u0627\u0628\u0642. 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "\u0633\u0644\u0627\u0644\u0645",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0627\u0644\u0623\u0648\u0644",
            },
            {
              id: "Piano",
              label: "\u0623\u0631\u0636\u064a\u0629",
              type: "text",
              isRequired: true,
              helperText: "\u0627\u0644\u0633\u0627\u0628\u0642. 2",
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "\u0648\u062d\u062f\u0629",
              type: "text",
              helperText: "\u0627\u0644\u0633\u0627\u0628\u0642. 1",
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0647\u0644 \u062a\u0646\u062a\u0642\u0644 \u0648\u062d\u062f\u0643\u061f",
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
          controller: true,
          title:
            "\u0643\u0645 \u0634\u062e\u0635 \u0628\u062c\u0627\u0646\u0628\u0643\u061f",
          id: 18,
          nextQuestion: 41,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0647\u0644 \u064a\u0648\u062c\u062f \u0623\u064a \u0634\u062e\u0635 \u064a\u0642\u064a\u0645 \u0628\u0627\u0644\u0641\u0639\u0644 \u0641\u064a \u0627\u0644\u0639\u0642\u0627\u0631\u061f",
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
            "\u0623\u062e\u0628\u0631\u0646\u0627 \u0645\u0646 (\u0645\u0643\u0648\u0646 \u0648\u0627\u062d\u062f \u0641\u0642\u0637)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label: "\u0645\u0627 \u0647\u0648 \u0627\u0633\u0645\u0647\u061f",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0645\u0648\u0633\u0649",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label:
                "\u0645\u0627 \u0647\u0648 \u0644\u0642\u0628\u0647 / \u0627\u0633\u0645\u0647\u0627",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0633\u064a\u0645\u0628\u0631\u064a\u0646\u064a",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label:
                "\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
              type: "date",
              helperText:
                "\u0627\u0644\u064a\u0648\u0645 / \u0627\u0644\u0634\u0647\u0631 / \u0627\u0644\u0633\u0646\u0629",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label:
                "\u0645\u0643\u0627\u0646 \u0627\u0644\u0645\u064a\u0644\u0627\u062f",
              type: "text",
              helperText:
                "\u062d\u062f\u062f \u0645\u062f\u064a\u0646\u0629 \u0648\u0644\u0627\u062f\u062a\u0647",
              isRequired: true,
              validate: "requiredField",
              autocomplete: true,
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00e0 residente",
              label:
                "\u062d\u062f\u062f \u0627\u0644\u0639\u0644\u0627\u0642\u0629 \u0627\u0644\u0623\u0633\u0631\u064a\u0629",
              type: "select",
              options: [
                "لا أحد",
                "الأم",
                "أب",
                "ابن",
                "بنت",
                "أخ",
                "أخت",
                "جد",
                "جدة",
                "عم",
                "عمة",
                "ابن عم",
              ],
              helperText:
                "\u062d\u062f\u062f \u0644\u0627 \u0634\u064a\u0621 \u0625\u0630\u0627 \u0643\u0627\u0646 \u0647\u0646\u0627\u0643 \u0623\u064a \u0645\u0646\u0647\u0627",
              isRequired: false,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u062c\u0647\u0629 \u0627\u0644\u0627\u062a\u0635\u0627\u0644 \u0627\u0644\u062e\u0627\u0635\u0629 \u0628\u0643",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label:
                "\u0631\u0642\u0645 \u0627\u0644\u062a\u0644\u064a\u0641\u0648\u0646",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label:
                "\u0631\u0642\u0645 \u0627\u0644\u0647\u0627\u062a\u0641 \u0627\u0644\u0645\u062d\u0645\u0648\u0644",
              type: "tel",
              helperText: "+203332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "emailPec",
              label:
                "\u0627\u0644\u0628\u0631\u064a\u062f \u0627\u0644\u0625\u0644\u0643\u062a\u0631\u0648\u0646\u064a / Pec",
              type: "email",
              helperText: "test@email.com",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Fax",
              label: "\u0641\u0627\u0643\u0633",
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
            "\u0625\u0644\u0649 \u0623\u064a \u0641\u0626\u0629 \u064a\u0646\u062a\u0645\u064a \u0645\u0646\u0632\u0644\u0643\u061f",
          label: "\u062d\u062f\u062f \u062d\u0627\u0644\u062a\u0643",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label:
                "\u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u062c\u0627\u0646\u064a",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label: "\u0645\u0646\u0632\u0644 \u0645\u0645\u0644\u0648\u0643",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "\u0625\u064a\u062c\u0627\u0631",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "\u0633\u0643\u0646 \u0639\u0627\u0645",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "\u0645\u0646\u062a\u0641\u0639",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title:
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u062f",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "\u0642\u0633\u0645",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "\u0645\u0644\u0632\u0645\u0629",
              type: "tel",
              helperText: "3332423421",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label: "\u062c\u0632\u0626\u064a \u0623\u0648 mappale",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label: "\u062b\u0627\u0646\u0648\u064a",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u062f",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label:
                "\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0628\u0627\u0644\u064a\u0631\u0645\u0648",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "\u062a\u0627\u0631\u064a\u062e",
              type: "date",
              helperText:
                "\u0627\u0644\u064a\u0648\u0645 / \u0627\u0644\u0634\u0647\u0631 / \u0627\u0644\u0633\u0646\u0629",
              isRequired: true,
              validate: "dateValidation",
            },
            {
              id: "al n",
              label: "\u0631\u0642\u0645",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u062f",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label:
                "\u0648\u0643\u0627\u0644\u0629 \u0627\u0644\u0625\u064a\u0631\u0627\u062f\u0627\u062a",
              type: "text",
              helperText:
                "\u0627\u0644\u0633\u0627\u0628\u0642. \u0628\u0627\u0644\u064a\u0631\u0645\u0648",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "\u062a\u0627\u0631\u064a\u062e",
              type: "date",
              helperText:
                "\u0627\u0644\u064a\u0648\u0645 / \u0627\u0644\u0634\u0647\u0631 / \u0627\u0644\u0633\u0646\u0629",
              isRequired: true,
              validate: "dateValidation",
            },
            {
              id: "al n_2",
              label: "\u0631\u0642\u0645",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u062f",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label:
                "\u0627\u0643\u062a\u0628 \u0627\u0644\u062a\u0641\u0627\u0635\u064a\u0644",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0647\u0644 \u0647\u0646\u0627\u0643 \u0645\u0646 \u064a\u062f\u0641\u0639 \u0627\u0644\u062a\u0627\u0631\u064a \u0628\u0627\u0644\u0641\u0639\u0644\u061f",
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
            "\u062a\u0641\u0627\u0635\u064a\u0644 \u0627\u0644\u0639\u0642\u062f",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label: "\u0627\u0633\u0645 \u0648\u0644\u0642\u0628",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label:
                "\u0642\u0627\u0646\u0648\u0646 \u0627\u0644\u0645\u0627\u0644\u064a\u0629 \u0627\u0644\u0639\u0627\u0645\u0629",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
              helperText: "\"\u0627\u0644\u0633\u0627\u0628\u0642. R5MRI88L73G273ES\""
            },
            {
              id: "Relazione_di_parentela",
              label: "\u0646\u0633\u0628\u064a",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u0623\u0646\u062a \u062a\u0637\u0644\u0628 \u0627\u0634\u062a\u0631\u0627\u0643 TARI \u0627\u0644\u062a\u0627\u0644\u064a",
          id: 32,
          parentId: 4,
          nextQuestion: 33,
          answers: [
            {
              id: "foglio10",
              label: "\u0648\u0631\u0642\u0629 (Foglio)",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "\u0627\u0644\u062c\u0633\u064a\u0645\u0627\u062a",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "subalterno",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label:
                "\u0627\u0644\u062a\u0627\u0631\u064a\u062e \u0627\u0644\u0641\u0639\u0644\u064a \u0644\u0644\u0627\u062d\u062a\u0644\u0627\u0644",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText: "",
            },
            {
              id: "superficie in mq",
              label:
                "\u0627\u0644\u0633\u0637\u062d \u0641\u064a \u0645\u062a\u0631 \u0645\u0631\u0628\u0639",
              type: "number",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0639\u0646\u0648\u0627\u0646 \u0627\u0644\u0627\u062d\u062a\u0644\u0627\u0644",
          label:
            "\u0627\u062e\u062a\u0631 \u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "\u0627\u0633\u062a\u0642\u0627\u0645\u0629",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "\u0645\u0648\u0642\u0639",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_3",
              label:
                "\u0642\u0631\u0636 \u0644\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "10_1_4",
              label:
                "\u062d\u0642 \u0627\u0644\u0627\u0646\u062a\u0641\u0627\u0639",
              nextQuestion: 17,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u0627\u0644\u062a\u0646\u0627\u0632\u0644 \u0639\u0646 \u0627\u0644\u0633\u0643\u0646 \u0645\u0646 \u0647\u064a\u0626\u0629 \u0639\u0627\u0645\u0629",
              nextQuestion: 17,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "ملاحظات إضافية",
          id: 34,
          parentId: 33,
          nextQuestion: 1,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText: "أضف أي ملاحظات إضافية تريد تقديمها هنا",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
    Bengali: {
      questions: [
        {
          type: "select",
          title:
            "\u09a4\u09be\u09b0 \u0995\u09bf \u09a8\u09be\u0997\u09b0\u09bf\u0995\u09a4\u09cd\u09ac \u0986\u099b\u09c7?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u0997\u09b0\u09bf\u0995\u09a4\u09cd\u09ac \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 1,
          controller: true,
          answers: [
            {
              id: "I am a non-EU citizen",
              label:
                "\u0986\u09ae\u09bf \u098f\u0995\u099c\u09a8 \u09a8\u09a8-\u0987\u0987\u0989 \u09a8\u09be\u0997\u09b0\u09bf\u0995",
              nextQuestion: 18,
              documentazione: [],
            },
            {
              id: "I'm an Italian Citizen",
              label:
                "\u0986\u09ae\u09bf \u098f\u0995\u099c\u09a8 \u0987\u09a4\u09be\u09b2\u09c0\u09af\u09bc \u09a8\u09be\u0997\u09b0\u09bf\u0995",
              nextQuestion: 4,
              documentazione: [],
            },
            {
              id: "I am a EU citizen",
              label:
                "\u0986\u09ae\u09bf \u098f\u0995\u099c\u09a8 \u0987\u0987\u0989 \u09a8\u09be\u0997\u09b0\u09bf\u0995",
              nextQuestion: 3,
              documentazione: [],
            },
          ],
        },
        {
          type: "select",
          title:
            "\u098f\u09b0 \u0985\u09ac\u09b8\u09cd\u09a5\u09be \u0995\u09bf?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 2,
          controller: true,
          answers: [
            {
              id: "EU Citizen Relative",
              label:
                "\u0987\u0987\u0989 \u09a8\u09be\u0997\u09b0\u09bf\u0995\u09c7\u09b0 \u0986\u09a4\u09cd\u09ae\u09c0\u09af\u09bc",
              nextQuestion: 4,
              documentazione: [
                "পাসপোর্টের অনুলিপি.*",
                "একজন ইউনিয়ন নাগরিকের পরিবারের সদস্যের আবাসিক কার্ড, বা একটি আবাসিক কার্ড ইস্যু করার অনুরোধের রসিদ।*",
              ],
            },
            {
              id: "I have the Residence permit",
              label:
                "\u0986\u09ae\u09be\u09b0 \u098f\u0995\u099f\u09be \u09b0\u09c7\u09b8\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8 \u09aa\u09be\u09b0\u09ae\u09bf\u099f \u0986\u099b\u09c7",
              nextQuestion: 4,
              documentazione: [
                "বৈধ পাসপোর্ট বা সমতুল্য নথির অনুলিপি।* ",
                "বৈধ আবাসিক পারমিটের কপি।*",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
            {
              id: "I am renewing my Residence permit",
              label:
                "\u0986\u09ae\u09bf \u0986\u09ae\u09be\u09b0 \u09b0\u09c7\u09b8\u09bf\u09a1\u09c7\u09a8\u09cd\u09b8 \u09aa\u09be\u09b0\u09ae\u09bf\u099f \u09a8\u09ac\u09be\u09af\u09bc\u09a8 \u0995\u09b0\u099b\u09bf",
              nextQuestion: 4,
              documentazione: [
                "বৈধ পাসপোর্ট বা সমতুল্য নথির অনুলিপি।* ",
                " মেয়াদোত্তীর্ণ বসবাসের অনুমতির অনুলিপি।*",
                "আবাসিক পারমিট নবায়নের অনুরোধের প্রাপ্তি।*",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
            {
              id: "I am Waiting for a work permit",
              label:
                "\u0986\u09ae\u09bf \u098f\u0995\u099f\u09bf \u09ac\u09b8\u09ac\u09be\u09b8\u09c7\u09b0 \u0985\u09a8\u09c1\u09ae\u09a4\u09bf\u09b0 \u099c\u09a8\u09cd\u09af \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be \u0995\u09b0\u099b\u09bf",
              nextQuestion: 4,
              documentazione: [
                "বৈধ পাসপোর্ট বা সমতুল্য নথির অনুলিপি।* ",
                "অভিবাসনের জন্য স্পোর্টেলো ইউনিকোর আবাসিক চুক্তির অনুলিপি;*",
                "আবাসিক পারমিটের অনুরোধের সফল উপস্থাপনাকে প্রত্যয়িত করে পোস্ট অফিস দ্বারা জারি করা রসিদ;*",
                "স্পোর্টেলো ইউনিকোর কাছে উপস্থাপিত অধীনস্থ কাজের জন্য বসবাসের অনুমতিপত্রের মুক্তির জন্য আবেদন*",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
            {
              id: "Awaiting family reunification",
              label:
                "\u09aa\u09be\u09b0\u09bf\u09ac\u09be\u09b0\u09bf\u0995 \u09aa\u09c1\u09a8\u09b0\u09cd\u09ae\u09bf\u09b2\u09a8\u09c7\u09b0 \u0985\u09aa\u09c7\u0995\u09cd\u09b7\u09be\u09af\u09bc",
              nextQuestion: 4,
              documentazione: [
                "বৈধ পাসপোর্ট বা সমতুল্য নথির অনুলিপি।* ",
                "Sportello unico দ্বারা ইস্যু করা কোন প্রতিবন্ধক নথির অপ্রমাণিত ফটোকপি;*",
                "পোস্ট অফিস দ্বারা জারি করা রসিদ প্রমাণ করে যে অনুমতির অনুরোধ জমা দেওয়া হয়েছে*;",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
          ],
          parentId: 1,
        },
        {
          type: "select",
          title:
            "\u098f\u09b0 \u0985\u09ac\u09b8\u09cd\u09a5\u09be \u0995\u09bf?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 3,
          controller: true,
          answers: [
            {
              id: "worker",
              label: "\u0995\u09b0\u09cd\u09ae\u09c0",
              nextQuestion: 4,
              documentazione: [
                "সনাক্তকারী কাগজপত্র.*",
                "শ্রমিকের অবস্থা প্রমাণকারী নথিপত্র।*",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
            {
              id: "f.i",
              label: "বেকার",
              nextQuestion: 4,
              documentazione: [
                "একটি বৈধ আইডি নথির অনুলিপি।*",
                "অর্থনৈতিক সম্পদের দখলের স্ব-ঘোষণা।*",
                "স্বাস্থ্য বীমার কপি।*",
                "মূল নথির অনুলিপি, অনূদিত এবং বৈধ, বৈবাহিক অবস্থা এবং পারিবারিক গঠন প্রমাণ করে।*",
              ],
            },
            {
              id: "student",
              label: "\u099b\u09be\u09a4\u09cd\u09b0",
              documentazione: [
                "একটি বৈধ আইডির অনুলিপি।*",
                "শিক্ষামূলক বা বৃত্তিমূলক প্রশিক্ষণ প্রতিষ্ঠানে নথিভুক্তি প্রমাণকারী নথিপত্র।*",
                "অর্থনৈতিক সম্পদের দখলের স্ব-ঘোষণা।*",
                "স্বাস্থ্য ঝুঁকি কভারেজ:*",
              ],
              nextQuestion: 4,
            },
            {
              id: "relative",
              label:
                "\u0986\u09a4\u09cd\u09ae\u09c0\u09af\u09bc (\u0995\u09b0\u09cd\u09ae\u0995\u09b0\u09cd\u09a4\u09be, \u099b\u09be\u09a4\u09cd\u09b0, \u0987\u09a4\u09cd\u09af\u09be\u09a6\u09bf)",
              documentazione: [
                "একটি বৈধ আইডির অনুলিপি।*",
                "আবাসনের মূল নথির কপি।*",
              ],
              nextQuestion: 4,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0986\u09aa\u09a8\u09bf \u0995\u09cb\u09a5\u09be\u09af\u09bc \u09a5\u09c7\u0995\u09c7 \u09b8\u09b0\u099b\u09c7\u09a8?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u0997\u09b0\u09bf\u0995\u09a4\u09cd\u09ac \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 4,
          answers: [
            {
              id: "C1_1_2",
              label:
                "\u09ac\u09bf\u09a6\u09c7\u09b6\u09c0 \u09a6\u09c7\u09b6\u09c7",
              nextQuestion: 7,
              documents: "",
            },
            {
              id: "C1_1_3",
              label: "\u0987\u09a4\u09be\u09b2\u09c0\u09af\u09bc AIRE",
              nextQuestion: 62,
            },
            {
              id: "C1_1_4",
              label: "\u098f\u0995\u0987 \u09b6\u09b9\u09b0",
              nextQuestion: 8,
            },
            {
              id: "C1_1_1",
              label: "\u09ad\u09bf\u09a8\u09cd\u09a8 \u09b6\u09b9\u09b0",
              nextQuestion: 63,
            },
            {
              id: "C_1_5",
              label:
                "\u09aa\u09cd\u09b0\u09a5\u09ae \u0985\u09a8\u09c1\u09b0\u09cb\u09a7",
              nextQuestion: 8,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "\u0995\u09cb\u09a8 \u09a6\u09c7\u09b6?",
          id: 7,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u09a6\u09c7\u09b6 \u09b2\u09bf\u0996\u09c1\u09a8",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u0998\u09be\u09a8\u09be, \u09ab\u09cd\u09b0\u09be\u09a8\u09cd\u09b8, \u09b0\u09be\u09b6\u09bf\u09af\u09bc\u09be",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u0995\u09cb\u09a8 \u09a6\u09c7\u09b6?",
          id: 62,
          nextQuestion: 63,
          answers: [
            {
              id: "Indicare lo Stato estero di provenienza",
              label:
                "\u0986\u0997\u09c7 \u0986\u09aa\u09a8\u09be\u09b0 \u09a6\u09c7\u09b6 \u09b2\u09bf\u0996\u09c1\u09a8",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u0998\u09be\u09a8\u09be, \u09ab\u09cd\u09b0\u09be\u09a8\u09cd\u09b8, \u09b0\u09be\u09b6\u09bf\u09af\u09bc\u09be",
              autocomplete: true,
            },
          ],
        },
        {
          type: "form",
          title: "\u0995\u09cb\u09a8 \u09b6\u09b9\u09b0?",
          id: 63,
          nextQuestion: 8,
          answers: [
            {
              id: "Indicare il comune di provenienza",
              label:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u09b6\u09b9\u09b0 \u09b2\u09bf\u0996\u09c1\u09a8",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09a4\u09c1\u09b0\u09bf\u09a8, \u09ae\u09bf\u09b2\u09be\u09a8, \u09aa\u09be\u09ad\u09bf\u09af\u09bc\u09be",
              autocomplete: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "\u0986\u09b8\u09c1\u09a8 \u09a8\u09bf\u099c\u09c7\u09b0 \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995\u09c7 \u0995\u09a5\u09be \u09ac\u09b2\u09bf",
          id: 8,
          nextQuestion: 9,
          answers: [
            {
              id: "Nome",
              label:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09be\u09ae \u0995\u09bf?",
              type: "text",
              helperText: "\u0989\u09a6\u09be\u0983 \u09ae\u09c1\u09b8\u09be",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Cognome",
              label:
                "\u09a4\u09cb\u09ae\u09be\u09b0 \u09a8\u09be\u09ae\u09c7\u09b0 \u09b6\u09c7\u09b7 \u0985\u0982\u09b6 \u0995\u09bf",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09b8\u09c7\u09ae\u09aa\u09cd\u09b0\u09bf\u09a8\u09bf",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Data di nascita",
              label: "\u099c\u09a8\u09cd\u09ae \u09a4\u09be\u09b0\u09bf\u0996",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Luogo di nascita",
              label:
                "\u0986\u09aa\u09a8\u09bf \u0995\u09cb\u09a5\u09be\u09af\u09bc \u099c\u09a8\u09cd\u09ae\u0997\u09cd\u09b0\u09b9\u09a3 \u0995\u09b0\u09c7\u09a8?",
              type: "text",
              helperText:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u099c\u09a8\u09cd\u09ae\u09c7\u09b0 \u09b6\u09b9\u09b0 \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6 \u0995\u09b0\u09c1\u09a8",
              autocomplete: true,
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Sesso",
              label: "\u099f\u09be\u0987\u09aa",
              type: "select",
              options: ["male", "female"],
              validate: "requiredField",
              isRequired: true,
              helperText:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u09b2\u09bf\u0999\u09cd\u0997 \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8",
            },
            {
              id: "Stato civile",
              label:
                "\u09a4\u09be\u09b0 \u09ac\u09c8\u09ac\u09be\u09b9\u09bf\u0995 \u0985\u09ac\u09b8\u09cd\u09a5\u09be?",
              type: "select",
              options: ["unmarried", "married", "divorced", "widower"],
              helperText:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
              validate: "requiredField",
            },
            {
              id: "Cittadinanza",
              label: "\u09a8\u09be\u0997\u09b0\u09bf\u0995\u09a4\u09cd\u09ac",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u0998\u09be\u09a8\u09bf\u09af\u09bc\u09be, \u09ab\u09b0\u09be\u09b8\u09bf, \u09b0\u09be\u09b6\u09bf\u09af\u09bc\u09be\u09a8...",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Codice Fiscale",
              label:
                "\u099f\u09cd\u09af\u09be\u0995\u09cd\u09b8 \u0986\u0987\u09a1\u09bf \u0995\u09cb\u09a1",
              type: "text",
              helperText: "\u09af\u09c7\u09ae\u09a8 R5MRI88L73G273ES",
              validate: "fiscalCodeField",
              isRequired: true,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u09a4\u09cb\u09ae\u09be\u09b0 \u0995\u09bf \u0995\u09cb\u09a8 \u099a\u09be\u0995\u09b0\u09bf \u0986\u099b\u09c7?",
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
            "\u0986\u09aa\u09a8\u09be\u09b0 \u0985\u09aa\u09cd\u09b0\u09ab\u09c7\u09b6\u09a8\u09be\u09b2 \u0985\u09ac\u09b8\u09cd\u09a5\u09be \u0995\u09bf?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 11,
          answers: [
            {
              selected: false,
              id: "C1_2_6",
              label: "\u0997\u09c3\u09b9\u09bf\u09a3\u09c0",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_7",
              label: "\u099b\u09be\u09a4\u09cd\u09b0",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_8",
              label: "\u09ac\u09c7\u0995\u09be\u09b0",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_9",
              label:
                "\u0985\u09ac\u09b8\u09b0\u09aa\u09cd\u09b0\u09be\u09aa\u09cd\u09a4",
              nextQuestion: 13,
            },
            {
              selected: false,
              id: "C1_2_10",
              label: "\u0985\u09a8\u09cd\u09af\u09be\u09a8\u09cd\u09af",
              nextQuestion: 13,
            },
          ],
          parentId: 9,
        },
        {
          type: "select",
          title:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09aa\u09c7\u09b6\u09be\u0997\u09a4 \u0985\u09ac\u09b8\u09cd\u09a5\u09be \u0995\u09bf?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 12,
          answers: [
            {
              selected: false,
              id: "C1_2_4",
              label: "\u0995\u09b0\u09cd\u09ae\u09c0",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_5",
              label:
                "\u09aa\u09be\u09b0\u09bf\u09ac\u09be\u09b0\u09bf\u0995 \u0995\u09b0\u09cd\u09ae\u09c0",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_3",
              label:
                "\u09ab\u09cd\u09b0\u09bf\u09b2\u09cd\u09af\u09be\u09a8\u09cd\u09b8\u09be\u09b0/\u0989\u09a6\u09cd\u09af\u09cb\u0995\u09cd\u09a4\u09be",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_1",
              label: "\u09b8\u09cd\u09ac\u09a8\u09bf\u09b0\u09cd\u09ad\u09b0",
              nextQuestion: 14,
            },
            {
              selected: false,
              id: "C1_2_2",
              label:
                "\u09ae\u09cd\u09af\u09be\u09a8\u09c7\u099c\u09be\u09b0/\u0995\u09b0\u09cd\u09ae\u099a\u09be\u09b0\u09c0",
              nextQuestion: 14,
            },
          ],
          parentId: 9,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u0995\u09bf \u0987\u09a4\u09be\u09b2\u09c0\u09af\u09bc \u09a1\u09cd\u09b0\u09be\u0987\u09ad\u09bf\u0982 \u09b2\u09be\u0987\u09b8\u09c7\u09a8\u09cd\u09b8 \u0986\u099b\u09c7?",
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
            "\u09a1\u09cd\u09b0\u09be\u0987\u09ad\u09bf\u0982 \u09b2\u09be\u0987\u09b8\u09c7\u09a8\u09cd\u09b8\u09c7\u09b0 \u09ac\u09bf\u09b6\u09a6 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 15,
          parentId: 4,
          nextQuestion: 13,
          answers: [
            {
              id: "Numero",
              label: "\u09b8\u0982\u0996\u09cd\u09af\u09be",
              type: "number",
              helperText: "\u0989\u09a6\u09be\u0983 91828930",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Patente tipo",
              label:
                "\u09b2\u09be\u0987\u09b8\u09c7\u09a8\u09cd\u09b8\u09c7\u09b0 \u09a7\u09b0\u09a8",
              type: "text",
              helperText: "\u09af\u09c7\u09ae\u09a8 A, B, C",
              isRequired: false,
            },
            {
              id: "Data di rilascio",
              label:
                "\u09ae\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09a4\u09be\u09b0\u09bf\u0996",
              type: "Date",
              helperText:
                "\u09ae\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09a4\u09be\u09b0\u09bf\u0996",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Organo di rilascio",
              label:
                "\u0987\u09b8\u09cd\u09af\u09c1\u0995\u09be\u09b0\u09c0 \u09b8\u0982\u09b8\u09cd\u09a5\u09be",
              type: "text",
              helperText:
                "\u09ae\u09cb\u099f\u09b0\u09be\u0987\u099c\u09c7\u09b6\u09a8",
              validate: "requiredField",
              isRequired: false,
            },
            {
              id: "Provincia di",
              label: "\u09aa\u09cd\u09b0\u09a6\u09c7\u09b6",
              type: "text",
              helperText: "\u09aa\u09be\u09b2\u09c7\u09b0\u09ae\u09cb",
              validate: "requiredField",
              isRequired: false,
            },
          ],
        },
        {
          type: "select",
          title:
            "\u09a4\u09be\u09b0 \u09b6\u09bf\u0995\u09cd\u09b7\u09be\u09b0 \u09b8\u09cd\u09a4\u09b0 \u0995\u09bf?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09a1\u09bf\u0997\u09cd\u09b0\u09c0 \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 13,
          answers: [
            {
              selected: false,
              id: "C1_2_11",
              label:
                "\u09aa\u09cd\u09b0\u09be\u09a5\u09ae\u09bf\u0995 \u09b8\u09cd\u0995\u09c1\u09b2",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_12",
              label:
                "\u09ae\u09be\u09a7\u09cd\u09af\u09ae\u09bf\u0995 \u09b8\u09cd\u0995\u09c1\u09b2 \u09b8\u09be\u09b0\u09cd\u099f\u09bf\u09ab\u09bf\u0995\u09c7\u099f",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_13",
              label: "\u09a1\u09bf\u09aa\u09cd\u09b2\u09cb\u09ae\u09be",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_14",
              label: "\u09ac\u09cd\u09af\u09be\u099a\u09c7\u09b2\u09b0",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_15",
              label:
                "\u09ae\u09be\u09b8\u09cd\u099f\u09be\u09b0\u09cd\u09b8 \u09a1\u09bf\u0997\u09cd\u09b0\u09c0",
              nextQuestion: 16,
            },
            {
              selected: false,
              id: "C1_2_16",
              label: "\u09aa\u09bf\u098f\u0987\u099a\u09a1\u09bf",
              nextQuestion: 16,
            },
          ],
          parentId: 9,
        },
        {
          type: "longform",
          title:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09a8\u09a4\u09c1\u09a8 \u09ac\u09be\u09b8\u09b8\u09cd\u09a5\u09be\u09a8",
          id: 16,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "Comune",
              label: "\u09b6\u09b9\u09b0",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09aa\u09be\u09b2\u09c7\u09b0\u09ae\u09cb",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Prov",
              label: "\u09aa\u09cd\u09b0\u09a6\u09c7\u09b6",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09aa\u09be\u09b2\u09c7\u09b0\u09ae\u09cb",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "ViaPiazza",
              label: "\u09a0\u09bf\u0995\u09be\u09a8\u09be",
              type: "text",
              helperText:
                "\u09b8\u09cd\u09ac\u09be\u09a7\u09c0\u09a8\u09a4\u09be\u09b0 \u09aa\u09a5",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Numero civico",
              label:
                "\u09ac\u09be\u09a1\u09bc\u09bf\u09b0 \u09a8\u09ae\u09cd\u09ac\u09b0",
              type: "text",
              helperText: "\u0989\u09a6\u09be\u0983 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Scala",
              label: "\u09b8\u09bf\u0981\u09a1\u09bc\u09bf",
              type: "number",
              helperText: "\u0989\u09a6\u09be\u0983 \u09e7\u09ae",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Piano",
              label: "\u09ab\u09cd\u09b2\u09cb\u09b0\u09bf\u0982",
              type: "number",
              helperText: "\u0989\u09a6\u09be\u09b9\u09b0\u09a3 2",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Interno",
              label: "\u0987\u0989\u09a8\u09bf\u099f",
              type: "number",
              helperText: "\u0989\u0983 \u098f",
              isRequired: false,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u09a4\u09c1\u09ae\u09bf \u0995\u09bf \u098f\u0995\u09be \u099a\u09b2\u09be\u09ab\u09c7\u09b0\u09be \u0995\u09b0?",
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
          controller: true,
          title:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09aa\u09be\u09b6\u09c7 \u0995\u09a4 \u09ae\u09be\u09a8\u09c1\u09b7?",
          id: 18,
          nextQuestion: 51,
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0995\u09c7\u0989 \u0995\u09bf \u0987\u09a4\u09bf\u09ae\u09a7\u09cd\u09af\u09c7 \u09b8\u09ae\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf\u09a4\u09c7 \u09ac\u09b8\u09ac\u09be\u09b8 \u0995\u09b0\u099b\u09c7\u09a8?",
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
            "\u0986\u09ae\u09be\u09a6\u09c7\u09b0 \u09ac\u09b2\u09c1\u09a8 \u0995\u09c7 (\u09b6\u09c1\u09a7\u09c1\u09ae\u09be\u09a4\u09cd\u09b0 \u098f\u0995\u099c\u09a8 \u09b8\u09a6\u09b8\u09cd\u09af)",
          id: 21,
          parentId: 4,
          nextQuestion: 22,
          answers: [
            {
              id: "Nome_6",
              label: "\u09a4\u09be\u09b0 \u09a8\u09be\u09ae \u0995\u09bf?",
              type: "text",
              helperText: "\u0989\u09a6\u09be\u0983 \u09ae\u09c1\u09b8\u09be",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Cognome_6",
              label:
                "\u09a4\u09cb\u09ae\u09be\u09b0 \u09a1\u09be\u0995 \u09a8\u09be\u09ae \u0995\u09bf",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09b8\u09c7\u09ae\u09aa\u09cd\u09b0\u09bf\u09a8\u09bf",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo",
              label: "\u099c\u09a8\u09cd\u09ae \u09a4\u09be\u09b0\u09bf\u0996",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Luogo di nascita_6",
              label: "\u099c\u09a8\u09cd\u09ae\u09b8\u09cd\u09a5\u09be\u09a8",
              type: "text",
              helperText:
                "\u0986\u09aa\u09a8\u09be\u09b0 \u099c\u09a8\u09cd\u09ae\u09c7\u09b0 \u09b6\u09b9\u09b0 \u09a8\u09bf\u09b0\u09cd\u09a6\u09c7\u09b6 \u0995\u09b0\u09c1\u09a8",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "Sussiste il seguente vincolo rispetto al su indicato  componente della famiglia gi\u00c3\u00a0 residente",
              label:
                "\u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995 \u0989\u09b2\u09cd\u09b2\u09c7\u0996 \u0995\u09b0\u09c1\u09a8",
              type: "text",
              helperText:
                "\u0995\u09cb\u09a8\u09cb \u09b8\u09ae\u09cd\u09aa\u09b0\u09cd\u0995 \u09a5\u09be\u0995\u09b2\u09c7 \u098f\u0987 \u0995\u09cd\u09b7\u09c7\u09a4\u09cd\u09b0\u099f\u09bf \u09ab\u09be\u0981\u0995\u09be \u09b0\u09be\u0996\u09c1\u09a8",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "form",
          title:
            "\u09a4\u09be\u09b0 \u09aa\u09b0\u09bf\u099a\u09bf\u09a4\u09bf",
          id: 22,
          parentId: 4,
          nextQuestion: 23,
          answers: [
            {
              id: "Telefono",
              label:
                "\u099f\u09c7\u09b2\u09bf\u09ab\u09cb\u09a8 \u09a8\u09be\u09ae\u09cd\u09ac\u09be\u09b0",
              type: "number",
              helperText: "091665442",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "Cellulare",
              label:
                "\u09ae\u09cb\u09ac\u09be\u0987\u09b2 \u09a8\u09ae\u09cd\u09ac\u09b0",
              type: "tel",
              helperText:
                "\u09e9\u09e9\u09e9\u09e8\u09ea\u09e8\u09e9\u09ea\u09e8\u09e7",
              validate: "",
              isRequired: false,
            },
            {
              id: "emailPec",
              label: "\u0987\u09ae\u09c7\u0987\u09b2/Dpec",
              type: "email",
              helperText: "test@email.com",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "Fax",
              label: "\u09ab\u09cd\u09af\u09be\u0995\u09cd\u09b8",
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
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09ac\u09be\u09a1\u09bc\u09bf \u0995\u09cb\u09a8 \u09b6\u09cd\u09b0\u09c7\u09a3\u09c0\u09b0 \u0985\u09a8\u09cd\u09a4\u09b0\u09cd\u0997\u09a4?",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09b0\u09be\u099c\u09cd\u09af \u09a8\u09bf\u09b0\u09cd\u09ac\u09be\u099a\u09a8 \u0995\u09b0\u09c1\u09a8",
          id: 23,
          answers: [
            {
              selected: false,
              id: "C9_1_5",
              label:
                "\u09ac\u09bf\u09a8\u09be\u09ae\u09c2\u09b2\u09cd\u09af\u09c7 \u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0",
              nextQuestion: 25,
            },
            {
              selected: false,
              id: "C9_1_2",
              label:
                "\u09b8\u09ae\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf \u09ac\u09be\u09a1\u09bc\u09bf\u09a4\u09c7",
              nextQuestion: 24,
            },
            {
              selected: false,
              id: "C9_1_3",
              label: "\u09ad\u09be\u09a1\u09bc\u09be",
              nextQuestion: 26,
            },
            {
              selected: false,
              id: "C9_1_4",
              label: "\u09aa\u09be\u09a8\u09b6\u09be\u09b2\u09be",
              nextQuestion: 30,
            },
            {
              selected: false,
              id: "C9_1_6",
              label: "\u0989\u09aa\u09af\u09cb\u0997\u09c0",
              nextQuestion: 27,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title:
            "\u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 24,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Sezione",
              label: "\u0985\u09a7\u09cd\u09af\u09be\u09af\u09bc",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "foglio",
              label: "\u09b6\u09c0\u099f",
              type: "tel",
              helperText:
                "\u09e9\u09e9\u09e9\u09e8\u09ea\u09e8\u09e9\u09ea\u09e8\u09e7",
              validate: "",
              isRequired: false,
            },
            {
              id: "particella o mappale",
              label:
                "\u0986\u0982\u09b6\u09bf\u0995 \u09ac\u09be \u09ae\u09be\u09a8\u099a\u09bf\u09a4\u09cd\u09b0",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "subalterno",
              label: "\u0985\u09a7\u09c0\u09a8\u09b8\u09cd\u09a5",
              type: "text",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "undefined_33",
              label:
                "\u098f\u09b0 \u09b0\u09be\u099c\u09b8\u09cd\u09ac \u09b8\u0982\u09b8\u09cd\u09a5\u09be",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09aa\u09be\u09b2\u09c7\u09b0\u09ae\u09cb",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data",
              label: "\u09a4\u09be\u09b0\u09bf\u0996",
              type: "date",
              helperText: "DD/MM/YYYY",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "al n",
              label: "\u09b8\u0982\u0996\u09cd\u09af\u09be",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 25,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "Entrate di",
              label:
                "\u098f\u09b0 \u09b0\u09be\u099c\u09b8\u09cd\u09ac \u09b8\u0982\u09b8\u09cd\u09a5\u09be",
              type: "text",
              helperText:
                "\u09af\u09c7\u09ae\u09a8 \u09aa\u09be\u09b2\u09c7\u09b0\u09ae\u09cb",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "in data_2",
              label: "\u09a4\u09be\u09b0\u09bf\u0996",
              type: "date",
              helperText: "DD/MM/YYYY",
              validate: "requiredField",
              isRequired: true,
            },
            {
              id: "al n_2",
              label: "\u09b8\u0982\u0996\u09cd\u09af\u09be",
              type: "number",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "form",
          title:
            "\u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 26,
          parentId: 4,
          nextQuestion: 30,
          answers: [
            {
              id: "dati utili 1",
              label:
                "\u09ac\u09bf\u09b8\u09cd\u09a4\u09be\u09b0\u09bf\u09a4 \u09b2\u09bf\u0996\u09c1\u09a8",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
          ],
        },
        {
          type: "checkbox",
          controller: true,
          title:
            "\u0995\u09c7\u0989 \u0995\u09bf \u0987\u09a4\u09bf\u09ae\u09a7\u09cd\u09af\u09c7\u0987 TARI \u09aa\u09b0\u09bf\u09b6\u09cb\u09a7 \u0995\u09b0\u09c7?",
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
            "\u099a\u09c1\u0995\u09cd\u09a4\u09bf\u09b0 \u09ac\u09bf\u09ac\u09b0\u09a3",
          id: 31,
          parentId: 4,
          nextQuestion: 32,
          answers: [
            {
              id: "che la tassa per il nuovo",
              label: "\u09a8\u09be\u09ae \u0993 \u09aa\u09a6\u09ac\u09c0",
              type: "text",
              validate: "requiredField",
              isRequired: true,
              autocomplete: false,
            },
            {
              id: "F",
              label:
                "\u099f\u09cd\u09af\u09be\u0995\u09cd\u09b8 \u0986\u0987\u09a1\u09bf \u0995\u09cb\u09a1",
              type: "text",
              isRequired: true,
              validate: "fiscalCodeField",
              helperText: "\u09af\u09c7\u09ae\u09a8 R5MRI88L73G273ES",
            },
            {
              id: "Relazione_di_parentela",
              label: "\u0986\u09aa\u09c7\u0995\u09cd\u09b7\u09bf\u0995",
              type: "select",
              validate: "requiredField",
              isRequired: true,
            },
          ],
        },
        {
          type: "longform",
          title:
            "TARI \u09b8\u09be\u09ac\u09b8\u09cd\u0995\u09cd\u09b0\u09bf\u09aa\u09b6\u09a8",
          id: 32,
          parentId: 4,
          nextQuestion: 17,
          answers: [
            {
              id: "foglio10",
              label: "\u09b6\u09c0\u099f (\u09b6\u09c0\u099f)",
              type: "text",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "particella10",
              label: "\u0995\u09a3\u09be",
              type: "text",
              helperText: "\u0989\u09a6\u09be\u0983 36",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "sub10",
              label: "\u0985\u09a7\u09c0\u09a8\u09b8\u09cd\u09a5",
              type: "text",
              helperText: "\u0989\u09a6\u09be\u0983 \u09e7\u09ae",
              isRequired: true,
              validate: "requiredField",
            },
            {
              id: "data",
              label:
                "\u0995\u09b0\u09cd\u09ae\u09b8\u0982\u09b8\u09cd\u09a5\u09be\u09a8 \u09a4\u09a5\u09cd\u09af \u09b6\u09c7\u09b7",
              type: "date",
              isRequired: true,
              validate: "requiredField",
              helperText:
                "\u0995\u09b0\u09cd\u09ae\u09b8\u0982\u09b8\u09cd\u09a5\u09be\u09a8 \u09a4\u09a5\u09cd\u09af \u09b6\u09c7\u09b7",
            },
            {
              id: "superficie in mq",
              label:
                "\u09ac\u09b0\u09cd\u0997 \u09ae\u09bf\u099f\u09be\u09b0\u09c7 \u09aa\u09c3\u09b7\u09cd\u09a0\u09c7\u09b0 \u0995\u09cd\u09b7\u09c7\u09a4\u09cd\u09b0\u09ab\u09b2",
              type: "number",
              isRequired: true,
              validate: "requiredField",
            },
          ],
        },
        {
          type: "select",
          title:
            "\u0995\u09b0\u09cd\u09ae\u09b8\u0982\u09b8\u09cd\u09a5\u09be\u09a8 \u09b6\u09bf\u09b0\u09cb\u09a8\u09be\u09ae",
          label:
            "\u0986\u09aa\u09a8\u09be\u09b0 \u09a7\u09c8\u09b0\u09cd\u09af\u09cd\u09af\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u09a7\u09a8\u09cd\u09af\u09ac\u09be\u09a6",
          id: 33,
          answers: [
            {
              selected: false,
              id: "10_1_1",
              label: "\u09b8\u09ae\u09cd\u09aa\u09a4\u09cd\u09a4\u09bf",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_2",
              label: "\u0985\u09ac\u09b8\u09cd\u09a5\u09be\u09a8",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_3",
              label:
                "\u09ac\u09cd\u09af\u09ac\u09b9\u09be\u09b0\u09c7\u09b0 \u099c\u09a8\u09cd\u09af \u098b\u09a3",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "10_1_4",
              label: "\u09ab\u09b2",
              nextQuestion: 34,
            },
            {
              selected: false,
              id: "C9_1_6",
              label:
                "\u098f\u0995\u099f\u09bf \u09aa\u09be\u09ac\u09b2\u09bf\u0995 \u09b8\u0982\u09b8\u09cd\u09a5\u09be \u0986\u09ac\u09be\u09b8\u09a8 \u09ac\u09b0\u09be\u09a6\u09cd\u09a6",
              nextQuestion: 34,
            },
          ],
          parentId: 9,
        },
        {
          type: "form",
          title: "অতিরিক্ত নোট",
          id: 34,
          parentId: 33,
          nextQuestion: 1,
          answers: [
            {
              id: "Note",
              label: "",
              type: "textarea",
              helperText:
                "আপনি এখানে উপস্থাপন করতে চান এমন কোনো অতিরিক্ত নোট যোগ করুন",
              isRequired: false,
              autocomplete: false,
            },
          ],
        },
      ],
    },
  },
};
export default choiceTree;
