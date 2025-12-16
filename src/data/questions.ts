export interface Question {
  id: number;
  question: string;
  questionHindi?: string;
  options: string[];
  optionsHindi?: string[];
  correctOption: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "Which of the following is a plant hormone?",
    options: ["Insulin", "Oestrogen", "Cytokinin", "Testosterone"],
    correctOption: 3
  },
  {
    id: 2,
    question: "Damdama lake is situated in the District of_______.",
    options: ["Faridabad", "Gurgaon", "Rohtak", "Hisar"],
    correctOption: 2
  },
  {
    id: 3,
    question: "The device which converts sound to electrical vibrations",
    options: ["Speaker", "Microphone", "Integrated Circuit (IC)", "Stereoscope"],
    correctOption: 2
  },
  {
    id: 4,
    question: "During the debate on citizenship in the Constitution Assembly, a famous quote, \"There cannot be any divided loyalty\", is said by",
    options: ["B. N. Rao", "Somnath Lahiri", "Govind Vallabh Pant", "None of the above"],
    correctOption: 3
  },
  {
    id: 5,
    question: "Area of the circle inscribed in a square of side 'a' cm is",
    options: ["a² cm²", "a² cm²", "πa²/4 cm²", "πa²/4 cm²"],
    correctOption: 3
  },
  {
    id: 6,
    question: "A and B are friends and B is 2 years younger than A. A's father D is twice as old as A and B is twice as old as his sister C. The age of D and C differ by 40 years. The ages of 'A' and 'B' are respectively",
    options: ["26 yrs., 24 yrs.", "25 yrs., 23 yrs.", "30 yrs., 28 yrs.", "None of these"],
    correctOption: 1
  },
  {
    id: 7,
    question: "Mahabharata war was fought during",
    options: ["900 BC", "800 BC", "700 BC", "600 BC"],
    correctOption: 1
  },
  {
    id: 8,
    question: "The potential difference between 2 points in a current carrying conductor when 1 joule of work is done to move a charge of 1 coulomb from one point to the other is",
    options: ["1 ampere", "1 volt", "1 newton", "1 ohm"],
    correctOption: 2
  },
  {
    id: 9,
    question: "Complete the analogy. Trigonometry : Mathematics :: Zoology : ?",
    options: ["Botany", "Chemistry", "Biology", "Bio-chemistry"],
    correctOption: 3
  },
  {
    id: 10,
    question: "The High Court has the jurisdiction under Article 226 for the enforcement of",
    options: ["Civil Rights", "Sanctioning Rights", "Fundamental Rights", "Child Rights"],
    correctOption: 3
  },
  {
    id: 11,
    question: "In order to improve the condition of children, _______ has been implemented in Haryana.",
    options: ["Integrated Child Development Project", "Innovational Child Development Plan", "Indian Child Development Plan", "International Child Development Project"],
    correctOption: 1
  },
  {
    id: 12,
    question: "Solutions of the equation √3x² + 11x + 6√3 = 0 are",
    options: ["√2, √6", "-2/√3, -3/√3", "√2, -√6/√3", "-√3, -√6/2"],
    correctOption: 2
  },
  {
    id: 13,
    question: "During the freedom movement, who among the following revolutionaries turned into a philosopher?",
    options: ["Rash Bihari Ghosh", "Aurobindo Ghosh", "V. D. Savarkar", "Satyendranath Bose"],
    correctOption: 2
  },
  {
    id: 14,
    question: "Who among the following has been Speaker of Haryana Vidhan Sabha for the maximum number of times?",
    options: ["Kuldeep Sharma", "Harmahendra Singh Chadda", "Satbeer Singh", "Ashok Kumar Arora"],
    correctOption: 2
  },
  {
    id: 15,
    question: "During the suzerainty of the British crown, Princely States covered what portion of the land area of the British Indian empire?",
    options: ["One-third", "One-fourth", "One-tenth", "None of the above"],
    correctOption: 4
  },
  {
    id: 16,
    question: "If 'GIVE' is coded as 43, then 'TAKE' is coded as",
    options: ["47", "27", "36", "37"],
    correctOption: 4
  },
  {
    id: 17,
    question: "If sec θ = 4 - 2cos θ, then the value of √(n² - 2cos θ - cot² θ) is",
    options: ["20", "0", "4", "None of these"],
    correctOption: 1
  },
  {
    id: 18,
    question: "If 15th of August was Wednesday, then 1st August of the same year was",
    options: ["Thursday", "Wednesday", "Friday", "Saturday"],
    correctOption: 2
  },
  {
    id: 19,
    question: "Which of the following form an AP?",
    options: ["1, 1, 2, 2, 3, 3, _ _ _ _ _", "0.3, 0.33, 0.333, _ _ _ _ _", "√2, 2, 2√2, 4, _ _ _ _ _", "3, 3 + √2, 3 + 2√2, 3 + 3√2"],
    correctOption: 4
  },
  {
    id: 20,
    question: "According to Haryana Municipal Amendment Act, any male member contesting urban local bodies election must possess _______ as minimum education.",
    options: ["MBBS", "LL. B.", "12th Standard", "Matriculation"],
    correctOption: 4
  },
  {
    id: 21,
    question: "Consider the following statements and choose the incorrect regarding the Meghalaya plateau.",
    options: ["It is further sub-divided into Garo Hills, Khasi Hills, Jaintia Hills.", "Plateau stand detached from the main Peninsular Block.", "It is also rich in mineral resources like coal, iron ore, sillimanite, limestone and uranium.", "This area receives maximum rainfall from the north-east monsoon."],
    correctOption: 4
  },
  {
    id: 22,
    question: "The first Haryanavi movie was?",
    options: ["Rijuvi", "Dharti", "Yajurveda", "Osho"],
    correctOption: 2
  },
  {
    id: 23,
    question: "Ms. X moves 20 metres to the East and then turns to her left and walks 15 metres and then turns to her right and moves 25 metres. After this, she turns to her right and moves 15 metres. Now, how far is she from the starting point?",
    options: ["35 metres", "40 metres", "45 metres", "None of these"],
    correctOption: 3
  },
  {
    id: 24,
    question: "_______ does not react with dilute HCl.",
    options: ["Mg", "Cu", "Al", "Li"],
    correctOption: 2
  },
  {
    id: 25,
    question: "Arrange the following structures of the atmosphere from the surface of the Earth.",
    options: ["Troposphere - mesosphere - stratosphere - thermosphere", "Troposphere - stratosphere - mesosphere - thermosphere", "Stratosphere - troposphere - mesosphere - thermosphere", "Stratosphere - mesosphere - troposphere - thermosphere"],
    correctOption: 2
  },
  {
    id: 26,
    question: "Joginder Singh is a litterateur from",
    options: ["Jalsa", "Shahabad", "Panipat", "Ambala"],
    correctOption: 2
  },
  {
    id: 27,
    question: "Which of the following statement/s is/are true regarding 97th Amendment of the Constitution?",
    options: ["It made the right to form Self Help Group as a Fundamental Right", "It has brought a new provision into the Part IV of the Constitution (Directive Principle of State Policy)", "Both are wrong", "Both are right"],
    correctOption: 4
  },
  {
    id: 28,
    question: "Mustafabad is renamed as",
    options: ["Brahmavart", "Saraswati Nagar", "Kisan Nagar", "Aryabhatta"],
    correctOption: 2
  },
  {
    id: 29,
    question: "The 'Champions of the Earth' Award is presented by",
    options: ["UNDP", "UNFCCC", "UNEP", "UN General Assembly"],
    correctOption: 3
  },
  {
    id: 30,
    question: "Panchayat Raj Act came into existence pursuant to _______ Constitutional Amendment Act.",
    options: ["71st", "72nd", "73rd", "74th"],
    correctOption: 3
  },
  {
    id: 31,
    question: "When baking powder is heated or mixed in water _______ is produced.",
    options: ["H₂", "O₂", "CO₂", "CO"],
    correctOption: 3
  },
  {
    id: 32,
    question: "Which of the following hills serve as a connecting link between the Himalayas and Plains?",
    options: ["Tipra Hills", "Morni Hills", "Aravali Hills", "Ambala Hills"],
    correctOption: 2
  },
  {
    id: 33,
    question: "Find the missing number (?) in the sequence 5, 11, 23, ?, 95, 191.",
    options: ["47", "48", "49", "50"],
    correctOption: 1
  },
  {
    id: 34,
    question: "Aquifer mapping done to assess",
    options: ["Ground water situation", "State legal situation", "Position of women in the State", "Animal census"],
    correctOption: 1
  },
  {
    id: 35,
    question: "In ΔABC, AB = 6√3 cm, AC = 12 cm and BC = 6 cm, then ∠B is",
    options: ["120°", "60°", "90°", "45°"],
    correctOption: 3
  },
  {
    id: 36,
    question: "The sum of digits of two digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits of the number. Then the number is",
    options: ["18", "81", "36", "None of these"],
    correctOption: 1
  },
  {
    id: 37,
    question: "The distance between the point (a, b) and (-1, -b) are",
    options: ["0", "1", "√(2 - 2a + b²)", "None of these"],
    correctOption: 4
  },
  {
    id: 38,
    question: "The main presence of Aravali Hills is found in the District of",
    options: ["Faridabad", "Rohtak", "Gurgaon", "Hisar"],
    correctOption: 3
  },
  {
    id: 39,
    question: "RBI was set up on the basis of the recommendation of",
    options: ["Indian Central Bank Enquiry Committee", "Royal Commission", "Simon Commission", "Nehru Report"],
    correctOption: 1
  },
  {
    id: 40,
    question: "The total area of Haryana is",
    options: ["44212 sq. kms", "45212 sq. kms", "46212 sq. kms", "47212 sq. kms"],
    correctOption: 1
  },
  {
    id: 41,
    question: "If the equations x - 2y = 3 and 2x + by = 6 represent the same line, then the value of b is",
    options: ["4", "-4", "-2", "None of these"],
    correctOption: 2
  },
  {
    id: 42,
    question: "Balmukund Gupta is a _______ literator of Haryana.",
    options: ["Sanskrit", "English", "Urdu", "Hindi"],
    correctOption: 4
  },
  {
    id: 43,
    question: "Find the missing letters (?) from the options for DW, ?, LO, PK, TG, XC.",
    options: ["FU", "EV", "HS", "IR"],
    correctOption: 3
  },
  {
    id: 44,
    question: "Which of the following statements is wrong about Deccan Plateau?",
    options: ["This is bordered by the Western Ghats in the west, Eastern Ghats in the east and the Satpura, Maikal range and Mahadeo hills in the north.", "Its western hills are locally known by different names such as Sahyadri in Maharashtra, Nilgiri hills in Karnataka, and Anaimalai hills in Tamil Nadu, and Cardamom hills in Kerala.", "Anaimudi, the highest peak of Peninsular plateau is located on the Anaimalai hills.", "The Eastern and the Western Ghats meet each other at the Sabarimala hills."],
    correctOption: 4
  },
  {
    id: 45,
    question: "\"Vaishanava Jana To\", Gandhiji's one of favourite devotional songs which he adopted into the routine of his public prayer events, is written by",
    options: ["Rabindranath Tagore", "M. K. Gandhi", "Kabir Das", "Narasinh Mehta"],
    correctOption: 4
  },
  {
    id: 46,
    question: "If P(E) = 0.05, what is the probability of 'not E'?",
    options: ["0.05", "0.95", "0", "Not defined"],
    correctOption: 2
  },
  {
    id: 47,
    question: "Three cubes each of side 2.5 cm are joined end to end, the total surface area of resulting solid is",
    options: ["93.5 cm²", "87.5 cm²", "90 cm²", "85 cm²"],
    correctOption: 2
  },
  {
    id: 48,
    question: "_______ is famous for Lac Bangles.",
    options: ["Kurukshetra", "Ambala", "Mahendragarh", "Rohtak"],
    correctOption: 3
  },
  {
    id: 49,
    question: "The war of Kurukshetra was narrated to Dhritarashtra by",
    options: ["Shankaracharya", "Madhvacharya", "Sanjaya", "Vallabhacharya"],
    correctOption: 3
  },
  {
    id: 50,
    question: "If 2 is a zero of polynomial f(x) = ax² - 3(a - 1)x - 1, then value of a is",
    options: ["5/2", "-2/5", "-5/2", "None of these"],
    correctOption: 1
  },
  {
    id: 51,
    question: "The term Mesophytes implies that",
    options: ["Aquatic plants growing in fresh and marine waters", "These are plants growing in soil with optimum soil water conditions prevailing for major part of the year", "Plants growing in extreme weather", "Under water growing plants"],
    correctOption: 2
  },
  {
    id: 52,
    question: "Who among the following leaders moved \"Objective Resolution\" in the Constitutional Assembly?",
    options: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Vallabh Bhai Patel"],
    correctOption: 1
  },
  {
    id: 53,
    question: "Colour of the wheel, which we see in our National Flag is",
    options: ["Dark green", "Black", "Light Blue", "Navy blue"],
    correctOption: 4
  },
  {
    id: 54,
    question: "Jogis (Saints) use _______ instrument to sing songs.",
    options: ["Shehnai", "Been", "Sarangi", "Dholak"],
    correctOption: 3
  },
  {
    id: 55,
    question: "5000 years old Indus valley civilization, found in the present-day _______ District.",
    options: ["Ranchi", "Hisar", "Kurukshetra", "Angeerasa"],
    correctOption: 2
  },
  {
    id: 56,
    question: "An object 4 cm in size, is placed at 20 cm in front of a concave mirror of focal length 10 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image?",
    options: ["20 cm from the mirror", "10 cm from the mirror", "20 cm from the mirror", "10 cm from the mirror"],
    correctOption: 1
  },
  {
    id: 57,
    question: "Omega-3 fatty acids are present in",
    options: ["Fish", "Walnuts", "Pulses", "Both (1) and (2)"],
    correctOption: 4
  },
  {
    id: 58,
    question: "The \"hub of making durries\" in Haryana is",
    options: ["Rohtak", "Manipur", "Panipat", "Gurgaon"],
    correctOption: 3
  },
  {
    id: 59,
    question: "Find the word which is different from the other 3 options given below.",
    options: ["Mathematics", "Arithmetic", "Algebra", "Geometry"],
    correctOption: 1
  },
  {
    id: 60,
    question: "ISRO's first woman scientist who recently spent over 403 days in Antarctica is",
    options: ["Tessy Thomas", "Mangala Mani", "Nandini Harinath", "Anuradha T. K."],
    correctOption: 2
  },
  {
    id: 61,
    question: "The force that blood exerts against the wall of a vessel is called",
    options: ["Diastolic pressure", "Hemodialysis", "Systolic pressure", "Blood pressure"],
    correctOption: 3
  },
  {
    id: 62,
    question: "Asbestos is found in the District of",
    options: ["Hisar", "Gurgaon", "Karnal", "Mahendragarh"],
    correctOption: 4
  },
  {
    id: 63,
    question: "New States come to exist through Union, Consolidation, Confederation etc. Here Confederation refers to",
    options: ["Form of Union where Centre is strong and States are weak", "Form of Union where States are strong and Centre is weak", "Some States have strong power and Centre is also strong", "Equal power sharing between Centre and States"],
    correctOption: 2
  },
  {
    id: 64,
    question: "Find the number which is not like the other 3 numbers: 4/14, 3/21, 6/21, 16/56",
    options: ["4/14", "3/21", "6/21", "16/56"],
    correctOption: 2
  },
  {
    id: 65,
    question: "If '+' means '÷', '÷' means '-', '-' means '×' and '×' means '+', then 9 + 3 ÷ 5 - 3 × 7 =",
    options: ["-5", "15", "25", "None of these"],
    correctOption: 1
  },
  {
    id: 66,
    question: "The lake which is dedicated to Sun God is",
    options: ["Damodara lake", "Anangpur lake", "Hathnikund", "Surajkund"],
    correctOption: 4
  },
  {
    id: 67,
    question: "The values of x and y satisfying the equation 2(x) + y = 2 and x − y = 4 are",
    options: ["x = a, y = b", "x = 2a, y = -2b", "x = a, y = -b", "x = 2a, y = 2b"],
    correctOption: 2
  },
  {
    id: 68,
    question: "Skill of archery was the test in the swayamvara of",
    options: ["Parvati", "Gouri", "Meenakshi", "Draupadi"],
    correctOption: 4
  },
  {
    id: 69,
    question: "Correct the following sentence: I can't imagine why you were believing all those rumours since yesterday.",
    options: ["I can't imagine why wasn't you believing all those rumours since yesterday.", "I can't imagine why you have been believing all those rumours since yesterday.", "I can't imagine why you believed all those rumours since yesterday.", "I can't imagine why do you believe all those rumours since yesterday."],
    correctOption: 2
  },
  {
    id: 70,
    question: "Correct the following sentence: Each of the sports women were given a certificate.",
    options: ["Each of the sports women was given a certificate.", "Sports women each were given a certificate.", "Every sports women were given a certificate.", "Each of the sports women have been given a certificate."],
    correctOption: 1
  },
  {
    id: 71,
    question: "Fill in the blanks with appropriate option. The scheme allows students from many countries to communicate _______",
    options: ["to themselves", "with one another", "each other", "themselves"],
    correctOption: 2
  },
  {
    id: 72,
    question: "An employment advertisement should _______ the number of vacancies.",
    options: ["declare", "specify", "provide", "contain"],
    correctOption: 2
  },
  {
    id: 73,
    question: "The growing number of visitors _______ the footpaths.",
    options: ["damages", "were damaging", "damaging", "are damaging"],
    correctOption: 4
  },
  {
    id: 74,
    question: "Choose the correct option to fit in the blank. When I was a child _______ the Violin.",
    options: ["I am playing", "I played", "I was playing", "I play"],
    correctOption: 2
  },
  {
    id: 75,
    question: "Ram was appointed ______ Clerk.",
    options: ["an", "No article", "a", "the"],
    correctOption: 2
  },
  {
    id: 76,
    question: "Choose the correct answer for the blank from the given options. India is one of _______ biggest countries in the world.",
    options: ["the", "No article", "an", "a"],
    correctOption: 1
  },
  {
    id: 77,
    question: "Choose the response, whichever is the most appropriate expression. To bury the hatchet",
    options: ["To make peace", "To bury the dead", "To keep a secret", "To obtain money"],
    correctOption: 1
  },
  {
    id: 78,
    question: "Choose the response, whichever is the most appropriate expression. A burning question",
    options: ["A difficult problem", "An annoying question", "A puzzling question", "A hotly debated question"],
    correctOption: 4
  },
  {
    id: 79,
    question: "सुमेलित कीजिए: (अ) बासठ, पचपन, उन्नीस, उनतालीस (ब) 19, 39, 55, 62",
    options: ["1 - आ, 2 - अ, 3 - इ, 4 - ई", "1 - ई, 2 - इ, 3 - अ, 4 - आ", "1 - आ, 2 - ई, 3 - आ, 4 - इ", "1 - इ, 2 - आ, 3 - ई, 4 - अ"],
    correctOption: 2
  },
  {
    id: 80,
    question: "'अदब' शब्द के साथ कौन सा उपसर्ग सही लगता है?",
    options: ["बे", "अ", "नि", "कु"],
    correctOption: 1
  },
  {
    id: 81,
    question: "'गाय नहीं चलती।' यह वाक्य भाववाच्य में होता है",
    options: ["गाय से चली नहीं जाती।", "गाय से चला नहीं गया।", "गाय से चला नहीं जाता।", "गाय से चली गयी।"],
    correctOption: 3
  },
  {
    id: 82,
    question: "घन जैसा श्याम = 'घनश्याम' यह कौन सा समास है?",
    options: ["कर्मधारय", "द्विगु", "अव्ययीभाव", "बहुव्रीहि"],
    correctOption: 1
  },
  {
    id: 83,
    question: "निम्नलिखित में से सही वर्तनी का चयन कीजिए।",
    options: ["श्रीम", "त्रिम", "कृत्रिम", "कृष्ीम"],
    correctOption: 3
  },
  {
    id: 84,
    question: "निम्नलिखित में से 'गाय' का पर्यायवाची शब्द नहीं है",
    options: ["कपिला", "धेनु", "अंबु", "गौ"],
    correctOption: 3
  },
  {
    id: 85,
    question: "जहाँ एक से अधिक वर्ण की दो बार आवृत्ति होती है, वहाँ कौन सा अलंकार होता है?",
    options: ["श्लेष", "उत्प्रेक्षा", "छेकानुप्रास", "वृत्यनुप्रास"],
    correctOption: 3
  },
  {
    id: 86,
    question: "शृंगार रस का स्थायी भाव कौन सा है?",
    options: ["हास", "भय", "रति", "क्रोध"],
    correctOption: 3
  },
  {
    id: 87,
    question: "'साधु' शब्द का बहुवचन रूप है",
    options: ["साधुओं", "साधुयाँ", "साधुएँ", "साधु"],
    correctOption: 4
  },
  {
    id: 88,
    question: "'जमीन पर पैर न पड़ना' मुहावरे का अर्थ है",
    options: ["अस्त हो जाना", "मौज उड़ाना", "अधिक घमंड करना", "लापता होना"],
    correctOption: 3
  },
  {
    id: 89,
    question: "प्रति + उपकार = 'प्रत्युपकार' कौन सी संधि है?",
    options: ["गुण संधि", "दीर्घ संधि", "वृद्धि संधि", "यण् संधि"],
    correctOption: 4
  },
  {
    id: 90,
    question: "'गाय फल खा रही है।' इस वाक्य के 'गाय' का पद परिचय दीजिए।",
    options: ["व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "जातिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्ता कारक, 'खा रही है' क्रिया का कर्ता", "व्यक्तिवाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म", "भाववाचक संज्ञा, एकवचन, स्त्रीलिंग, कर्म कारक, 'खा रही है' क्रिया का कर्म"],
    correctOption: 2
  }
];

export const EXAM_DURATION_MINUTES = 90; // 90 minutes for 90 questions
