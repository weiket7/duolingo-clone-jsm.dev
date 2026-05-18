import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // ─── Spanish Unit 1 ──────────────────────────────────────────────────────────

  {
    id: "es-u1-l1",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Basic Greetings",
    description: "Say hello, goodbye, and ask how someone is doing.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say hello and goodbye in Spanish" },
      { description: "Ask how someone is doing" },
      { description: "Respond to a greeting" },
    ],
    vocabulary: [
      { word: "Hola", translation: "Hello", pronunciation: "OH-lah" },
      { word: "Adiós", translation: "Goodbye", pronunciation: "ah-DYOHS" },
      { word: "Buenos días", translation: "Good morning", pronunciation: "BWEH-nohs DEE-ahs" },
      { word: "Buenas noches", translation: "Good night", pronunciation: "BWEH-nahs NOH-chehs" },
      { word: "¿Cómo estás?", translation: "How are you?", pronunciation: "KOH-moh ehs-TAHS" },
      { word: "Bien", translation: "Good / Fine", pronunciation: "BYEHN" },
    ],
    phrases: [
      { phrase: "¡Hola! ¿Cómo estás?", translation: "Hello! How are you?", context: "informal greeting" },
      { phrase: "Estoy bien, gracias.", translation: "I am fine, thank you.", context: "standard reply" },
      { phrase: "Hasta luego.", translation: "See you later.", context: "casual farewell" },
    ],
    activities: [
      {
        id: "es-u1-l1-a1",
        type: "multiple_choice",
        question: "What does 'Hola' mean?",
        correctAnswer: "Hello",
        options: ["Hello", "Goodbye", "Thank you", "Please"],
      },
      {
        id: "es-u1-l1-a2",
        type: "translation",
        question: "Translate: Good morning",
        correctAnswer: "Buenos días",
        hint: "Think of 'buenos' as 'good' and 'días' as 'days/morning'.",
      },
      {
        id: "es-u1-l1-a3",
        type: "multiple_choice",
        question: "How do you say 'How are you?' in Spanish?",
        correctAnswer: "¿Cómo estás?",
        options: ["¿Cómo estás?", "¿Qué hora es?", "¿Dónde estás?", "¿Cuántos años?"],
      },
      {
        id: "es-u1-l1-a4",
        type: "fill_blank",
        question: "Estoy ___, gracias. (I am fine, thank you.)",
        correctAnswer: "bien",
        hint: "The word means 'good' or 'fine'.",
      },
    ],
    aiTeacherPrompt: {
      topic: "Spanish Basic Greetings",
      systemPrompt:
        "You are a friendly Spanish language teacher. Teach the student basic Spanish greetings in a fun and encouraging way. Keep explanations short. Use examples. Celebrate small wins.",
      introMessage:
        "¡Hola! I'm your Spanish teacher. Today we'll learn how to greet people in Spanish. Ready? Let's start with the most important word: Hola!",
    },
  },

  {
    id: "es-u1-l2",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Say your name in Spanish" },
      { description: "Say where you are from" },
      { description: "Ask someone their name" },
    ],
    vocabulary: [
      { word: "Me llamo", translation: "My name is", pronunciation: "meh YAH-moh" },
      { word: "¿Cómo te llamas?", translation: "What is your name?", pronunciation: "KOH-moh teh YAH-mahs" },
      { word: "Soy de", translation: "I am from", pronunciation: "soy deh" },
      { word: "Mucho gusto", translation: "Nice to meet you", pronunciation: "MOO-choh GOOS-toh" },
      { word: "Igualmente", translation: "Likewise", pronunciation: "ee-GWAL-men-teh" },
    ],
    phrases: [
      { phrase: "Me llamo Ana.", translation: "My name is Ana.", context: "introducing yourself" },
      { phrase: "¿Cómo te llamas?", translation: "What is your name?", context: "asking someone's name" },
      { phrase: "Soy de España.", translation: "I am from Spain.", context: "stating your origin" },
      { phrase: "Mucho gusto.", translation: "Nice to meet you.", context: "first meeting" },
    ],
    activities: [
      {
        id: "es-u1-l2-a1",
        type: "multiple_choice",
        question: "How do you say 'My name is' in Spanish?",
        correctAnswer: "Me llamo",
        options: ["Me llamo", "Soy de", "Tengo", "Estoy"],
      },
      {
        id: "es-u1-l2-a2",
        type: "translation",
        question: "Translate: Nice to meet you",
        correctAnswer: "Mucho gusto",
      },
      {
        id: "es-u1-l2-a3",
        type: "fill_blank",
        question: "___ de México. (I am from Mexico.)",
        correctAnswer: "Soy",
        hint: "Use the verb 'to be' in first person.",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in Spanish",
      systemPrompt:
        "You are a warm Spanish teacher. Help the student practice introducing themselves. Role-play short conversations, correct gently, and encourage them.",
      introMessage:
        "¡Hola de nuevo! Today you'll learn to introduce yourself in Spanish. I'll teach you how to say your name and where you're from. Let's practice!",
    },
  },

  {
    id: "es-u1-l3",
    unitId: "es-unit-1",
    languageId: "es",
    title: "Polite Expressions",
    description: "Learn please, thank you, and other polite words.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say please and thank you in Spanish" },
      { description: "Apologize and excuse yourself" },
    ],
    vocabulary: [
      { word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
      { word: "Gracias", translation: "Thank you", pronunciation: "GRAH-syahs" },
      { word: "De nada", translation: "You're welcome", pronunciation: "deh NAH-dah" },
      { word: "Perdón", translation: "Sorry / Excuse me", pronunciation: "pehr-DOHN" },
      { word: "Lo siento", translation: "I'm sorry", pronunciation: "loh SYEHN-toh" },
    ],
    phrases: [
      { phrase: "Por favor, ¿puedes ayudarme?", translation: "Please, can you help me?", context: "asking for help" },
      { phrase: "Muchas gracias.", translation: "Thank you very much.", context: "strong thanks" },
      { phrase: "Lo siento mucho.", translation: "I'm very sorry.", context: "sincere apology" },
    ],
    activities: [
      {
        id: "es-u1-l3-a1",
        type: "multiple_choice",
        question: "What does 'Gracias' mean?",
        correctAnswer: "Thank you",
        options: ["Thank you", "Please", "Sorry", "Hello"],
      },
      {
        id: "es-u1-l3-a2",
        type: "translation",
        question: "Translate: You're welcome",
        correctAnswer: "De nada",
      },
      {
        id: "es-u1-l3-a3",
        type: "multiple_choice",
        question: "How do you say 'I'm sorry' in Spanish?",
        correctAnswer: "Lo siento",
        options: ["Lo siento", "De nada", "Por favor", "Gracias"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Spanish Polite Expressions",
      systemPrompt:
        "You are a polite and patient Spanish teacher. Teach common courtesy expressions. Emphasize how important politeness is in Spanish culture.",
      introMessage:
        "¡Hola! Being polite is very important in Spanish culture. Today we learn the magic words: por favor, gracias, and more. ¡Vamos!",
    },
  },

  // ─── Spanish Unit 2 ──────────────────────────────────────────────────────────

  {
    id: "es-u2-l1",
    unitId: "es-unit-2",
    languageId: "es",
    title: "Numbers 1–10",
    description: "Learn to count from one to ten in Spanish.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Count from 1 to 10 in Spanish" },
      { description: "Recognize written Spanish numbers" },
    ],
    vocabulary: [
      { word: "uno", translation: "one" },
      { word: "dos", translation: "two" },
      { word: "tres", translation: "three" },
      { word: "cuatro", translation: "four" },
      { word: "cinco", translation: "five" },
      { word: "seis", translation: "six" },
      { word: "siete", translation: "seven" },
      { word: "ocho", translation: "eight" },
      { word: "nueve", translation: "nine" },
      { word: "diez", translation: "ten" },
    ],
    phrases: [
      { phrase: "Tengo cinco años.", translation: "I am five years old.", context: "stating age (child)" },
      { phrase: "Son tres personas.", translation: "There are three people.", context: "counting people" },
    ],
    activities: [
      {
        id: "es-u2-l1-a1",
        type: "multiple_choice",
        question: "What is 'cinco' in English?",
        correctAnswer: "five",
        options: ["four", "five", "six", "seven"],
      },
      {
        id: "es-u2-l1-a2",
        type: "translation",
        question: "Translate: eight",
        correctAnswer: "ocho",
      },
      {
        id: "es-u2-l1-a3",
        type: "multiple_choice",
        question: "Which number comes after 'seis'?",
        correctAnswer: "siete",
        options: ["cinco", "ocho", "siete", "nueve"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Spanish Numbers 1–10",
      systemPrompt:
        "You are an enthusiastic Spanish teacher. Teach numbers 1 to 10 with fun counting exercises and simple quizzes.",
      introMessage:
        "¡Hola! Ready to count in Spanish? Let's go from uno to diez. Repeat after me: uno, dos, tres…",
    },
  },

  {
    id: "es-u2-l2",
    unitId: "es-unit-2",
    languageId: "es",
    title: "Numbers 11–20",
    description: "Extend your counting skills up to twenty.",
    type: "vocabulary",
    xpReward: 15,
    durationMinutes: 6,
    goals: [
      { description: "Count from 11 to 20 in Spanish" },
    ],
    vocabulary: [
      { word: "once", translation: "eleven" },
      { word: "doce", translation: "twelve" },
      { word: "trece", translation: "thirteen" },
      { word: "catorce", translation: "fourteen" },
      { word: "quince", translation: "fifteen" },
      { word: "dieciséis", translation: "sixteen" },
      { word: "diecisiete", translation: "seventeen" },
      { word: "dieciocho", translation: "eighteen" },
      { word: "diecinueve", translation: "nineteen" },
      { word: "veinte", translation: "twenty" },
    ],
    phrases: [
      { phrase: "Tengo quince años.", translation: "I am fifteen years old.", context: "stating age" },
      { phrase: "Hay veinte estudiantes.", translation: "There are twenty students.", context: "classroom context" },
    ],
    activities: [
      {
        id: "es-u2-l2-a1",
        type: "multiple_choice",
        question: "What is 'quince' in English?",
        correctAnswer: "fifteen",
        options: ["twelve", "thirteen", "fifteen", "sixteen"],
      },
      {
        id: "es-u2-l2-a2",
        type: "translation",
        question: "Translate: twenty",
        correctAnswer: "veinte",
      },
    ],
    aiTeacherPrompt: {
      topic: "Spanish Numbers 11–20",
      systemPrompt:
        "You are an encouraging Spanish teacher. Teach numbers 11 to 20, noting the patterns in how they are formed.",
      introMessage:
        "¡Muy bien! You already know 1 to 10. Now let's tackle 11 to 20. Notice that many of them follow a pattern. Let's find out!",
    },
  },

  // ─── French Unit 1 ───────────────────────────────────────────────────────────

  {
    id: "fr-u1-l1",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Basic Greetings",
    description: "Say hello, goodbye, and ask how someone is doing.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say hello and goodbye in French" },
      { description: "Ask how someone is doing" },
    ],
    vocabulary: [
      { word: "Bonjour", translation: "Hello / Good morning", pronunciation: "bohn-ZHOOR" },
      { word: "Bonsoir", translation: "Good evening", pronunciation: "bohn-SWAHR" },
      { word: "Au revoir", translation: "Goodbye", pronunciation: "oh ruh-VWAHR" },
      { word: "Salut", translation: "Hi / Bye (informal)", pronunciation: "sah-LUE" },
      { word: "Comment allez-vous?", translation: "How are you? (formal)", pronunciation: "koh-mahn tah-lay VOO" },
      { word: "Ça va?", translation: "How's it going? (informal)", pronunciation: "sah VAH" },
      { word: "Très bien", translation: "Very well", pronunciation: "treh BYAHN" },
    ],
    phrases: [
      { phrase: "Bonjour! Comment allez-vous?", translation: "Hello! How are you?", context: "formal greeting" },
      { phrase: "Ça va bien, merci.", translation: "I'm doing well, thank you.", context: "informal reply" },
      { phrase: "Au revoir! À bientôt.", translation: "Goodbye! See you soon.", context: "farewell" },
    ],
    activities: [
      {
        id: "fr-u1-l1-a1",
        type: "multiple_choice",
        question: "What does 'Bonjour' mean?",
        correctAnswer: "Hello / Good morning",
        options: ["Hello / Good morning", "Good night", "Goodbye", "Thank you"],
      },
      {
        id: "fr-u1-l1-a2",
        type: "translation",
        question: "Translate: Goodbye",
        correctAnswer: "Au revoir",
      },
      {
        id: "fr-u1-l1-a3",
        type: "multiple_choice",
        question: "Which phrase means 'How's it going?' informally?",
        correctAnswer: "Ça va?",
        options: ["Ça va?", "Comment allez-vous?", "Bonjour!", "Merci beaucoup"],
      },
    ],
    aiTeacherPrompt: {
      topic: "French Basic Greetings",
      systemPrompt:
        "You are a cheerful French teacher. Teach basic French greetings with correct pronunciation tips. Keep energy high and lessons short.",
      introMessage:
        "Bonjour! I'm your French teacher. Let's start with the most important French word: Bonjour! Repeat after me and I'll teach you how to greet anyone in France.",
    },
  },

  {
    id: "fr-u1-l2",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Say your name in French" },
      { description: "Say where you are from" },
    ],
    vocabulary: [
      { word: "Je m'appelle", translation: "My name is", pronunciation: "zhuh mah-PEHL" },
      { word: "Comment vous appelez-vous?", translation: "What is your name? (formal)", pronunciation: "koh-mahn voo zah-play VOO" },
      { word: "Je suis de", translation: "I am from", pronunciation: "zhuh swee duh" },
      { word: "Enchanté(e)", translation: "Nice to meet you", pronunciation: "ahn-shahn-TAY" },
    ],
    phrases: [
      { phrase: "Je m'appelle Marie.", translation: "My name is Marie.", context: "introducing yourself" },
      { phrase: "Je suis de Paris.", translation: "I am from Paris.", context: "stating origin" },
      { phrase: "Enchanté! Je m'appelle Paul.", translation: "Nice to meet you! My name is Paul.", context: "first meeting" },
    ],
    activities: [
      {
        id: "fr-u1-l2-a1",
        type: "multiple_choice",
        question: "How do you say 'My name is' in French?",
        correctAnswer: "Je m'appelle",
        options: ["Je m'appelle", "Je suis de", "Bonjour", "Enchanté"],
      },
      {
        id: "fr-u1-l2-a2",
        type: "translation",
        question: "Translate: Nice to meet you",
        correctAnswer: "Enchanté(e)",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in French",
      systemPrompt:
        "You are a warm French teacher. Help the student introduce themselves in French. Practice simple dialogue and correct pronunciation kindly.",
      introMessage:
        "Bonjour encore! Now let's learn how to introduce yourself. By the end, you'll be able to say your name and where you're from in French. Allons-y!",
    },
  },

  {
    id: "fr-u1-l3",
    unitId: "fr-unit-1",
    languageId: "fr",
    title: "Polite Expressions",
    description: "Learn please, thank you, and other polite words.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say please and thank you in French" },
      { description: "Apologize politely in French" },
    ],
    vocabulary: [
      { word: "S'il vous plaît", translation: "Please (formal)", pronunciation: "seel voo PLAY" },
      { word: "Merci", translation: "Thank you", pronunciation: "mehr-SEE" },
      { word: "Merci beaucoup", translation: "Thank you very much", pronunciation: "mehr-SEE boh-KOO" },
      { word: "De rien", translation: "You're welcome", pronunciation: "duh RYAHN" },
      { word: "Pardon", translation: "Excuse me / Sorry", pronunciation: "par-DOHN" },
      { word: "Désolé(e)", translation: "I'm sorry", pronunciation: "day-zoh-LAY" },
    ],
    phrases: [
      { phrase: "Merci beaucoup!", translation: "Thank you very much!", context: "expressing gratitude" },
      { phrase: "De rien.", translation: "You're welcome.", context: "responding to thanks" },
      { phrase: "Pardon, excusez-moi.", translation: "Excuse me, pardon me.", context: "getting attention or apologizing" },
    ],
    activities: [
      {
        id: "fr-u1-l3-a1",
        type: "multiple_choice",
        question: "What does 'Merci' mean?",
        correctAnswer: "Thank you",
        options: ["Thank you", "Please", "Sorry", "Hello"],
      },
      {
        id: "fr-u1-l3-a2",
        type: "translation",
        question: "Translate: You're welcome",
        correctAnswer: "De rien",
      },
    ],
    aiTeacherPrompt: {
      topic: "French Polite Expressions",
      systemPrompt:
        "You are a polite French teacher. Teach courtesy phrases and explain the cultural importance of politeness in France.",
      introMessage:
        "Bonjour! In France, being polite is very important. Today I'll teach you the key phrases: merci, s'il vous plaît, and more. Let's begin!",
    },
  },

  // ─── French Unit 2 ───────────────────────────────────────────────────────────

  {
    id: "fr-u2-l1",
    unitId: "fr-unit-2",
    languageId: "fr",
    title: "Common Foods",
    description: "Learn vocabulary for bread, water, coffee, and more.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Name common foods and drinks in French" },
    ],
    vocabulary: [
      { word: "le pain", translation: "bread", pronunciation: "luh PAH" },
      { word: "l'eau", translation: "water", pronunciation: "LOH" },
      { word: "le café", translation: "coffee", pronunciation: "luh kah-FAY" },
      { word: "le lait", translation: "milk", pronunciation: "luh LAY" },
      { word: "le fromage", translation: "cheese", pronunciation: "luh froh-MAHZH" },
      { word: "la pomme", translation: "apple", pronunciation: "lah PUHM" },
    ],
    phrases: [
      { phrase: "Je voudrais un café, s'il vous plaît.", translation: "I would like a coffee, please.", context: "ordering at a café" },
      { phrase: "L'eau, s'il vous plaît.", translation: "Water, please.", context: "ordering water" },
    ],
    activities: [
      {
        id: "fr-u2-l1-a1",
        type: "multiple_choice",
        question: "What does 'le pain' mean?",
        correctAnswer: "bread",
        options: ["water", "milk", "bread", "cheese"],
      },
      {
        id: "fr-u2-l1-a2",
        type: "translation",
        question: "Translate: coffee",
        correctAnswer: "le café",
      },
    ],
    aiTeacherPrompt: {
      topic: "French Food Vocabulary",
      systemPrompt:
        "You are a French teacher who loves food. Teach common food words with enthusiasm and help students practice ordering at a café.",
      introMessage:
        "Bonjour! French food is world-famous. Today we learn what to call things at a French café or table. Let's start with le pain — bread!",
    },
  },

  {
    id: "fr-u2-l2",
    unitId: "fr-unit-2",
    languageId: "fr",
    title: "Ordering Food",
    description: "Practice ordering food and drinks at a restaurant.",
    type: "conversation",
    xpReward: 15,
    durationMinutes: 7,
    goals: [
      { description: "Order food at a restaurant in French" },
      { description: "Ask for the bill" },
    ],
    vocabulary: [
      { word: "Je voudrais", translation: "I would like", pronunciation: "zhuh voo-DRAY" },
      { word: "L'addition", translation: "The bill / check", pronunciation: "lah-dee-SYOHN" },
      { word: "C'est délicieux!", translation: "It's delicious!", pronunciation: "say day-lee-SYUH" },
      { word: "La carte", translation: "The menu", pronunciation: "lah KART" },
    ],
    phrases: [
      { phrase: "La carte, s'il vous plaît.", translation: "The menu, please.", context: "sitting down at a restaurant" },
      { phrase: "Je voudrais le fromage.", translation: "I would like the cheese.", context: "ordering food" },
      { phrase: "L'addition, s'il vous plaît.", translation: "The bill, please.", context: "asking to pay" },
    ],
    activities: [
      {
        id: "fr-u2-l2-a1",
        type: "multiple_choice",
        question: "How do you ask for the bill in French?",
        correctAnswer: "L'addition, s'il vous plaît.",
        options: [
          "L'addition, s'il vous plaît.",
          "Je voudrais de l'eau.",
          "Bonjour, madame.",
          "C'est délicieux!",
        ],
      },
      {
        id: "fr-u2-l2-a2",
        type: "translation",
        question: "Translate: I would like the menu.",
        correctAnswer: "Je voudrais la carte.",
      },
    ],
    aiTeacherPrompt: {
      topic: "Ordering Food in French",
      systemPrompt:
        "You are a French teacher. Role-play as a waiter and help the student practice ordering food in French. Be patient and encouraging.",
      introMessage:
        "Bienvenue! Imagine we're in a Parisian café. I'll be the waiter. Let's practice ordering your meal in French!",
    },
  },

  // ─── Japanese Unit 1 ─────────────────────────────────────────────────────────

  {
    id: "ja-u1-l1",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Basic Greetings",
    description: "Learn essential Japanese greetings for any time of day.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Greet people in Japanese throughout the day" },
      { description: "Say goodbye in Japanese" },
    ],
    vocabulary: [
      { word: "こんにちは", translation: "Hello / Good afternoon", pronunciation: "kon-ni-chi-wa" },
      { word: "おはようございます", translation: "Good morning (formal)", pronunciation: "o-ha-yo go-za-i-mas" },
      { word: "こんばんは", translation: "Good evening", pronunciation: "kon-ban-wa" },
      { word: "さようなら", translation: "Goodbye", pronunciation: "sa-yo-na-ra" },
      { word: "またね", translation: "See you (informal)", pronunciation: "ma-ta-ne" },
      { word: "お元気ですか?", translation: "How are you?", pronunciation: "o-gen-ki des-ka" },
      { word: "元気です", translation: "I am fine", pronunciation: "gen-ki des" },
    ],
    phrases: [
      { phrase: "こんにちは！お元気ですか？", translation: "Hello! How are you?", context: "daytime greeting" },
      { phrase: "はい、元気です。ありがとう。", translation: "Yes, I'm fine. Thank you.", context: "standard reply" },
      { phrase: "さようなら、またね。", translation: "Goodbye, see you.", context: "parting" },
    ],
    activities: [
      {
        id: "ja-u1-l1-a1",
        type: "multiple_choice",
        question: "What does 'こんにちは' mean?",
        correctAnswer: "Hello / Good afternoon",
        options: ["Hello / Good afternoon", "Good morning", "Good night", "Goodbye"],
      },
      {
        id: "ja-u1-l1-a2",
        type: "translation",
        question: "Translate: Good morning (formal)",
        correctAnswer: "おはようございます",
      },
      {
        id: "ja-u1-l1-a3",
        type: "multiple_choice",
        question: "How do you say 'Goodbye' formally in Japanese?",
        correctAnswer: "さようなら",
        options: ["またね", "さようなら", "こんばんは", "ありがとう"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Japanese Basic Greetings",
      systemPrompt:
        "You are a kind Japanese language teacher. Teach basic Japanese greetings. Explain pronunciation clearly and note cultural context like bowing.",
      introMessage:
        "こんにちは！I'm your Japanese teacher. Japanese greetings change depending on the time of day. Let's learn them one by one. First: こんにちは!",
    },
  },

  {
    id: "ja-u1-l2",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Introducing Yourself",
    description: "Say your name and where you are from in Japanese.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Introduce yourself in Japanese" },
      { description: "Ask someone their name" },
    ],
    vocabulary: [
      { word: "わたしは〜です", translation: "I am ~", pronunciation: "wa-ta-shi-wa ~ des" },
      { word: "おなまえは？", translation: "What is your name?", pronunciation: "o-na-ma-e-wa" },
      { word: "〜からきました", translation: "I came from ~", pronunciation: "~ ka-ra ki-ma-shi-ta" },
      { word: "はじめまして", translation: "Nice to meet you", pronunciation: "ha-ji-me-ma-shi-te" },
      { word: "よろしくおねがいします", translation: "Please treat me well", pronunciation: "yo-ro-shi-ku o-ne-ga-i-shi-mas" },
    ],
    phrases: [
      { phrase: "はじめまして。わたしはケンです。", translation: "Nice to meet you. I am Ken.", context: "first introduction" },
      { phrase: "アメリカからきました。", translation: "I came from America.", context: "stating origin" },
      { phrase: "よろしくおねがいします。", translation: "Please treat me well.", context: "polite closing of introduction" },
    ],
    activities: [
      {
        id: "ja-u1-l2-a1",
        type: "multiple_choice",
        question: "What does 'はじめまして' mean?",
        correctAnswer: "Nice to meet you",
        options: ["Nice to meet you", "Goodbye", "Thank you", "I'm fine"],
      },
      {
        id: "ja-u1-l2-a2",
        type: "fill_blank",
        question: "わたしは＿＿です。 (I am [your name].)",
        correctAnswer: "[your name]",
        hint: "Put your name where the blank is.",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in Japanese",
      systemPrompt:
        "You are a patient Japanese teacher. Teach the student how to introduce themselves. Explain cultural notes like bowing and the importance of 'yoroshiku onegaishimasu'.",
      introMessage:
        "こんにちは！Today you'll learn the classic Japanese self-introduction. It's called 'jiko shoukai'. Let's start with はじめまして — nice to meet you!",
    },
  },

  {
    id: "ja-u1-l3",
    unitId: "ja-unit-1",
    languageId: "ja",
    title: "Polite Expressions",
    description: "Learn please, thank you, and sorry in Japanese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say thank you and sorry in Japanese" },
      { description: "Make polite requests" },
    ],
    vocabulary: [
      { word: "ありがとうございます", translation: "Thank you (formal)", pronunciation: "a-ri-ga-to go-za-i-mas" },
      { word: "ありがとう", translation: "Thank you (informal)", pronunciation: "a-ri-ga-to" },
      { word: "どういたしまして", translation: "You're welcome", pronunciation: "do-i-ta-shi-ma-shi-te" },
      { word: "すみません", translation: "Excuse me / I'm sorry", pronunciation: "su-mi-ma-sen" },
      { word: "ごめんなさい", translation: "I'm sorry (sincere)", pronunciation: "go-men-na-sa-i" },
      { word: "おねがいします", translation: "Please", pronunciation: "o-ne-ga-i shi-mas" },
    ],
    phrases: [
      { phrase: "ありがとうございます！", translation: "Thank you very much!", context: "formal thanks" },
      { phrase: "すみません、ちょっとよろしいですか？", translation: "Excuse me, do you have a moment?", context: "getting attention" },
      { phrase: "ごめんなさい。", translation: "I'm sorry.", context: "sincere apology" },
    ],
    activities: [
      {
        id: "ja-u1-l3-a1",
        type: "multiple_choice",
        question: "What does 'ありがとうございます' mean?",
        correctAnswer: "Thank you (formal)",
        options: ["Thank you (formal)", "Please", "Excuse me", "I'm sorry"],
      },
      {
        id: "ja-u1-l3-a2",
        type: "translation",
        question: "Translate: I'm sorry (sincere)",
        correctAnswer: "ごめんなさい",
      },
    ],
    aiTeacherPrompt: {
      topic: "Japanese Polite Expressions",
      systemPrompt:
        "You are a respectful Japanese teacher. Teach the difference between formal and informal thank-yous, and how to apologize properly in Japanese culture.",
      introMessage:
        "こんにちは！Politeness is central to Japanese culture. Today we learn ありがとう, すみません, and more. These words will open doors for you in Japan!",
    },
  },

  // ─── Japanese Unit 2 ─────────────────────────────────────────────────────────

  {
    id: "ja-u2-l1",
    unitId: "ja-unit-2",
    languageId: "ja",
    title: "Numbers 1–10",
    description: "Learn to count from one to ten in Japanese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Count from 1 to 10 in Japanese" },
    ],
    vocabulary: [
      { word: "いち", translation: "one", pronunciation: "i-chi" },
      { word: "に", translation: "two", pronunciation: "ni" },
      { word: "さん", translation: "three", pronunciation: "san" },
      { word: "し / よん", translation: "four", pronunciation: "shi / yon" },
      { word: "ご", translation: "five", pronunciation: "go" },
      { word: "ろく", translation: "six", pronunciation: "ro-ku" },
      { word: "しち / なな", translation: "seven", pronunciation: "shi-chi / na-na" },
      { word: "はち", translation: "eight", pronunciation: "ha-chi" },
      { word: "く / きゅう", translation: "nine", pronunciation: "ku / kyu" },
      { word: "じゅう", translation: "ten", pronunciation: "ju" },
    ],
    phrases: [
      { phrase: "いち、に、さん！", translation: "One, two, three!", context: "counting aloud" },
    ],
    activities: [
      {
        id: "ja-u2-l1-a1",
        type: "multiple_choice",
        question: "What is 'ご' in English?",
        correctAnswer: "five",
        options: ["four", "five", "six", "seven"],
      },
      {
        id: "ja-u2-l1-a2",
        type: "translation",
        question: "Translate: ten",
        correctAnswer: "じゅう",
      },
    ],
    aiTeacherPrompt: {
      topic: "Japanese Numbers 1–10",
      systemPrompt:
        "You are a helpful Japanese teacher. Teach numbers 1 to 10. Note that some numbers (4, 7, 9) have two readings — explain why briefly.",
      introMessage:
        "こんにちは！Let's count in Japanese! Some numbers have two ways to say them — I'll explain as we go. Starting from: いち!",
    },
  },

  {
    id: "ja-u2-l2",
    unitId: "ja-unit-2",
    languageId: "ja",
    title: "Using Numbers Daily",
    description: "Use numbers to talk about age, time, and quantities.",
    type: "conversation",
    xpReward: 15,
    durationMinutes: 7,
    goals: [
      { description: "Use numbers to state your age" },
      { description: "Ask and tell the time in Japanese" },
    ],
    vocabulary: [
      { word: "〜さい", translation: "~ years old", pronunciation: "~ sa-i" },
      { word: "なんさいですか？", translation: "How old are you?", pronunciation: "nan-sai des-ka" },
      { word: "〜じ", translation: "~ o'clock", pronunciation: "~ ji" },
      { word: "なんじですか？", translation: "What time is it?", pronunciation: "nan-ji des-ka" },
    ],
    phrases: [
      { phrase: "わたしは二十さいです。", translation: "I am twenty years old.", context: "stating age" },
      { phrase: "いまなんじですか？", translation: "What time is it now?", context: "asking the time" },
      { phrase: "三じです。", translation: "It is three o'clock.", context: "telling the time" },
    ],
    activities: [
      {
        id: "ja-u2-l2-a1",
        type: "multiple_choice",
        question: "How do you ask 'How old are you?' in Japanese?",
        correctAnswer: "なんさいですか？",
        options: ["なんさいですか？", "なんじですか？", "おなまえは？", "元気ですか？"],
      },
      {
        id: "ja-u2-l2-a2",
        type: "translation",
        question: "Translate: What time is it?",
        correctAnswer: "なんじですか？",
      },
    ],
    aiTeacherPrompt: {
      topic: "Using Numbers in Daily Japanese",
      systemPrompt:
        "You are a practical Japanese teacher. Help students use numbers in real contexts: age, time, quantities. Keep examples everyday and relatable.",
      introMessage:
        "こんにちは！Now that you know numbers, let's use them! We'll practice saying how old you are and what time it is. Let's go!",
    },
  },
];
