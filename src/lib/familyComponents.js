export const calculateComponentEnglishTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "Component N." + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "Name",
          type: "text",
          helperText: "Ex. Moussa",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "Surname",
          type: "text",
          helperText: "Ex. Semprini",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "Date of birth",
          type: "date",
          helperText: "Date of birth",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "Where were you born?",
          type: "text",
          helperText: "Indicate your city of birth",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "Gender",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "select your gender",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "your marital status?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "select your status",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "Citizenship",
          type: "text",
          helperText: "Ex. Ghanian, Francaise, Russian...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "Codice Fiscale",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "Relation to the applicant",
          type: "select",
          options: [
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
          helperText: "Ex. Wife, Son",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "Does she/he has a job?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "What's her/his Non-professional status?",
      label: "Select her/his Status",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "Housewife",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "Student",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "Unemployed",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "Retired",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "Other",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "What's his/her professional status?",
      label: "Select her/his Status",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "Worker",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "Family Worker",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "Freelance / Entrepreneur",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "Self-Employed",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "Executive / Employee",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "Does she/he has an Italian Driving License?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "Driving License Details, this details are not mandatory",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "Number",
            type: "text",
            helperText: "Ex. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "License Type",
            type: "text",
            helperText: "Ex. A,B,C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "Release Date",
            type: "Date",
            helperText: "Release Date",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "Issuing body",
            type: "text",
            helperText: "Motorizzazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "Province",
            type: "text",
            helperText: "Palermo",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "What's her/his educational level?",
      label: "Select her/his Degree",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "Primary School",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "Secondary School Certificate",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "Diploma",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "Bachelor",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "Master Degree",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "Phd",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentFrenchTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "Component N." + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "Nom",
          type: "text",
          helperText: "Ex. Moussa",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "Nom de famille",
          type: "text",
          helperText: "Ex. Semprini",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "Date de naissance",
          type: "date",
          helperText: "Date de naissance",
          validate: "dateValidation",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "Où êtes-vous né?",
          type: "text",
          helperText: "Indiquez votre ville de naissance",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "Genre",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "sélectionnez votre sexe",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "ton statut matrimonial?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "sélectionnez votre statut",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "Citoyenneté",
          type: "text",
          helperText: "Ex. Ghanéen, Français, Russe...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "Code fiscal",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "Relation avec le demandeur",
          type: "select",
          options: [
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
          helperText: "Ex. épouse, fils",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "A-t-il/elle un emploi ?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Quel est son statut de non-professionnel ?",
      label: "Sélectionnez son statut",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "Femme au foyer",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "Étudiant",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "Sans emploi",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "À la retraite",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "Autre",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Quel est son statut professionnel ?",
      label: "Sélectionnez son statut",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "Ouvrier",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "Travailleur familial",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "Indépendant / Entrepreneur",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "Travailleur indépendant",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "Cadre / Employé",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "A-t-il/elle un permis de conduire italien ?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title:
          "Détails du permis de conduire, ces détails ne sont pas obligatoires",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "Nombre",
            type: "text",
            helperText: "Ex. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "Type de licence",
            type: "text",
            helperText: "Ex. ABC",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "Date de sortie",
            type: "Date",
            helperText: "Date de sortie",
            validate: "dateValidation",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "Organisme émetteur",
            type: "text",
            helperText: "Motorisation",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "Province",
            type: "text",
            helperText: "Palerme",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "Quel est son niveau scolaire ?",
      label: "Sélectionnez son diplôme",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "École primaire",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "Certificat d'études secondaires",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "Diplôme",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "Célibataire",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "Master",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "Doctorat",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentSpanishTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "Component N." + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "Nombre",
          type: "text",
          helperText: "Ex. Musa",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "Apellido",
          type: "text",
          helperText: "Ex. Semprini",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "Fecha de nacimiento",
          type: "date",
          helperText: "Fecha de nacimiento",
          validate: "dateValidation",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "¿Donde naciste?",
          type: "text",
          helperText: "Indica tu ciudad de nacimiento",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "Género",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "Selecciona tu género",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "¿tu estado civil?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "seleccione su estado",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "Ciudadanía",
          type: "text",
          helperText: "Ex. ghanesa, francesa, rusa...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "Código fiscal",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "Relación con el solicitante",
          type: "select",
          options: [
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
          helperText: "Ex. esposa, hijo",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "¿Tiene trabajo?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "¿Cuál es su estatus de no profesional?",
      label: "Seleccione su estado",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "Ama de casa",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "Alumno",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "Desempleados",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "Jubilado",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "Otro",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "¿Cuál es su estatus profesional?",
      label: "Seleccione su estado",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "Obrero",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "trabajador familiar",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "Freelance / Emprendedor",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "Trabajadores por cuenta propia",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "Ejecutivo / Empleado",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "¿Tiene él/ella un permiso de conducir italiano?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title:
          "Detalles del permiso de conducir, estos detalles no son obligatorios",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "Número",
            type: "text",
            helperText: "Ex. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "Tipo de licencia",
            type: "text",
            helperText: "Ex. A B C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "Fecha de lanzamiento",
            type: "Date",
            helperText: "Fecha de lanzamiento",
            validate: "dateValidation",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "Organismo emisor",
            type: "text",
            helperText: "Motorizzazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "Provincia",
            type: "text",
            helperText: "palermo",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "¿Cuál es su nivel educativo?",
      label: "Seleccione su Grado",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "Escuela primaria",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "Certificado de educación secundaria",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "Diploma",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "Bachiller",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "Maestría",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "Doctor",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentBengaliTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "উপাদান সংখ্যা: " + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "নাম",
          type: "text",
          helperText: "যেমন মুসা",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "পদবি",
          type: "text",
          helperText: "যেমন সেমপ্রিনি",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "জন্ম তারিখ",
          type: "date",
          helperText: "জন্ম তারিখ",
          validate: "dateValidation",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "আপনি কোথায় জন্মগ্রহণ করেন?",
          type: "text",
          helperText: "আপনার জন্মের শহর নির্দেশ করুন",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "লিঙ্গ",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "আপনার লিঙ্গ নির্বাচন",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "আপনার বৈবাহিক অবস্থা?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "আপনার স্থিতি নির্বাচন করুন",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "নাগরিকত্ব",
          type: "text",
          helperText: "যেমন ঘানিয়ান, ফ্রাঙ্কাইজ, রাশিয়ান...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "কোডিস ফিসকেল",
          type: "text",
          helperText: "যেমন R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "আবেদনকারীর সাথে সম্পর্ক",
          type: "select",
          options: [
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
          helperText: "যেমন স্ত্রী, পুত্র",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "তার/তার কি চাকরি আছে?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "তার/তার অ-পেশাদার অবস্থা কি?",
      label: "তাকে/তার স্থিতি নির্বাচন করুন",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "গৃহিণী",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "ছাত্র",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "বেকার",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "অবসরপ্রাপ্ত",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "অন্যান্য",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "তার পেশাগত অবস্থা কি?",
      label: "তাকে/তার স্থিতি নির্বাচন করুন",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "কর্মী",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "পারিবারিক কর্মী",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "ফ্রিল্যান্স / উদ্যোক্তা",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "স্বনির্ভর",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "নির্বাহী / কর্মচারী",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "তার/তার কি ইতালীয় ড্রাইভিং লাইসেন্স আছে?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "ড্রাইভিং লাইসেন্সের বিবরণ, এই বিবরণ বাধ্যতামূলক নয়",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "সংখ্যা",
            type: "text",
            helperText: "যেমন 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "লাইসেন্সের ধরন",
            type: "text",
            helperText: "যেমন A, B, C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "মুক্তির তারিখ",
            type: "Date",
            helperText: "মুক্তির তারিখ",
            validate: "dateValidation",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "শরীর দেখানো",
            type: "text",
            helperText: "মোটরাইজেশন",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "প্রদেশ",
            type: "text",
            helperText: "পালেরমো",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "তার/তার শিক্ষার স্তর কি?",
      label: "তাকে/তার ডিগ্রী নির্বাচন করুন",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "প্রাথমিক বিদ্যালয়",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "মাধ্যমিক স্কুল সার্টিফিকেট",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "ডিপ্লোমা",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "ব্যাচেলর",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "স্নাতকোত্তর",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "পিএইচডি",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentArabTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "رقم المكون " + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "اسم",
          type: "text",
          helperText: "السابق. موسى",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "اسم العائلة",
          type: "text",
          helperText: "السابق. سيمبريني",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "تاريخ الميلاد",
          type: "date",
          helperText: "تاريخ الميلاد",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "أين ولدت؟",
          type: "text",
          helperText: "حدد مدينة ميلادك",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "جنس",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "اختر جنسك",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "الحالة الاجتماعية؟",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "حدد حالتك",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "المواطنة",
          type: "text",
          helperText: "السابق. غانيان ، فرانسيز ، روسي ...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "كودس فيسكالي",
          type: "text",
          helperText: "السابق. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "العلاقة بمقدم الطلب",
          type: "select",
          options: [
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
          helperText: "السابق. الزوجة ، الابن",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "هل هو / لديه عمل؟",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "ما هي حالتها غير المهنية؟",
      label: "حدد حالته / وضعه",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "ربه منزل",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "طالب",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "غير موظف",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "متقاعد",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "آخر",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "ما هو وضعه المهني؟",
      label: "حدد حالته / وضعه",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "عامل",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "عامل الأسرة",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "لحسابهم الخاص / رجل أعمال",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "العاملون لحسابهم الخاص",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "تنفيذي / موظف",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "هل لديه / لديها رخصة قيادة إيطالية؟",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "تفاصيل رخصة القيادة ، هذه التفاصيل ليست إلزامية",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "رقم",
            type: "text",
            helperText: "السابق. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "نوع الرخصة",
            type: "text",
            helperText: "السابق. أ ، ب ، ج",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "تاريخ الافراج عنه",
            type: "Date",
            helperText: "تاريخ الافراج عنه",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "الجهة المصدرة",
            type: "text",
            helperText: "Motorizzazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "مقاطعة",
            type: "text",
            helperText: "باليرمو",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "ما هو مستواها التعليمي؟",
      label: "اختر شهادتها",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "مدرسة إبتدائية",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "شهادة الثانوية العامة",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "شهادة دبلوم",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "بكالوريوس",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "درجة الماجستير",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "دكتوراه",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentUkrainianTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "Component N." + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "Ім'я",
          type: "text",
          helperText: "Пр. Муса",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "Прізвище",
          type: "text",
          helperText: "Пр. Семпріні",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "Дата народження",
          type: "date",
          helperText: "Дата народження",
          validate: "dateValidation",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "Де ви народились?",
          type: "text",
          helperText: "Вкажіть своє місто народження",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "Стать",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "виберіть свою стать",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "твій сімейний стан?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "виберіть свій статус",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "Громадянство",
          type: "text",
          helperText: "Пр. Ганська, французька, російська...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "Фіскальний кодекс",
          type: "text",
          helperText: "Пр. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "Відношення до заявника",
          type: "select",
          options: [
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
          helperText: "Пр. Дружина, Син",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "Чи є у неї/він робота?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Який її/його непрофесійний статус?",
      label: "Виберіть її/його статус",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "Домогосподарка",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "студент",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "Безробітний",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "На пенсії",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "Інший",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Який його/її професійний статус?",
      label: "Виберіть її/його статус",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "робітник",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "Сімейний працівник",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "Фрілансер / Підприємець",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "Самозайнятий",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "Керівник / Співробітник",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "Чи має вона/він італійське водійське посвідчення?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "Відомості про водійські права, ці дані не є обов’язковими",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "Номер",
            type: "text",
            helperText: "Пр. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "Тип ліцензії",
            type: "text",
            helperText: "Пр. A,B,C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "Дата випуску",
            type: "Date",
            helperText: "Дата випуску",
            validate: "dateValidation",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "Орган видачі",
            type: "text",
            helperText: "Motorizzazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "Провінція",
            type: "text",
            helperText: "Палермо",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "Який її/його освітній рівень?",
      label: "Виберіть її/його ступінь",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "Початкова школа",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "Атестат про середню освіту",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "Диплом",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "Бакалавр",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "Магістерський степінь",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "кандидат наук",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentTamilTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "கூறு எண் " + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "பெயர்",
          type: "text",
          helperText: "Ex. மௌசா",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "குடும்ப பெயர்",
          type: "text",
          helperText: "Ex. செம்ப்ரினி",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "பிறந்த தேதி",
          type: "date",
          helperText: "பிறந்த தேதி",
          isRequired: true,
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "நீ எங்கே பிறந்தாய்?",
          type: "text",
          helperText: "நீங்கள் பிறந்த நகரத்தைக் குறிக்கவும்",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "பாலினம்",
          type: "select",
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "உங்கள் பாலினத்தை தேர்வுசெய்யவும்",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "உங்கள் திருமண நிலை?",
          type: "select",
          options: ["unmarried", "married", "divorced", "widower"],
          helperText: "உங்கள் நிலையை தேர்ந்தெடுக்கவும்",
          validate: "RequiredField",
        },
        {
          id: "Cittadinanza_" + i,
          label: "குடியுரிமை",
          type: "text",
          helperText: "Ex. கானியன், ஃபிரான்சைஸ், ரஷ்யன்...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "கோடிஸ் ஃபிஸ்கேல்",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "விண்ணப்பதாரருடனான உறவு",
          type: "select",
          options: [
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
          helperText: "Ex. மனைவி, மகன்",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "அவளுக்கு/அவருக்கு வேலை இருக்கிறதா?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "அவள்/அவன் தொழில் அல்லாத நிலை என்ன?",
      label: "அவள்/அவரது நிலையைத் தேர்ந்தெடுக்கவும்",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "இல்லத்தரசி",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "மாணவர்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "வேலையில்லாதவர்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "ஓய்வு பெற்றவர்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "மற்றவை",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "அவருடைய/அவளுடைய தொழில் நிலை என்ன?",
      label: "அவள்/அவரது நிலையைத் தேர்ந்தெடுக்கவும்",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "தொழிலாளி",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "குடும்ப பணியாளர்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "ஃப்ரீலான்ஸ் / தொழில்முனைவோர்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "சுயதொழில்",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "நிர்வாகி / பணியாளர்",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "அவளிடம் இத்தாலிய ஓட்டுநர் உரிமம் உள்ளதா?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "ஓட்டுநர் உரிம விவரங்கள், இந்த விவரங்கள் கட்டாயமில்லை",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "எண்",
            type: "text",
            helperText: "Ex. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "உரிமம் வகை",
            type: "text",
            helperText: "Ex. A,B,C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "வெளிவரும் தேதி",
            type: "Date",
            helperText: "வெளிவரும் தேதி",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "உடல் வழங்குதல்",
            type: "text",
            helperText: "Motorizazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "மாகாணம்",
            type: "text",
            helperText: "பலேர்மோ",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "அவள்/அவன் கல்வி நிலை என்ன?",
      label: "அவள்/அவன் பட்டத்தைத் தேர்ந்தெடுக்கவும்",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "ஆரம்ப பள்ளி",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "மேல்நிலைப் பள்ளி சான்றிதழ்",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "டிப்ளமோ",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "இளங்கலை",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "முதுகலை பட்டம்",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "Phd",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const calculateComponentItalianTree = (action) => {
  const result = [];

  // controller for the checkbox
  let page = 2;
  let moduls = 1;
  let currentIndex = 0;

  for (let i = 2; i <= parseInt(action.answer) + 1; i++) {
    console.log("Iindex: ", i);
    if (page === 3) {
      moduls = 1;
    }

    result.push({
      type: "longform",
      title: "Componente N." + (i - 1),
      id: 39 + i + currentIndex,
      parentId: 4,
      nextQuestion: 40 + i + currentIndex,
      answers: [
        {
          id: "Nome_" + i,
          label: "Nome",
          type: "text",
          helperText: "Ex. Moussa",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Cognome_" + i,
          label: "Cognome",
          type: "text",
          helperText: "Ex. Semprini",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Data di nascita_" + i,
          label: "Data di nascita",
          type: "date",
          helperText: "Data di nascita",
          isRequired: true,
          validate: "RequiredField",
          // add input validate
        },
        {
          id: "Luogo di nascita_" + i,
          label: "Luogo di nascita",
          type: "text",
          helperText: "Luogo di nascita",
          validate: "RequiredField",
          isRequired: true,
        },
        {
          id: "Sesso_" + i,
          label: "Genere",
          type: "select",
          options: ["Maschile", "Femminile"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "scegli il genere",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "Stato civile",
          type: "select",
          options: ["Celibe", "Nubile", "Sposato/a", "Divorziato/a", "Vedovo/a"],
          helperText: "scegli stato civile",
          validate: "RequiredField",
          required: true,
        },
        {
          id: "Cittadinanza_" + i,
          label: "Cittadinanza",
          type: "text",
          helperText: "Ex. Francese, Italiana, Egiziana...",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Codice Fiscale_" + i,
          label: "Codice Fiscale",
          type: "text",
          helperText: "Ex. R5MRI88L73G273E",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
        {
          id: "Rapporto di parentela con il richiedente_".concat("", i - 2),
          label: "Rapporto di parentela con il richiedente",
          type: "select",
          options: [
            "Madre",
            "Padre",
            "Figlio",
            "Figlia",
            "Fratello",
            "Sorella",
            "Nonno",
            "Nonna",
            "zio",
            "zia",
            "moglie",
            "marito",
            "cugino",
            "cugina"
          ],
          helperText: "Ex. moglie, figlio",
          validate: "RequiredField",
          isRequired: true,
          // add input validate
        },
      ],
    });

    result.push({
      type: "checkbox",
      title: "La persona con cui ti sposti ha un lavoro?",
      id: 40 + i + currentIndex,
      answers: [
        {
          id: "yes",
          nextQuestion: 42 + i + currentIndex,
        },
        {
          id: "no",
          nextQuestion: 41 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Qual è il suo stato non professionale?",
      label: "Seleziona lo stato",
      id: 41 + i + currentIndex,
      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_6",
          label: "Casalingo/a",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_7",
          label: "Studente",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_8",
          label: "Disoccupato",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_9",
          label: "In pensione",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_10",
          label: "Altro",
          nextQuestion: 43 + i + currentIndex,
        },
      ],
    });

    result.push({
      type: "select",
      title: "Qual è il suo stato professionale?",
      label: "Seleziona il suo stato",
      id: 42 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_4",
          label: "Lavoratore",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_5",
          label: "Coadiuvante familiare",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_3",
          label: "Imprenditore",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_1",
          label: "Libero professionista",
          nextQuestion: 43 + i + currentIndex,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_2",
          label: "Impiegato",
          nextQuestion: 43 + i + currentIndex,
        },
      ],

      parentId: 9,
    });

    result.push(
      {
        type: "checkbox",
        title: "Possiede una licenza di guida italiana?",
        id: 43 + i + currentIndex,
        answers: [
          {
            id: "yes",
            nextQuestion: 44 + i + currentIndex,
          },
          {
            id: "no",
            nextQuestion: 45 + i + currentIndex,
          },
        ],
      },

      {
        type: "longform",
        title: "Dettagli della licenza di guida, i campi non sono obbligatori",
        id: 44 + i + currentIndex,
        parentId: 4,
        nextQuestion: 45 + i + currentIndex,
        answers: [
          {
            id: "Numero",
            label: "Number",
            type: "text",
            helperText: "Ex. 91828930",
            isRequired: false,
          },
          {
            id: "Patente tipo",
            label: "License Type",
            type: "text",
            helperText: "Ex. A,B,C",
            isRequired: false,
            // add input validate
          },
          {
            id: "Data di rilascio",
            label: "Release Date",
            type: "Date",
            helperText: "Release Date",
            isRequired: false,
          },
          {
            id: "Organo di rilascio",
            label: "Issuing body",
            type: "text",
            helperText: "Motorizzazione",
            // validate: "RequiredField", // change validation
            isRequired: false,
          },
          {
            id: "Provincia di",
            label: "Province",
            type: "text",
            helperText: "Palermo",
            isRequired: false,
            // add input validate
          },
        ],
      }
    );

    result.push({
      type: "select",
      title: "Qual è il suo livello di educazione?",
      label: "Scegli il suo certificato scolastico",
      id: 45 + i + currentIndex,

      answers: [
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_11",
          label: "Scuola primaria",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_12",
          label: "Scuola media",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_13",
          label: "Diploma",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_14",
          label: "Laurea",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_15",
          label: "Laurea a ciclo unico/magistrale",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
        {
          selected: false,
          id: "C" + page + "_" + moduls + "_16",
          label: "Dottorato",
          nextQuestion:
            i + 1 <= parseInt(action.answer) + 1 ? 47 + i + currentIndex : 19,
        },
      ],

      parentId: 9,
    });

    // controller for the page
    if (i === 3) {
      page++;
    }
    moduls++;
    currentIndex += 7;
  }

  return result;
};

export const clickHereTranslations = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Clicca qui";
    case "French":
      return "Cliquez ici";
    case "Spanish":
      return "haga clic aquíT";
    case "Повертатися":
      return "натисніть тут";
    case "Tamil":
      return "இங்கே கிளிக் செய்யவும்";
    case "Arab":
      return " انقر هنا";
    case "Bengali":
      return "এখানে ক্লিক করুন";
    default:
      return "Click Here";
  }
};

export const downloadDontOccurTranslation = (state) => {
  switch (state?.language) {
    case "Italian":
      return "se il download non è avvenuto";
    case "French":
      return "si le téléchargement n'a pas eu lieu";
    case "Spanish":
      return "si la descarga no se produjo";
    case "Повертатися":
      return "якщо завантаження не відбулося";
    case "Tamil":
      return "பதிவிறக்கம் நடக்கவில்லை என்றால்";
    case "Arab":
      return " إذا لم يتم التنزيل";
    case "Bengali":
      return "যদি ডাউনলোড না হয়";
    default:
      return "if the download didn't occur";
  }
};

export const continueWithBookingTranslation = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Continua con la prenotazione";
    case "French":
      return "Continuer la réservation";
    case "Spanish":
      return "Continuar con la reserva";
    case "Повертатися":
      return "Продовжити бронювання";
    case "Tamil":
      return "முன்பதிவைத் தொடரவும்";
    case "Arab":
      return " تواصل مع الحجز";
    case "Bengali":
      return "বুকিং দিয়ে চালিয়ে যান";
    default:
      return "Continue with booking";
  }
};

export const recompileFormTranslations = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Ricompilare il modulo";
    case "French":
      return "Recompiler le formulaire";
    case "Spanish":
      return "haga clic aquíT";
    case "Повертатися":
      return "Перекомпілюйте форму";
    case "Tamil":
      return "படிவத்தை மீண்டும் தொகுக்கவும்";
    case "Arab":
      return " أعد تجميع النموذج";
    case "Bengali":
      return "ফর্মটি পুনরায় কম্পাইল করুন";
    default:
      return "Recompile the form";
  }
};

export const pdfReadyTranslations = (state) => {
  switch (state?.language) {
    case "Italian":
      return "Il tuo pdf è pronto per il download!";
    case "French":
      return "Votre pdf est prêt à être téléchargé !";
    case "Spanish":
      return "¡Tu pdf está listo para ser descargado!";
    case "Повертатися":
      return "Ваш PDF готовий до завантаження!";
    case "Tamil":
      return "உங்கள் pdf தரவிறக்கம் செய்ய தயாராக உள்ளது!";
    case "Arab":
      return "pdf الخاص بك جاهز للتنزيل!";
    case "Bengali":
      return "আপনার পিডিএফ ডাউনলোড করার জন্য প্রস্তুত!";
    default:
      return "Your pdf is ready to be dowloaded!";
  }
};
