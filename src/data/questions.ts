export const EXAM_DURATION_MINUTES = 90;

export interface Question {
  id: number;
  question: string;
  questionHindi: string;
  options: string[];
  optionsHindi: string[];
  correctOption: number;
}

export const questions: Question[] = [
  {
    id: 1,
    question: "When a number is divided by 56, the remainder is 29. What will be the remainder if the same number is divided by 8?",
    questionHindi: "जब किसी संख्या को 56 से विभाजित किया जाता है, तो शेषफल 29 होता है। यदि उसी संख्या को 8 से विभाजित किया जाए तो शेषफल क्या होगा?",
    options: ["4", "5", "3", "7"],
    optionsHindi: ["4", "5", "3", "7"],
    correctOption: 1
  },
  {
    id: 2,
    question: "The HCF and LCM of two numbers are 12 and 240 respectively. If one of the numbers is 48, find the other number.",
    questionHindi: "दो संख्याओं का महत्तम समापवर्तक (HCF) और लघुत्तम समापवर्त्य (LCM) क्रमशः 12 और 240 है। यदि उनमें से एक संख्या 48 है, तो दूसरी संख्या ज्ञात कीजिये।",
    options: ["50", "60", "72", "80"],
    optionsHindi: ["50", "60", "72", "80"],
    correctOption: 1
  },
  {
    id: 3,
    question: "A number is increased by 20% and then decreased by 20%. The final value of the number is:",
    questionHindi: "एक संख्या में 20% की वृद्धि की जाती है और फिर 20% की कमी की जाती है। संख्या का अंतिम मान है:",
    options: ["Same as before / पहले जैसा ही", "Decreased by 4% / 4% की कमी", "Increased by 4% / 4% की वृद्धि", "Decreased by 10% / 10% की कमी"],
    optionsHindi: ["पहले जैसा ही", "4% की कमी", "4% की वृद्धि", "10% की कमी"],
    correctOption: 1
  },
  {
    id: 4,
    question: "A shopkeeper sells an article at a profit of 20%. If he had bought it at 10% less and sold it for ₹18 less, he would have gained 30%. Find the Cost Price.",
    questionHindi: "एक दुकानदार एक वस्तु को 20% के लाभ पर बेचता है। यदि उसने इसे 10% कम पर खरीदा होता और ₹18 कम में बेचा होता, तो उसे 30% का लाभ होता। क्रय मूल्य ज्ञात कीजिये।",
    options: ["₹600", "₹700", "₹800", "₹900"],
    optionsHindi: ["₹600", "₹700", "₹800", "₹900"],
    correctOption: 2
  },
  {
    id: 5,
    question: "If x : y = 3 : 4 and y : z = 5 : 7, then find x : y : z.",
    questionHindi: "यदि x : y = 3 : 4 और y : z = 5 : 7, तो x : y : z ज्ञात कीजिये।",
    options: ["15 : 20 : 28", "15 : 20 : 21", "12 : 20 : 28", "3 : 9 : 7"],
    optionsHindi: ["15 : 20 : 28", "15 : 20 : 21", "12 : 20 : 28", "3 : 9 : 7"],
    correctOption: 0
  },
  {
    id: 6,
    question: "The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person?",
    questionHindi: "8 व्यक्तियों का औसत वजन 2.5 किलो बढ़ जाता है जब उनमें से 65 किलो वजन वाले व्यक्ति के स्थान पर एक नया व्यक्ति आता है। नए व्यक्ति का वजन कितना है?",
    options: ["75 kg", "80 kg", "85 kg", "90 kg"],
    optionsHindi: ["75 किग्रा", "80 किग्रा", "85 किग्रा", "90 किग्रा"],
    correctOption: 2
  },
  {
    id: 7,
    question: "A sum of money amounts to ₹850 in 3 years and ₹925 in 4 years at simple interest. What is the sum?",
    questionHindi: "साधारण ब्याज पर एक धनराशि 3 वर्षों में ₹850 और 4 वर्षों में ₹925 हो जाती है। वह धनराशि क्या है?",
    options: ["₹600", "₹625", "₹650", "₹700"],
    optionsHindi: ["₹600", "₹625", "₹650", "₹700"],
    correctOption: 1
  },
  {
    id: 8,
    question: "A train 240 m long passes a pole in 24 seconds. How long will it take to pass a platform 650 m long?",
    questionHindi: "240 मीटर लंबी एक ट्रेन एक खंभे को 24 सेकंड में पार करती है। 650 मीटर लंबे प्लेटफॉर्म को पार करने में इसे कितना समय लगेगा?",
    options: ["65 sec", "89 sec", "100 sec", "150 sec"],
    optionsHindi: ["65 सेकंड", "89 सेकंड", "100 सेकंड", "150 सेकंड"],
    correctOption: 1
  },
  {
    id: 9,
    question: "If 2x + 3y = 23 and xy = 10, find the value of 4x² + 9y².",
    questionHindi: "यदि 2x + 3y = 23 और xy = 10 है, तो 4x² + 9y² का मान ज्ञात कीजिये।",
    options: ["400", "409", "429", "329"],
    optionsHindi: ["400", "409", "429", "329"],
    correctOption: 1
  },
  {
    id: 10,
    question: "The diagonal of a rectangle is √41 cm and its area is 20 sq. cm. The perimeter of the rectangle is:",
    questionHindi: "एक आयत का विकर्ण √41 सेमी है और इसका क्षेत्रफल 20 वर्ग सेमी है। आयत का परिमाप है:",
    options: ["18 cm", "20 cm", "9 cm", "24 cm"],
    optionsHindi: ["18 सेमी", "20 सेमी", "9 सेमी", "24 सेमी"],
    correctOption: 0
  },
  {
    id: 11,
    question: "Fresh fruit contains 68% water and dry fruit contains 20% water. How much dry fruit can be obtained from 100 kg of fresh fruits?",
    questionHindi: "ताजे फल में 68% पानी होता है और सूखे फल में 20% पानी होता है। 100 किलो ताजे फलों से कितना सूखा फल प्राप्त किया जा सकता है?",
    options: ["32 kg", "40 kg", "52 kg", "80 kg"],
    optionsHindi: ["32 किग्रा", "40 किग्रा", "52 किग्रा", "80 किग्रा"],
    correctOption: 1
  },
  {
    id: 12,
    question: "Two pipes A and B can fill a tank in 20 and 30 minutes respectively. If both are opened together, but after 5 minutes pipe B is turned off, how much total time will it take to fill the tank?",
    questionHindi: "दो पाइप A और B एक टैंक को क्रमशः 20 और 30 मिनट में भर सकते हैं। यदि दोनों को एक साथ खोला जाता है, लेकिन 5 मिनट बाद पाइप B को बंद कर दिया जाता है, तो टैंक को भरने में कुल कितना समय लगेगा?",
    options: ["16 min 40 sec", "15 min", "12 min", "10 min"],
    optionsHindi: ["16 मिनट 40 सेकंड", "15 मिनट", "12 मिनट", "10 मिनट"],
    correctOption: 0
  },
  {
    id: 13,
    question: "A boat travels 32 km downstream in 4 hours and 24 km upstream in 6 hours. What is the speed of the current?",
    questionHindi: "एक नाव 4 घंटे में 32 किमी धारा के अनुकूल और 6 घंटे में 24 किमी धारा के प्रतिकूल यात्रा करती है। धारा की गति क्या है?",
    options: ["2 km/h", "3 km/h", "4 km/h", "1.5 km/h"],
    optionsHindi: ["2 किमी/घंटा", "3 किमी/घंटा", "4 किमी/घंटा", "1.5 किमी/घंटा"],
    correctOption: 0
  },
  {
    id: 14,
    question: "The difference between the Compound Interest and Simple Interest on a certain sum for 2 years at 10% per annum is ₹20. The sum is:",
    questionHindi: "किसी राशि पर 2 वर्षों के लिए 10% प्रति वर्ष की दर से चक्रवृद्धि ब्याज और साधारण ब्याज के बीच का अंतर ₹20 है। राशि है:",
    options: ["₹1500", "₹2000", "₹2500", "₹3000"],
    optionsHindi: ["₹1500", "₹2000", "₹2500", "₹3000"],
    correctOption: 1
  },
  {
    id: 15,
    question: "A can do a work in 12 days. When he had worked for 3 days, B joined him. If they complete the work in 3 more days, in how many days can B alone finish the work?",
    questionHindi: "A एक कार्य को 12 दिनों में कर सकता है। जब उसने 3 दिनों तक कार्य किया, तो B उसके साथ जुड़ गया। यदि वे 3 और दिनों में कार्य पूरा करते हैं, तो B अकेले कितने दिनों में कार्य पूरा कर सकता है?",
    options: ["4 days", "6 days", "8 days", "10 days"],
    optionsHindi: ["4 दिन", "6 दिन", "8 दिन", "10 दिन"],
    correctOption: 1
  },
  {
    id: 16,
    question: "By selling a watch for ₹450, a man loses 10%. At what price should he sell it to gain 10%?",
    questionHindi: "एक घड़ी को ₹450 में बेचने पर एक व्यक्ति को 10% की हानि होती है। 10% लाभ प्राप्त करने के लिए उसे इसे किस कीमत पर बेचना चाहिए?",
    options: ["₹500", "₹550", "₹600", "₹540"],
    optionsHindi: ["₹500", "₹550", "₹600", "₹540"],
    correctOption: 1
  },
  {
    id: 17,
    question: "A man covers half of his journey at 6 km/h and the remaining half at 3 km/h. His average speed is:",
    questionHindi: "एक व्यक्ति अपनी यात्रा का आधा भाग 6 किमी/घंटा और शेष आधा भाग 3 किमी/घंटा की गति से तय करता है। उसकी औसत गति है:",
    options: ["4.5 km/h", "4 km/h", "3.5 km/h", "5 km/h"],
    optionsHindi: ["4.5 किमी/घंटा", "4 किमी/घंटा", "3.5 किमी/घंटा", "5 किमी/घंटा"],
    correctOption: 1
  },
  {
    id: 18,
    question: "The population of a village increases by 10% every year. If the current population is 5000, what will it be after 2 years?",
    questionHindi: "एक गाँव की जनसंख्या में प्रतिवर्ष 10% की वृद्धि होती है। यदि वर्तमान जनसंख्या 5000 है, तो 2 वर्ष बाद यह कितनी होगी?",
    options: ["6000", "6050", "5500", "6100"],
    optionsHindi: ["6000", "6050", "5500", "6100"],
    correctOption: 1
  },
  {
    id: 19,
    question: "Find the compound interest on ₹2000 for 2 years at 10% per annum.",
    questionHindi: "₹2000 पर 2 वर्षों के लिए 10% प्रति वर्ष की दर से चक्रवृद्धि ब्याज ज्ञात कीजिये।",
    options: ["₹400", "₹420", "₹410", "₹440"],
    optionsHindi: ["₹400", "₹420", "₹410", "₹440"],
    correctOption: 1
  },
  {
    id: 20,
    question: "If 15 men can do a work in 20 days, how many men are needed to complete the work in 10 days?",
    questionHindi: "यदि 15 पुरुष किसी कार्य को 20 दिनों में कर सकते हैं, तो 10 दिनों में कार्य पूरा करने के लिए कितने पुरुषों की आवश्यकता है?",
    options: ["20", "25", "30", "40"],
    optionsHindi: ["20", "25", "30", "40"],
    correctOption: 2
  },
  {
    id: 21,
    question: "The ratio of ages of Ram and Shyam is 4:5. If the sum of their ages is 45 years, find the age of Shyam.",
    questionHindi: "राम और श्याम की आयु का अनुपात 4:5 है। यदि उनकी आयु का योग 45 वर्ष है, तो श्याम की आयु ज्ञात कीजिये।",
    options: ["20", "25", "30", "35"],
    optionsHindi: ["20", "25", "30", "35"],
    correctOption: 1
  },
  {
    id: 22,
    question: "A train 150m long is running at a speed of 54 km/h. How much time will it take for the entire train to pass a stationary electric pole?",
    questionHindi: "150 मीटर लंबी एक ट्रेन 54 किमी/घंटा की गति से चल रही है। स्थिर विद्युत खंभे को पूरी तरह पार करने में ट्रेन को कितना समय लगेगा?",
    options: ["8 sec", "10 sec", "12 sec", "15 sec"],
    optionsHindi: ["8 सेकंड", "10 सेकंड", "12 सेकंड", "15 सेकंड"],
    correctOption: 1
  },
  {
    id: 23,
    question: "The average of five consecutive numbers is 20. The largest of these numbers is:",
    questionHindi: "लगातार पांच संख्याओं का औसत 20 है। इनमें से सबसे बड़ी संख्या है:",
    options: ["20", "22", "24", "21"],
    optionsHindi: ["20", "22", "24", "21"],
    correctOption: 1
  },
  {
    id: 24,
    question: "If x % of 40 is 10, then value of x is:",
    questionHindi: "यदि 40 का x% 10 है, तो x का मान है:",
    options: ["20", "25", "30", "15"],
    optionsHindi: ["20", "25", "30", "15"],
    correctOption: 1
  },
  {
    id: 25,
    question: "A retailer buys a radio for ₹225 and spends ₹25 on its repair. He sells it for ₹300. Find his profit percentage.",
    questionHindi: "एक खुदरा विक्रेता ₹225 में एक रेडियो खरीदता है और उसकी मरम्मत पर ₹25 खर्च करता है। वह इसे ₹300 में बेचता है। उसका लाभ प्रतिशत ज्ञात कीजिये।",
    options: ["15%", "20%", "25%", "10%"],
    optionsHindi: ["15%", "20%", "25%", "10%"],
    correctOption: 1
  },
  {
    id: 26,
    question: "Simplify: 0.008 / 0.2",
    questionHindi: "सरल करें: 0.008 / 0.2",
    options: ["0.04", "0.004", "0.4", "0.044"],
    optionsHindi: ["0.04", "0.004", "0.4", "0.044"],
    correctOption: 0
  },
  {
    id: 27,
    question: "Find the least number which when divided by 12, 15, and 20 leaves a remainder 0.",
    questionHindi: "वह छोटी से छोटी संख्या ज्ञात कीजिये जिसे 12, 15 और 20 से विभाजित करने पर शेषफल 0 बचता है।",
    options: ["40", "50", "60", "80"],
    optionsHindi: ["40", "50", "60", "80"],
    correctOption: 2
  },
  {
    id: 28,
    question: "A sum becomes ₹1320 in 2 years at 5% simple interest. Find the principal.",
    questionHindi: "एक राशि 5% साधारण ब्याज पर 2 वर्षों में ₹1320 हो जाती है। मूलधन ज्ञात कीजिये।",
    options: ["₹1100", "₹1200", "₹1000", "₹1150"],
    optionsHindi: ["₹1100", "₹1200", "₹1000", "₹1150"],
    correctOption: 1
  },
  {
    id: 29,
    question: "A can run 1 km in 4 minutes and B in 5 minutes. How much start should A give B in a 1 km race so that both finish together?",
    questionHindi: "A 1 किमी की दौड़ 4 मिनट में और B 5 मिनट में पूरी कर सकता है। 1 किमी की दौड़ में A को B को कितनी शुरुआत देनी चाहिए ताकि दोनों एक साथ समाप्त करें?",
    options: ["100m", "200m", "150m", "250m"],
    optionsHindi: ["100 मीटर", "200 मीटर", "150 मीटर", "250 मीटर"],
    correctOption: 1
  },
  {
    id: 30,
    question: "If a/3 = b/4 = c/7, then (a+b+c)/c is equal to:",
    questionHindi: "यदि a/3 = b/4 = c/7, तो (a+b+c)/c बराबर है:",
    options: ["7", "2", "1/2", "1/7"],
    optionsHindi: ["7", "2", "1/2", "1/7"],
    correctOption: 1
  },
  {
    id: 31,
    question: "The perimeter of a square is 40 cm. Find its area.",
    questionHindi: "एक वर्ग का परिमाप 40 सेमी है। इसका क्षेत्रफल ज्ञात कीजिये।",
    options: ["50 cm²", "100 cm²", "120 cm²", "80 cm²"],
    optionsHindi: ["50 वर्ग सेमी", "100 वर्ग सेमी", "120 वर्ग सेमी", "80 वर्ग सेमी"],
    correctOption: 1
  },
  {
    id: 32,
    question: "30% of a number is 120. What is 50% of that number?",
    questionHindi: "एक संख्या का 30% 120 है। उस संख्या का 50% क्या है?",
    options: ["150", "200", "180", "240"],
    optionsHindi: ["150", "200", "180", "240"],
    correctOption: 1
  },
  {
    id: 33,
    question: "A mixture contains milk and water in the ratio 4:1. If the total quantity is 50 liters, find the quantity of milk.",
    questionHindi: "एक मिश्रण में दूध और पानी का अनुपात 4:1 है। यदि कुल मात्रा 50 लीटर है, तो दूध की मात्रा ज्ञात कीजिये।",
    options: ["30L", "35L", "40L", "45L"],
    optionsHindi: ["30 लीटर", "35 लीटर", "40 लीटर", "45 लीटर"],
    correctOption: 2
  },
  {
    id: 34,
    question: "Solve: √625 + √400 - √225",
    questionHindi: "हल करें: √625 + √400 - √225",
    options: ["35", "30", "55", "25"],
    optionsHindi: ["35", "30", "55", "25"],
    correctOption: 1
  },
  {
    id: 35,
    question: "The cost of 12 apples is equal to the selling price of 10 apples. Find the profit percentage.",
    questionHindi: "12 सेबों का क्रय मूल्य 10 सेबों के विक्रय मूल्य के बराबर है। लाभ प्रतिशत ज्ञात कीजिये।",
    options: ["15%", "16.66%", "20%", "25%"],
    optionsHindi: ["15%", "16.66%", "20%", "25%"],
    correctOption: 2
  },
  {
    id: 36,
    question: "The difference between CI and SI on a certain sum for 2 years at 5% p.a. is ₹1.50. Find the sum.",
    questionHindi: "किसी राशि पर 5% प्रति वर्ष की दर से 2 वर्षों के लिए चक्रवृद्धि ब्याज और साधारण ब्याज के बीच का अंतर ₹1.50 है। राशि ज्ञात कीजिये।",
    options: ["₹600", "₹500", "₹400", "₹700"],
    optionsHindi: ["₹600", "₹500", "₹400", "₹700"],
    correctOption: 0
  },
  {
    id: 37,
    question: "A pipe can fill a tank in 4 hours and another pipe can empty it in 6 hours. If both are opened together, in how many hours will the tank be filled?",
    questionHindi: "एक पाइप एक टैंक को 4 घंटे में भर सकता है और दूसरा पाइप इसे 6 घंटे में खाली कर सकता है। यदि दोनों को एक साथ खोल दिया जाए, तो टैंक कितने घंटों में भर जाएगा?",
    options: ["8 hours", "10 hours", "12 hours", "14 hours"],
    optionsHindi: ["8 घंटे", "10 घंटे", "12 घंटे", "14 घंटे"],
    correctOption: 2
  },
  {
    id: 38,
    question: "A man travels for 5 hours at 40 km/h and 5 hours at 60 km/h. Find his average speed.",
    questionHindi: "एक आदमी 5 घंटे 40 किमी/घंटा और 5 घंटे 60 किमी/घंटा की गति से यात्रा करता है। उसकी औसत गति ज्ञात कीजिये।",
    options: ["48 km/h", "50 km/h", "52 km/h", "55 km/h"],
    optionsHindi: ["48 किमी/घंटा", "50 किमी/घंटा", "52 किमी/घंटा", "55 किमी/घंटा"],
    correctOption: 0
  },
  {
    id: 39,
    question: "In an election between two candidates, one got 55% of the total valid votes and won by 2000 votes. What was the total number of valid votes?",
    questionHindi: "दो उम्मीदवारों के बीच एक चुनाव में, एक को कुल वैध मतों का 55% मिला और वह 2000 मतों से जीत गया। कुल वैध मतों की संख्या क्या थी?",
    options: ["15,000", "20,000", "25,000", "30,000"],
    optionsHindi: ["15,000", "20,000", "25,000", "30,000"],
    correctOption: 1
  },
  {
    id: 40,
    question: "A sum of money amounts to ₹4800 in 3 years and ₹5600 in 5 years at simple interest. Find the rate of interest.",
    questionHindi: "एक धनराशि साधारण ब्याज पर 3 वर्षों में ₹4800 और 5 वर्षों में ₹5600 हो जाती है। ब्याज दर ज्ञात कीजिये।",
    options: ["8%", "10%", "12%", "11.11%"],
    optionsHindi: ["8%", "10%", "12%", "11.11%"],
    correctOption: 1
  },
  {
    id: 41,
    question: "A can finish a work in 18 days and B can do the same work in 15 days. B worked for 10 days and left the job. In how many days, A alone can finish the remaining work?",
    questionHindi: "A एक कार्य को 18 दिनों में समाप्त कर सकता है और B उसी कार्य को 15 दिनों में कर सकता है। B ने 10 दिनों तक कार्य किया और कार्य छोड़ दिया। A अकेले शेष कार्य को कितने दिनों में समाप्त कर सकता है?",
    options: ["5 days", "5.5 days", "6 days", "8 days"],
    optionsHindi: ["5 दिन", "5.5 दिन", "6 दिन", "8 दिन"],
    correctOption: 2
  },
  {
    id: 42,
    question: "The ratio of income of A and B is 3:4 and their expenditure is 2:3. If each saves ₹2000, find the income of A.",
    questionHindi: "A और B की आय का अनुपात 3:4 है और उनका व्यय 2:3 है। यदि प्रत्येक ₹2000 बचाता है, तो A की आय ज्ञात कीजिये।",
    options: ["₹4000", "₹5000", "₹6000", "₹8000"],
    optionsHindi: ["₹4000", "₹5000", "₹6000", "₹8000"],
    correctOption: 2
  },
  {
    id: 43,
    question: "The price of sugar increases by 20%. By how much percent must a housewife reduce her consumption to keep the expenditure same?",
    questionHindi: "चीनी की कीमत में 20% की वृद्धि होती है। एक गृहिणी को अपना खर्च समान रखने के लिए अपनी खपत में कितने प्रतिशत की कमी करनी चाहिए?",
    options: ["20%", "16.66%", "25%", "10%"],
    optionsHindi: ["20%", "16.66%", "25%", "10%"],
    correctOption: 1
  },
  {
    id: 44,
    question: "A boat goes 12 km upstream in 4 hours and 12 km downstream in 2 hours. Find the speed of the stream.",
    questionHindi: "एक नाव 4 घंटे में 12 किमी धारा के प्रतिकूल और 2 घंटे में 12 किमी धारा के अनुकूल जाती है। धारा की गति ज्ञात कीजिये।",
    options: ["1 km/h", "1.5 km/h", "2 km/h", "2.5 km/h"],
    optionsHindi: ["1 किमी/घंटा", "1.5 किमी/घंटा", "2 किमी/घंटा", "2.5 किमी/घंटा"],
    correctOption: 1
  },
  {
    id: 45,
    question: "Two numbers are such that their difference, their sum, and their product are in the ratio of 1:7:24. The product of the numbers is:",
    questionHindi: "दो संख्याएं ऐसी हैं कि उनका अंतर, उनका योग और उनका गुणनफल 1:7:24 के अनुपात में है। संख्याओं का गुणनफल है:",
    options: ["36", "48", "52", "24"],
    optionsHindi: ["36", "48", "52", "24"],
    correctOption: 1
  },
  {
    id: 46,
    question: "If x + 1/x = 4, then find x² + 1/x².",
    questionHindi: "यदि x + 1/x = 4, तो x² + 1/x² ज्ञात कीजिये।",
    options: ["12", "14", "16", "18"],
    optionsHindi: ["12", "14", "16", "18"],
    correctOption: 1
  },
  {
    id: 47,
    question: "A, B and C enter into a partnership. A invests 3 times as much as B invests and B invests two-third of what C invests. The ratio of capitals of A, B and C is:",
    questionHindi: "A, B और C साझेदारी करते हैं। A, B से 3 गुना निवेश करता है और B, C के निवेश का दो-तिहाई निवेश करता है। A, B और C की पूंजी का अनुपात है:",
    options: ["6:2:3", "3:2:6", "6:2:1", "5:2:3"],
    optionsHindi: ["6:2:3", "3:2:6", "6:2:1", "5:2:3"],
    correctOption: 0
  },
  {
    id: 48,
    question: "If the radius of a circle is increased by 50%, its area will increase by:",
    questionHindi: "यदि किसी वृत्त की त्रिज्या में 50% की वृद्धि की जाती है, तो उसके क्षेत्रफल में वृद्धि होगी:",
    options: ["100%", "115%", "125%", "150%"],
    optionsHindi: ["100%", "115%", "125%", "150%"],
    correctOption: 2
  },
  {
    id: 49,
    question: "A shopkeeper marks his goods 20% above the CP and allows a discount of 10%. His gain percent is:",
    questionHindi: "एक दुकानदार अपने माल को CP से 20% अधिक अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत है:",
    options: ["8%", "10%", "12%", "15%"],
    optionsHindi: ["8%", "10%", "12%", "15%"],
    correctOption: 0
  },
  {
    id: 50,
    question: "A thief steals a car at 1:30 PM and drives it at 40 km/h. The theft is discovered at 2:00 PM and the owner sets off in another car at 50 km/h. When will he overtake the thief?",
    questionHindi: "एक चोर दोपहर 1:30 बजे एक कार चुराता है और उसे 40 किमी/घंटा की गति से चलाता है। चोरी का पता दोपहर 2:00 बजे चलता है और मालिक दूसरी कार में 50 किमी/घंटा की गति से निकलता है। वह चोर को कब ओवरटेक करेगा?",
    options: ["3:30 PM", "4:00 PM", "4:30 PM", "3:00 PM"],
    optionsHindi: ["दोपहर 3:30 बजे", "दोपहर 4:00 बजे", "दोपहर 4:30 बजे", "दोपहर 3:00 बजे"],
    correctOption: 1
  },
  {
    id: 51,
    question: "If 'P' denotes 'multiplied by', 'T' denotes 'subtracted from', 'M' denotes 'added to', and 'B' denotes 'divided by', then 28 B 7 P 8 T 6 M 4 = ?",
    questionHindi: "यदि 'P' का अर्थ 'गुणा', 'T' का अर्थ 'घटाना', 'M' का अर्थ 'जोड़' और 'B' का अर्थ 'भाग' है, तो 28 B 7 P 8 T 6 M 4 = ?",
    options: ["__(A)", "30", "34", "28"],
    optionsHindi: ["30", "30", "34", "28"],
    correctOption: 1
  },
  {
    id: 52,
    question: "In a certain code, 'TRAIN' is written as 'WUDLQ'. How is 'BUS' written in that code?",
    questionHindi: "एक निश्चित कोड में, 'TRAIN' को 'WUDLQ' लिखा जाता है। उस कोड में 'BUS' कैसे लिखा जाता है?",
    options: ["EXV", "DWU", "EXU", "DXV"],
    optionsHindi: ["EXV", "DWU", "EXU", "DXV"],
    correctOption: 0
  },
  {
    id: 53,
    question: "Look at the series: 3, 7, 13, 21, 31, ... What number comes next?",
    questionHindi: "श्रृंखला को देखें: 3, 7, 13, 21, 31, ... अगली संख्या क्या है?",
    options: ["41", "43", "45", "47"],
    optionsHindi: ["41", "43", "45", "47"],
    correctOption: 1
  },
  {
    id: 54,
    question: "Pointing to a gentleman, Deepak said, \"His only brother is the father of my daughter's father.\" How is the gentleman related to Deepak?",
    questionHindi: "एक सज्जन की ओर इशारा करते हुए, दीपक ने कहा, \"उसका इकलौता भाई मेरी बेटी के पिता का पिता है।\" सज्जन दीपक से कैसे संबंधित है?",
    options: ["Father / पिता", "Grandfather / दादा", "Uncle / चाचा", "Brother-in-law / जीजा/साला"],
    optionsHindi: ["पिता", "दादा", "चाचा", "जीजा/साला"],
    correctOption: 2
  },
  {
    id: 55,
    question: "Six people A, B, C, D, E, and F are sitting in a row facing North. C is sitting between A and E. D is not at the end. B is sitting at the immediate right of E. F is not at the right end. Who is sitting at the right end?",
    questionHindi: "छह लोग A, B, C, D, E, और F उत्तर की ओर मुख करके एक पंक्ति में बैठे हैं। C, A और E के बीच बैठा है। D छोर पर नहीं है। B, E के ठीक दायें बैठा है। F दायें छोर पर नहीं है। दायें छोर पर कौन बैठा है?",
    options: ["A", "E", "B", "D"],
    optionsHindi: ["A", "E", "B", "D"],
    correctOption: 2
  },
  {
    id: 56,
    question: "In a class of 45 students, rank of Ayush is 15 from top, then rank of Ayush from bottom is:",
    questionHindi: "45 छात्रों की एक कक्षा में, आयुष का रैंक ऊपर से 15 है, तो नीचे से आयुष का रैंक है:",
    options: ["30", "31", "32", "29"],
    optionsHindi: ["30", "31", "32", "29"],
    correctOption: 1
  },
  {
    id: 57,
    question: "Statements: 1. No purse is cloth. 2. All cloths are jackets. Conclusions: I. Some jackets are cloth. II. Some purses are jackets.",
    questionHindi: "कथन: 1. कोई पर्स कपड़ा नहीं है। 2. सभी कपड़े जैकेट हैं। निष्कर्ष: I. कुछ जैकेट कपड़े हैं। II. कुछ पर्स जैकेट हैं।",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    optionsHindi: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई भी अनुसरण नहीं करता"],
    correctOption: 0
  },
  {
    id: 58,
    question: "If 1st January 2004 was Thursday, what day of the week was 1st January 2005?",
    questionHindi: "यदि 1 जनवरी 2004 को गुरुवार था, तो 1 जनवरी 2005 को सप्ताह का कौन सा दिन था?",
    options: ["Friday / शुक्रवार", "Saturday / शनिवार", "Sunday / रविवार", "Monday / सोमवार"],
    optionsHindi: ["शुक्रवार", "शनिवार", "रविवार", "सोमवार"],
    correctOption: 1
  },
  {
    id: 59,
    question: "Arrange the following in a logical order: 1. Poverty 2. Population 3. Death 4. Unemployment 5. Disease",
    questionHindi: "निम्नलिखित को तार्किक क्रम में व्यवस्थित करें: 1. गरीबी 2. जनसंख्या 3. मृत्यु 4. बेरोजगारी 5. बीमारी",
    options: ["2, 4, 1, 5, 3", "1, 2, 4, 5, 3", "2, 4, 5, 1, 3", "1, 2, 3, 4, 5"],
    optionsHindi: ["2, 4, 1, 5, 3", "1, 2, 4, 5, 3", "2, 4, 5, 1, 3", "1, 2, 3, 4, 5"],
    correctOption: 0
  },
  {
    id: 60,
    question: "Select the odd number pair.",
    questionHindi: "विषम संख्या युग्म का चयन करें।",
    options: ["12 - 144", "13 - 169", "15 - 225", "16 - 250"],
    optionsHindi: ["12 - 144", "13 - 169", "15 - 225", "16 - 250"],
    correctOption: 3
  },
  {
    id: 61,
    question: "If A + B means A is the son of B; A - B means A is the wife of B; A × B means A is the brother of B. What does P + R - Q mean?",
    questionHindi: "यदि A + B का अर्थ है A, B का बेटा है; A - B का अर्थ है A, B की पत्नी है; A × B का अर्थ है A, B का भाई है। P + R - Q का क्या अर्थ है?",
    options: ["Q is the father of P / Q, P का पिता है", "Q is the son of P / Q, P का बेटा है", "Q is the uncle of P / Q, P का चाचा है", "Q is the brother of P / Q, P का भाई है"],
    optionsHindi: ["Q, P का पिता है", "Q, P का बेटा है", "Q, P का चाचा है", "Q, P का भाई है"],
    correctOption: 0
  },
  {
    id: 62,
    question: "Find the missing number in the series: 4, 6, 12, 14, 28, 30, ?",
    questionHindi: "श्रृंखला में लुप्त संख्या ज्ञात कीजिये: 4, 6, 12, 14, 28, 30, ?",
    options: ["32", "60", "62", "64"],
    optionsHindi: ["32", "60", "62", "64"],
    correctOption: 1
  },
  {
    id: 63,
    question: "In a certain code, 'GOODNESS' is coded as 'HNPCODTR'. How is 'GREATNESS' coded?",
    questionHindi: "एक निश्चित कोड में, 'GOODNESS' को 'HNPCODTR' के रूप में कोडित किया गया है। 'GREATNESS' को कैसे कोडित किया जाएगा?",
    options: ["HQFZSMFRT", "HQFZUFRTM", "HQFZUQRT", "HQFZUMFRT"],
    optionsHindi: ["HQFZSMFRT", "HQFZUFRTM", "HQFZUQRT", "HQFZUMFRT"],
    correctOption: 3
  },
  {
    id: 64,
    question: "Five boys are sitting in a circle. A is facing South-West. D is facing South-East. B and E are right opposite to A and D respectively and C is equidistant between D and B. Which direction is C facing?",
    questionHindi: "पांच लड़के एक घेरे में बैठे हैं। A का मुख दक्षिण-पश्चिम की ओर है। D का मुख दक्षिण-पूर्व की ओर है। B और E क्रमशः A और D के ठीक विपरीत हैं और C, D और B के बीच समान दूरी पर है। C किस दिशा की ओर उन्मुख है?",
    options: ["West / पश्चिम", "South / दक्षिण", "North / उत्तर", "East / पूर्व"],
    optionsHindi: ["पश्चिम", "दक्षिण", "उत्तर", "पूर्व"],
    correctOption: 3
  },
  {
    id: 65,
    question: "Which letter will be the 6th to the left of the 19th letter from the left end of the English alphabet?",
    questionHindi: "अंग्रेजी वर्णमाला के बाएं छोर से 19वें अक्षर के बाईं ओर छठा अक्षर कौन सा होगा?",
    options: ["M", "N", "L", "O"],
    optionsHindi: ["M", "N", "L", "O"],
    correctOption: 0
  },
  {
    id: 66,
    question: "If 'ROSE' is coded as 'TQUG', how is 'BLUE' coded?",
    questionHindi: "यदि 'ROSE' को 'TQUG' के रूप में कोडित किया गया है, तो 'BLUE' को कैसे कोडित किया जाएगा?",
    options: ["DNWG", "CMWF", "DNXG", "DMWG"],
    optionsHindi: ["DNWG", "CMWF", "DNXG", "DMWG"],
    correctOption: 0
  },
  {
    id: 67,
    question: "Pointing to a photo, Ram said, \"He is the son of my father's only son\". Who is in the photo?",
    questionHindi: "एक तस्वीर की ओर इशारा करते हुए राम ने कहा, \"वह मेरे पिता के इकलौते बेटे का बेटा है\"। तस्वीर में कौन है?",
    options: ["Ram's brother / राम का भाई", "Ram's son / राम का बेटा", "Ram himself / राम स्वयं", "Ram's father / राम के पिता"],
    optionsHindi: ["राम का भाई", "राम का बेटा", "राम स्वयं", "राम के पिता"],
    correctOption: 1
  },
  {
    id: 68,
    question: "Rohan walks 3 km North, then turns right and walks 4 km. How far is he from the start?",
    questionHindi: "रोहन 3 किमी उत्तर की ओर चलता है, फिर दाएं मुड़ता है और 4 किमी चलता है। वह शुरुआत से कितनी दूर है?",
    options: ["7 km", "5 km", "6 km", "1 km"],
    optionsHindi: ["7 किमी", "5 किमी", "6 किमी", "1 किमी"],
    correctOption: 1
  },
  {
    id: 69,
    question: "Statements: Some cats are dogs. All dogs are rats. Conclusions: I. Some cats are rats. II. All rats are cats.",
    questionHindi: "कथन: कुछ बिल्लियां कुत्ते हैं। सभी कुत्ते चूहे हैं। निष्कर्ष: I. कुछ बिल्लियां चूहे हैं। II. सभी चूहे बिल्लियां हैं।",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    optionsHindi: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई भी अनुसरण नहीं करता"],
    correctOption: 0
  },
  {
    id: 70,
    question: "Which number replaces the question mark? [ 3, 6, 12, 24, ? ]",
    questionHindi: "प्रश्न चिन्ह के स्थान पर कौन सी संख्या आएगी? [ 3, 6, 12, 24, ? ]",
    options: ["36", "48", "30", "40"],
    optionsHindi: ["36", "48", "30", "40"],
    correctOption: 1
  },
  {
    id: 71,
    question: "In a row, Mohit is 10th from left and Sumit is 10th from right. There are 5 people between them. Total people?",
    questionHindi: "एक पंक्ति में मोहित बाएं से 10वें और सुमित दाएं से 10वें स्थान पर है। उनके बीच 5 लोग हैं। कुल लोग?",
    options: ["20", "25", "30", "15"],
    optionsHindi: ["20", "25", "30", "15"],
    correctOption: 1
  },
  {
    id: 72,
    question: "Find the missing character: AZ, BY, CX, ?",
    questionHindi: "लुप्त पद ज्ञात कीजिये: AZ, BY, CX, ?",
    options: ["DW", "DV", "DU", "DX"],
    optionsHindi: ["DW", "DV", "DU", "DX"],
    correctOption: 0
  },
  {
    id: 73,
    question: "If + means * , - means +, * means /, and / means -, then 10 - 5 * 5 + 2 = ?",
    questionHindi: "यदि + का अर्थ * है, - का अर्थ + है, * का अर्थ / है, और / का अर्थ - है, तो 10 - 5 * 5 + 2 = ?",
    options: ["10", "12", "8", "14"],
    optionsHindi: ["10", "12", "8", "14"],
    correctOption: 1
  },
  {
    id: 74,
    question: "Amit is taller than Shyam. Shyam is taller than Ravi. Who is the shortest?",
    questionHindi: "अमित श्याम से लंबा है। श्याम रवि से लंबा है। सबसे छोटा कौन है?",
    options: ["Amit / अमित", "Shyam / श्याम", "Ravi / रवि", "Cannot be determined / निर्धारित नहीं किया जा सकता"],
    optionsHindi: ["अमित", "श्याम", "रवि", "निर्धारित नहीं किया जा सकता"],
    correctOption: 2
  },
  {
    id: 75,
    question: "Pick the word that does NOT belong in the group.",
    questionHindi: "उस शब्द को चुनें जो समूह से संबंधित नहीं है।",
    options: ["Geometry / ज्यामिति", "Algebra / बीजगणित", "Calculus / कलन", "Thermodynamics / ऊष्मप्रवैगिकी"],
    optionsHindi: ["ज्यामिति", "बीजगणित", "कलन", "ऊष्मप्रवैगिकी"],
    correctOption: 3
  },
  {
    id: 76,
    question: "Complete the series: 1, 4, 9, 16, 25, ?",
    questionHindi: "श्रृंखला को पूरा करें: 1, 4, 9, 16, 25, ?",
    options: ["30", "35", "36", "49"],
    optionsHindi: ["30", "35", "36", "49"],
    correctOption: 2
  },
  {
    id: 77,
    question: "A clock shows 3:00. What is the angle between the hour and minute hand?",
    questionHindi: "एक घड़ी में 3:00 बज रहे हैं। घंटे और मिनट की सुई के बीच का कोण क्या है?",
    options: ["60°", "90°", "120°", "180°"],
    optionsHindi: ["60°", "90°", "120°", "180°"],
    correctOption: 1
  },
  {
    id: 78,
    question: "If today is Monday, what day will it be after 61 days?",
    questionHindi: "यदि आज सोमवार है, तो 61 दिनों के बाद कौन सा दिन होगा?",
    options: ["Saturday / शनिवार", "Sunday / रविवार", "Tuesday / मंगलवार", "Wednesday / बुधवार"],
    optionsHindi: ["शनिवार", "रविवार", "मंगलवार", "बुधवार"],
    correctOption: 0
  },
  {
    id: 79,
    question: "Choose the word which is least like the others:",
    questionHindi: "वह शब्द चुनें जो दूसरों से कम से कम मिलता-जुलता हो:",
    options: ["Zinc / जस्ता", "Iron / लोहा", "Aluminum / एल्युमिनियम", "Mercury / पारा"],
    optionsHindi: ["जस्ता", "लोहा", "एल्युमिनियम", "पारा"],
    correctOption: 3
  },
  {
    id: 80,
    question: "8, 27, 64, 125, ?",
    questionHindi: "8, 27, 64, 125, ?",
    options: ["216", "200", "150", "225"],
    optionsHindi: ["216", "200", "150", "225"],
    correctOption: 0
  },
  {
    id: 81,
    question: "If P is the husband of Q and R is the mother of S and Q. How is R related to P?",
    questionHindi: "यदि P, Q का पति है और R, S और Q की मां है। R, P से कैसे संबंधित है?",
    options: ["Mother / मां", "Sister / बहन", "Mother-in-law / सास", "Aunt / चाची"],
    optionsHindi: ["मां", "बहन", "सास", "चाची"],
    correctOption: 2
  },
  {
    id: 82,
    question: "Arrange the words: 1. Seed, 2. Plant, 3. Fruit, 4. Flower.",
    questionHindi: "शब्दों को व्यवस्थित करें: 1. बीज, 2. पौधा, 3. फल, 4. फूल।",
    options: ["1, 2, 3, 4", "1, 2, 4, 3", "2, 1, 3, 4", "1, 3, 2, 4"],
    optionsHindi: ["1, 2, 3, 4", "1, 2, 4, 3", "2, 1, 3, 4", "1, 3, 2, 4"],
    correctOption: 1
  },
  {
    id: 83,
    question: "Find the missing number: 2, 6, 12, 20, 30, ?",
    questionHindi: "लुप्त संख्या ज्ञात कीजिये: 2, 6, 12, 20, 30, ?",
    options: ["40", "42", "44", "46"],
    optionsHindi: ["40", "42", "44", "46"],
    correctOption: 1
  },
  {
    id: 84,
    question: "If 'SKY' is coded as 'RJX', then 'CLOUD' will be coded as?",
    questionHindi: "यदि 'SKY' को 'RJX' के रूप में कोडित किया गया है, तो 'CLOUD' को कोडित किया जाएगा?",
    options: ["BKNTC", "BKNTC", "BMNTC", "AKMTC"],
    optionsHindi: ["BKNTC", "BKNTC", "BMNTC", "AKMTC"],
    correctOption: 0
  },
  {
    id: 85,
    question: "Count the number of triangles in a square divided by both diagonals.",
    questionHindi: "दोनों विकर्णों द्वारा विभाजित एक वर्ग में त्रिभुजों की संख्या की गणना करें।",
    options: ["4", "6", "8", "12"],
    optionsHindi: ["4", "6", "8", "12"],
    correctOption: 2
  },
  {
    id: 86,
    question: "Statements: All roads are waters. Some waters are boats. Conclusions: I. Some boats are roads. II. All waters are boats.",
    questionHindi: "कथन: सभी सड़कें पानी हैं। कुछ पानी नावें हैं। निष्कर्ष: I. कुछ नावें सड़कें हैं। II. सभी पानी नावें हैं।",
    options: ["Only I follows", "Only II follows", "Both follow", "Neither follows"],
    optionsHindi: ["केवल I अनुसरण करता है", "केवल II अनुसरण करता है", "दोनों अनुसरण करते हैं", "कोई भी अनुसरण नहीं करता"],
    correctOption: 3
  },
  {
    id: 87,
    question: "If 5 * 4 = 1524, 3 * 2 = 98, 4 * 3 = 1216, then 7 * 4 = ?",
    questionHindi: "यदि 5 * 4 = 1524, 3 * 2 = 98, 4 * 3 = 1216, तो 7 * 4 = ?",
    options: ["2128", "2821", "2832", "2132"],
    optionsHindi: ["2128", "2821", "2832", "2132"],
    correctOption: 0
  },
  {
    id: 88,
    question: "A man facing North-West turns 90° clockwise, then 180° anti-clockwise, and then another 90° anti-clockwise. Which direction is he facing now?",
    questionHindi: "उत्तर-पश्चिम की ओर मुख वाला एक व्यक्ति 90° दक्षिणावर्त, फिर 180° वामावर्त, और फिर 90° वामावर्त मुड़ता है। अब उसका मुख किस दिशा में है?",
    options: ["South-East / दक्षिण-पूर्व", "West / पश्चिम", "East / पूर्व", "South / दक्षिण"],
    optionsHindi: ["दक्षिण-पूर्व", "पश्चिम", "पूर्व", "दक्षिण"],
    correctOption: 0
  },
  {
    id: 89,
    question: "In a certain code, '123' means 'hot filtered coffee', '356' means 'very hot day', '589' means 'day and night'. Which digit stands for 'very'?",
    questionHindi: "एक निश्चित कोड में, '123' का अर्थ है 'hot filtered coffee', '356' का अर्थ है 'very hot day', '589' का अर्थ है 'day and night'। 'very' के लिए कौन सा अंक है?",
    options: ["6", "5", "3", "9"],
    optionsHindi: ["6", "5", "3", "9"],
    correctOption: 0
  },
  {
    id: 90,
    question: "Six friends A, B, C, D, E, and F are sitting in a circle facing the center. F is to the immediate left of A and B is opposite to E. A and D are opposite to each other. Who is sitting second to the right of F?",
    questionHindi: "छह दोस्त A, B, C, D, E और F केंद्र की ओर मुख करके एक घेरे में बैठे हैं। F, A के ठीक बाईं ओर है और B, E के विपरीत है। A और D एक दूसरे के विपरीत हैं। F के दायें से दूसरे स्थान पर कौन बैठा है?",
    options: ["C", "E", "B", "D"],
    optionsHindi: ["C", "E", "B", "D"],
    correctOption: 1
  },
  {
    id: 91,
    question: "How many days are there in x weeks and x days?",
    questionHindi: "x सप्ताह और x दिनों में कितने दिन होते हैं?",
    options: ["7x²", "8x", "14x", "7"],
    optionsHindi: ["7x²", "8x", "14x", "7"],
    correctOption: 1
  },
  {
    id: 92,
    question: "If (P + Q) means P is the mother of Q; (P - Q) means P is the brother of Q; (P % Q) means P is the father of Q. Which shows A is the maternal uncle of C?",
    questionHindi: "यदि (P + Q) का अर्थ है P, Q की मां है; (P - Q) का अर्थ है P, Q का भाई है; (P % Q) का अर्थ है P, Q का पिता है। कौन दर्शाता है कि A, C का मामा है?",
    options: ["A - B + C", "A + B - C", "A % B + C", "A - B % C"],
    optionsHindi: ["A - B + C", "A + B - C", "A % B + C", "A - B % C"],
    correctOption: 0
  },
  {
    id: 93,
    question: "Find the missing number: 4, 18, ?, 100, 180, 294.",
    questionHindi: "लुप्त संख्या ज्ञात कीजिये: 4, 18, ?, 100, 180, 294.",
    options: ["32", "36", "48", "40"],
    optionsHindi: ["32", "36", "48", "40"],
    correctOption: 2
  },
  {
    id: 94,
    question: "A cube is painted red on all faces and cut into 27 smaller identical cubes. How many small cubes have no face painted?",
    questionHindi: "एक घन को सभी चेहरों पर लाल रंग से रंगा गया है और 27 छोटे समान घनों में काटा गया है। कितने छोटे घनों का कोई चेहरा रंगा नहीं है?",
    options: ["0", "1", "8", "27"],
    optionsHindi: ["0", "1", "8", "27"],
    correctOption: 1
  },
  {
    id: 95,
    question: "At what time between 4 and 5 o'clock will the hands of a clock be at right angles?",
    questionHindi: "4 और 5 बजे के बीच किस समय घड़ी की सुइयां समकोण पर होंगी?",
    options: ["4:05 5/11", "4:38 2/11", "Both A and B", "4:15"],
    optionsHindi: ["4:05 5/11", "4:38 2/11", "A और B दोनों", "4:15"],
    correctOption: 2
  },
  {
    id: 96,
    question: "If South-East becomes North, North-East becomes West and so on. What will West become?",
    questionHindi: "यदि दक्षिण-पूर्व उत्तर हो जाता है, उत्तर-पूर्व पश्चिम हो जाता है और इसी तरह। पश्चिम क्या होगा?",
    options: ["North-East / उत्तर-पूर्व", "North-West / उत्तर-पश्चिम", "South-East / दक्षिण-पूर्व", "South-West / दक्षिण-पश्चिम"],
    optionsHindi: ["उत्तर-पूर्व", "उत्तर-पश्चिम", "दक्षिण-पूर्व", "दक्षिण-पश्चिम"],
    correctOption: 2
  },
  {
    id: 97,
    question: "Find the wrong number in the series: 3, 8, 15, 24, 34, 48, 63",
    questionHindi: "श्रृंखला में गलत संख्या ज्ञात कीजिये: 3, 8, 15, 24, 34, 48, 63",
    options: ["15", "24", "34", "48"],
    optionsHindi: ["15", "24", "34", "48"],
    correctOption: 2
  },
  {
    id: 98,
    question: "Assertion (A): Leaves are green. Reason (R): Chlorophyll is present in leaves.",
    questionHindi: "अभिकथन (A): पत्तियां हरी होती हैं। कारण (R): पत्तियों में क्लोरोफिल मौजूद होता है।",
    options: ["Both A and R are true and R is the correct explanation of A.", "Both A and R are true but R is not correct explanation.", "A is true, R is false.", "A is false, R is true."],
    optionsHindi: ["A और R दोनों सत्य हैं और R, A की सही व्याख्या है।", "A और R दोनों सत्य हैं लेकिन R सही व्याख्या नहीं है।", "A सत्य है, R असत्य है।", "A असत्य है, R सत्य है।"],
    correctOption: 0
  },
  {
    id: 99,
    question: "A family consists of a husband and wife, their three sons and their wives, and three children in each son's family. How many members are there in the family?",
    questionHindi: "एक परिवार में पति और पत्नी, उनके तीन बेटे और उनकी पत्नियां, और प्रत्येक बेटे के परिवार में तीन बच्चे हैं। परिवार में कितने सदस्य हैं?",
    options: ["12", "14", "17", "15"],
    optionsHindi: ["12", "14", "17", "15"],
    correctOption: 2
  },
  {
    id: 100,
    question: "A is B's sister. C is B's mother. D is C's father. E is D's mother. Then, how is A related to D?",
    questionHindi: "A, B की बहन है। C, B की मां है। D, C का पिता है। E, D की मां है। तो, A, D से कैसे संबंधित है?",
    options: ["Grandmother / दादी/नानी", "Grandfather / दादा/नाना", "Granddaughter / पोती/नातिन", "Daughter / बेटी"],
    optionsHindi: ["दादी/नानी", "दादा/नाना", "पोती/नातिन", "बेटी"],
    correctOption: 2
  }
];
