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
   label:"למה את/ה נוהג/ת להאזין בשעות הפנא",
    name: "listenInSpareTime",
    require: "true",
    input: {
      type: "checkbox",
      options: ["רדיו", "מוזיקה", "הרצאות","פודקאסט","ספרי אודיו", "לא מאזין בכלל"],
    },
  },
];
