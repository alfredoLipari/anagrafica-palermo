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
          options: ["male", "female"],
          validate: "RequiredField",
          isRequired: true,
          helperText: "scegli il genere",
          // add input validate
        },
        {
          id: "Stato Civile_" + i,
          label: "Stato civile",
          type: "select",
          options: ["celibe", "sposato/a", "divorziato/a", "vedovo/a"],
          helperText: "scegli stato civile",
          validate: "RequiredField",
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
            "madre",
            "padre",
            "figlio",
            "figlia",
            "fratello",
            "sorella",
            "nonno",
            "nonna",
            "zio",
            "zia",
            "cugino",
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
      title: "Lavora?",
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
      label: "Select lo stato",
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
      title: "Qual è il suo stato professionale?",
      label: "Seleziona il suo stato",
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
        title: "Possiede una licensa di guida italiana?",
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
        title: "Dettagli della licensa di guida, i campi non sono obbligatori",
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
          label: "Laurea lunga/magistrale",
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
