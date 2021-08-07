// export const genaredDataList = [
//   { label: "פרטיים כלליים" },
//   {
//     label: "שם פרטי",
//     require: "true",
//     name:"generalDetails",
//     input: {
//       type: "text",
//     },
//   },
//   {
//     label: "תאריך לידה",
//     name:"dateOfBirth",
//     input: {
//       type: "date",
//     },
//   },
//   {
//     label: "תאריך לידהכמה פעמיים את/ה עושה ספורט בשבוע",
//     name:"sex",
//     input: {
//       type: "radio",
//       options: ["לא עושה", "בין פעם לפעמיים", "בין פעמיים לשלוש"],
//     },
//   },
//   {
//     label:
//       "תאריך לידהכמה פעמיים את/ה עושה ספורט בשבועלמה את/ה נוהג/ת להאזין בשעות הפנא",
//       name:"weekSports",
//     input: {
//       type: "checkbox",
//       options: ["רדיו", "מוזיקה", "הרצאות", "פודקאסט"],
//     },
//   },
// ];

export const genaredDataList = [
  { label: "פרטיים כלליים" },
  {
    label: "שם פרטי",
    require: "true",
    name: "firstName",
    input: {
      type: "text",
    },
  },
  {
    label: "שם משפחה",
    name: "lastName",
    input: {
      type: "text",
    },
  },
  {
    label: "תאריך לידה",
    name: "dateOfBirth",
    input: {
      type: "date",
    },
  },
  {
    label: "מקום מגורים",
    name: "residence",
    input: {
      type: "text",
    },
  },
  {
    label: "מין",
    require: "true",
    name: "sex",
    input: {
      type: "radio",
      options: ["זכר", "נקבה"],
    },
  },
  {
    label: `גובה בס"מ`,
    name: "heightInCm",
    subLabel: "לדוגמא 170",
    input: {
      type: "text",
    },
  },
  { label: "הרגלי חיים" },
  {
    label: "כמה פעמיים את/ה עושה ספורט בשבוע",
    name: "weekSports",
    require: "true",
    input: {
      type: "radio",
      options: [
        "בין פעם לפעמיים",
        "לא עושה",
        "בין פעמיים לשלוש",
        "בין שלוש לארבע",
        "בין ארבע לחמש",
        "בין חמש לשש",
        "כול יום",
      ],
    },
  },
  {
    label: "האם את/ה מקפיד לאכול בריא",
    name: "eatHealthy",
    require: "true",
    verticale: "true",
    sideOption1: "לא מקפיד בכלל",
    sideOption2: "מקפיד מאוד",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    label: "האם את/ה עושה מדיטציות לעיתים קרובות",
    require: "true",
    subLabel: "תפילה גם נחשב",
    name: "meditate",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },
  {
    label: "האם את/ה כותב למגירה לעיתים קרובות",
    name: "drawerWrite",
    require: "true",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },
  {
    label: "האם את/ה מעשן",
    require: "true",
    name: "smoke",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },
  {
    label: "האם את/ה אוהב/ת את העשייה שלך בעבודה",
    name: "likeDoAtWork",
    require: "true",
    verticale: "true",
    sideOption1: "לא אוהב/ת",
    sideOption2: "מאוד אוהב/ת",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    label: "האם את/ה שותה",
    require: "true",
    name: "drink",
    input: {
      type: "radio",
      options: ["כמעט ולא", "לפעמים", "לעיתים קרובות"],
    },
  },
  {
    label: "למה את/ה נוהג/ת להאזין בשעות הפנא",
    name: "listenInSpareTime",
    require: "true",
    input: {
      type: "checkbox",
      options: [
        "רדיו",
        "מוזיקה",
        "הרצאות",
        "פודקאסט",
        "ספרי אודיו",
        "לא מאזין בכלל",
      ],
    },
  },
];

//step two

export const questionForRelationDataList = [
  {
    label: "איך את/ה מפרגן/ת לבן/ת הזוג שלך",
    require: "true",
    name: "complimentSpouse",
    input: {
      type: "radio",
      options: [
        "קונה לו מתנה",
        "נותן/ת לו חיבוק גדול ונשיקה",
        "עושה משהו כדי לעזור לו/ה",
        "מפנה זמן במיוחד בשבילו/ה",
        "אומר/ת לו/ה כמה הוא/היא מיוחד/ת",
      ],
    },
  },
  {
    label: `האם את/ה אומר/ת "אני אוהב/ת אותך" לעיתים קרובות`,
    name: "iLoveYou",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  {
    label: `האם את/ה מביע/ה רגשות בצורה מילולית`,
    name: "expressEmotionsVerbally",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //message
  {
    label: `האם אתה אוהב/ת מסאז'`,
    name: "likeMassage",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //like kiss
  {
    label: `האם את/ה אוהב/ת להתנשק`,
    name: "likeKiss",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //expressEmotionsTouch
  {
    label: `האם את/ה מביע/ה רגשות בצורת מגע`,
    name: "expressEmotionsTouch",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //smallRomanticGifts
  {
    label: `האם את/ה אוהב/ת לתת מתנות רומנטיות קטנות`,
    name: "smallRomanticGifts",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //makeRomanticGestures
  {
    label: `האם את/ה אוהב/ת לעשות מחוות רומנטיות`,
    subLabel: "למשל לבשל ארוחת ערב מושקעת, לארגן בילוי מיוחד וכו'",
    name: "makeRomanticGestures",
    require: "true",
    verticale: "true",
    sideOption1: "בכלל לא",
    sideOption2: "כול הזמן",
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  //coupleJointActivity
  {
    label: `כמה פעמים בשבוע בני הזוג צריכים לעשות פעילות משותפת`,
    subLabel: `פעילות משותפת של לפחות שעה רצופה`,
    name: "coupleJointActivity",
    require: "true",
    input: {
      type: "radio",
      options: [
        "לא חייבים",
        "פעם בשבוע",
        "פעמיים בשבוע",
        "שלוש ארבע פעמיים בשבוע",
        "ארבע חמש פעמיים בשבוע",
        "כול יום",
      ],
    },
  },
  //idealFrequencyForSex
  {
    label: `מהי התדירות האידאלית לסקס`,
    name: "idealFrequencyForSex",
    require: "true",
    input: {
      type: "radio",
      options: [
        "לא חייבים",
        "פעם בשבוע",
        "פעמיים בשבוע",
        "שלוש ארבע פעמיים בשבוע",
        "ארבע חמש פעמיים בשבוע",
        "כול יום למעט אשפוז כפוי",
      ],
    },
  },
  //idealTimeForSex
  {
    label: `מהו הזמן האידאלי לסקס`,
    name: "idealTimeForSex",
    require: "true",
    input: {
      type: "radio",
      options: [
        "עד 10 דק",
        "בין 10 ל 20 דק",
        "בין 20 ל 30 דק",
        "בין חצי שעה לשעה",
        "בין שעה לשעתיים",
        "כול הלילה עד שיוצא עשן לבן",
      ],
    },
  },
  //feelLovedInaRelationship
  {
    label: `אני מרגיש אהוב/ה בקשר זוגי`,
    name: "feelLovedInaRelationship",
    require: "true",
    input: {
      type: "radio",
      options: [
        "כשאני מקבל/ת מתנה של תשומת לב",
        "כשאני מקבל/ת חיבוק גדול",
        "כשבן/ת הזוג עושה דברים לעזור לי",
        "כשבן/ת הזוג רוצה לבלות זמן איכות איתי",
        "כשבן/ת הזוג מפרגן/ת לי במילים חמות",
      ],
    },
  },
];

//step three
export const stapeThreeDataList = [
  //choosingImportanGiftForSpouse
  {
    label: `כשאת/ה בוחר/ת מתנה לבן/ת הזוג הכי חשוב לך`,
    name: "choosingImportanGiftForSpouse",
    input: {
      type: "radio",
      options: ["שתיהיה פרקטית", "שתשמח אותו/ה", "שתראה לו/ה חיבה מהצד שלך"],
    },
  },
  //reasonsForTheSuocess
  {
    label: `מהם הגורמים להצלחה שהשגת`,
    subLabel: "לבחור פרוייקט מטרה הישג שהצלחת בו",
    name: "reasonsForTheSuocess",
    input: {
      type: "checkbox",
      options: [
        "גנים טובים",
        "מזל",
        "משפחה קרובה",
        "חברים",
        "עמיתים לעבודה",
        "אני",
        "בן/בת זוג",
        "Other",
      ],
    },
  },
  //mainCauseOfFailure
  {
    label: `כשאת/ה בוחר/ת מתנה לבן/ת הזוג הכי חשוב לך`,
    subLabel: "לבחור פרוייקט מטרה הישג שנכשלת בו",
    name: "mainCauseOfFailure",
    input: {
      type: "radio",
      options: [
        "גנים טובים",
        "מזל",
        "משפחה קרובה",
        "חברים",
        "עמיתים לעבודה",
        "החוק/המדינה",
        "אני",
        "בן/בת זוג",
        "Other",
      ],
    },
  },
  // manageReadWhatExcitesOtherPeople
  {
    label: `עד כמה את/ה מצליח/ה לקרוא מה אנשים אחרים מרגשים`,
    name: "manageReadWhatExcitesOtherPeople",
    //require: "true",
    verticale: "true",
    sideOption1: `לא מצליח`,
    sideOption2: `מצליח מאוד`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },

  // nextWeekScheduleAdvance
  {
    label: `עד כמה את/ה צריך/ה לתכנן את הלו"ז של השבוע הקרוב מראש`,
    name: "nextWeekScheduleAdvance",
    require: "true",
    verticale: "true",
    sideOption1: `לא צריך`,
    sideOption2: `צריך מאוד`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // enterNewField
  {
    label: `כשאת/ה נכנס/ת לתחום חדש, כמה חשוב לך לדעת כול פרט לפני שתעשה/י פעולה`,
    name: "enterNewField",
    require: "true",
    verticale: "true",
    sideOption1: `לא חשוב`,
    sideOption2: `חשוב מאוד`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // routineYouNeed
  {
    label: `עד כמה את/ה צריך/ה שיגרה`,
    name: "routineYouNeed",
    require: "true",
    verticale: "true",
    sideOption1: `לא צריך/ה`,
    sideOption2: `מאוד צריך/ה`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // likeToTryNewThings
  {
    label: `עד כמה את/ה אוהב/ת לנסות דברים חדשים`,
    name: "likeToTryNewThings",
    require: "true",
    verticale: "true",
    sideOption1: `לא אוהב/ת`,
    sideOption2: `מאוד אוהב/ת`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // needChangesInYourLife
  {
    label: `עד כמה את/ה צריך/ה שינויים בחיים שלך`,
    name: "needChangesInYourLife",
    require: "true",
    verticale: "true",
    sideOption1: `לא צריך/ה`,
    sideOption2: `מאוד צריך/ה`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // mindTakingRisks
  {
    label: `האם לא אכפת לך לקחת סיכונים`,
    name: "mindTakingRisks",
    require: "true",
    verticale: "true",
    sideOption1: `לא לוקח סיכונים`,
    sideOption2: `אין בעיה בלקחת סיכונים`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // setGoalsAndAchieveThem
  {
    label: `עד כמה חשוב לך להציב מטרות ולהשיג אותם`,
    name: "mindTakingRisks",
    require: "true",
    verticale: "true",
    sideOption1: `לא חשוב`,
    sideOption2: `מאוד חשוב`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // peopleAppreciateYou
  {
    label: `עד כמה חשוב לך שאנשים יעריכו אותך`,
    name: "peopleAppreciateYou",
    require: "true",
    verticale: "true",
    sideOption1: `לא חשוב`,
    sideOption2: `מאוד חשוב`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // youToBeManagerOrManager
  {
    label: `עד כמה חשוב לך להיות המנהל/ת או האחראי/ת`,
    name: "youToBeManagerOrManager",
    require: "true",
    verticale: "true",
    sideOption1: `לא חשוב`,
    sideOption2: `מאוד חשוב`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // cultivateRelationships
  {
    label: `עד כמה חשוב לך לטפח מערכות יחסים עם הקרובים לך`,
    name: "cultivateRelationships",
    require: "true",
    verticale: "true",
    sideOption1: `לא חשוב`,
    sideOption2: `מאוד חשוב`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // closeRelationshipsYouGivingParty
  {
    label: `במערכות יחסים קרובות את/ה בדרך כלל הצד הנותן`,
    name: "closeRelationshipsYouGivingParty",
    require: "true",
    verticale: "true",
    sideOption1: `בקושי נותן`,
    sideOption2: `נותן המון`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // easilyIntegrateIntoTeamwork
  {
    label: `האם את/ה משתלב/ת בקלות בעבודת צוות`,
    name: "easilyIntegrateIntoTeamwork",
    require: "true",
    verticale: "true",
    sideOption1: `לא אוהב לעבוד בצוות`,
    sideOption2: `משתלב בקלות`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // needToGiveToOthers
  {
    label: `עד כמה אתה מרגיש צורך לתת לאחרים `,
    name: "needToGiveToOthers",
    require: "true",
    verticale: "true",
    sideOption1: `לא צריך`,
    sideOption2: `צריך מאוד`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // interestedInPersonalDevelopment
  {
    label: `האם התפתחות אישית מעניין/ת אותך `,
    name: "interestedInPersonalDevelopment",
    require: "true",
    verticale: "true",
    sideOption1: `לא ממש`,
    sideOption2: `מאוד מעניין`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // likeToStudy
  {
    label: `האם את/ה אוהב/ת ללמוד`,
    name: "likeToStudy",
    require: "true",
    verticale: "true",
    sideOption1: `לא ממש`,
    sideOption2: `מאוד אוהב/ת`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // attendedAnyCourse
  {
    label: `האם השתתפת באיזשהו קורס בשנה האחרונה`,
    name: "attendedAnyCourse",
    require: "true",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },
  // donateMoneyToCharity
  {
    label: `האם את/ה תורם כסף לצדקה`,
    name: "donateMoneyToCharity",
    require: "true",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },
  // volunteerInTheCommunity
  {
    label: `האם את/ה תורם כסף לצדקה`,
    name: "volunteerInTheCommunity",
    require: "true",
    input: {
      type: "radio",
      options: ["כן", "לא"],
    },
  },

  // contributingToOthersEssential
  {
    label: `עד כמה לתרום לאחרים חיוני לאושר שלך`,
    name: "contributingToOthersEssential",
    require: "true",
    verticale: "true",
    sideOption1: `לא חיוני`,
    sideOption2: `מאוד חיוני`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },
  // moreYouGive: "",
  {
    label: `ככול שתיתן יותר ככה תקבל יותר`,
    name: "moreYouGive",
    require: "true",
    verticale: "true",
    sideOption1: `לא מסכים`,
    sideOption2: `מסכים מאוד`,
    input: {
      type: "radio",
      options: ["1", "2", "3", "4", "5"],
    },
  },

  // whatWouldYouLikeToSeeHappen
  {
    label: `נניח שאתה עושה מופע, מה היית רוצה שיקרה`,
    name: "whatWouldYouLikeToSeeHappen",
    require: "true",
    input: {
      type: "radio",
      options: [
        "שייבאו הרבה אנשים ולהרוויח הרבה כסף",
        "לנסות דברים חדשים שעוד לא עשיתי",
        "שרוב האנשים יעריכו אותי",
        "הזדמנות להכיר הרבה אנשים חדשים",
        "ללמוד דברים חדשים תוך כדי עשייה",
        "לגרום הנאה לאנשים",
      ],
    },
  },
];
