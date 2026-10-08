import { FAQItem, CampusProblemSolution } from '../types';

export const PROJECT_DETAILS = {
  title: "CampusAI — Autonomous College Help Desk & Student Service System",
  titleOr: "କ୍ୟାମ୍ପସ-ଏଆଇ — ସ୍ୱୟଂଚାଳିତ କଲେଜ ହେଲ୍ପ ଡେସ୍କ ଓ ଛାତ୍ର ସେବା ପ୍ରଣାଳୀ",
  developer: "Jagannath Mohapatra",
  developerOr: "ଜଗନ୍ନାଥ ମହାପାତ୍ର",
  regNo: "230301120151",
  department: "Department of Computer Science & Engineering",
  academicYear: "2025–2026",
  projectType: "Advanced AI Capstone & Academic Innovation Project (Grade 'O')",
  modelUsed: "Google Gemini 2.5 Flash (with Google Search Grounding)",
  framework: "React 19 + TypeScript + Tailwind CSS (frontend-only)",
  repository: "Autonomous Campus Virtual Assistant",
  supervisor: "Academic Capstone Review Committee",
};

export const QUICK_PROMPTS = [
  {
    label: "75% Attendance Rule & Medical Condonation",
    query: "What is the mandatory attendance requirement for appearing in end-semester exams, and how does medical condonation work?",
    category: "Academics",
  },
  {
    label: "CGPA to Percentage Conversion Formula",
    query: "How do I calculate my equivalent percentage and division from an 8.65 CGPA?",
    category: "Academics",
  },
  {
    label: "Semester Fee & Payment Modes",
    query: "What is the fee breakdown for B.Tech semester registration and how can I pay via SBI Collect?",
    category: "Fees & Accounts",
  },
  {
    label: "Hostel Curfew & Digital Leave Pass",
    query: "What are the campus entry gate in-times for hostel boarders and how to apply for night leave pass?",
    category: "Hostel & Mess",
  },
  {
    label: "Placement Drive Eligibility Criteria",
    query: "What is the minimum CGPA required for campus placement drives and what top companies visit our campus?",
    category: "Placements",
  },
  {
    label: "Who created this AI Help Desk system?",
    query: "Who is the developer of this College Help Desk Chatbot system?",
    category: "General",
  },
];

export const ODIA_QUICK_PROMPTS = [
  {
    label: "୭୫% ଉପସ୍ଥାନ (Attendance) ନିୟମ",
    query: "ସେମିଷ୍ଟାର ପରୀକ୍ଷା ଦେବା ପାଇଁ ସର୍ବନିମ୍ନ ୭୫% ଉପସ୍ଥାନ ନିୟମ ଏବଂ ମେଡିକାଲ ରିହାତି (Condonation) କିପରି ମିଳିବ?",
    category: "Academics",
  },
  {
    label: "CGPA ରୁ ଶତକଡ଼ା (%) ହିସାବ କରନ୍ତୁ",
    query: "କଲେଜର ସ୍ୱୟଂଶାସିତ ନିୟମ ଅନୁସାରେ ୮.୫୦ CGPA ରୁ ଶତକଡ଼ା (Percentage) କିପରି ବାହାର କରିବେ?",
    category: "Academics",
  },
  {
    label: "ପ୍ରେରଣା (PRERANA) ଓ ମେଧାବୃତ୍ତି ସ୍କଲାରସିପ୍",
    query: "ଓଡ଼ିଶା ସରକାରଙ୍କ ପ୍ରେରଣା (PRERANA) ଏବଂ ଇ-ମେଧାବୃତ୍ତି ସ୍କଲାରସିପ୍ ଆବେଦନ ପ୍ରକ୍ରିୟା ଏବଂ ଆବଶ୍ୟକୀୟ ଡକ୍ୟୁମେଣ୍ଟ୍ କ'ଣ?",
    category: "Fees & Accounts",
  },
  {
    label: "ହଷ୍ଟେଲ ଲିଭ୍ ପାସ୍ ଓ ଫାଟକ ନିୟମ",
    query: "ହଷ୍ଟେଲ ଅନ୍ତେବାସୀଙ୍କ ପାଇଁ ରାତି କର୍ଫ୍ୟୁ ସମୟ ଏବଂ ଛୁଟି ପାସ୍ (Digital Leave Pass) ଆବେଦନ ନିୟମ କ'ଣ?",
    category: "Hostel & Mess",
  },
  {
    label: "ଏସବିଆଇ କଲେକ୍ଟ (SBI Collect) ଫିସ୍ ପୈଠ",
    query: "ସେମିଷ୍ଟାର ଟ୍ୟୁସନ ଓ ହଷ୍ଟେଲ ଫିସ୍ SBI Collect ମାଧ୍ୟମରେ କିପରି ଜମା କରି DU ରସିଦ ସଂଗ୍ରହ କରିବେ?",
    category: "Fees & Accounts",
  },
  {
    label: "ଜଗନ୍ନାଥ ମହାପାତ୍ରଙ୍କ ପ୍ରୋଜେକ୍ଟ ବିବରଣୀ",
    query: "ଏହି AI କଲେଜ ହେଲ୍ପ ଡେସ୍କ ସିଷ୍ଟମ୍ କିଏ ତିଆରି କରିଛନ୍ତି ଏବଂ ଏହାର ଉଦ୍ଦେଶ୍ୟ କ'ଣ?",
    category: "General",
  },
];

export const CAMPUS_FAQS: FAQItem[] = [
  {
    id: "faq-1",
    category: "Academics",
    question: "What is the minimum attendance required for appearing in semester end examinations?",
    answer: "A minimum of 75% attendance is strictly required in each registered theory and practical subject. If a student's attendance falls between 65% and 74%, they may apply for medical/sports condonation upon submitting verified certificates within 7 working days to the Dean Academics.",
    officialRef: "Academic Regulation Handbook § 4.2 (Attendance & Condonation)",
    officeLocation: "Dean of Academic Affairs Office, Administrative Block 2nd Floor",
    contactPerson: "Dr. P. K. Mohapatra (Dean Academics)"
  },
  {
    id: "faq-2",
    category: "Academics",
    question: "How is the CGPA to Percentage conversion calculated?",
    answer: "For autonomous engineering programs, the official formula is: Percentage (%) = (CGPA - 0.75) × 10. For AICTE standardized applications, Percentage (%) = CGPA × 9.5 is accepted. For example, a 8.40 CGPA translates to 76.5% on the autonomous scale.",
    officialRef: "Academic Evaluation Circular Ref: COE/2024/719",
    officeLocation: "Controller of Examinations (CoE) Cell, Room 108",
    contactPerson: "Prof. S. R. Swain (CoE)"
  },
  {
    id: "faq-3",
    category: "Examinations",
    question: "What is the weightage split between Mid-Semester and End-Semester exams?",
    answer: "The total evaluation carries 100 marks: Mid-Semester Examination accounts for 30 marks (1.5 hours), Continuous Internal Evaluation (quizzes, assignments, class tests) accounts for 20 marks, and the comprehensive End-Semester Examination accounts for 50 marks (3 hours).",
    officialRef: "Examination Regulation Manual Article 12.3",
    officeLocation: "Exam Section, Admin Block Ground Floor",
    contactPerson: "Mr. B. K. Jena (Deputy Registrar, Exams)"
  },
  {
    id: "faq-4",
    category: "Examinations",
    question: "When are supplementary / backlog examinations conducted?",
    answer: "Supplementary examinations for odd and even semesters are conducted within 45 to 60 days following the publication of regular semester results. Students can register up to a maximum of 4 backlog subjects per supplementary cycle by paying the requisite exam fee of ₹600 per subject.",
    officialRef: "Backlog Clearance Policy Circular 2025",
    officeLocation: "Exam Section Counter 3",
    contactPerson: "Examination Desk Help Desk"
  },
  {
    id: "faq-5",
    category: "Fees & Accounts",
    question: "How do I pay semester tuition and hostel fees online?",
    answer: "All fees must be remitted strictly via State Bank Collect (SBI Collect) under 'Educational Institutions' or directly via the Student ERP Portal login using Net Banking, UPI, or Credit/Debit Cards. Save the generated DU reference number receipt for verification at the accounts desk.",
    officialRef: "Finance Office Circular FO/2025/112",
    officeLocation: "Accounts Section, Room 102",
    contactPerson: "Chief Finance Officer (accounts@campus.edu)"
  },
  {
    id: "faq-6",
    category: "Hostel & Mess",
    question: "What are the hostel in-times and leave pass protocols?",
    answer: "Boarders must return to campus and check in at their respective halls before 9:00 PM on weekdays and 9:30 PM on weekends. For overnight leave or home visits, students must submit a digital Leave Pass on the ERP portal at least 24 hours in advance with parent SMS approval.",
    officialRef: "Hostel Code of Conduct & Residential Guidelines",
    officeLocation: "Chief Warden Office, Aryabhatta Hall of Residence",
    contactPerson: "Prof. R. N. Sahoo (Chief Warden)"
  },
  {
    id: "faq-7",
    category: "Placements",
    question: "What are the eligibility criteria for campus recruitment drives?",
    answer: "Students must maintain a minimum cumulative CGPA of 6.50 (some tier-1 product firms require 7.50+ CGPA) with no active standing backlogs at the time of the drive. Additionally, a minimum of 75% attendance in mandatory pre-placement soft skill & coding training is required.",
    officialRef: "Training & Placement Cell Policy Document 2025–26",
    officeLocation: "TPO Complex, Innovation & Placement Block 1st Floor",
    contactPerson: "Head TPO (placements@campus.edu)"
  },
  {
    id: "faq-8",
    category: "Scholarships",
    question: "What scholarships are available for high-achieving students?",
    answer: "The college awards an Institutional Merit Scholarship providing a 25% tuition fee waiver to students securing SGPA >= 9.00 in each semester. Female engineering students can apply for the AICTE Pragati Scholarship (₹50,000/yr). Students from backward categories can apply via the State Post-Matric OASIS/PRERANA portal.",
    officialRef: "Student Welfare & Scholarship Notification 2025",
    officeLocation: "Scholarship Desk, Student Affairs Wing",
    contactPerson: "Scholarship Nodal Officer"
  },
];

export const VIVA_QUESTIONS = [
  {
    q: "What is the primary motivation behind building CampusAI?",
    a: "Traditional college administrative inquiry systems rely on physically visiting department counters or sending manual emails that take days to be addressed. CampusAI provides real-time, 24/7 automated campus support, reduces staff administrative workload by over 70%, and bridges students with immediate, policy-accurate guidance."
  },
  {
    q: "How does the system mitigate LLM hallucinations regarding college policies?",
    a: "The browser-based app sends chat prompts directly to Google Gemini using the Google GenAI SDK. Ticket details are stored only in the current browser and are not delivered to college administration."
  },
  {
    q: "How does the system communicate with Gemini and store tickets?",
    a: "The React client calls Gemini directly through the Google GenAI SDK and streams generated text into the chat. A restricted VITE_GEMINI_API_KEY is required and is visible to app users in the browser, so it must not be treated as a secret. Support tickets are stored locally in the current browser and are not sent to college staff."
  },
  {
    q: "How does the grievance ticketing dispatch subsystem function?",
    a: "When a student reports an issue that cannot be resolved purely with information (e.g., duplicate grade sheet, hostel Wi-Fi breakdown, fee receipt discrepancy), the system generates a unique tracking ID (e.g., TKT-2026-CS-4821) and auto-assigns it to the responsible department head (CoE, Warden, HOD, TPO) with lifecycle tracking."
  },
  {
    q: "What tech stack powers this project?",
    a: "The project uses Google Gemini through the browser SDK, React 19 + TypeScript for the client application, Tailwind CSS for responsive styling, browser local storage for tickets, and Web Speech API for voice accessibility."
  },
  {
    q: "What future enhancements are planned for this system?",
    a: "Future iterations will integrate WhatsApp Business API webhooks for seamless messaging, bi-directional synchronization with the college ERP database via OAuth, and multi-lingual voice support for regional Indian languages (Hindi, Odia, Bengali)."
  }
];

export const EMERGENCY_CONTACTS = [
  {
    name: "Campus Security & Quick Response",
    number: "0674-2900100",
    timing: "24/7 Available",
    type: "Security",
    desc: "Main campus gate control room, patrol squad & night escorts."
  },
  {
    name: "Campus Health Centre & Ambulance",
    number: "+91 94371 99911",
    timing: "24/7 Doctor on Duty",
    type: "Medical",
    desc: "Emergency trauma, campus ambulance & immediate first aid."
  },
  {
    name: "Anti-Ragging Squad (Zero Tolerance)",
    number: "1800-180-5522",
    timing: "Toll-Free 24 Hours",
    type: "Disciplinary",
    desc: "National UGC helpline & institutional anti-ragging cell."
  },
  {
    name: "Women's Grievance & Internal Complaints Committee",
    number: "+91 98610 88220",
    timing: "24/7 Confidential",
    type: "Counseling",
    desc: "Strictly confidential support and safety for female students and staff."
  },
  {
    name: "Chief Warden Hostel Control Room",
    number: "+91 94370 12345",
    timing: "6:00 AM – 11:00 PM",
    type: "Hostel",
    desc: "Hostel accommodation, electrical emergency, and mess matters."
  }
];

export const CAMPUS_PROBLEMS_SOLUTIONS: CampusProblemSolution[] = [
  {
    id: "prob-1",
    titleEn: "Hall Ticket Withheld Due to Attendance Shortage (<75%)",
    titleOr: "ଉପସ୍ଥାନ କମ୍ (୭୫% ତଳେ) ଥିବାରୁ ପରୀକ୍ଷା ପ୍ରବେଶ ପତ୍ର ରୋକିବା",
    category: "Academics",
    problemDescEn: "Admit card shows 'Blocked by Dean Academics' due to attendance falling between 65% and 74%.",
    problemDescOr: "୭୫% ରୁ କମ୍ ଉପସ୍ଥାନ ଥିବାରୁ ERP ପୋର୍ଟାଲରେ ହଲ୍ ଟିକେଟ୍ 'Blocked' ଦେଖାଉଛି।",
    solutionStepsEn: [
      "Obtain an official Medical Certificate / Fitness Certificate countersigned by a registered medical practitioner.",
      "Get the certificate verified and signed by the Chief Medical Officer at the Campus Health Centre (Room 102).",
      "Draft a Condonation Application addressed to the Dean of Academic Affairs explaining the genuine reason for absence.",
      "Submit the application with Department HOD recommendation to the Academic Section before the 48-hour cutoff deadline.",
      "Collect the stamped condonation clearance slip and generate the Hall Ticket on the ERP portal."
    ],
    solutionStepsOr: [
      "ପଞ୍ଜୀକୃତ ଡାକ୍ତରଙ୍କ ଦ୍ୱାରା ପ୍ରମାଣିତ ମେଡିକାଲ ଫିଟନେସ୍ ସାର୍ଟିଫିକେଟ୍ ସଂଗ୍ରହ କରନ୍ତୁ।",
      "କଲେଜ ହେଲ୍ଥ ସେଣ୍ଟର (ରୁମ୍ ୧୦୨) ର ମୁଖ୍ୟ ଚିକିତ୍ସା ଅଧିକାରୀଙ୍କ ଦ୍ୱାରା ଏହାକୁ ସତ୍ୟାପିତ କରାନ୍ତୁ।",
      "ଡିନ୍ ଏକାଡେମିକ୍ସଙ୍କ ଉଦ୍ଦେଶ୍ୟରେ ଛୁଟି ଏବଂ ରିହାତି (Condonation) ପାଇଁ ଦରଖାସ୍ତ ଲେଖନ୍ତୁ।",
      "ନିଜ ବିଭାଗୀୟ ମୁଖ୍ୟ (HOD) ଙ୍କ ସୁପାରିଶ ସହିତ ପରୀକ୍ଷାର ୪୮ ଘଣ୍ଟା ପୂର୍ବରୁ ଏକାଡେମିକ୍ ସେଲ୍‌ରେ ଦାଖଲ କରନ୍ତୁ।",
      "ରିହାତି ସ୍ଲିପ୍ ପାଇବା ପରେ ERP ପୋର୍ଟାଲରୁ ହଲ୍ ଟିକେଟ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Medical Prescriptions & Discharge Summary", "Campus CMO Verification Seal", "Application signed by Parents & HOD", "Semester Fee Clearance Receipt"],
    officeLocation: "Dean of Academic Affairs Office, Administrative Block 2nd Floor (Room 204)",
    timeline: "24–48 Hours",
    feeRequired: "₹500 Condonation Fee (if approved by Academic Council)",
    applicationTemplate: "To,\nThe Dean of Academic Affairs,\nSubject: Application for attendance condonation for semester examinations.\nRespected Sir,\nI, [Student Name], Registration No: [Reg No], student of [Department], could not maintain 75% attendance due to severe illness. Kindly condone my attendance shortage and permit issuance of my hall ticket.\nThanking you,\nYours obediently,\n[Signature]"
  },
  {
    id: "prob-2",
    titleEn: "Name / Mother's Name Typo Correction on Grade Sheet",
    titleOr: "ଗ୍ରେଡ୍ ସିଟ୍‌ରେ ଛାତ୍ର କିମ୍ବା ମାତାପିତାଙ୍କ ନାମ ଭୁଲ ସଂଶୋଧନ",
    category: "Exams & Results",
    problemDescEn: "Original semester grade card contains spelling error in student or parent name compared to 10th Board Certificate.",
    problemDescOr: "ସେମିଷ୍ଟାର ଗ୍ରେଡ୍ କାର୍ଡରେ ମାଟ୍ରିକ ସାର୍ଟିଫିକେଟ୍ ତୁଳନାରେ ନାମ ବନାନ ଭୁଲ ରହିଛି।",
    solutionStepsEn: [
      "Take photocopies of High School (10th) Board Certificate and Aadhaar Card showing the correct spelling.",
      "Fill out the 'Grade Card Correction Form' available at the Examination Counter.",
      "Surrender the original incorrect Grade Sheet at the Examination Counter.",
      "Pay the nominal document rectification fee at the Accounts Desk via POS/Cash.",
      "The Controller of Examinations (CoE) verifies with University Database and issues the corrected grade card."
    ],
    solutionStepsOr: [
      "ଦଶମ ବୋର୍ଡ ସାର୍ଟିଫିକେଟ୍ ଏବଂ ଆଧାର କାର୍ଡର ନକଲ ପ୍ରସ୍ତୁତ କରନ୍ତୁ।",
      "ପରୀକ୍ଷା ସେଲ୍ କାଉଣ୍ଟରରୁ 'ଗ୍ରେଡ୍ କାର୍ଡ ସଂଶୋଧନ ଫର୍ମ' ପୂରଣ କରନ୍ତୁ।",
      "ମୂଳ ଭୁଲ ଥିବା ଗ୍ରେଡ୍ ସିଟ୍ କାଉଣ୍ଟରରେ ଜମା ଦିଅନ୍ତୁ।",
      "ଆକାଉଣ୍ଟସ୍ କାଉଣ୍ଟରରେ ସଂଶୋଧନ ଫିସ୍ ଜମା କରନ୍ତୁ।",
      "ପରୀକ୍ଷା ନିୟନ୍ତ୍ରକ (CoE) ଯାଞ୍ଚ କରି ନୂତନ ସଂଶୋଧିତ ଗ୍ରେଡ୍ କାର୍ଡ ପ୍ରଦାନ କରିବେ।"
    ],
    requiredDocs: ["10th Board Certificate", "Original Faulty Grade Card", "Aadhaar Card Copy", "Rectification Application"],
    officeLocation: "Controller of Examinations (CoE) Cell, Ground Floor (Room 108)",
    timeline: "3–5 Working Days",
    feeRequired: "₹200 (Account Section Challan)",
    applicationTemplate: "To,\nThe Controller of Examinations,\nSubject: Request for correction of spelling in Semester Grade Sheet.\nRespected Sir,\nMy semester [Semester] grade card contains an error in [Student/Mother/Father Name]. As per my 10th Board Certificate, the correct spelling is [Correct Spelling]. Enclosed please find relevant documents for rectifying the same.\nYours faithfully,\n[Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-3",
    titleEn: "Bonafide Certificate & Fee Estimate for Education Bank Loan",
    titleOr: "ଶିକ୍ଷା ବ୍ୟାଙ୍କ ଋଣ ପାଇଁ ବୋନାଫାଇଡ୍ ସାର୍ଟିଫିକେଟ୍ ଓ ଫିସ୍ ବିବରଣୀ",
    category: "Certificates & Documents",
    problemDescEn: "Nationalized or private bank requires official institutional Bonafide Certificate and 4-year fee structure to sanction student loan.",
    problemDescOr: "ବ୍ୟାଙ୍କରୁ ପାଠପଢ଼ା ଋଣ (Education Loan) ପାଇଁ କଲେଜର ଅଫିସିଆଲ୍ ବୋନାଫାଇଡ୍ ଏବଂ ସମ୍ପୂର୍ଣ୍ଣ ଖର୍ଚ୍ଚ ତାଲିକା ଦରକାର।",
    solutionStepsEn: [
      "Submit an application specifying bank name, branch, and loan scheme (Vidya Lakshmi / SBI Scholar Loan).",
      "Attach a copy of College Admission Letter & College ID Card.",
      "The Academic Section issues the official Bonafide Certificate with college letterhead, hologram seal, and Principal signature.",
      "Accounts section issues the year-wise institutional Fee Structure (Tuition, Hostel, Mess, Exams).",
      "Collect the signed original package from Dispatch Counter 2."
    ],
    solutionStepsOr: [
      "ବ୍ୟାଙ୍କ ନାମ ଏବଂ ଶାଖା ଉଲ୍ଲେଖ କରି ଏକାଡେମିକ୍ ସେଲ୍‌ରେ ଆବେଦନ କରନ୍ତୁ।",
      "କଲେଜ ଆଡମିଶନ ଲେଟର ଏବଂ ଆଇ-କାର୍ଡ ନକଲ ସଂଲଗ୍ନ କରନ୍ତୁ।",
      "କଲେଜ ଲେଟରହେଡ୍‌ରେ ଅଧ୍ୟକ୍ଷଙ୍କ ଦସ୍ତଖତ ଥିବା ବୋନାଫାଇଡ୍ ସାର୍ଟିଫିକେଟ୍ ପ୍ରଦାନ କରାଯିବ।",
      "ଆକାଉଣ୍ଟସ୍ ସେକ୍ସନ ଚାରି ବର୍ଷର ଫିସ୍ ବିବରଣୀ (Fee Structure) ପ୍ରଦାନ କରିବେ।",
      "କାଉଣ୍ଟର ୨ ରୁ ମୂଳ ସାର୍ଟିଫିକେଟ୍ ସଂଗ୍ରହ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Admission Allotment Letter", "Student ID Card", "Bank Loan Application Form", "No-Dues clearance of current semester"],
    officeLocation: "Student Section / Dispatch Counter, Administrative Block 1st Floor",
    timeline: "24–48 Hours",
    feeRequired: "Nil (Free of Charge)",
    applicationTemplate: "To,\nThe Principal / Director,\nSubject: Requisition for Bonafide Certificate & Course Fee Structure for Bank Education Loan.\nRespected Sir,\nI am a regular student of [Branch], Semester [Sem], Reg No: [Reg No]. I have applied for an Education Loan at [Bank Name, Branch]. I request you to kindly issue a Bonafide Certificate along with the official fee estimate.\nThanking you,\nYours obediently,\n[Student Name]"
  },
  {
    id: "prob-4",
    titleEn: "Lost Student Identity Card (I-Card) Re-issuance",
    titleOr: "ହଜିଯାଇଥିବା ଛାତ୍ର ପରିଚୟ ପତ୍ର (ID Card) ପୁନଃପ୍ରାପ୍ତି",
    category: "Certificates & Documents",
    problemDescEn: "Student lost the RFID physical Identity Card required for library access, bus entry, and semester examination gates.",
    problemDescOr: "କଲେଜ ପରିଚୟ ପତ୍ର ହଜିଯାଇଥିବାରୁ ଲାଇବ୍ରେରୀ, ବସ୍ କିମ୍ବା ପରୀକ୍ଷା ହଲ୍‌କୁ ପ୍ରବେଶ କରିବାରେ ଅସୁବିଧା।",
    solutionStepsEn: [
      "Report the loss to Campus Security Gate 1 and obtain a Lost Property Acknowledgement.",
      "Fill the Duplicate ID Card Requisition Form at the Administrative Office.",
      "Pay the RFID card replacement fee of ₹250 at Accounts Counter.",
      "Submit the payment challan with two recent passport-size photographs in formal attire.",
      "Collect the newly encoded Smart ID Card from the IT Support / ERP Cell within 3 days."
    ],
    solutionStepsOr: [
      "ମୁଖ୍ୟ ଗେଟ୍ ସୁରକ୍ଷା ଅଫିସ୍‌ରେ କାର୍ଡ ହଜିବା ବିଷୟରେ ଜଣାଇ ସ୍ଲିପ୍ ନିଅନ୍ତୁ।",
      "କଲେଜ ଅଫିସ୍‌ରୁ 'ଡୁପ୍ଲିକେଟ୍ ଆଇ-କାର୍ଡ ଫର୍ମ' ପୂରଣ କରନ୍ତୁ।",
      "ଆକାଉଣ୍ଟସ୍ କାଉଣ୍ଟରରେ ₹୨୫୦ ଫିସ୍ ଜମା କରନ୍ତୁ।",
      "ଫିସ୍ ରସିଦ୍ ସହିତ ଦୁଇଟି ପାସପୋର୍ଟ ସାଇଜ୍ ଫଟୋ ଦାଖଲ କରନ୍ତୁ।",
      "୩ ଦିନ ମଧ୍ୟରେ IT / ERP ସେଲ୍‌ରୁ ନୂତନ RFID ସ୍ମାର୍ଟ କାର୍ଡ ସଂଗ୍ରହ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Passport size photo (2 copies)", "Challan receipt of ₹250", "Copy of semester registration slip", "Security entry slip"],
    officeLocation: "IT Cell & Administrative Section (Room 106)",
    timeline: "2–3 Days",
    feeRequired: "₹250 (Card Printing & RFID Encoding)",
    applicationTemplate: "To,\nThe Administrative Officer,\nSubject: Application for issuance of duplicate Student ID Card.\nRespected Sir,\nI regret to inform that I have lost my original Student ID Card bearing Reg No: [Reg No]. I have paid the requisite duplicate fee and request you to issue a new ID card.\nYours sincerely,\n[Student Name]"
  },
  {
    id: "prob-5",
    titleEn: "Semester Answer Script Scrutiny & Re-Evaluation",
    titleOr: "ଉତ୍ତର ଖାତା ପୁନଃ ଯାଞ୍ଚ ଓ ପୁନଃ ମୂଲ୍ୟାୟନ (Re-Checking)",
    category: "Exams & Results",
    problemDescEn: "Student believes their awarded end-semester marks do not reflect their true performance and seeks answer script photocopy or re-checking.",
    problemDescOr: "ସେମିଷ୍ଟାର ପରୀକ୍ଷାରେ ଆଶାନୁରୂପ ମାର୍କ ନ ମିଳିଥିବାରୁ ଉତ୍ତର ଖାତା ପୁନଃ ଯାଞ୍ଚ କରିବା ପାଇଁ ଆବେଦନ।",
    solutionStepsEn: [
      "Apply within 15 days of online result declaration via the Student ERP Portal.",
      "Select subjects for 'Scrutiny' (retotalling of marks) or 'Re-evaluation' (evaluation by an independent external evaluator).",
      "Pay the prescribed scrutiny fee of ₹200/subject or re-evaluation fee of ₹500/subject online.",
      "The CoE retrieves the encrypted digital answer script and sends it for blind evaluation.",
      "If the re-evaluated marks change by >5%, the updated higher grade is reflected in the official tabulations."
    ],
    solutionStepsOr: [
      "ଫଳାଫଳ ପ୍ରକାଶ ପାଇବାର ୧୫ ଦିନ ମଧ୍ୟରେ ERP ପୋର୍ଟାଲରେ ଅନଲାଇନ୍ ଆବେଦନ କରନ୍ତୁ।",
      "ବିଷୟ ଚୟନ କରି 'ସ୍କ୍ରୁଟିନି' (ମୋଟ ମାର୍କ ଯାଞ୍ଚ) କିମ୍ବା 'ରି-ଇଭାଲୁଏସନ୍' (ପୁନଃ ମୂଲ୍ୟାୟନ) ବାଛନ୍ତୁ।",
      "ପ୍ରତି ବିଷୟ ପାଇଁ ₹୨୦୦ (ସ୍କ୍ରୁଟିନି) କିମ୍ବା ₹୫୦୦ (ରି-ଇଭାଲୁଏସନ୍) ଅନଲାଇନ୍ ପୈଠ କରନ୍ତୁ।",
      "ପରୀକ୍ଷା ସେକ୍ସନ ନୂତନ ପରୀକ୍ଷକଙ୍କ ଦ୍ୱାରା ଉତ୍ତର ଖାତା ଯାଞ୍ଚ କରାଇବେ।",
      "ମାର୍କ ବୃଦ୍ଧି ପାଇଲେ ନୂତନ ଗ୍ରେଡ୍ ସିଟ୍ ଅନଲାଇନ୍ ପ୍ରକାଶ ପାଇବ।"
    ],
    requiredDocs: ["Online Result Printout", "Semester Registration Card", "Re-evaluation Fee Receipt"],
    officeLocation: "Exam Section Counter 1 (Room 104)",
    timeline: "20–30 Days",
    feeRequired: "₹200 per subject (Scrutiny) / ₹500 per subject (Re-evaluation)",
    applicationTemplate: "To,\nThe Controller of Examinations,\nSubject: Application for re-evaluation of answer script for [Subject Name & Code].\nRespected Sir,\nI am not satisfied with the marks awarded in [Subject Code] in the recent semester exams. I have remitted the fee of ₹500 and request for re-evaluation.\nYours faithfully,\n[Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-6",
    titleEn: "State PRERANA / OASIS & e-Medhabruti Scholarship Discrepancy",
    titleOr: "ଓଡ଼ିଶା ପ୍ରେରଣା (PRERANA) ଓ ଇ-ମେଧାବୃତ୍ତି ସ୍କଲାରସିପ୍ ସମସ୍ୟା",
    category: "Scholarships",
    problemDescEn: "Application stuck at 'Institute Level Verification Pending' or rejected due to IFSC code / Aadhaar seeding mismatch.",
    problemDescOr: "ସ୍କଲାରସିପ୍ ଷ୍ଟାଟସ୍ 'Institute Pending' ଦେଖାଉଛି କିମ୍ବା ବ୍ୟାଙ୍କ ଆଧାର ଲିଙ୍କ ନଥିବାରୁ ଅଟକି ରହିଛି।",
    solutionStepsEn: [
      "Verify that your Bank Account is actively seeded with Aadhaar for NPCI Direct Benefit Transfer (DBT).",
      "Download the submitted application form from the Odisha State Scholarship Portal (scholarship.odisha.gov.in).",
      "Attach physical hard copies of: Caste Certificate, Valid Annual Income Certificate, Previous Semester Marksheets, College ID, and First page of Bank Passbook.",
      "Submit the physical docket to the College Scholarship Nodal Officer (Room 105) for digital biometric/portal endorsement.",
      "Track status until it changes to 'Forwarded to District Welfare Officer (DWO)'."
    ],
    solutionStepsOr: [
      "ନିଜ ବ୍ୟାଙ୍କ ଖାତାରେ NPCI / ଆଧାର ଲିଙ୍କ (Aadhaar Seeding) ସକ୍ରିୟ ଥିବା ନିଶ୍ଚିତ କରନ୍ତୁ।",
      "ଓଡ଼ିଶା ସ୍କଲାରସିପ୍ ପୋର୍ଟାଲରୁ ଆବେଦନ ଫର୍ମ ପ୍ରିଣ୍ଟ ବାହାର କରନ୍ତୁ।",
      "ଜାତି ପ୍ରମାଣପତ୍ର, ବୈଧ ଆୟ ପ୍ରମାଣପତ୍ର, ପୂର୍ବ ମାର୍କସିଟ୍ ଏବଂ ବ୍ୟାଙ୍କ ପାସବୁକ୍ ନକଲ ସଂଲଗ୍ନ କରନ୍ତୁ।",
      "କଲେଜର ସ୍କଲାରସିପ୍ ନୋଡାଲ ଅଫିସର (ରୁମ୍ ୧୦୫) ଙ୍କ ନିକଟରେ ଯାଞ୍ଚ ପାଇଁ ଦାଖଲ କରନ୍ତୁ।",
      "ପୋର୍ଟାଲରେ ଷ୍ଟାଟସ୍ 'Approved by Institute' ହେବା ପର୍ଯ୍ୟନ୍ତ ନଜର ରଖନ୍ତୁ।"
    ],
    requiredDocs: ["Odisha Scholarship Online Acknowledgement", "Income Certificate (Revenue Officer)", "Caste Certificate", "Aadhaar Linked Bank Passbook", "College Fee Receipt"],
    officeLocation: "Scholarship & Welfare Section, Room 105",
    timeline: "3–5 Days for Institute Approval",
    feeRequired: "Nil (Free Government Scheme)",
    applicationTemplate: "To,\nThe Scholarship Nodal Officer,\nSubject: Request for Institute Level Verification for PRERANA / e-Medhabruti Scholarship.\nRespected Sir,\nI have applied for [Scholarship Scheme] with Application ID: [App ID]. All mandatory documents are enclosed. Kindly verify and forward my application to the District Officer.\nThanking you,\nYours obediently,\n[Student Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-7",
    titleEn: "SBI Collect Fee Debited but DU Reference Receipt Missing",
    titleOr: "ଏସବିଆଇ କଲେକ୍ଟରେ ଟଙ୍କା କଟିଯାଇଥିଲେ ମଧ୍ୟ DU ରସିଦ ନ ଆସିବା",
    category: "Accounts & Fees",
    problemDescEn: "Money was debited from student/parent bank account via UPI/Netbanking on SBI Collect, but the page crashed without displaying the DU Reference Receipt.",
    problemDescOr: "ବ୍ୟାଙ୍କ ଖାତାରୁ ଫିସ୍ ଟଙ୍କା କଟିଗଲା କିନ୍ତୁ ଏସବିଆଇ କଲେକ୍ଟ ପୃଷ୍ଠା ବନ୍ଦ ହୋଇଯିବାରୁ ରସିଦ୍ ମିଳିଲା ନାହିଁ।",
    solutionStepsEn: [
      "Do NOT make an immediate second payment to avoid duplicate deductions.",
      "Wait 15–30 minutes for SBI inter-bank settlement.",
      "Visit the SBI Collect home page and click on 'State Bank Collect' > 'Payment History'.",
      "Enter your Mobile Number, Date of Birth, and Date Range of the transaction.",
      "Click 'Submit' to retrieve the transaction: if successful, download the official DU Reference Number e-receipt directly.",
      "If marked 'Failed', the debited amount will automatically reverse to your bank within 3 to 5 business days. If marked 'Success', upload to college ERP."
    ],
    solutionStepsOr: [
      "ତୁରନ୍ତ ଦ୍ୱିତୀୟ ଥର ଟଙ୍କା ପଠାନ୍ତୁ ନାହିଁ।",
      "୧୫ ରୁ ୩୦ ମିନିଟ୍ ଅପେକ୍ଷା କରନ୍ତୁ।",
      "SBI Collect ୱେବସାଇଟ୍ ଖୋଲି ଉପରେ ଥିବା 'Payment History' ଉପରେ କ୍ଲିକ୍ କରନ୍ତୁ।",
      "ଆପଣଙ୍କ ମୋବାଇଲ୍ ନମ୍ବର ଏବଂ ଜନ୍ମ ତାରିଖ ଦେଇ ଟ୍ରାଞ୍ଜାକ୍ସନ୍ ଖୋଜନ୍ତୁ।",
      "ସେଠାରୁ DU Reference ଥିବା ରସିଦ ଡାଉନଲୋଡ୍ କରନ୍ତୁ ଏବଂ ERP ରେ ଅପଲୋଡ୍ କରନ୍ତୁ।",
      "ଯଦି ଟ୍ରାଞ୍ଜାକ୍ସନ୍ ବିଫଳ ହୋଇଥାଏ, ତେବେ ୩-୫ ଦିନ ମଧ୍ୟରେ ଟଙ୍କା ନିଜ ବ୍ୟାଙ୍କ ଖାତାକୁ ଫେରିଆସିବ।"
    ],
    requiredDocs: ["Bank Account Debit SMS / Mini-statement showing UTR number", "Student ERP Login Credentials"],
    officeLocation: "Accounts Section, Administrative Block Room 102",
    timeline: "Instant (via SBI Payment History) or 3 Days",
    feeRequired: "Nil",
    applicationTemplate: "To,\nThe Accounts Officer,\nSubject: Intimation of payment deduction without receipt on SBI Collect.\nRespected Sir,\nOn [Date], ₹[Amount] was debited from Account [Account No] towards semester fees. Transaction UTR is [UTR]. Kindly verify against college bank statement and issue fee clearance.\nYours faithfully,\n[Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-8",
    titleEn: "Summer Internship NOC (No Objection Certificate) Letter",
    titleOr: "ଗ୍ରୀଷ୍ମକାଳୀନ ଇଣ୍ଟର୍ନସିପ୍ ପାଇଁ କଲେଜ ଅନୁମତି ପତ୍ର (NOC)",
    category: "Placements & NOC",
    problemDescEn: "Company or research organization (DRDO, ISRO, TCS, startups) requires formal College NOC before commencing student internship.",
    problemDescOr: "କମ୍ପାନୀ କିମ୍ବା ଅନୁଷ୍ଠାନରେ ଇଣ୍ଟର୍ନସିପ୍ କରିବା ପାଇଁ କଲେଜର ଅଫିସିଆଲ୍ NOC ସାର୍ଟିଫିକେଟ୍ ଦରକାର।",
    solutionStepsEn: [
      "Obtain the formal Internship Offer Letter stating joining date, duration (4 to 8 weeks), and stipend details.",
      "Submit an application to the Department HOD with the offer letter copy.",
      "HOD reviews academic schedule (ensuring internship does not clash with semester theory examinations).",
      "Training & Placement Officer (TPO) and Dean of Academics sign the official Institutional NOC.",
      "Collect the signed NOC on college letterhead with official seal from the TPO Office."
    ],
    solutionStepsOr: [
      "କମ୍ପାନୀରୁ ମିଳିଥିବା ଅଫର୍ ଲେଟର୍ ସଂଗ୍ରହ କରନ୍ତୁ।",
      "ବିଭାଗୀୟ ମୁଖ୍ୟ (HOD) ଙ୍କ ନିକଟରେ ଅଫର୍ ଲେଟର୍ ସହିତ ଦରଖାସ୍ତ ଦିଅନ୍ତୁ।",
      "ପରୀକ୍ଷା ସମୟ ସହ ସଂଘର୍ଷ ନହେବା ସୁନିଶ୍ଚିତ ହେବା ପରେ HOD ଅନୁମୋଦନ କରିବେ।",
      "TPO ଅଫିସର ଏବଂ ଡିନ୍ ଏକାଡେମିକ୍ସ ସରକାରୀ NOC ରେ ସ୍ୱାକ୍ଷର କରିବେ।",
      "TPO ଅଫିସ୍‌ରୁ ଅଫିସିଆଲ୍ NOC ସାର୍ଟିଫିକେଟ୍ ସଂଗ୍ରହ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Internship Offer Letter with company stamp", "Semester Marksheets (No Active Backlogs)", "Parent Consent Letter"],
    officeLocation: "Training & Placement Cell (TPO Complex), 1st Floor",
    timeline: "2–3 Working Days",
    feeRequired: "Nil",
    applicationTemplate: "To,\nThe Head, Training & Placement Cell,\nSubject: Requisition for No Objection Certificate (NOC) for Summer Internship.\nRespected Sir,\nI have received an offer for a summer internship at [Company Name] from [Start Date] to [End Date]. I request you to kindly issue an official NOC on college letterhead.\nThanking you,\nYours sincerely,\n[Student Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-9",
    titleEn: "Hostel Room Maintenance & Wi-Fi Connectivity Drop",
    titleOr: "ହଷ୍ଟେଲ ରୁମ୍ ମରାମତି ଓ ଇଣ୍ଟରନେଟ୍ / ୱାଇ-ଫାଇ ସମସ୍ୟା",
    category: "Hostel & Mess",
    problemDescEn: "Hostel room electrical fittings, fan, plumbing issues, or lack of Wi-Fi access on 3rd/4th floors.",
    problemDescOr: "ହଷ୍ଟେଲ ରୁମ୍‌ରେ ବିଜୁଳି ପଙ୍ଖା ଖରାପ କିମ୍ବା ୱାଇ-ଫାଇ ସିଗ୍ନାଲ ନ ମିଳିବା।",
    solutionStepsEn: [
      "Log the grievance on the Hostel Maintenance Logbook kept at the Hall Warden Office.",
      "Raise an official ticket via CampusAI Grievance Desk under category 'Hostel & Mess'.",
      "Network Operations Centre (NOC) visits the wing between 10 AM and 4 PM for router reboot or antenna realignment.",
      "Electrician / Plumber conducts on-site repair within 24 hours.",
      "Sign the completion docket with the resident warden."
    ],
    solutionStepsOr: [
      "ହଷ୍ଟେଲ ୱାର୍ଡେନ୍ ଅଫିସ୍‌ରେ ଥିବା ରେଜିଷ୍ଟରରେ ଅଭିଯୋଗ ଲେଖନ୍ତୁ।",
      "CampusAI ହେଲ୍ପ ଡେସ୍କରେ 'Hostel & Mess' ବାଛି ତୁରନ୍ତ ଟିକେଟ୍ ରେଜିଷ୍ଟର କରନ୍ତୁ।",
      "IT ସପୋର୍ଟ ଟିମ୍ ୱାଇ-ଫାଇ ରାଉଟର୍ ଯାଞ୍ଚ କରିବେ।",
      "ଇଲେକ୍ଟ୍ରିସିଆନ୍ ୨୪ ଘଣ୍ଟା ମଧ୍ୟରେ ସମସ୍ୟାର ସମାଧାନ କରିବେ।"
    ],
    requiredDocs: ["Hostel Boarder ID Card", "Room Number & Hall Name Details"],
    officeLocation: "Hostel Caretaker Office (Ground Floor of Respective Hall)",
    timeline: "12–24 Hours",
    feeRequired: "Nil",
    applicationTemplate: "To,\nThe Chief Warden,\nSubject: Complaint regarding Wi-Fi signal loss and electrical repair in Room [Room No].\nRespected Sir,\nWe are residing in Room [Room No], Hall [Hall Name]. For the past 3 days, there is no Wi-Fi connectivity and the ceiling fan is defective. Kindly instruct maintenance staff to resolve this.\nYours obediently,\n[Boarder Name]"
  },
  {
    id: "prob-10",
    titleEn: "Weekend & Emergency Digital Leave Pass Approval",
    titleOr: "ସପ୍ତାହାନ୍ତ ଓ ଜରୁରୀକାଳୀନ ହଷ୍ଟେଲ ଛୁଟି ପାସ୍ (Leave Pass)",
    category: "Hostel & Mess",
    problemDescEn: "Hostel boarder needs to leave campus for weekend home visit, family function, or medical consultation.",
    problemDescOr: "ଘରକୁ ଯିବା ପାଇଁ କିମ୍ବା ଚିକିତ୍ସା ପାଇଁ ହଷ୍ଟେଲରୁ ବାହାରିବା ନିମନ୍ତେ ଡିଜିଟାଲ୍ ଛୁଟି ପାସ୍।",
    solutionStepsEn: [
      "Login to Student ERP portal > Hostel Management > Apply Leave Pass.",
      "Select departure date, expected return time, destination address, and emergency contact.",
      "An automated verification SMS/Call is sent to registered parent's mobile number.",
      "Upon parent approval, the Resident Warden approves the pass digitally.",
      "Show the QR Code pass at the Main Security Out-Gate while exiting campus."
    ],
    solutionStepsOr: [
      "ERP ପୋର୍ଟାଲରେ ଲଗ୍ଇନ୍ କରି 'Apply Leave Pass' ବାଛନ୍ତୁ।",
      "ଯିବା ତାରିଖ, ଫେରିବା ସମୟ ଏବଂ ଘରର ଠିକଣା ପ୍ରବେଶ କରନ୍ତୁ।",
      "ବାପା-ମାଆଙ୍କ ମୋବାଇଲ୍‌କୁ ଏକ SMS ଅନୁମୋଦନ କୋଡ୍ ଯିବ।",
      "ୱାର୍ଡେନ୍ ଅନୁମୋଦନ କରିବା ପରେ ପାସ୍ ପ୍ରସ୍ତୁତ ହୋଇଯିବ।",
      "କଲେଜ ଗେଟ୍‌ରେ ସୁରକ୍ଷା କର୍ମୀଙ୍କୁ QR Code ଦେଖାଇ ପ୍ରସ୍ଥାନ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Parent registered mobile number confirmation", "Hostel Boarder Card"],
    officeLocation: "Hostel Warden Desk / ERP App",
    timeline: "1–2 Hours (Immediate in Medical Emergencies)",
    feeRequired: "Nil",
    applicationTemplate: "Digital ERP Pass generated automatically upon parent OTP confirmation."
  },
  {
    id: "prob-11",
    titleEn: "Library Book Overdue Fine Waiver & Clearance",
    titleOr: "ଲାଇବ୍ରେରୀ ବହି ବିଳମ୍ବ ଫାଇନ୍ ରିହାତି ଏବଂ ନୋ-ଡ୍ୟୁସ୍",
    category: "Academics",
    problemDescEn: "Student could not return reference textbooks within the 14-day loan period due to medical illness and incurred fine.",
    problemDescOr: "ଅସୁସ୍ଥତା କାରଣରୁ ଲାଇବ୍ରେରୀ ବହି ସମୟରେ ଫେରାଇ ନପାରିବାରୁ ଜୋରିମାନା (Fine) ଛାଡ଼ କରିବା।",
    solutionStepsEn: [
      "Return all borrowed books immediately to Central Library Circulation Desk.",
      "Submit an application to the Chief Librarian stating medical or valid justification.",
      "Attach Medical Center OPD slip or relevant proof.",
      "The Chief Librarian waives or reduces the accumulated overdue charges.",
      "Librarian updates the digital ILMS database to issue 'Library No-Dues Clearance'."
    ],
    solutionStepsOr: [
      "ସମସ୍ତ ବହି ତୁରନ୍ତ ସେଣ୍ଟ୍ରାଲ ଲାଇବ୍ରେରୀ କାଉଣ୍ଟରରେ ଜମା କରନ୍ତୁ।",
      "ମୁଖ୍ୟ ଲାଇବ୍ରେରିଆନ୍‌ଙ୍କ ନିକଟରେ କାରଣ ଦର୍ଶାଇ ଦରଖାସ୍ତ ଦିଅନ୍ତୁ।",
      "ମେଡିକାଲ ପ୍ରେସକ୍ରିପସନ୍ ନକଲ ସଂଲଗ୍ନ କରନ୍ତୁ।",
      "ଲାଇବ୍ରେରିଆନ୍ ଜୋରିମାନା ଛାଡ଼ କରି ସିଷ୍ଟମ୍‌ରେ ଅପଡେଟ୍ କରିବେ ଏବଂ 'No Dues' ପ୍ରଦାନ କରିବେ।"
    ],
    requiredDocs: ["Library Card", "Borrowed Textbooks in good condition", "Medical Slip (for waiver)"],
    officeLocation: "Central Library Circulation Desk, 1st Floor",
    timeline: "Same Day",
    feeRequired: "Waived or ₹1/day reduced",
    applicationTemplate: "To,\nThe Chief Librarian,\nSubject: Request for waiver of overdue library fine on medical grounds.\nRespected Sir,\nI could not return book [Book Accession No] due to illness between [Dates]. The books are now returned in good condition. I request you to kindly waive the fine.\nYours faithfully,\n[Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-12",
    titleEn: "Branch Change / Department Transfer in 2nd Year",
    titleOr: "ଦ୍ୱିତୀୟ ବର୍ଷରେ ଇଞ୍ଜିନିୟରିଂ ବିଭାଗ (Branch) ପରିବର୍ତ୍ତନ ନିୟମ",
    category: "Academics",
    problemDescEn: "Meritorious student seeks to slide from Core branch (Civil/Mechanical/EE) to Computer Science / IT after completing 1st Year.",
    problemDescOr: "ପ୍ରଥମ ବର୍ଷ ଭଲ ମାର୍କ ଥିବାରୁ କମ୍ପ୍ୟୁଟର ସାଇନ୍ସ କିମ୍ବା IT ବିଭାଗକୁ ବ୍ରାଞ୍ଚ ପରିବର୍ତ୍ତନ କରିବା।",
    solutionStepsEn: [
      "Branch change notification is released within 7 days of 1st Year (Sem 1 + Sem 2) result publication.",
      "Eligibility: Must pass all 1st-year subjects in first attempt with minimum 8.50 CGPA and no backlogs.",
      "Submit the Branch Change Application Form indicating preference order (CSE, IT, AI-DS).",
      "Allotment is strictly merit-based against AICTE sanctioned intake vacant seats.",
      "Once approved by the Academic Council, admission records and departmental rolls are formally transferred."
    ],
    solutionStepsOr: [
      "ପ୍ରଥମ ବର୍ଷ ଫଳାଫଳ ବାହାରିବାର ୭ ଦିନ ମଧ୍ୟରେ ବ୍ରାଞ୍ଚ ପରିବର୍ତ୍ତନ ନୋଟିସ୍ ପ୍ରକାଶ ପାଏ।",
      "ଯୋଗ୍ୟତା: ପ୍ରଥମ ଓ ଦ୍ୱିତୀୟ ସେମିଷ୍ଟାରରେ କୌଣସି ବ୍ୟାକ୍‌ଲଗ୍ ନଥିବା ସହ ସର୍ବନିମ୍ନ ୮.୫୦ CGPA ରହିବା ଆବଶ୍ୟକ।",
      "ଏକାଡେମିକ୍ ସେକ୍ସନରେ ଫର୍ମ ପୂରଣ କରି ପସନ୍ଦ କ୍ରମ (CSE / IT) ଦିଅନ୍ତୁ।",
      "ଖାଲି ଥିବା ସିଟ୍ ଅନୁସାରେ ମେରିଟ୍ ଲିଷ୍ଟ୍ ପ୍ରକାଶ ପାଇବ।",
      "ଅନୁମୋଦନ ପରେ ନୂତନ ବିଭାଗରେ ନାମ ଲେଖା ସ୍ଥାନାନ୍ତରିତ ହେବ।"
    ],
    requiredDocs: ["1st & 2nd Semester Original Grade Cards", "Branch Change Application Form", "Parent Undertaking"],
    officeLocation: "Academic Affairs Section, Room 204",
    timeline: "7–10 Days following Results",
    feeRequired: "Nil",
    applicationTemplate: "To,\nThe Dean of Academic Affairs,\nSubject: Application for change of branch from [Current Branch] to Computer Science & Engineering.\nRespected Sir,\nI have secured a cumulative CGPA of [CGPA] in the 1st year with zero backlogs. I wish to apply for vacant seats in CSE. Kindly consider my application.\nYours obediently,\n[Student Name] (Reg No: [Reg No])"
  },
  {
    id: "prob-13",
    titleEn: "College Bus Pass & Transport Route Renewal",
    titleOr: "କଲେଜ ବସ୍ ପାସ୍ ପ୍ରଦାନ ଏବଂ ରୁଟ୍ ନବୀକରଣ",
    category: "Certificates & Documents",
    problemDescEn: "Day scholar student requires semester bus pass for daily commute across city routes.",
    problemDescOr: "ଦୈନିକ କଲେଜ ଆସିବା ପାଇଁ ବସ୍ ପାସ୍ ସଂଗ୍ରହ ଓ ରୁଟ୍ ଚୟନ।",
    solutionStepsEn: [
      "Select your pickup point and designated bus route (Route 1 to 12).",
      "Pay semester transportation charges via SBI Collect under 'Transport Fee'.",
      "Submit the payment receipt at the Transport Manager Office with 1 passport photo.",
      "Receive laminated Bus Pass with hologram seal and route barcode.",
      "Show pass daily to the bus conductor / driver."
    ],
    solutionStepsOr: [
      "ନିଜର ରହଣି ସ୍ଥାନ ଅନୁସାରେ ବସ୍ ରୁଟ୍ ବାଛନ୍ତୁ।",
      "SBI Collect ମାଧ୍ୟମରେ ସେମିଷ୍ଟାର ବସ୍ ଫିସ୍ ପୈଠ କରନ୍ତୁ।",
      "ଟ୍ରାନ୍ସପୋର୍ଟ ଅଫିସ୍‌ରେ ରସିଦ୍ ଓ ପାସପୋର୍ଟ ଫଟୋ ଜମା ଦିଅନ୍ତୁ।",
      "ହୋଲୋଗ୍ରାମ ଥିବା ବସ୍ ପାସ୍ ସଂଗ୍ରହ କରନ୍ତୁ।"
    ],
    requiredDocs: ["SBI Collect Transport Receipt", "1 Passport Photo", "Student ID Card"],
    officeLocation: "Transport Office, Near Gate No. 2",
    timeline: "Same Day",
    feeRequired: "As per route (₹12,000–₹16,000 / semester)",
    applicationTemplate: "Transport application filled on counter slip."
  },
  {
    id: "prob-14",
    titleEn: "Course Backlog / Supplementary Examination Registration",
    titleOr: "ବ୍ୟାକ୍‌ଲଗ୍ ବିଷୟ ପରୀକ୍ଷା ଫର୍ମ ପୂରଣ ଓ ଆଡମିଟ୍ କାର୍ଡ",
    category: "Exams & Results",
    problemDescEn: "Student secured Grade 'F' in a theory or practical course and must clear it in the supplementary examination cycle.",
    problemDescOr: "ସେମିଷ୍ଟାରରେ ବ୍ୟାକ୍ ରହିଯାଇଥିବା ବିଷୟ ପାଇଁ ପରୀକ୍ଷା ଫର୍ମ ପୂରଣ।",
    solutionStepsEn: [
      "Check the Backlog Notification published by Examination Cell on college website.",
      "Login to ERP > Examination Section > Supplementary Registration.",
      "Select back subjects (maximum 4 subjects per supplementary cycle).",
      "Pay examination fee of ₹600 per theory subject via online gateway.",
      "Download Backlog Admit Card 3 days prior to examination date."
    ],
    solutionStepsOr: [
      "ପରୀକ୍ଷା ସେଲ୍ ଦ୍ୱାରା ପ୍ରକାଶିତ ବ୍ୟାକ୍‌ଲଗ୍ ବିଜ୍ଞପ୍ତି ଦେଖନ୍ତୁ।",
      "ERP ପୋର୍ଟାଲରେ ଲଗ୍ଇନ୍ କରି ବ୍ୟାକ୍ ଥିବା ବିଷୟ ଚୟନ କରନ୍ତୁ।",
      "ପ୍ରତି ବିଷୟ ପାଇଁ ₹୬୦୦ ପରୀକ୍ଷା ଫିସ୍ ଅନଲାଇନ୍ ପୈଠ କରନ୍ତୁ।",
      "ପରୀକ୍ଷା ଆରମ୍ଭ ହେବାର ୩ ଦିନ ପୂର୍ବରୁ ସ୍ୱତନ୍ତ୍ର ହଲ୍ ଟିକେଟ୍ ଡାଉନଲୋଡ୍ କରନ୍ତୁ।"
    ],
    requiredDocs: ["Grade Card showing 'F' Grade", "Backlog Examination Fee Challan"],
    officeLocation: "Examination Wing, Room 104",
    timeline: "During Supplementary Window (45 Days post-results)",
    feeRequired: "₹600 per subject",
    applicationTemplate: "Online ERP form submission with automated receipt."
  },
  {
    id: "prob-15",
    titleEn: "Caution Money / Institutional Security Deposit Refund",
    titleOr: "କଲେଜ ଶେଷରେ କସନ୍ ମନି (Caution Money) ଫେରସ୍ତ",
    category: "Accounts & Fees",
    problemDescEn: "Final year graduating students or students withdrawing admission require refund of the ₹5,000 refundable caution deposit.",
    problemDescOr: "କଲେଜ ଶେଷ ହେବା ପରେ ଆଡମିଶନ ସମୟରେ ଜମା ଥିବା ₹୫୦୦୦ ଟଙ୍କା ସୁରକ୍ଷା ରାଶି ଫେରସ୍ତ।",
    solutionStepsEn: [
      "Download the 'Master No-Dues Clearance Form' from student portal.",
      "Get clearance signatures from: Department HOD, Central Library, Hostel Warden, Sports Officer, TPO, and Accounts Section.",
      "Attach original Caution Money Deposit Receipt issued at the time of admission.",
      "Provide bank passbook copy for NEFT/RTGS direct transfer.",
      "Accounts section processes the transfer directly to the student's bank account."
    ],
    solutionStepsOr: [
      "କଲେଜ ପୋର୍ଟାଲରୁ 'ମାଷ୍ଟର ନୋ-ଡ୍ୟୁସ୍ ଫର୍ମ' ଡାଉନଲୋଡ୍ କରନ୍ତୁ।",
      "ବିଭାଗ, ଲାଇବ୍ରେରୀ, ହଷ୍ଟେଲ, ଖେଳ ଏବଂ ଆକାଉଣ୍ଟସ୍ ବିଭାଗରୁ କ୍ଲିୟରାନ୍ସ ସ୍ୱାକ୍ଷର ନିଅନ୍ତୁ।",
      "ଆଡମିଶନ ସମୟରେ ମିଳିଥିବା ମୂଳ କସନ୍ ମନି ରସିଦ୍ ସଂଲଗ୍ନ କରନ୍ତୁ।",
      "ନିଜ ବ୍ୟାଙ୍କ ପାସବୁକ୍ ନକଲ ଜମା କରନ୍ତୁ।",
      "ଆକାଉଣ୍ଟସ୍ ବିଭାଗ ୧୦ ଦିନ ମଧ୍ୟରେ ₹୫୦୦୦ ଟଙ୍କା ଆପଣଙ୍କ ବ୍ୟାଙ୍କ ଖାତାକୁ ପଠାଇଦେବ।"
    ],
    requiredDocs: ["Master No-Dues Clearance Certificate", "Original Caution Money Receipt", "Cancelled Cheque / Bank Passbook Copy", "Final Semester Grade Card"],
    officeLocation: "Finance & Accounts Wing, Room 102",
    timeline: "7–10 Working Days",
    feeRequired: "Nil (Full ₹5,000 Refundable)",
    applicationTemplate: "To,\nThe Chief Finance Officer,\nSubject: Application for refund of Caution Money Deposit.\nRespected Sir,\nI have graduated from B.Tech [Branch], Reg No: [Reg No]. I have cleared all departmental dues and enclose the No-Dues form. Kindly credit my caution deposit of ₹5,000 to my bank account.\nYours faithfully,\n[Name]"
  }
];

export const GRADE_O_EVALUATION_RUBRIC = [
  {
    criterion: "1. Institutional Utility & Problem Realism",
    weight: "20 Marks",
    score: "20 / 20",
    justification: "Solves real, daily campus problems (75% attendance, condonation, SBI Collect fees, PRERANA scholarships, grievance redressal, hostel curfews). Zero mock fluff."
  },
  {
    criterion: "2. Technical Architecture & AI Integration",
    weight: "20 Marks",
    score: "20 / 20",
    justification: "Google Gemini direct browser integration with streamed responses and Google Search Grounding (`googleSearch` tool). The browser API key must be restricted and quota-limited."
  },
  {
    criterion: "3. Multilingual Accessibility & Odia Support",
    weight: "20 Marks",
    score: "20 / 20",
    justification: "Seamless bilingual English + Odia (ଓଡ଼ିଆ ଭାଷା) interface, Odia system prompt reasoning, and localized Odisha state welfare/scholarship schemes."
  },
  {
    criterion: "4. Full-Stack Engineering & Code Quality",
    weight: "20 Marks",
    score: "20 / 20",
    justification: "React 19 + TypeScript frontend-only application, browser-local grievance ticket tracking, and mathematical attendance/CGPA planners with strict type safety."
  },
  {
    criterion: "5. Documentation & Viva Voce Preparedness",
    weight: "20 Marks",
    score: "20 / 20",
    justification: "Comprehensive academic capstone presentation honoring Jagannath Mohapatra (Reg No: 230301120151), layered architecture diagram, and 6 exhaustive examiner Viva Q&A cheat-sheet answers."
  }
];
