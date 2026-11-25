/* SmartPage Royal Edition — 30-Day Master English & Universal Arabic Data */
const ENGLISH_COURSE_DATA = [
  // ================= MODULE 1: FOUNDATION (PAGES 1 - 5) =================
  {
    page: 1, type: "lesson", module: "Module 1: Foundation",
    title: "Greetings & First Impressions",
    mapRole: "city", mapLabel: "🏠 Practice at Home & City Map",
    sentences: [
      {
        en: "Hello, good morning! How are you today?",
        ar: "مرحباً، صباح الخير! كيف حالك اليوم؟",
        ur: "ہیلو، صبح بخیر! آج آپ کیسے ہیں؟",
        kn: "ಹಲೋ, ಶುಭೋದಯ! ಇಂದು ನೀವು ಹೇಗಿದ್ದೀರಿ?",
        hi: "हेलो, सुप्रभात! आज आप कैसे हैं?"
      },
      {
        en: "I am doing very well, thank you.",
        ar: "أنا بخير والحمد لله، شكراً لك.",
        ur: "میں بالکل ٹھیک ہوں، شکریہ۔",
        kn: "ನಾನು ತುಂಬಾ ಚೆನ್ನಾಗಿದ್ದೇನೆ, ಧನ್ಯವಾದಗಳು.",
        hi: "मैं बिल्कुल ठीक हूँ, धन्यवाद।"
      },
      {
        en: "Nice to meet you. Have a wonderful day!",
        ar: "تشرفت بمعرفتك. أتمنى لك يوماً سعيداً!",
        ur: "آپ سے مل کر خوشی ہوئی۔ آپ کا دن اچھا گزرے!",
        kn: "ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗಿ ಸಂತೋಷವಾಯಿತು. ಶುಭ ದಿನ!",
        hi: "आपसे मिलकर खुशी हुई। आपका दिन शुभ हो!"
      }
    ]
  },
  {
    page: 2, type: "lesson", module: "Module 1: Foundation",
    title: "Self-Introduction (Introducing Yourself)",
    mapRole: "student", mapLabel: "🎒 Become Student & Introduce Yourself",
    sentences: [
      {
        en: "My name is Azghar and I work in Saudi Arabia.",
        ar: "اسمي أزهر وأنا أعمل في المملكة العربية السعودية.",
        ur: "میرا نام اظہر ہے اور میں سعودی عرب میں کام کرتا ہوں۔",
        kn: "ನನ್ನ ಹೆಸರು ಅಜ್ಗರ್ ಮತ್ತು ನಾನು ಸೌದಿ ಅರೇಬಿಯಾದಲ್ಲಿ ಕೆಲಸ ಮಾಡುತ್ತಿದ್ದೇನೆ.",
        hi: "मेरा नाम अज़हर है और मैं सऊदी अरब में काम करता हूँ।"
      },
      {
        en: "I am learning English and Arabic to improve my skills.",
        ar: "أنا أتعلم الإنجليزية والعربية لتطوير مهاراتي.",
        ur: "میں اپنی صلاحیتوں کو نکھارنے کے لیے انگلش اور عربی سیکھ رہا ہوں۔",
        kn: "ನನ್ನ ಕೌಶಲ್ಯಗಳನ್ನು ಸುಧಾರಿಸಲು ನಾನು ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಅರೇಬಿಕ್ ಕಲಿಯುತ್ತಿದ್ದೇನೆ.",
        hi: "मैं अपने कौशल को सुधारने के लिए अंग्रेज़ी और अरबी सीख रहा हूँ।"
      },
      {
        en: "I am happy to meet people from different countries.",
        ar: "أنا سعيد بلقاء أشخاص من مختلف البلدان.",
        ur: "مجھے مختلف ممالک کے لوگوں سے مل کر خوشی ہوتی ہے۔",
        kn: "ವಿವಿಧ ದೇಶಗಳ ಜನರನ್ನು ಭೇಟಿಯಾಗಲು ನನಗೆ ಸಂತೋಷವಾಗಿದೆ.",
        hi: "मुझे विभिन्न देशों के लोगों से मिलकर खुशी होती है।"
      }
    ]
  },
  {
    page: 3, type: "lesson", module: "Module 1: Foundation",
    title: "Asking Simple Daily Questions",
    mapRole: "city", mapLabel: "🗺️ Ask Neighbors on City Map",
    sentences: [
      {
        en: "Excuse me, what is your good name?",
        ar: "عفواً، ما اسمك الكريم؟",
        ur: "معاف کیجئے، آپ کا اسم گرامی کیا ہے؟",
        kn: "ಕ್ಷಮಿಸಿ, ನಿಮ್ಮ ಶುಭ ಹೆಸರೇನು?",
        hi: "माफ़ कीजिए, आपका शुभ नाम क्या है?"
      },
      {
        en: "Where are you going right now?",
        ar: "إلى أين أنت ذاهب الآن؟",
        ur: "آپ اس وقت کہاں جا رہے ہیں؟",
        kn: "ನೀವು ಈಗ ಎಲ್ಲಿಗೆ ಹೋಗುತ್ತಿದ್ದೀರಿ?",
        hi: "आप इस समय कहाँ जा रहे हैं?"
      },
      {
        en: "What time does the office open?",
        ar: "في أي ساعة يفتح المكتب؟",
        ur: "آفس کس وقت کھلتا ہے؟",
        kn: "ಕಚೇರಿ ಎಷ್ಟು ಗಂಟೆಗೆ ತೆರೆಯುತ್ತದೆ?",
        hi: "ऑफिस कितने बजे खुलता है?"
      }
    ]
  },
  {
    page: 4, type: "lesson", module: "Module 1: Foundation",
    title: "Polite Requests & Magic Words",
    mapRole: "phone", mapLabel: "☎️ Practice Polite Call at Phone Booth",
    sentences: [
      {
        en: "Could you please help me for a moment?",
        ar: "هل يمكنك مساعدتي من فضلك للحظة؟",
        ur: "کیا آپ براہ کرم ایک لمحے کے لیے میری مدد کر سکتے ہیں؟",
        kn: "ದಯವಿಟ್ಟು ಒಂದು ಕ್ಷಣ ನನಗೆ ಸಹಾಯ ಮಾಡುತ್ತೀರಾ?",
        hi: "क्या आप कृपया एक पल के लिए मेरी मदद कर सकते हैं?"
      },
      {
        en: "I am sorry for the delay.",
        ar: "أنا آسف على التأخير.",
        ur: "تاخیر کے لیے میں معذرت خواہ ہوں۔",
        kn: "ವಿಳಂಬಕ್ಕಾಗಿ ನಾನು ಕ್ಷಮೆಯಾಚಿಸುತ್ತೇನೆ.",
        hi: "देरी के लिए मुझे खेद है।"
      },
      {
        en: "Thank you very much for your kind support.",
        ar: "شكراً جزيلاً على دعمك الكريم.",
        ur: "آپ کے تعاون کا بہت بہت شکریہ۔",
        kn: "ನಿಮ್ಮ ಸಹಕಾರಕ್ಕೆ ತುಂಬಾ ಧನ್ಯವಾದಗಳು.",
        hi: "आपके सहयोग के लिए बहुत-बहुत धन्यवाद।"
      }
    ]
  },
  {
    page: 5, type: "exam", module: "Module 1 Exam",
    title: "🏆 Checkpoint Exam #1 (Pages 1–4)",
    questions: [
      { q: "How do you say 'Good morning' in English & Arabic?", options: ["Good morning / صباح الخير", "Good night / تصبح على خير", "Goodbye / مع السلامة"], ans: 0 },
      { q: "Which phrase is best for asking help politely?", options: ["Give me this", "Could you please help me?", "Who are you?"], ans: 1 },
      { q: "Speak this sentence clearly into the mic:", speakTarget: "Nice to meet you" }
    ]
  },

  // ================= MODULE 2: HOME & SCHOOL (PAGES 6 - 10) =================
  {
    page: 6, type: "lesson", module: "Module 2: Home & School",
    title: "Family & Daily Routine Talk",
    mapRole: "city", mapLabel: "🏠 Home Family Roleplay",
    sentences: [
      {
        en: "I wake up early at six in the morning.",
        ar: "أستيقظ مبكراً في الساعة السادسة صباحاً.",
        ur: "میں صبح چھ بجے جلدی اٹھتا ہوں۔",
        kn: "ನಾನು ಬೆಳಿಗ್ಗೆ ಆರು ಗಂಟೆಗೆ ಬೇಗ ಏಳುತ್ತೇನೆ.",
        hi: "मैं सुबह छह बजे जल्दी उठता हूँ।"
      },
      {
        en: "Please have breakfast before leaving home.",
        ar: "من فضلك تناول الإفطار قبل مغادرة المنزل.",
        ur: "گھر سے نکلنے سے پہلے ناشتہ کر لیں۔",
        kn: "ಮನೆಯಿಂದ ಹೊರಡುವ ಮೊದಲು ದಯವಿಟ್ಟು ಉಪಹಾರ ಸೇವಿಸಿ.",
        hi: "घर से निकलने से पहले कृपया नाश्ता कर लें।"
      },
      {
        en: "I will return home by seven in the evening.",
        ar: "سأعود إلى المنزل بحلول الساعة السابعة مساءً.",
        ur: "میں شام سات بجے تک گھر واپس آ جاؤں گا۔",
        kn: "ನಾನು ಸಂಜೆ ಏಳು ಗಂಟೆಗೆ ಮನೆಗೆ ಹಿಂತಿರುಗುತ್ತೇನೆ.",
        hi: "मैं शाम सात बजे तक घर वापस आ जाऊँगा।"
      }
    ]
  },
  {
    page: 7, type: "lesson", module: "Module 2: Home & School",
    title: "Student Classroom Conversations",
    mapRole: "student", mapLabel: "🎒 Enter Classroom as Student",
    sentences: [
      {
        en: "May I come in, Teacher?",
        ar: "هل يسمح لي بالدخول يا أستاذ؟",
        ur: "کیا میں اندر آ سکتا ہوں، استاد؟",
        kn: "ನಾನು ಒಳಗೆ ಬರಬಹುದೇ, ಶಿಕ್ಷಕರೇ?",
        hi: "क्या मैं अंदर आ सकता हूँ, शिक्षक?"
      },
      {
        en: "Could you please explain this lesson again?",
        ar: "هل يمكنك شرح هذا الدرس مرة أخرى من فضلك؟",
        ur: "کیا آپ براہ کرم اس سبق کو دوبارہ سمجھا سکتے ہیں؟",
        kn: "ದಯವಿಟ್ಟು ಈ ಪಾಠವನ್ನು ಮತ್ತೊಮ್ಮೆ ವಿವರಿಸುತ್ತೀರಾ?",
        hi: "क्या आप कृपया इस पाठ को फिर से समझा सकते हैं?"
      },
      {
        en: "I have completed my homework on time.",
        ar: "لقد أكملت واجبي المنزلي في الوقت المحدد.",
        ur: "میں نے اپنا ہوم ورک وقت پر مکمل کر لیا ہے۔",
        kn: "ನಾನು ನನ್ನ ಮನೆಕೆಲಸವನ್ನು ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೇನೆ.",
        hi: "मैंने अपना होमवर्क समय पर पूरा कर लिया है।"
      }
    ]
  },
  {
    page: 8, type: "lesson", module: "Module 2: Home & School",
    title: "Teaching & Guiding Others",
    mapRole: "teacher", mapLabel: "👨‍🏫 Transform into Teacher Role",
    sentences: [
      {
        en: "Open your digital book to page number eight.",
        ar: "افتح كتابك الرقمي على الصفحة رقم ثمانية.",
        ur: "اپنی ڈیجیٹل کتاب کا صفحہ نمبر آٹھ کھولیں۔",
        kn: "ನಿಮ್ಮ ಡಿಜಿಟಲ್ ಪುಸ್ತಕದ ಪುಟ ಸಂಖ್ಯೆ ಎಂಟನ್ನು ತೆರೆಯಿರಿ.",
        hi: "अपनी डिजिटल किताब का पेज नंबर आठ खोलें।"
      },
      {
        en: "Do not hesitate to speak; practice makes you fluent.",
        ar: "لا تتردد في التحدث؛ الممارسة تجعلك طليقاً.",
        ur: "بولنے میں ہچکچائیں نہیں؛ مشق آپ کو ماہر بناتی ہے۔",
        kn: "ಮಾತನಾಡಲು ಹಿಂಜರಿಯಬೇಡಿ; ಅಭ್ಯಾಸವು ನಿಮ್ಮನ್ನು ನಿರರ್ಗಳವಾಗಿಸುತ್ತದೆ.",
        hi: "बोलने में हिचकिचाएँ नहीं; अभ्यास आपको धाराप्रवाह बनाता है।"
      },
      {
        en: "Listen carefully and repeat after me.",
        ar: "استمع جيداً وردد خلفي.",
        ur: "غور سے سنیں اور میرے بعد دہرائیں۔",
        kn: "ಎಚ್ಚರಿಕೆಯಿಂದ ಆಲಿಸಿ ಮತ್ತು ನನ್ನ ನಂತರ ಪುನರಾವರ್ತಿಸಿ.",
        hi: "ध्यान से सुनें और मेरे बाद दोहराएँ।"
      }
    ]
  },
  {
    page: 9, type: "lesson", module: "Module 2: Home & School",
    title: "Casual Talk with Friends",
    mapRole: "phone", mapLabel: "📱 Receive Friend's Phone Call",
    sentences: [
      {
        en: "Hey! Long time no see. How have you been?",
        ar: "أهلاً! لم أرك منذ وقت طويل. كيف حالك؟",
        ur: "ارے! بہت دنوں بعد ملاقات ہوئی۔ آپ کیسے رہے؟",
        kn: "ಹೇ! ತುಂಬಾ ದಿನಗಳ ನಂತರ ಭೇಟಿಯಾಯಿತು. ಹೇಗಿದ್ದೀಯಾ?",
        hi: "अरे! बहुत दिनों बाद दिखे। तुम कैसे हो?"
      },
      {
        en: "Let us meet for coffee this evening.",
        ar: "دعنا نلتقي لتناول القهوة هذا المساء.",
        ur: "چلو آج شام کافی پر ملتے ہیں۔",
        kn: "ಇಂದು ಸಂಜೆ ಕಾಫಿಗಾಗಿ ಭೇಟಿಯಾಗೋಣ.",
        hi: "चलो आज शाम कॉफ़ी पर मिलते हैं।"
      },
      {
        en: "Call me once you reach home safely.",
        ar: "اتصل بي بمجرد وصولك إلى المنزل بأمان.",
        ur: "جب آپ خیریت سے گھر پہنچ جائیں تو مجھے فون کریں۔",
        kn: "ನೀವು ಸುರಕ್ಷಿತವಾಗಿ ಮನೆ ತಲುಪಿದ ನಂತರ ನನಗೆ ಕರೆ ಮಾಡಿ.",
        hi: "जब तुम सुरक्षित घर पहुँच जाओ तो मुझे कॉल करना।"
      }
    ]
  },
  {
    page: 10, type: "exam", module: "Module 2 Exam",
    title: "🏆 Checkpoint Exam #2 (Pages 6–9)",
    questions: [
      { q: "What do you say before entering a classroom?", options: ["May I come in, Teacher?", "Close the door", "I am sleeping"], ans: 0 },
      { q: "What does 'استمع جيداً' mean in English?", options: ["Go outside", "Listen carefully", "Write fast"], ans: 1 },
      { q: "Speak this sentence clearly into the mic:", speakTarget: "Listen carefully and repeat after me" }
    ]
  },

  // ================= MODULE 3: PUBLIC PLACES (PAGES 11 - 15) =================
  {
    page: 11, type: "lesson", module: "Module 3: Public & Travel",
    title: "Shopping & Asking Prices",
    mapRole: "city", mapLabel: "🛍️ Practice on City Map",
    sentences: [
      {
        en: "How much does this item cost?",
        ar: "كم سعر هذا المنتج من فضلك؟",
        ur: "اس چیز کی قیمت کتنی ہے؟",
        kn: "ಈ ವಸ್ತುವಿನ ಬೆಲೆ ಎಷ್ಟು?",
        hi: "इस सामान की कीमत कितनी है?"
      },
      {
        en: "Can you give me a good discount on this?",
        ar: "هل يمكنك إعطائي خصماً جيداً على هذا؟",
        ur: "کیا آپ اس پر اچھا ڈسکاؤنٹ دے سکتے ہیں؟",
        kn: "ಇದರ ಮೇಲೆ ಉತ್ತಮ ರಿಯಾಯಿತಿ ನೀಡಬಹುದೇ?",
        hi: "क्या आप इस पर अच्छी छूट दे सकते हैं?"
      },
      {
        en: "Do you accept Mada card or digital payment?",
        ar: "هل تقبلون بطاقة مدى أو الدفع الإلكتروني؟",
        ur: "کیا آپ کارڈ یا ڈیجیٹل پیمنٹ قبول کرتے ہیں؟",
        kn: "ನೀವು ಕಾರ್ಡ್ ಅಥವಾ ಡಿಜಿಟಲ್ ಪಾವತಿಯನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಾ?",
        hi: "क्या आप कार्ड या डिजिटल पेमेंट स्वीकार करते हैं?"
      }
    ]
  },
  {
    page: 12, type: "lesson", module: "Module 3: Public & Travel",
    title: "Hospital & Doctor Consultation",
    mapRole: "city", mapLabel: "🏥 Hospital Visit Practice",
    sentences: [
      {
        en: "Doctor, I have had a mild fever since yesterday.",
        ar: "يا دكتور، أعاني من حمى خفيفة منذ الأمس.",
        ur: "ڈاکٹر صاحب، مجھے کل سے ہلکا بخار ہے۔",
        kn: "ಡಾಕ್ಟರ್, ನಿನ್ನೆಯಿಂದ ನನಗೆ ಸ್ವಲ್ಪ ಜ್ವರ ಇದೆ.",
        hi: "डॉक्टर, मुझे कल से हल्का बुखार है।"
      },
      {
        en: "How many times a day should I take this medicine?",
        ar: "كم مرة في اليوم يجب أن أتناول هذا الدواء؟",
        ur: "مجھے یہ دوا دن میں کتنی بار لینی چاہیے؟",
        kn: "ನಾನು ಈ ಔಷಧಿಯನ್ನು ದಿನಕ್ಕೆ ಎಷ್ಟು ಬಾರಿ ತೆಗೆದುಕೊಳ್ಳಬೇಕು?",
        hi: "मुझे यह दवा दिन में कितनी बार लेनी चाहिए?"
      },
      {
        en: "Thank you Doctor, I feel much better now.",
        ar: "شكراً لك يا دكتور، أشعر بتحسن كبير الآن.",
        ur: "شکریہ ڈاکٹر، اب میں کافی بہتر محسوس کر رہا ہوں۔",
        kn: "ಧನ್ಯವಾದಗಳು ಡಾಕ್ಟರ್, ಈಗ ನನಗೆ ತುಂಬಾ ಉತ್ತಮವಾಗಿದೆ.",
        hi: "धन्यवाद डॉक्टर, अब मैं काफी बेहतर महसूस कर रहा हूँ।"
      }
    ]
  },
  {
    page: 13, type: "lesson", module: "Module 3: Public & Travel",
    title: "Bank & Account Services",
    mapRole: "officer", mapLabel: "👮‍♂️ Officer Role at Counter",
    sentences: [
      {
        en: "I would like to open a new bank account.",
        ar: "أود فتح حساب بنكي جديد من فضلك.",
        ur: "میں ایک نیا بینک اکاؤنٹ کھولنا چاہتا ہوں۔",
        kn: "ನಾನು ಹೊಸ ಬ್ಯಾಂಕ್ ಖಾತೆಯನ್ನು ತೆರೆಯಲು ಬಯಸುತ್ತೇನೆ.",
        hi: "मैं एक नया बैंक खाता खोलना चाहता हूँ।"
      },
      {
        en: "Please show your ID card and fill out this form.",
        ar: "يرجى إبراز بطاقة الهوية وتعبئة هذا النموذج.",
        ur: "براہ کرم اپنا شناختی کارڈ دکھائیں اور یہ فارم بھریں۔",
        kn: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಗುರುತಿನ ಚೀಟಿಯನ್ನು ತೋರಿಸಿ ಮತ್ತು ಈ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ.",
        hi: "कृपया अपना पहचान पत्र दिखाएँ और यह फ़ॉर्म भरें।"
      },
      {
        en: "I want to transfer money to my home country.",
        ar: "أريد تحويل أموال إلى بلدي.",
        ur: "میں اپنے ملک پیسے بھیجنا چاہتا ہوں۔",
        kn: "ನಾನು ನನ್ನ ತಾಯ್ನಾಡಿಗೆ ಹಣವನ್ನು ವರ್ಗಾಯಿಸಲು ಬಯಸುತ್ತೇನೆ.",
        hi: "मैं अपने देश पैसे भेजना चाहता हूँ।"
      }
    ]
  },
  {
    page: 14, type: "lesson", module: "Module 3: Public & Travel",
    title: "Hotel & Restaurant English",
    mapRole: "phone", mapLabel: "☎️ Book Room via Phone Booth",
    sentences: [
      {
        en: "I have a room reservation under my name.",
        ar: "لدي حجز غرفة باسمي.",
        ur: "میرے نام سے ایک کمرے کی بکنگ ہے۔",
        kn: "ನನ್ನ ಹೆಸರಿನಲ್ಲಿ ಕೊಠಡಿಯ ಕಾಯ್ದಿರಿಸುವಿಕೆ ಇದೆ.",
        hi: "मेरे नाम से एक कमरे की बुकिंग है।"
      },
      {
        en: "Could you bring the menu card, please?",
        ar: "هل يمكنك إحضار قائمة الطعام من فضلك؟",
        ur: "کیا آپ براہ کرم مینو کارڈ لا سکتے ہیں؟",
        kn: "ದಯವಿಟ್ಟು ಮೆನು ಕಾರ್ಡ್ ತರಬಹುದೇ?",
        hi: "क्या आप कृपया मेनू कार्ड ला सकते हैं?"
      },
      {
        en: "Please bring the bill when you are ready.",
        ar: "من فضلك أحضر الفاتورة.",
        ur: "براہ کرم بل لے آئیں۔",
        kn: "ದಯವಿಟ್ಟು ಬಿಲ್ ತನ್ನಿ.",
        hi: "कृपया बिल ले आइए।"
      }
    ]
  },
  {
    page: 15, type: "exam", module: "Module 3 Exam",
    title: "🏆 Checkpoint Exam #3 (Pages 11–14)",
    questions: [
      { q: "How do you ask the price in English & Arabic?", options: ["How much does this cost? / كم سعر هذا؟", "Where is the airport? / أين المطار؟", "Open your book / افتح كتابك"], ans: 0 },
      { q: "What do you tell a doctor if you have a fever?", options: ["I have a fever since yesterday", "Give me a boarding pass", "I am an officer"], ans: 0 },
      { q: "Speak this sentence clearly into the mic:", speakTarget: "I would like to open a new account" }
    ]
  },

  // ================= MODULE 4: AIRPORT & GLOBAL (PAGES 16 - 20) =================
  {
    page: 16, type: "lesson", module: "Module 4: Airport & Global",
    title: "Airport Check-In & Boarding",
    mapRole: "officer", mapLabel: "✈️ Become Airport Officer on Map",
    sentences: [
      {
        en: "May I see your passport and flight ticket, please?",
        ar: "هل لي أن أرى جواز سفرك وتذكرة الطيران من فضلك؟",
        ur: "کیا میں آپ کا پاسپورٹ اور فلائٹ ٹکٹ دیکھ سکتا ہوں؟",
        kn: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಪಾಸ್‌ಪೋರ್ಟ್ ಮತ್ತು ವಿಮಾನ ಟಿಕೆಟ್ ನೋಡಬಹುದೇ?",
        hi: "क्या मैं आपका पासपोर्ट और फ़्लाइट टिकट देख सकता हूँ?"
      },
      {
        en: "Would you prefer a window seat or an aisle seat?",
        ar: "هل تفضل مقعداً بجانب النافذة أم بجانب الممر؟",
        ur: "کیا آپ کھڑکی والی سیٹ پسند کریں گے یا کنارے والی؟",
        kn: "ನೀವು ಕಿಟಕಿಯ ಪಕ್ಕದ ಸೀಟನ್ನು ಬಯಸುತ್ತೀರಾ?",
        hi: "क्या आप खिड़की वाली सीट पसंद करेंगे?"
      },
      {
        en: "Boarding starts at gate number four.",
        ar: "يبدأ الصعود إلى الطائرة من البوابة رقم أربعة.",
        ur: "بورڈنگ گیٹ نمبر چار سے شروع ہوگی۔",
        kn: "ಬೋರ್ಡಿಂಗ್ ಗೇಟ್ ಸಂಖ್ಯೆ ನಾಲ್ಕರಲ್ಲಿ ಪ್ರಾರಂಭವಾಗುತ್ತದೆ.",
        hi: "बोर्डिंग गेट नंबर चार से शुरू होगी।"
      }
    ]
  },
  {
    page: 17, type: "lesson", module: "Module 4: Airport & Global",
    title: "Immigration & Travel Purpose",
    mapRole: "officer", mapLabel: "🛂 Practice Immigration Desk",
    sentences: [
      {
        en: "What is the purpose of your visit?",
        ar: "ما هو الغرض من زيارتك؟",
        ur: "آپ کے سفر کا مقصد کیا ہے؟",
        kn: "ನಿಮ್ಮ ಭೇಟಿಯ ಉದ್ದೇಶವೇನು?",
        hi: "आपकी यात्रा का उद्देश्य क्या है?"
      },
      {
        en: "I am here for work and business meetings.",
        ar: "أنا هنا للعمل واجتماعات الأعمال.",
        ur: "میں یہاں کام اور بزنس میٹنگز کے لیے آیا ہوں۔",
        kn: "ನಾನು ಕೆಲಸ ಮತ್ತು ವ್ಯಾಪಾರ ಸಭೆಗಳಿಗಾಗಿ ಇಲ್ಲಿಗೆ ಬಂದಿದ್ದೇನೆ.",
        hi: "मैं यहाँ काम और बिज़नेस मीटिंग्स के लिए आया हूँ।"
      },
      {
        en: "Welcome! Have a safe and pleasant stay.",
        ar: "أهلاً وسهلاً بك! نتمنى لك إقامة آمنة وسعيدة.",
        ur: "خوش آمدید! آپ کا قیام محفوظ اور خوشگوار رہے۔",
        kn: "ಸ್ವಾಗತ! ಸುರಕ್ಷಿತ ಮತ್ತು ಆಹ್ಲಾದಕರ ವಾಸ್ತವ್ಯವಿರಲಿ.",
        hi: "स्वागत है! आपका प्रवास सुरक्षित और सुखद रहे।"
      }
    ]
  },
  {
    page: 18, type: "lesson", module: "Module 4: Airport & Global",
    title: "Asking Directions in a New City",
    mapRole: "city", mapLabel: "🗺️ Navigate City Map",
    sentences: [
      {
        en: "Excuse me, how can I reach the metro station?",
        ar: "عفواً، كيف يمكنني الوصول إلى محطة المترو؟",
        ur: "معاف کیجئے، میں میٹرو اسٹیشن کیسے پہنچ سکتا ہوں؟",
        kn: "ಕ್ಷಮಿಸಿ, ಮೆಟ್ರೋ ನಿಲ್ದಾಣವನ್ನು ಹೇಗೆ ತಲುಪಬಹುದು?",
        hi: "माफ़ कीजिए, मैं मेट्रो स्टेशन कैसे पहुँच सकता हूँ?"
      },
      {
        en: "Go straight ahead and turn right at the signal.",
        ar: "سر بشكل مستقيم ثم انعطف يميناً عند الإشارة.",
        ur: "سیدھے آگے جائیں اور سگنل سے دائیں مڑ جائیں۔",
        kn: "ನೇರವಾಗಿ ಮುಂದೆ ಹೋಗಿ ಮತ್ತು ಸಿಗ್ನಲ್ ಬಳಿ ಬಲಕ್ಕೆ ತಿರುಗಿ.",
        hi: "सीधे आगे जाएँ और सिग्नल से दाएँ मुड़ जाएँ।"
      },
      {
        en: "It is just a five-minute walk from here.",
        ar: "إنه على بعد خمس دقائق فقط سيراً على الأقدام من هنا.",
        ur: "یہ یہاں سے صرف پانچ منٹ کی پیدل مسافت پر ہے۔",
        kn: "ಇದು ಇಲ್ಲಿಂದ ಕೇವಲ ಐದು ನಿಮಿಷಗಳ ನಡಿಗೆಯ ದೂರದಲ್ಲಿದೆ.",
        hi: "यह यहाँ से केवल पाँच मिनट की पैदल दूरी पर है।"
      }
    ]
  },
  {
    page: 19, type: "lesson", module: "Module 4: Airport & Global",
    title: "Professional Phone Call Etiquette",
    mapRole: "phone", mapLabel: "📱 Answer Helpdesk Call on Map",
    sentences: [
      {
        en: "Hello, thank you for calling. How may I assist you?",
        ar: "مرحباً، شكراً لاتصالك. كيف يمكنني خدمتك؟",
        ur: "ہیلو، کال کرنے کا شکریہ۔ میں آپ کی کیا مدد کر سکتا ہوں؟",
        kn: "ಹಲೋ, ಕರೆ ಮಾಡಿದ್ದಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಾನು ನಿಮಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?",
        hi: "हेलो, कॉल करने के लिए धन्यवाद। मैं आपकी क्या सहायता कर सकता हूँ?"
      },
      {
        en: "Could you please hold the line for one minute?",
        ar: "هل يمكنك الانتظار على الخط لمدة دقيقة واحدة من فضلك؟",
        ur: "کیا آپ براہ کرم ایک منٹ کے لیے لائن پر انتظار کر سکتے ہیں؟",
        kn: "ದಯವಿಟ್ಟು ಒಂದು ನಿಮಿಷ ಲೈನ್‌ನಲ್ಲಿ ಕಾಯಬಹುದೇ?",
        hi: "क्या आप कृपया एक मिनट के लिए लाइन पर रुक सकते हैं?"
      },
      {
        en: "I will send the location to your phone right away.",
        ar: "سأرسل الموقع إلى هاتفك فوراً.",
        ur: "میں ابھی آپ کے فون پر لوکیشن بھیج دوں گا۔",
        kn: "ನಾನು ಈಗಲೇ ನಿಮ್ಮ ಫೋನ್‌ಗೆ ಸ್ಥಳವನ್ನು ಕಳುಹಿಸುತ್ತೇನೆ.",
        hi: "मैं अभी आपके फ़ोन पर लोकेशन भेज दूँगा।"
      }
    ]
  },
  {
    page: 20, type: "exam", module: "Module 4 Exam",
    title: "🏆 Checkpoint Exam #4 (Pages 16–19)",
    questions: [
      { q: "What does 'ما هو الغرض من زيارتك؟' mean?", options: ["What is the purpose of your visit?", "Where is the canteen?", "What is your favorite color?"], ans: 0 },
      { q: "How do you politely put a caller on wait?", options: ["Wait now", "Could you please hold the line for one minute?", "Cut the phone"], ans: 1 },
      { q: "Speak this sentence clearly into the mic:", speakTarget: "How may I assist you" }
    ]
  },

  // ================= MODULE 5: CORPORATE OFFICE (PAGES 21 - 25) =================
  {
    page: 21, type: "lesson", module: "Module 5: Corporate Office",
    title: "First Day at the Office",
    mapRole: "job", mapLabel: "🏢 Enter Office Reception",
    sentences: [
      {
        en: "Good morning everyone, I am pleased to join this team.",
        ar: "صباح الخير جميعاً، يسعدني الانضمام إلى هذا الفريق.",
        ur: "سب کو صبح بخیر، مجھے اس ٹیم میں شامل ہو کر خوشی ہوئی۔",
        kn: "ಎಲ್ಲರಿಗೂ ಶುಭೋದಯ, ಈ ತಂಡವನ್ನು ಸೇರಲು ನನಗೆ ಸಂತೋಷವಾಗಿದೆ.",
        hi: "सभी को सुप्रभात, मुझे इस टीम में शामिल होकर खुशी हुई।"
      },
      {
        en: "Could you please guide me to my desk?",
        ar: "هل يمكنك إرشادي إلى مكتبي من فضلك؟",
        ur: "کیا آپ براہ کرم مجھے میری ڈیسک تک رہنمائی کر سکتے ہیں؟",
        kn: "ದಯವಿಟ್ಟು ನನ್ನ ಮೇಜಿನ ಬಳಿಗೆ ಮಾರ್ಗದರ್ಶನ ನೀಡುತ್ತೀರಾ?",
        hi: "क्या आप कृपया मुझे मेरी डेस्क तक ले जा सकते हैं?"
      },
      {
        en: "I look forward to working with you all.",
        ar: "أتطلع إلى العمل معكم جميعاً.",
        ur: "میں آپ سب کے ساتھ کام کرنے کا منتظر ہوں۔",
        kn: "ನಿಮ್ಮೆಲ್ಲರೊಂದಿಗೆ ಕೆಲಸ ಮಾಡಲು ನಾನು ಎದುರು ನೋಡುತ್ತಿದ್ದೇನೆ.",
        hi: "मैं आप सभी के साथ काम करने के लिए उत्सुक हूँ।"
      }
    ]
  },
  {
    page: 22, type: "lesson", module: "Module 5: Corporate Office",
    title: "Reporting Progress to Manager",
    mapRole: "job", mapLabel: "💼 Manager Cabin Roleplay",
    sentences: [
      {
        en: "I have completed the project ahead of schedule.",
        ar: "لقد أكملت المشروع قبل الموعد المحدد.",
        ur: "میں نے پروجیکٹ وقت سے پہلے مکمل کر لیا ہے۔",
        kn: "ನಾನು ಯೋಜನೆಯನ್ನು ನಿಗದಿತ ಸಮಯಕ್ಕಿಂತ ಮುಂಚಿತವಾಗಿ ಪೂರ್ಣಗೊಳಿಸಿದ್ದೇನೆ.",
        hi: "मैंने प्रोजेक्ट तय समय से पहले पूरा कर लिया है।"
      },
      {
        en: "Here is the daily report for your review.",
        ar: "تفضل التقرير اليومي لمراجعتك الكريمة.",
        ur: "آپ کے جائزے کے لیے یہ روزانہ کی رپورٹ حاضر ہے۔",
        kn: "ನಿಮ್ಮ ಪರಿಶೀಲನೆಗಾಗಿ ದೈನಂದಿನ ವರದಿ ಇಲ್ಲಿದೆ.",
        hi: "आपकी समीक्षा के लिए यह दैनिक रिपोर्ट प्रस्तुत है।"
      },
      {
        en: "Please let me know if any updates are needed.",
        ar: "يرجى إعلامي إذا كانت هناك حاجة لأي تحديثات.",
        ur: "اگر کسی تبدیلی کی ضرورت ہو تو براہ کرم مجھے بتائیں۔",
        kn: "ಯಾವುದೇ ನವೀಕರಣಗಳ ಅಗತ್ಯವಿದ್ದರೆ ದಯವಿಟ್ಟು ನನಗೆ ತಿಳಿಸಿ.",
        hi: "यदि किसी अपडेट की आवश्यकता हो तो कृपया मुझे बताएं।"
      }
    ]
  },
  {
    page: 23, type: "lesson", module: "Module 5: Corporate Office",
    title: "Sharing Ideas in Meetings",
    mapRole: "teacher", mapLabel: "👨‍🏫 Present Ideas Like a Leader",
    sentences: [
      {
        en: "In my opinion, we can make this service faster.",
        ar: "في رأيي، يمكننا جعل هذه الخدمة أسرع.",
        ur: "میری رائے میں ہم اس سروس کو مزید تیز بنا سکتے ہیں۔",
        kn: "ನನ್ನ ಅಭಿಪ್ರಾಯದಲ್ಲಿ, ನಾವು ಈ ಸೇವೆಯನ್ನು ಇನ್ನಷ್ಟು ವೇಗಗೊಳಿಸಬಹುದು.",
        hi: "मेरी राय में हम इस सेवा को और तेज़ बना सकते हैं।"
      },
      {
        en: "That is a great idea. Let us implement it.",
        ar: "هذه فكرة رائعة. دعنا ننفذها.",
        ur: "یہ بہت اچھا خیال ہے۔ آئیں اس پر عمل کریں۔",
        kn: "ಅದು ಉತ್ತಮ ಆಲೋಚನೆಯಾಗಿದೆ. ಅದನ್ನು ಕಾರ್ಯಗತಗೊಳಿಸೋಣ.",
        hi: "यह एक बहुत अच्छा विचार है। आइए इसे लागू करें।"
      },
      {
        en: "Thank you everyone for your valuable time.",
        ar: "شكراً لكم جميعاً على وقتكم الثمين.",
        ur: "آپ سب کے قیمتی وقت کا بہت شکریہ۔",
        kn: "ನಿಮ್ಮ ಅಮೂಲ್ಯ ಸಮಯಕ್ಕಾಗಿ ಎಲ್ಲರಿಗೂ ಧನ್ಯವಾದಗಳು.",
        hi: "आपके बहुमूल्य समय के लिए सभी का धन्यवाद।"
      }
    ]
  },
  {
    page: 24, type: "lesson", module: "Module 5: Corporate Office",
    title: "Handling Problems Professionally",
    mapRole: "phone", mapLabel: "📱 Support Call Roleplay",
    sentences: [
      {
        en: "We sincerely apologize for the inconvenience caused.",
        ar: "نعتذر بشدة عن أي إزعاج قد حدث.",
        ur: "ہونے والی زحمت کے لیے ہم تہہ دل سے معذرت خواہ ہیں۔",
        kn: "ಉಂಟಾದ ಅನಾನುಕೂಲತೆಗಾಗಿ ನಾವು ಪ್ರಾಮಾಣಿಕವಾಗಿ ಕ್ಷಮೆಯಾಚಿಸುತ್ತೇವೆ.",
        hi: "हुई असुविधा के लिए हम हृदय से क्षमा चाहते हैं।"
      },
      {
        en: "We are solving this issue on top priority.",
        ar: "نحن نعمل على حل هذه المشكلة كأولوية قصوى.",
        ur: "ہم اس مسئلے کو اولین ترجیح پر حل کر رہے ہیں۔",
        kn: "ನಾವು ಈ ಸಮಸ್ಯೆಯನ್ನು ಮೊದಲ ಆದ್ಯತೆಯ ಮೇಲೆ ಪರಿಹರಿಸುತ್ತಿದ್ದೇವೆ.",
        hi: "हम इस समस्या को सर्वोच्च प्राथमिकता पर हल कर रहे हैं।"
      },
      {
        en: "Thank you for your patience and cooperation.",
        ar: "شكراً لصبركم وتعاونكم معنا.",
        ur: "آپ کے صبر اور تعاون کا شکریہ۔",
        kn: "ನಿಮ್ಮ ತಾಳ್ಮೆ ಮತ್ತು ಸಹಕಾರಕ್ಕೆ ಧನ್ಯವಾದಗಳು.",
        hi: "आपके धैर्य और सहयोग के लिए धन्यवाद।"
      }
    ]
  },
  {
    page: 25, type: "exam", module: "Module 5 Exam",
    title: "🏆 Checkpoint Exam #5 (Pages 21–24)",
    questions: [
      { q: "How do you present an idea politely in a meeting?", options: ["Listen to me only", "In my opinion, we can make this service faster", "You are wrong"], ans: 1 },
      { q: "How do you apologize professionally in English & Arabic?", options: ["We sincerely apologize / نعتذر بشدة", "Not my fault", "Call tomorrow"], ans: 0 },
      { q: "Speak this sentence clearly into the mic:", speakTarget: "Thank you for your valuable time" }
    ]
  },

  // ================= MODULE 6: INTERVIEW & PRO MASTERY (PAGES 26 - 30) =================
  {
    page: 26, type: "lesson", module: "Module 6: Interview Mastery",
    title: "Job Interview Part 1: Tell Me About Yourself",
    mapRole: "job", mapLabel: "💼 Enter HR Interview Room",
    sentences: [
      {
        en: "I am a dedicated professional with strong communication skills.",
        ar: "أنا محترف متفانٍ في عملي وأمتلك مهارات تواصل قوية.",
        ur: "میں مضبوط کمیونیکیشن مہارت رکھنے والا ایک محنتی پروفیشنل ہوں۔",
        kn: "ನಾನು ಉತ್ತಮ ಸಂವಹನ ಕೌಶಲ್ಯ ಹೊಂದಿರುವ ಸಮರ್ಪಿತ ವೃತ್ತಿಪರನಾಗಿದ್ದೇನೆ.",
        hi: "मैं मजबूत संचार कौशल वाला एक समर्पित प्रोफेशनल हूँ।"
      },
      {
        en: "My greatest strength is fast learning and teamwork.",
        ar: "أكبر نقاط قوتي هي سرعة التعلم والعمل الجماعي.",
        ur: "میری سب سے بڑی طاقت جلدی سیکھنا اور ٹیم ورک ہے۔",
        kn: "ವೇಗವಾಗಿ ಕಲಿಯುವುದು ಮತ್ತು ತಂಡದ ಕೆಲಸ ನನ್ನ ದೊಡ್ಡ ಶಕ್ತಿ.",
        hi: "मेरी सबसे बड़ी ताकत तेज़ी से सीखना और टीम वर्क है।"
      },
      {
        en: "I am eager to contribute to your company's success.",
        ar: "أنا متحمس للمساهمة في نجاح شركتكم.",
        ur: "میں آپ کی کمپنی کی کامیابی میں حصہ ڈالنے کے لیے پرجوش ہوں۔",
        kn: "ನಿಮ್ಮ ಕಂಪನಿಯ ಯಶಸ್ಸಿಗೆ ಕೊಡುಗೆ ನೀಡಲು ನಾನು ಉತ್ಸುಕನಾಗಿದ್ದೇನೆ.",
        hi: "मैं आपकी कंपनी की सफलता में योगदान देने के लिए उत्सुक हूँ।"
      }
    ]
  },
  {
    page: 27, type: "lesson", module: "Module 6: Interview Mastery",
    title: "Job Interview Part 2: Why Should We Hire You?",
    mapRole: "job", mapLabel: "💼 Complete HR Interview",
    sentences: [
      {
        en: "I bring reliability, discipline, and problem-solving skills.",
        ar: "أجلب معي الموثوقية والانضباط ومهارات حل المشكلات.",
        ur: "میں اعتماد، نظم و ضبط اور مسائل حل کرنے کی مہارت لاتا ہوں۔",
        kn: "ನಾನು ವಿಶ್ವಾಸಾರ್ಹತೆ, ಶಿಸ್ತು ಮತ್ತು ಸಮಸ್ಯೆ ಪರಿಹರಿಸುವ ಕೌಶಲ್ಯಗಳನ್ನು ತರುತ್ತೇನೆ.",
        hi: "मैं विश्वसनीयता, अनुशासन और समस्या समाधान के कौशल लाता हूँ।"
      },
      {
        en: "I complete deadlines on time with high quality.",
        ar: "أنجز المهام في وقتها المحدد وبجودة عالية.",
        ur: "میں مقررہ وقت پر اعلیٰ معیار کے ساتھ کام پورا کرتا ہوں۔",
        kn: "ನಾನು ಉತ್ತಮ ಗುಣಮಟ್ಟದೊಂದಿಗೆ ಸಮಯಕ್ಕೆ ಸರಿಯಾಗಿ ಕೆಲಸ ಮುಗಿಸುತ್ತೇನೆ.",
        hi: "मैं उच्च गुणवत्ता के साथ समय पर काम पूरा करता हूँ।"
      },
      {
        en: "Thank you very much for this opportunity.",
        ar: "شكراً جزيلاً لكم على هذه الفرصة الرائعة.",
        ur: "اس موقع کے لیے آپ کا بہت بہت شکریہ۔",
        kn: "ಈ ಅವಕಾಶಕ್ಕಾಗಿ ತುಂಬಾ ಧನ್ಯವಾದಗಳು.",
        hi: "इस अवसर के लिए आपका बहुत-बहुत धन्यवाद।"
      }
    ]
  },
  {
    page: 28, type: "lesson", module: "Module 6: Interview Mastery",
    title: "Public Speaking & Confidence",
    mapRole: "teacher", mapLabel: "👨‍🏫 Stage & Classroom Speaking",
    sentences: [
      {
        en: "Confidence comes from daily practice and clear thinking.",
        ar: "الثقة بالنفس تأتي من الممارسة اليومية والتفكير الواضح.",
        ur: "اعتماد روزانہ کی مشق اور واضح سوچ سے آتا ہے۔",
        kn: "ದೈನಂದಿನ ಅಭ್ಯಾಸ ಮತ್ತು ಸ್ಪಷ್ಟ ಆಲೋಚನೆಯಿಂದ ಆತ್ಮವಿಶ್ವಾಸ ಬರುತ್ತದೆ.",
        hi: "आत्मविश्वास दैनिक अभ्यास और स्पष्ट सोच से आता है।"
      },
      {
        en: "Speak clearly and maintain a warm smile.",
        ar: "تحدث بوضوح وحافظ على ابتسامة دافئة.",
        ur: "صاف بولیں اور چہرے پر مسکراہٹ رکھیں۔",
        kn: "ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ ಮತ್ತು ಮುಗುಳ್ನಗೆಯನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ.",
        hi: "स्पष्ट बोलें और चेहरे पर मुस्कान बनाए रखें।"
      },
      {
        en: "Never give up; every step takes you closer to fluency.",
        ar: "لا تستسلم أبداً؛ كل خطوة تقربك من الطلاقة.",
        ur: "کبھی ہار نہ مانیں؛ ہر قدم آپ کو روانی کے قریب لے جاتا ہے۔",
        kn: "ಎಂದಿಗೂ ಬಿಟ್ಟುಕೊಡಬೇಡಿ; ಪ್ರತಿಯೊಂದು ಹೆಜ್ಜೆಯೂ ನಿಮ್ಮನ್ನು ನಿರರ್ಗಳತೆಗೆ ಹತ್ತಿರ ತರುತ್ತದೆ.",
        hi: "कभी हार न मानें; हर कदम आपको धाराप्रवाह बोलने के करीब ले जाता है।"
      }
    ]
  },
  {
    page: 29, type: "lesson", module: "Module 6: Interview Mastery",
    title: "Master Fluency Challenge",
    mapRole: "city", mapLabel: "🗺️ Final All-City Map Challenge",
    sentences: [
      {
        en: "I can now communicate confidently in English and Arabic.",
        ar: "يمكنني الآن التواصل بثقة باللغتين الإنجليزية والعربية.",
        ur: "اب میں انگلش اور عربی دونوں میں اعتماد سے بات کر سکتا ہوں۔",
        kn: "ನಾನು ಈಗ ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಅರೇಬಿಕ್ ಭಾಷೆಗಳಲ್ಲಿ ಆತ್ಮವಿಶ್ವಾಸದಿಂದ ಮಾತನಾಡಬಲ್ಲೆ.",
        hi: "मैं अब अंग्रेज़ी और अरबी दोनों में आत्मविश्वास से बात कर सकता हूँ।"
      },
      {
        en: "Language is my bridge to global opportunities.",
        ar: "اللغة هي جسري نحو الفرص العالمية.",
        ur: "زبان عالمی مواقع تک پہنچنے کا میرا پل ہے۔",
        kn: "ಭಾಷೆಯು ಜಾಗತಿಕ ಅವಕಾಶಗಳಿಗೆ ನನ್ನ ಸೇತುವೆಯಾಗಿದೆ.",
        hi: "भाषा वैश्विक अवसरों तक पहुँचने का मेरा सेतु है।"
      },
      {
        en: "I am ready for my final graduation exam!",
        ar: "أنا مستعد لامتحان التخرج النهائي!",
        ur: "میں اپنے آخری گریجویشن امتحان کے لیے تیار ہوں!",
        kn: "ನನ್ನ ಅಂತಿಮ ಪದವಿ ಪರೀಕ್ಷೆಗೆ ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆ!",
        hi: "मैं अपनी अंतिम परीक्षा के लिए तैयार हूँ!"
      }
    ]
  },
  {
    page: 30, type: "final_exam", module: "Grand Graduation",
    title: "🎓 Grand Final Exam + Royal Certificate",
    questions: [
      { q: "In an interview, how do you describe your strength?", options: ["I sleep late", "My greatest strength is fast learning and teamwork", "I don't know"], ans: 1 },
      { q: "How do you greet an officer at the airport in English & Arabic?", options: ["Good morning, here is my passport / صباح الخير، تفضل جواز سفري", "Give me money", "Open the gate"], ans: 0 },
      { q: "Final Voice Check — Speak with confidence:", speakTarget: "I can now communicate confidently in English" }
    ]
  }
];