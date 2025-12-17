export const EXAM_DURATION_MINUTES = 90;

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
    questionHindi: "निम्नलिखित में से कौन एक पादप हार्मोन है?",
    options: ["Insulin", "Oestrogen", "Cytokinin", "Testosterone"],
    optionsHindi: ["इंसुलिन", "इस्ट्रोजेन", "साइटोकाइनिन", "टेस्ट्रोस्टेरोन"],
    correctOption: 3
  },
  {
    id: 2,
    question: "Damdama lake is situated in the District of_______.",
    questionHindi: "दमदमा झील किस जिले में स्थित है?",
    options: ["Faridabad", "Gurgaon", "Rohtak", "Hisar"],
    optionsHindi: ["फरीदाबाद", "गुरुग्राम", "रोहतक", "हिसार"],
    correctOption: 2
  },
  {
    id: 3,
    question: "The device which converts sound to electrical vibrations",
    questionHindi: "वह उपकरण कौन-सा है जो ध्वनि को विद्युत कंपन में परिवर्तित करता है?",
    options: ["Speaker", "Microphone", "Integrated Circuit (IC)", "Stereoscope"],
    optionsHindi: ["स्पीकर", "माइक्रोफ़ोन", "इंटीग्रेटेड सर्किट (IC)", "स्टीरियोस्कोप"],
    correctOption: 2
  },
  {
    id: 4,
    question: "During the debate on citizenship in the Constitution Assembly, a famous quote, \"There cannot be any divided loyalty\", is said by",
    questionHindi: "संविधान सभा में नागरिकता पर बहस के दौरान \"There cannot be any divided loyalty\" यह प्रसिद्ध कथन किसने कहा था?",
    options: ["B. N. Rao", "Somnath Lahiri", "Govind Vallabh Pant", "None of the above"],
    optionsHindi: ["बी. एन. राव", "सोमनाथ लाहिड़ी", "गोविंद वल्लभ पंत", "उपरोक्त में से कोई नहीं"],
    correctOption: 3
  },
  {
    id: 5,
    question: "Area of the circle inscribed in a square of side 'a' cm is",
    questionHindi: "भुजा 'a' सेमी वाले वर्ग में अंकित वृत्त का क्षेत्रफल क्या होगा?",
    options: ["a² cm²", "a²/4 cm²", "πa²/4 cm²", "πa²/2 cm²"],
    optionsHindi: ["a² वर्ग सेमी", "a²/4 वर्ग सेमी", "πa²/4 वर्ग सेमी", "πa²/2 वर्ग सेमी"],
    correctOption: 3
  },
  {
    id: 6,
    question: "A and B are friends and B is 2 years younger than A. A's father D is twice as old as A and B is twice as old as his sister C. The age of D and C differ by 40 years. The ages of 'A' and 'B' are respectively",
    questionHindi: "A और B मित्र हैं और B, A से 2 वर्ष छोटा है। A के पिता D की आयु, A की आयु से दोगुनी है और B की आयु उसकी बहन C की आयु से दोगुनी है। D और C की आयु में 40 वर्ष का अंतर है। A और B की आयु क्रमशः क्या है?",
    options: ["26 yrs., 24 yrs.", "25 yrs., 23 yrs.", "30 yrs., 28 yrs.", "None of these"],
    optionsHindi: ["26 वर्ष, 24 वर्ष", "25 वर्ष, 23 वर्ष", "30 वर्ष, 28 वर्ष", "इनमें से कोई नहीं"],
    correctOption: 1
  },
  {
    id: 7,
    question: "Mahabharata war was fought during",
    questionHindi: "महाभारत का युद्ध किस काल में हुआ था?",
    options: ["900 BC", "800 BC", "700 BC", "600 BC"],
    optionsHindi: ["900 ईसा पूर्व", "800 ईसा पूर्व", "700 ईसा पूर्व", "600 ईसा पूर्व"],
    correctOption: 1
  },
  {
    id: 8,
    question: "The potential difference between 2 points in a current carrying conductor when 1 joule of work is done to move a charge of 1 coulomb from one point to the other is",
    questionHindi: "एक धारा वहन करने वाले चालक में दो बिंदुओं के बीच विभवांतर कितना होगा, यदि 1 कूलॉम्ब आवेश को एक बिंदु से दूसरे बिंदु तक ले जाने में 1 जूल कार्य किया जाए?",
    options: ["1 ampere", "1 volt", "1 newton", "1 ohm"],
    optionsHindi: ["1 ऐम्पियर", "1 वोल्ट", "1 न्यूटन", "1 ओम"],
    correctOption: 2
  },
  {
    id: 9,
    question: "Complete the analogy. Trigonometry : Mathematics :: Zoology : ?",
    questionHindi: "समानता पूर्ण कीजिए। Trigonometry : Mathematics :: Zoology : ?",
    options: ["Botany", "Chemistry", "Biology", "Bio-chemistry"],
    optionsHindi: ["बॉटनी", "केमिस्ट्री", "बायोलॉजी", "बायो-केमिस्ट्री"],
    correctOption: 3
  },
  {
    id: 10,
    question: "The High Court has the jurisdiction under Article 226 for the enforcement of",
    questionHindi: "उच्च न्यायालय को अनुच्छेद 226 के अंतर्गत किसके प्रवर्तन का अधिकार है?",
    options: ["Civil Rights", "Sanctioning Rights", "Fundamental Rights", "Child Rights"],
    optionsHindi: ["सिविल अधिकार", "स्वीकृत अधिकार", "मौलिक अधिकार", "बाल अधिकार"],
    correctOption: 3
  },
  {
    id: 11,
    question: "In order to improve the condition of children, _______ has been implemented in Haryana.",
    questionHindi: "बच्चों की स्थिति में सुधार के लिए हरियाणा में _______ लागू किया गया है।",
    options: ["Integrated Child Development Project", "Innovational Child Development Plan", "Indian Child Development Plan", "International Child Development Project"],
    optionsHindi: ["एकीकृत बाल विकास परियोजना (ICDP)", "नवाचार बाल विकास योजना", "भारतीय बाल विकास योजना", "अंतरराष्ट्रीय बाल विकास परियोजना"],
    correctOption: 1
  },
  {
    id: 12,
    question: "Solutions of the equation √3x² + 11x + 6√3 = 0 are",
    questionHindi: "समीकरण √3x² + 11x + 6√3 = 0 के हल हैं:",
    options: ["√2, √6", "-2/√3, -3√3", "√2, -√6/√3", "-√3, -√6/2"],
    optionsHindi: ["√2, √6", "-2/√3, -3√3", "-√2/√3, √6", "√3/√2, -√6"],
    correctOption: 2
  },
  {
    id: 13,
    question: "During the freedom movement, who among the following revolutionaries turned into a philosopher?",
    questionHindi: "स्वतंत्रता आंदोलन के दौरान निम्नलिखित में से कौन-से क्रांतिकारी बाद में दार्शनिक बने?",
    options: ["Rash Bihari Ghosh", "Aurobindo Ghosh", "V. D. Savarkar", "Satyendranath Bose"],
    optionsHindi: ["रास बिहारी घोष", "अरविंदो घोष", "वी. डी. सावरकर", "सत्येन्द्रनाथ बोस"],
    correctOption: 2
  },
  {
    id: 14,
    question: "Who among the following has been Speaker of Haryana Vidhan Sabha for the maximum number of times?",
    questionHindi: "हरियाणा विधानसभा के अध्यक्ष के पद में सर्वाधिक बार कौन रहे हैं?",
    options: ["Kuldeep Sharma", "Harmahendra Singh Chadda", "Satbeer Singh", "Ashok Kumar Arora"],
    optionsHindi: ["कुलदीप शर्मा", "हरमहेंद्र सिंह चड्ढा", "सतबीर सिंह", "अशोक कुमार अरोड़ा"],
    correctOption: 2
  },
  {
    id: 15,
    question: "During the suzerainty of the British crown, Princely States covered what portion of the land area of the British Indian empire?",
    questionHindi: "ब्रिटिश क्राउन की अधिसत्ता के दौरान, रियासतों ने ब्रिटिश भारतीय साम्राज्य के कुल भू-भाग का कितना हिस्सा घेरा था?",
    options: ["One-third", "One-fourth", "One-tenth", "None of the above"],
    optionsHindi: ["एक-तिहाई", "एक-चौथाई", "एक-दसवां", "उपरोक्त में से कोई नहीं"],
    correctOption: 4
  },
  {
    id: 16,
    question: "If 'GIVE' is coded as 43, then 'TAKE' is coded as",
    questionHindi: "यदि 'GIVE' को 43 कोड किया गया है, तो 'TAKE' को क्या कोड किया जाएगा?",
    options: ["47", "27", "36", "37"],
    optionsHindi: ["47", "27", "36", "37"],
    correctOption: 4
  },
  {
    id: 17,
    question: "If sec θ = 4/√7, then the value of √((2tan²θ - cosec²θ)/(2cos²θ - cot²θ)) is",
    questionHindi: "यदि sec θ = 4/√7, तो √((2tan²θ - cosec²θ)/(2cos²θ - cot²θ)) का मान क्या होगा?",
    options: ["20/7", "0", "4", "None of these"],
    optionsHindi: ["20/7", "0", "4", "इनमें से कोई नहीं"],
    correctOption: 1
  },
  {
    id: 18,
    question: "If 15th of August was Wednesday, then 1st August of the same year was",
    questionHindi: "यदि 15 अगस्त बुधवार था, तो उसी वर्ष 1 अगस्त कौन-सा दिन था?",
    options: ["Thursday", "Wednesday", "Friday", "Saturday"],
    optionsHindi: ["गुरुवार", "बुधवार", "शुक्रवार", "शनिवार"],
    correctOption: 2
  },
  {
    id: 19,
    question: "Which of the following form an AP?",
    questionHindi: "निम्नलिखित में से कौन-सा क्रम एक समान्तर श्रेणी (AP) बनाता है?",
    options: ["1, 1, 2, 2, 3, 3, _ _ _ _ _", "0.3, 0.33, 0.333, _ _ _ _ _", "√2, 2, 2√2, 4, _ _ _ _ _", "3, 3 + √2, 3 + 2√2, 3 + 3√2"],
    optionsHindi: ["1, 1, 2, 2, 3, 3, …", "0.3, 0.33, 0.333, …", "√2, 2, 2√2, 4, …", "3, 3+√2, 3+2√2, 3+3√2, …"],
    correctOption: 4
  },
  {
    id: 20,
    question: "According to Haryana Municipal Amendment Act, any male member contesting urban local bodies election must possess _______ as minimum education.",
    questionHindi: "हरियाणा नगरपालिका संशोधन अधिनियम के अनुसार, शहरी स्थानीय निकाय चुनाव लड़ने वाले किसी भी पुरुष सदस्य के पास न्यूनतम शिक्षा _______ होनी चाहिए।",
    options: ["MBBS", "LL. B.", "12th Standard", "Matriculation"],
    optionsHindi: ["MBBS", "LL.B.", "12वीं", "मैट्रिक"],
    correctOption: 4
  },
  {
    id: 21,
    question: "Consider the following statements and choose the incorrect regarding the Meghalaya plateau.",
    questionHindi: "निम्नलिखित कथनों में से मेघालय पठार के संबंध में गलत कथन चुनिए।",
    options: ["It is further sub-divided into Garo Hills, Khasi Hills, Jaintia Hills.", "Plateau stand detached from the main Peninsular Block.", "It is also rich in mineral resources like coal, iron ore, sillimanite, limestone and uranium.", "This area receives maximum rainfall from the north-east monsoon."],
    optionsHindi: ["यह आगे गारो, खासी और जयंतिया पहाड़ियों में विभाजित है।", "यह पठार मुख्य प्रायद्वीपीय भाग से अलग स्थित है।", "यह कोयला, लौह अयस्क, सिलिमेनाइट, चूना पत्थर और यूरेनियम जैसे खनिजों से समृद्ध है।", "यह उत्तर-पूर्व मानसून से सर्वाधिक वर्षा प्राप्त करता है।"],
    correctOption: 4
  },
  {
    id: 22,
    question: "The first Haryanavi movie was?",
    questionHindi: "पहली हरियाणवी फिल्म कौन-सी थी?",
    options: ["Rijuvi", "Dharti", "Yajurveda", "Osho"],
    optionsHindi: ["ऋजुवी", "धरती", "यजुर्वेद", "ओशो"],
    correctOption: 2
  },
  {
    id: 23,
    question: "Ms. X moves 20 metres to the East and then turns to her left and walks 15 metres and then turns to her right and moves 25 metres. After this, she turns to her right and moves 15 metres. Now, how far is she from the starting point?",
    questionHindi: "सुश्री X 20 मीटर पूर्व की ओर चलती हैं, फिर बाएँ मुड़कर 15 मीटर चलती हैं, फिर दाएँ मुड़कर 25 मीटर चलती हैं। इसके बाद वह दाएँ मुड़कर 15 मीटर चलती हैं। अब वह आरंभिक बिंदु से कितनी दूर हैं?",
    options: ["35 metres", "40 metres", "45 metres", "None of these"],
    optionsHindi: ["35 मीटर", "40 मीटर", "45 मीटर", "इनमें से कोई नहीं"],
    correctOption: 3
  },
  {
    id: 24,
    question: "_______ does not react with dilute HCl.",
    questionHindi: "निम्नलिखित में से कौन-सा धातु पतले HCl के साथ अभिक्रिया नहीं करता?",
    options: ["Mg", "Cu", "Al", "Li"],
    optionsHindi: ["Mg", "Cu", "Al", "Li"],
    correctOption: 2
  },
  {
    id: 25,
    question: "Arrange the following structures of the atmosphere from the surface of the Earth.",
    questionHindi: "वायुमंडल की परतों को पृथ्वी की सतह से ऊपर की ओर सही क्रम में लिखिए।",
    options: ["Troposphere - mesosphere - stratosphere - thermosphere", "Troposphere - stratosphere - mesosphere - thermosphere", "Stratosphere - troposphere - mesosphere - thermosphere", "Stratosphere - mesosphere - troposphere - thermosphere"],
    optionsHindi: ["क्षोभमंडल – मध्यमंडल – समतापमंडल – ऊष्ममंडल", "क्षोभमंडल – समतापमंडल – मध्यमंडल – ऊष्ममंडल", "समतापमंडल – क्षोभमंडल – मध्यमंडल – ऊष्ममंडल", "समतापमंडल – मध्यमंडल – क्षोभमंडल – ऊष्ममंडल"],
    correctOption: 2
  },
  {
    id: 26,
    question: "Joginder Singh is a litterateur from",
    questionHindi: "जोगिंदर सिंह किस स्थान के साहित्यकार हैं?",
    options: ["Jalsa", "Shahabad", "Panipat", "Ambala"],
    optionsHindi: ["जल्सा", "शाहाबाद", "पानीपत", "अंबाला"],
    correctOption: 2
  },
  {
    id: 27,
    question: "Which of the following statement/s is/are true regarding 97th Amendment of the Constitution?",
    questionHindi: "संविधान के 97वें संशोधन के संबंध में कौन-सा/से कथन सही है/हैं?",
    options: ["It made the right to form Self Help Group as a Fundamental Right", "It has brought a new provision into the Part IV of the Constitution (Directive Principle of State Policy)", "Both are wrong", "Both are right"],
    optionsHindi: ["इसने स्वयं सहायता समूह (Self Help Group) बनाने के अधिकार को मौलिक अधिकार बनाया।", "इसने संविधान के भाग IV (राज्य के नीति निदेशक तत्व) में नया प्रावधान जोड़ा।", "दोनों गलत", "दोनों सही"],
    correctOption: 4
  },
  {
    id: 28,
    question: "Mustafabad is renamed as",
    questionHindi: "मुस्तफाबाद का नया नाम क्या है?",
    options: ["Brahmavart", "Saraswati Nagar", "Kisan Nagar", "Aryabhatta"],
    optionsHindi: ["ब्रह्मावर्त", "सरस्वती नगर", "किसान नगर", "आर्यभट्ट"],
    correctOption: 2
  },
  {
    id: 29,
    question: "The 'Champions of the Earth' Award is presented by",
    questionHindi: "'चैंपियंस ऑफ द अर्थ' पुरस्कार किसके द्वारा दान किया जाता है?",
    options: ["UNDP", "UNFCCC", "UNEP", "UN General Assembly"],
    optionsHindi: ["UNDP", "UNFCCC", "UNEP", "संयुक्त राष्ट्र महासभा"],
    correctOption: 3
  },
  {
    id: 30,
    question: "Panchayat Raj Act came into existence pursuant to _______ Constitutional Amendment Act.",
    questionHindi: "पंचायती राज अधिनियम _______ संविधान संशोधन अधिनियम के तहत अस्तित्व में आया।",
    options: ["71st", "72nd", "73rd", "74th"],
    optionsHindi: ["71वाँ", "72वाँ", "73वाँ", "74वाँ"],
    correctOption: 3
  },
  {
    id: 31,
    question: "When baking powder is heated or mixed in water _______ is produced.",
    questionHindi: "बेकिंग पाउडर को गर्म करने या पानी में मिलाने पर _______ उत्पन्न होता है।",
    options: ["H₂", "O₂", "CO₂", "CO"],
    optionsHindi: ["हाइड्रोजन (H₂)", "ऑक्सीजन (O₂)", "कार्बन डाइऑक्साइड (CO₂)", "कार्बन मोनोऑक्साइड (CO)"],
    correctOption: 3
  },
  {
    id: 32,
    question: "Which of the following hills serve as a connecting link between the Himalayas and Plains?",
    questionHindi: "निम्नलिखित में से कौन-सी पहाड़ियाँ हिमालय और मैदानी क्षेत्रों के बीच जोड़ का कार्य करती हैं?",
    options: ["Tipra Hills", "Morni Hills", "Aravali Hills", "Ambala Hills"],
    optionsHindi: ["टिपरा हिल्स", "मोरनी हिल्स", "अरावली हिल्स", "अंबाला हिल्स"],
    correctOption: 2
  },
  {
    id: 33,
    question: "Find the missing number (?) in the sequence 5, 11, 23, ?, 95, 191.",
    questionHindi: "श्रेणी में लुप्त संख्या ज्ञात कीजिए: 5, 11, 23, ?, 95, 191",
    options: ["47", "48", "49", "50"],
    optionsHindi: ["47", "48", "49", "50"],
    correctOption: 1
  },
  {
    id: 34,
    question: "Aquifer mapping done to assess",
    questionHindi: "एक्वीफर मैपिंग का उद्देश्य क्या आकलन करना है?",
    options: ["Ground water situation", "State legal situation", "Position of women in the State", "Animal census"],
    optionsHindi: ["भूजल की स्थिति", "राज्य की कानूनी स्थिति", "राज्य में महिलाओं की स्थिति", "पशु जनगणना"],
    correctOption: 1
  },
  {
    id: 35,
    question: "In ΔABC, AB = 6√3 cm, AC = 12 cm and BC = 6 cm, then ∠B is",
    questionHindi: "त्रिभुज ABC में AB = 6√3 सेमी, AC = 12 सेमी और BC = 6 सेमी है। तब ∠B का मान क्या होगा?",
    options: ["120°", "60°", "90°", "45°"],
    optionsHindi: ["120°", "60°", "90°", "45°"],
    correctOption: 3
  },
  {
    id: 36,
    question: "The sum of digits of two digit number is 9. Also, nine times this number is twice the number obtained by reversing the order of the digits of the number. Then the number is",
    questionHindi: "एक दो-अंकीय संख्या के अंकों का योग 9 है। साथ ही, उस संख्या का नौ गुना, उसके अंकों को उलटकर प्राप्त संख्या के दोगुने के बराबर है। वह संख्या क्या है?",
    options: ["18", "81", "36", "None of these"],
    optionsHindi: ["18", "81", "36", "इनमें से कोई नहीं"],
    correctOption: 1
  },
  {
    id: 37,
    question: "The distance between the point (a, b) and (-a, -b) is",
    questionHindi: "बिंदु (a, b) और (-a, -b) के बीच की दूरी है",
    options: ["0", "1", "2√(a² + b²)", "None of these"],
    optionsHindi: ["0", "1", "2√(a² + b²)", "इनमें से कोई नहीं"],
    correctOption: 4
  },
  {
    id: 38,
    question: "The main presence of Aravali Hills is found in the District of",
    questionHindi: "अरावली पहाड़ियों की मुख्य उपस्थिति किस जिले में पाई जाती है?",
    options: ["Faridabad", "Rohtak", "Gurgaon", "Hisar"],
    optionsHindi: ["फरीदाबाद", "रोहतक", "गुरुग्राम", "हिसार"],
    correctOption: 3
  },
  {
    id: 39,
    question: "RBI was set up on the basis of the recommendation of",
    questionHindi: "भारतीय रिज़र्व बैंक (RBI) की स्थापना किसकी सिफारिश पर हुई थी?",
    options: ["Indian Central Bank Enquiry Committee", "Royal Commission", "Simon Commission", "Nehru Report"],
    optionsHindi: ["Indian Central Bank Enquiry Committee", "Royal Commission", "Simon Commission", "Nehru Report"],
    correctOption: 2
  },
  {
    id: 40,
    question: "The total area of Haryana is",
    questionHindi: "हरियाणा का कुल क्षेत्रफल है",
    options: ["44212 sq. kms", "45212 sq. kms", "46212 sq. kms", "47212 sq. kms"],
    optionsHindi: ["44212 वर्ग किमी", "45212 वर्ग किमी", "46212 वर्ग किमी", "47212 वर्ग किमी"],
    correctOption: 1
  },
  {
    id: 41,
    question: "If the equations x - 2y = 3 and 2x + by = 6 represent the same line, then the value of b is",
    questionHindi: "यदि समीकरण x - 2y = 3 और 2x + by = 6 एक ही रेखा का प्रतिनिधित्व करते हैं, तो b का मान क्या होगा?",
    options: ["4", "-4", "-2", "None of these"],
    optionsHindi: ["4", "-4", "-2", "इनमें से कोई नहीं"],
    correctOption: 2
  },
  {
    id: 42,
    question: "Balmukund Gupta is a _______ literator of Haryana.",
    questionHindi: "बालमुकुंद गुप्त हरियाणा के किस भाषा-साहित्यकार हैं?",
    options: ["Sanskrit", "English", "Urdu", "Hindi"],
    optionsHindi: ["संस्कृत", "अंग्रेजी", "उर्दू", "हिन्दी"],
    correctOption: 4
  },
  {
    id: 43,
    question: "Find the missing letters (?) from the options for DW, ?, LO, PK, TG, XC.",
    questionHindi: "निम्नलिखित में से कौन-सा अक्षर-युग्म (?) उपयुक्त है: DW, ?, LO, PK, TG, XC.",
    options: ["FU", "EV", "HS", "IR"],
    optionsHindi: ["FU", "EV", "HS", "IR"],
    correctOption: 3
  },
  {
    id: 44,
    question: "Which of the following statements is wrong about Deccan Plateau?",
    questionHindi: "डेक्कन पठार के बारे में निम्नलिखित में से कौन-सा कथन गलत है?",
    options: ["This is bordered by the Western Ghats in the west, Eastern Ghats in the east and the Satpura, Maikal range and Mahadeo hills in the north.", "Its western hills are locally known by different names such as Sahyadri in Maharashtra, Nilgiri hills in Karnataka, and Anaimalai hills in Tamil Nadu, and Cardamom hills in Kerala.", "Anaimudi, the highest peak of Peninsular plateau is located on the Anaimalai hills.", "The Eastern and the Western Ghats meet each other at the Sabarimala hills."],
    optionsHindi: ["यह पश्चिम में Western Ghats, पूर्व में Eastern Ghats तथा उत्तर में सतपुड़ा, मैकाल श्रेणी और महादेव पहाड़ियों से घिरा है।", "इसकी पश्चिमी पहाड़ियाँ स्थानीय रूप से अलग-अलग नामों से जानी जाती हैं जैसे महाराष्ट्र में सह्याद्री, कर्नाटक में नीलगिरी, तमिलनाडु में अनैमलै पहाड़ियाँ और केरल में इलायची-पहाड़ियाँ।", "अनैमुदी, प्रायद्वीपीय पठार की सबसे ऊँची चोटी, अनैमलै पहाड़ियों पर स्थित है।", "पूर्वी और पश्चिमी घाट एक दूसरे से सबरीमाला पहाड़ियों पर मिलते हैं।"],
    correctOption: 4
  },
  {
    id: 45,
    question: "\"Vaishanava Jana To\", Gandhiji's one of favourite devotional songs which he adopted into the routine of his public prayer events, is written by",
    questionHindi: "\"वैष्णव जन तो\", जो गांधीजी का प्रिय भजन था और उन्होंने सार्वजनिक प्रार्थना में अपनाया था, इसे किसने लिखा?",
    options: ["Rabindranath Tagore", "M. K. Gandhi", "Kabir Das", "Narasinh Mehta"],
    optionsHindi: ["रवीन्द्रनाथ टैगोर", "एम. के. गांधी", "कबीर दास", "नरसिंह मेहता"],
    correctOption: 4
  },
  {
    id: 46,
    question: "If P(E) = 0.05, what is the probability of 'not E'?",
    questionHindi: "यदि P(E) = 0.05, तो 'नॉट E' की प्रायिकता क्या होगी?",
    options: ["0.05", "0.95", "0", "Not defined"],
    optionsHindi: ["0.05", "0.95", "0", "परिभाषित नहीं"],
    correctOption: 2
  },
  {
    id: 47,
    question: "Three cubes each of side 2.5 cm are joined end to end, the total surface area of resulting solid is",
    questionHindi: "तीन घन जिनकी भुजा 2.5 सेमी है, अंत-से-अंत जुड़ाए गए हैं; परिणामी ठोस का कुल पृष्ठीय क्षेत्रफल कितना होगा?",
    options: ["93.5 cm²", "87.5 cm²", "90 cm²", "85 cm²"],
    optionsHindi: ["93.5 वर्ग सेमी", "87.5 वर्ग सेमी", "90 वर्ग सेमी", "85 वर्ग सेमी"],
    correctOption: 2
  },
  {
    id: 48,
    question: "_______ is famous for Lac Bangles.",
    questionHindi: "लाख-चूड़ियाँ (Lac Bangles) के लिए कौन-सा स्थान प्रसिद्ध है?",
    options: ["Kurukshetra", "Ambala", "Mahendragarh", "Rohtak"],
    optionsHindi: ["कुरुक्षेत्र", "अंबाला", "महेन्द्रगढ़", "रोहतक"],
    correctOption: 3
  },
  {
    id: 49,
    question: "The war of Kurukshetra was narrated to Dhritarashtra by",
    questionHindi: "कुरुक्षेत्र का युद्ध किसने धृतराष्ट्र को सुनाया था?",
    options: ["Shankaracharya", "Madhvacharya", "Sanjaya", "Vallabhacharya"],
    optionsHindi: ["शंकराचार्य", "मध्वाचार्य", "संजय", "वल्लभाचार्य"],
    correctOption: 3
  },
  {
    id: 50,
    question: "If 2 is a zero of polynomial f(x) = ax² - 3(a - 1)x - 1, then value of a is",
    questionHindi: "यदि 2, बहुपद f(x) = ax² - 3(a - 1)x - 1 का शून्य है, तो a का मान क्या होगा?",
    options: ["5/2", "-2/5", "-5/2", "None of these"],
    optionsHindi: ["5/2", "-2/5", "-5/2", "इनमें से कोई नहीं"],
    correctOption: 1
  },
  {
    id: 51,
    question: "The term Mesophytes implies that",
    questionHindi: "शब्द Mesophytes का अर्थ है कि",
    options: ["Aquatic plants growing in fresh and marine waters", "These are plants growing in soil with optimum soil water conditions prevailing for major part of the year", "Plants growing in extreme weather", "Under water growing plants"],
    optionsHindi: ["ताजे और समुद्री जल में उगने वाले जलीय पौधे", "वे पौधे जो वर्ष के अधिकांश भाग में अनुकूल मिट्टी-जल स्थितियों में उगते हैं", "चरम मौसम में उगने वाले पौधे", "पानी के भीतर उगने वाले पौधे"],
    correctOption: 2
  },
  {
    id: 52,
    question: "Who among the following leaders moved \"Objective Resolution\" in the Constitutional Assembly?",
    questionHindi: "संविधान सभा में \"Objective Resolution\" किसने प्रस्तुत किया था?",
    options: ["Jawaharlal Nehru", "Dr. B. R. Ambedkar", "Dr. Rajendra Prasad", "Vallabh Bhai Patel"],
    optionsHindi: ["जवाहरलाल नेहरू", "डॉ. बी. आर. अम्बेडकर", "डॉ. राजेंद्र प्रसाद", "वल्लभभाई पटेल"],
    correctOption: 1
  },
  {
    id: 53,
    question: "Colour of the wheel, which we see in our National Flag is",
    questionHindi: "हमारे राष्ट्रीय ध्वज में जो चक्र दिखता है, उसका रंग क्या है?",
    options: ["Dark green", "Black", "Light Blue", "Navy blue"],
    optionsHindi: ["गहरा हरा", "काला", "हल्का नीला", "नौसेना-नीला"],
    correctOption: 4
  },
  {
    id: 54,
    question: "Jogis (Saints) use _______ instrument to sing songs.",
    questionHindi: "जोगी (संत) गीत गाने के लिए किस वाद्य का उपयोग करते हैं?",
    options: ["Shehnai", "Been", "Sarangi", "Dholak"],
    optionsHindi: ["शहनाई", "बीन", "सारंगी", "ढोलक"],
    correctOption: 3
  },
  {
    id: 55,
    question: "5000 years old Indus valley civilization, found in the present-day _______ District.",
    questionHindi: "5000 वर्ष पुरानी सिंधु घाटी सभ्यता किस जिले में पाई गई है?",
    options: ["Ranchi", "Hisar", "Kurukshetra", "Angeerasa"],
    optionsHindi: ["रांची", "हिसार", "कुरुक्षेत्र", "अंजीरासा"],
    correctOption: 2
  },
  {
    id: 56,
    question: "An object 4 cm in size, is placed at 20 cm in front of a concave mirror of focal length 10 cm. At what distance from the mirror should a screen be placed in order to obtain a sharp image?",
    questionHindi: "एक वस्तु जिसकी ऊँचाई 4 सेमी है, उसे एक अवतल दर्पण के सामने 20 सेमी पर रखा जाता है; दर्पण की फोकस लंबाई 10 सेमी है। तीक्ष्ण छवि प्राप्त करने के लिए स्क्रीन दर्पण से कितनी दूरी पर रखनी चाहिए?",
    options: ["20 cm from the mirror", "10 cm from the mirror", "20/3 cm from the mirror", "10/3 cm from the mirror"],
    optionsHindi: ["दर्पण से 20 सेमी", "दर्पण से 10 सेमी", "दर्पण से 20/3 सेमी", "दर्पण से 10/3 सेमी"],
    correctOption: 1
  },
  {
    id: 57,
    question: "Omega-3 fatty acids are present in",
    questionHindi: "ओमेगा-3 फैटी एसिड किसमें पाए जाते हैं?",
    options: ["Fish", "Walnuts", "Pulses", "Both (1) and (2)"],
    optionsHindi: ["मछली", "अखरोट", "दालें", "(1) और (2) दोनों"],
    correctOption: 4
  },
  {
    id: 58,
    question: "The \"hub of making durries\" in Haryana is",
    questionHindi: "हरियाणा में दरी बनाने का केंद्र (hub) कौन-सा स्थान है?",
    options: ["Rohtak", "Manipur", "Panipat", "Gurgaon"],
    optionsHindi: ["रोहतक", "मणिपुर", "पानीपत", "गुरुग्राम"],
    correctOption: 3
  },
  {
    id: 59,
    question: "Find the word which is different from the other 3 options given below.",
    questionHindi: "नीचे दिए गए चार शब्दों में से वह शब्द चुनिए जो बाकी तीनों से भिन्न है।",
    options: ["Mathematics", "Arithmetic", "Algebra", "Geometry"],
    optionsHindi: ["Mathematics", "Arithmetic", "Algebra", "Geometry"],
    correctOption: 1
  },
  {
    id: 60,
    question: "ISRO's first woman scientist who recently spent over 403 days in Antarctica is",
    questionHindi: "ISRO की वह पहली महिला वैज्ञानिक जिन्होंने हाल-ही में अंटार्कटिका में 403 से अधिक दिन बिताए, कौन हैं?",
    options: ["Tessy Thomas", "Mangala Mani", "Nandini Harinath", "Anuradha T. K."],
    optionsHindi: ["टेसी थॉमस", "मंगला मणि", "नंदिनी हरिनाथ", "अनुराधा टी. के."],
    correctOption: 2
  },
  {
    id: 61,
    question: "The force that blood exerts against the wall of a vessel is called",
    questionHindi: "रक्त द्वारा किसी रक्त-वाहिनी की दीवार पर लगाया गया बल क्या कहलाता है?",
    options: ["Diastolic pressure", "Hemodialysis", "Systolic pressure", "Blood pressure"],
    optionsHindi: ["डायस्टोलिक प्रेशर", "हेमोडायलिसिस", "सिस्टोलिक प्रेशर", "ब्लड प्रेशर"],
    correctOption: 3
  },
  {
    id: 62,
    question: "Asbestos is found in the District of",
    questionHindi: "ऐस्बेस्टस किस जिले में पाया जाता है?",
    options: ["Hisar", "Gurgaon", "Karnal", "Mahendragarh"],
    optionsHindi: ["हिसार", "गुरुग्राम", "करनाल", "महेन्द्रगढ़"],
    correctOption: 4
  },
  {
    id: 63,
    question: "New States come to exist through Union, Consolidation, Confederation etc. Here Confederation refers to",
    questionHindi: "नए राज्य संघ, एकीकरण, संघ-समूह (Confederation) आदि के माध्यम से बनते हैं। यहाँ Confederation का अर्थ है:",
    options: ["Form of Union where Centre is strong and States are weak", "Form of Union where States are strong and Centre is weak", "Some States have strong power and Centre is also strong", "Equal power sharing between Centre and States"],
    optionsHindi: ["ऐसा संघ जहाँ केंद्र मजबूत और राज्य कमजोर हों", "ऐसा संघ जहाँ राज्य मजबूत और केंद्र कमजोर हो", "कुछ राज्यों के पास अधिक शक्ति हो और केंद्र भी मजबूत हो", "केंद्र और राज्यों के बीच समान शक्ति-वितरण"],
    correctOption: 2
  },
  {
    id: 64,
    question: "Find the number which is not like the other 3 numbers: 4/14, 3/21, 6/21, 16/56",
    questionHindi: "नीचे दिए गए संख्याओं में से वह संख्या चुनिए जो बाकी तीनों जैसी नहीं है।",
    options: ["4/14", "3/21", "6/21", "16/56"],
    optionsHindi: ["4/14", "3/21", "6/21", "16/56"],
    correctOption: 2
  },
  {
    id: 65,
    question: "If '+' means '÷', '÷' means '-', '-' means '×' and '×' means '+', then 9 + 3 ÷ 5 - 3 × 7 =",
    questionHindi: "यदि '+' का अर्थ '÷', '÷' का अर्थ '-', '-' का अर्थ '×' और '×' का अर्थ '+', तो 9 + 3 ÷ 5 - 3 × 7 का मान क्या होगा?",
    options: ["-5", "15", "25", "None of these"],
    optionsHindi: ["-5", "15", "25", "इनमें से कोई नहीं"],
    correctOption: 1
  },
  {
    id: 66,
    question: "The lake which is dedicated to Sun God is",
    questionHindi: "वह झील जो सूर्य देव को समर्पित है, कौन-सी है?",
    options: ["Damodara lake", "Anangpur lake", "Hathnikund", "Surajkund"],
    optionsHindi: ["दमोडरा झील", "अनंगपुर झील", "हथनीकुंड", "सूरजकुंड"],
    correctOption: 4
  },
  {
    id: 67,
    question: "The values of x and y satisfying the equation 2(x/a) + y/b = 2 and x/a − y/b = 4 are",
    questionHindi: "निम्न समीकरणों को संतुष्ट करने वाले x और y के मान क्या हैं? 2(x/a) + y/b = 2 और x/a − y/b = 4",
    options: ["x = a, y = b", "x = 2a, y = -2b", "x = a, y = -b", "x = 2a, y = 2b"],
    optionsHindi: ["x = a, y = b", "x = 2a, y = -2b", "x = a, y = -b", "x = 2a, y = 2b"],
    correctOption: 2
  },
  {
    id: 68,
    question: "Skill of archery was the test in the swayamvara of",
    questionHindi: "किसके स्वयंवर में तीरंदाजी-कौशल का परीक्षण हुआ था?",
    options: ["Parvati", "Gouri", "Meenakshi", "Draupadi"],
    optionsHindi: ["पार्वती", "गौरी", "मीनाक्षी", "द्रौपदी"],
    correctOption: 4
  },
  {
    id: 69,
    question: "Correct the following sentence: I can't imagine why you were believing all those rumours since yesterday.",
    questionHindi: "सही वाक्य चुनिए: I can't imagine why you were believing all those rumours since yesterday.",
    options: ["I can't imagine why wasn't you believing all those rumours since yesterday.", "I can't imagine why you have been believing all those rumours since yesterday.", "I can't imagine why you believed all those rumours since yesterday.", "I can't imagine why do you believe all those rumours since yesterday."],
    optionsHindi: ["I can't imagine why wasn't you believing all those rumours since yesterday.", "I can't imagine why you have been believing all those rumours since yesterday.", "I can't imagine why you believed all those rumours since yesterday.", "I can't imagine why do you believe all those rumours since yesterday."],
    correctOption: 2
  },
  {
    id: 70,
    question: "Correct the following sentence: Each of the sports women were given a certificate.",
    questionHindi: "वाक्य सुधारिए: Each of the sports women were given a certificate.",
    options: ["Each of the sports women was given a certificate.", "Sports women each were given a certificate.", "Every sports women were given a certificate.", "Each of the sports women have been given a certificate."],
    optionsHindi: ["Each of the sports women was given a certificate.", "Sports women each were given a certificate.", "Every sports women were given a certificate.", "Each of the sports women have been given a certificate."],
    correctOption: 1
  },
  {
    id: 71,
    question: "Fill in the blanks with appropriate option. The scheme allows students from many countries to communicate _______",
    questionHindi: "रिक्त स्थान भरिए: The scheme allows students from many countries to communicate _______",
    options: ["to themselves", "with one another", "each other", "themselves"],
    optionsHindi: ["to themselves", "with one another", "each other", "themselves"],
    correctOption: 2
  },
  {
    id: 72,
    question: "An employment advertisement should _______ the number of vacancies.",
    questionHindi: "रोजगार विज्ञापन में कितनी रिक्तियाँ हैं यह _______ चाहिए",
    options: ["declare", "specify", "provide", "contain"],
    optionsHindi: ["declare", "specify", "provide", "contain"],
    correctOption: 2
  },
  {
    id: 73,
    question: "The growing number of visitors _______ the footpaths.",
    questionHindi: "बढ़ते हुए आगंतुक _______ फुटपाथों को क्षतिग्रस्त कर रहे हैं।",
    options: ["damages", "were damaging", "damaging", "are damaging"],
    optionsHindi: ["damages", "were damaging", "damaging", "are damaging"],
    correctOption: 4
  },
  {
    id: 74,
    question: "Choose the correct option to fit in the blank. When I was a child _______ the Violin.",
    questionHindi: "रिक्त स्थान भरिए: When I was a child _______ the Violin.",
    options: ["I am playing", "I played", "I was playing", "I play"],
    optionsHindi: ["I am playing", "I played", "I was playing", "I play"],
    correctOption: 2
  },
  {
    id: 75,
    question: "Ram was appointed ______ Clerk.",
    questionHindi: "राम को _______ क्लर्क नियुक्त किया गया था।",
    options: ["an", "No article", "a", "the"],
    optionsHindi: ["an", "(कोई आर्टिकल नहीं)", "a", "the"],
    correctOption: 2
  },
  {
    id: 76,
    question: "Choose the correct answer for the blank from the given options. India is one of _______ biggest countries in the world.",
    questionHindi: "रिक्त स्थान भरिए: India is one of _______ biggest countries in the world.",
    options: ["the", "No article", "an", "a"],
    optionsHindi: ["the", "(कोई आर्टिकल नहीं)", "an", "a"],
    correctOption: 1
  },
  {
    id: 77,
    question: "Choose the appropriate meaning for the idiom. To bury the hatchet",
    questionHindi: "निम्न मुहावरे का अर्थ चुनिए: To bury the hatchet",
    options: ["To make peace", "To bury the dead", "To keep a secret", "To obtain money"],
    optionsHindi: ["To make peace", "To bury the dead", "To keep a secret", "To obtain money"],
    correctOption: 1
  },
  {
    id: 78,
    question: "Choose the appropriate meaning for the idiom. A burning question",
    questionHindi: "निम्न मुहावरे का अर्थ चुनिए: A burning question",
    options: ["A difficult problem", "An annoying question", "A puzzling question", "A hotly debated question"],
    optionsHindi: ["A difficult problem", "An annoying question", "A puzzling question", "A hotly debated question"],
    correctOption: 4
  },
  {
    id: 79,
    question: "निम्न में से किसे उभयचर (Amphibian) कहा जाता है?",
    options: ["गेहूँ", "मेंढक", "घोड़ा", "इनमें से कोई नहीं"],
    correctOption: 2
  },
  {
    id: 80,
    question: "हरियाणा के किस जिले में सबसे कम लिंगानुपात है?",
    options: ["सोनीपत", "रोहतक", "गुरुग्राम", "झज्जर"],
    correctOption: 3
  },
  {
    id: 81,
    question: "भारत के राष्ट्रपति का चुनाव कौन करता है?",
    options: ["संसद के दोनों सदनों के निर्वाचित सदस्य", "संसद और राज्य विधानसभाओं के निर्वाचित सदस्य", "संसद के दोनों सदनों के सभी सदस्य", "इनमें से कोई नहीं"],
    correctOption: 2
  },
  {
    id: 82,
    question: "हरियाणा का कौन-सा जिला 'धान का कटोरा' कहलाता है?",
    options: ["करनाल", "कुरुक्षेत्र", "पानीपत", "जींद"],
    correctOption: 1
  },
  {
    id: 83,
    question: "भारत में सबसे लंबी नदी कौन-सी है?",
    options: ["यमुना", "गोदावरी", "गंगा", "नर्मदा"],
    correctOption: 3
  },
  {
    id: 84,
    question: "हरियाणा राज्य का गठन कब हुआ था?",
    options: ["1 नवंबर 1966", "15 अगस्त 1947", "26 जनवरी 1950", "1 नवंबर 1956"],
    correctOption: 1
  },
  {
    id: 85,
    question: "भारत का सर्वोच्च नागरिक सम्मान कौन-सा है?",
    options: ["पद्म भूषण", "पद्म विभूषण", "भारत रत्न", "पद्म श्री"],
    correctOption: 3
  },
  {
    id: 86,
    question: "हरियाणा की राजधानी कौन-सी है?",
    options: ["गुरुग्राम", "फरीदाबाद", "चंडीगढ़", "रोहतक"],
    correctOption: 3
  },
  {
    id: 87,
    question: "विटामिन C का रासायनिक नाम क्या है?",
    options: ["एस्कॉर्बिक एसिड", "रेटिनॉल", "थायमिन", "राइबोफ्लेविन"],
    correctOption: 1
  },
  {
    id: 88,
    question: "हरियाणा में कुल कितने जिले हैं?",
    options: ["20", "21", "22", "23"],
    correctOption: 3
  },
  {
    id: 89,
    question: "भारत का राष्ट्रीय पक्षी कौन-सा है?",
    options: ["तोता", "मोर", "कबूतर", "गौरैया"],
    correctOption: 2
  },
  {
    id: 90,
    question: "सूर्य से सबसे नजदीक ग्रह कौन-सा है?",
    options: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    correctOption: 3
  }
];
