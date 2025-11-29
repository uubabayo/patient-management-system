export const mockPatients = [
  {
    id: 1,
    firstName: "Ibrahim",
    lastName: "Yakubu",
    phone: "123-456-7890",
    address: "Pantami, Gombe",
    dateOfBirth: "1985-03-15",
    gender: "Male",
  },
  {
    id: 2,
    firstName: "Ummulkhair",
    lastName: "Musa",
    phone: "123-456-7891",
    address: "Awala, Bauchi",
    dateOfBirth: "1990-07-22",
    gender: "Female",
  },
  {
    id: 3,
    firstName: "Tanimu",
    lastName: "Hassan",
    phone: "123-456-7892",
    address: "Federal low-cost, Gombe",
    dateOfBirth: "1978-11-30",
    gender: "Male",
  },
  {
    id: 4,
    firstName: "Sadiya",
    lastName: "Bashir",
    phone: "123-456-7893",
    address: "G/Kaya, Kano",
    dateOfBirth: "1995-05-10",
    gender: "Female",
  },
];

// Patient-specific medical history
export const mockMedicalHistory = {
  1: [
    // Ibrahim medical history
    {
      id: 1,
      date: "2024-01-15",
      diagnosis: "Hypertension",
      symptoms: "High blood pressure, headaches, dizziness",
      treatment: "Lifestyle modifications, prescribed Lisinopril 10mg daily",
      medications: "Lisinopril 10mg once daily",
      notes: "Patient advised to reduce salt intake and exercise regularly",
      doctor: "Dr. Lamido",
      followUpDate: "2024-02-15",
    },
    {
      id: 2,
      date: "2023-11-20",
      diagnosis: "Common Cold",
      symptoms: "Cough, fever, runny nose, sore throat",
      treatment: "Rest, hydration, over-the-counter cold medication",
      medications: "Acetaminophen 500mg as needed for fever",
      notes: "Viral infection, should resolve in 7-10 days",
      doctor: "Dr. Kasim",
      followUpDate: "",
    },
  ],
  2: [
    // Aisha medical history
    {
      id: 1,
      date: "2024-01-10",
      diagnosis: "Type 2 Diabetes",
      symptoms: "Increased thirst, frequent urination, fatigue",
      treatment: "Diet control, exercise, Metformin 500mg twice daily",
      medications: "Metformin 500mg twice daily with meals",
      notes: "Patient educated about blood sugar monitoring",
      doctor: "Dr. Umar",
      followUpDate: "2024-02-10",
    },
    {
      id: 2,
      date: "2023-12-05",
      diagnosis: "Seasonal Allergies",
      symptoms: "Sneezing, itchy eyes, nasal congestion",
      treatment: "Antihistamines, nasal spray",
      medications: "Loratadine 10mg once daily",
      notes: "Allergy to pollen, advised to avoid triggers",
      doctor: "Dr. Umar",
      followUpDate: "",
    },
  ],
  3: [
    // Isah medical history
    {
      id: 1,
      date: "2024-01-08",
      diagnosis: "Lower Back Pain",
      symptoms: "Pain in lower back, difficulty bending",
      treatment: "Physical therapy, pain management",
      medications: "Ibuprofen 400mg as needed for pain",
      notes: "Referred to physical therapy, avoid heavy lifting",
      doctor: "Dr. Lamido",
      followUpDate: "2024-02-08",
    },
  ],
  4: [], // Fatima medical history - no medical history yet
};

// Patient-specific vital signs history
export const mockVitalsHistory = {
  1: [
    // Ibrahim's vitals
    {
      id: 1,
      date: "2024-01-15",
      temperature: "36.8'C",
      bloodPressure: "145/95",
      pulse: "78 bpm",
      respiration: "18 breaths/min",
      oxygenSaturation: "97%",
      nurse: "Nurse Habiba",
    },
    {
      id: 2,
      date: "2024-01-10",
      temperature: "36.5'C",
      bloodPressure: "140/90",
      pulse: "72 bpm",
      respiration: "16 breaths/min",
      oxygenSaturation: "98%",
      nurse: "Nurse Hauwa",
    },
  ],
  2: [
    // Aisha's vitals
    {
      id: 1,
      date: "2024-01-10",
      temperature: "36.9'C",
      bloodPressure: "125/80",
      pulse: "82 bpm",
      respiration: "17 breaths/min",
      oxygenSaturation: "96%",
      nurse: "Nurse Keturah",
    },
    {
      id: 2,
      date: "2023-12-15",
      temperature: "37.1'C",
      bloodPressure: "130/85",
      pulse: "76 bpm",
      respiration: "16 breaths/min",
      oxygenSaturation: "98%",
      nurse: "Nurse Habiba",
    },
  ],
  3: [
    // Isah's vitals
    {
      id: 1,
      date: "2024-01-08",
      temperature: "36.7'C",
      bloodPressure: "135/88",
      pulse: "74 bpm",
      respiration: "15 breaths/min",
      oxygenSaturation: "99%",
      nurse: "Nurse Hauwa",
    },
  ],
  4: [], // Fatima's vitals - no vitals recorded yet
};
