export const genaredDataList = [
  { label: "פרטיים כלליים" },
  {
    label: "שם פרטי",
    require: "true",
    name:"generalDetails",
    input: {
      type: "text",           
    },
  },
  {
    label: "תאריך לידה",
    name:"dateOfBirth",
    input: {
      type: "date",
    },
  },
  {
    label: "תאריך לידהכמה פעמיים את/ה עושה ספורט בשבוע",
    name:"sex",
    input: {
      type: "radio",
      options: ["לא עושה", "בין פעם לפעמיים", "בין פעמיים לשלוש"],
    },
  },
  {
    label:
      "תאריך לידהכמה פעמיים את/ה עושה ספורט בשבועלמה את/ה נוהג/ת להאזין בשעות הפנא",
      name:"weekSports",
    input: {
      type: "checkbox",
      options: ["רדיו", "מוזיקה", "הרצאות", "פודקאסט"],
    },
  },
];
