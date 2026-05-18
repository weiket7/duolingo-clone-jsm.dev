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

  // ─── German Unit 1 ───────────────────────────────────────────────────────────

  {
    id: "de-u1-l1",
    unitId: "de-unit-1",
    languageId: "de",
    title: "Basic Greetings",
    description: "Say hello, goodbye, and ask how someone is doing in German.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say hello and goodbye in German" },
      { description: "Ask how someone is doing" },
    ],
    vocabulary: [
      { word: "Hallo", translation: "Hello", pronunciation: "HAH-loh" },
      { word: "Guten Morgen", translation: "Good morning", pronunciation: "GOO-ten MOR-gen" },
      { word: "Guten Abend", translation: "Good evening", pronunciation: "GOO-ten AH-bent" },
      { word: "Auf Wiedersehen", translation: "Goodbye", pronunciation: "owf VEE-der-zayn" },
      { word: "Tschüss", translation: "Bye (informal)", pronunciation: "choos" },
      { word: "Wie geht es Ihnen?", translation: "How are you? (formal)", pronunciation: "vee gayt es EE-nen" },
      { word: "Gut", translation: "Good / Fine", pronunciation: "goot" },
    ],
    phrases: [
      { phrase: "Hallo! Wie geht es dir?", translation: "Hello! How are you?", context: "informal greeting" },
      { phrase: "Mir geht es gut, danke.", translation: "I am doing well, thank you.", context: "standard reply" },
      { phrase: "Auf Wiedersehen!", translation: "Goodbye!", context: "formal farewell" },
    ],
    activities: [
      {
        id: "de-u1-l1-a1",
        type: "multiple_choice",
        question: "What does 'Hallo' mean?",
        correctAnswer: "Hello",
        options: ["Hello", "Goodbye", "Good morning", "Thank you"],
      },
      {
        id: "de-u1-l1-a2",
        type: "translation",
        question: "Translate: Good morning",
        correctAnswer: "Guten Morgen",
      },
      {
        id: "de-u1-l1-a3",
        type: "multiple_choice",
        question: "How do you say 'Goodbye' formally in German?",
        correctAnswer: "Auf Wiedersehen",
        options: ["Tschüss", "Auf Wiedersehen", "Hallo", "Guten Abend"],
      },
    ],
    aiTeacherPrompt: {
      topic: "German Basic Greetings",
      systemPrompt:
        "You are a friendly German teacher. Teach basic German greetings with clear pronunciation. Note the difference between formal and informal greetings.",
      introMessage:
        "Hallo! I'm your German teacher. German has formal and informal greetings — let's learn them both. Start with the most common: Hallo!",
    },
  },

  {
    id: "de-u1-l2",
    unitId: "de-unit-1",
    languageId: "de",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Say your name in German" },
      { description: "Say where you are from" },
    ],
    vocabulary: [
      { word: "Ich heiße", translation: "My name is", pronunciation: "ich HYE-seh" },
      { word: "Wie heißen Sie?", translation: "What is your name? (formal)", pronunciation: "vee HYE-sen zee" },
      { word: "Ich komme aus", translation: "I come from", pronunciation: "ich KOM-eh ows" },
      { word: "Freut mich", translation: "Nice to meet you", pronunciation: "froyt mich" },
    ],
    phrases: [
      { phrase: "Ich heiße Max.", translation: "My name is Max.", context: "introducing yourself" },
      { phrase: "Ich komme aus Deutschland.", translation: "I come from Germany.", context: "stating origin" },
      { phrase: "Freut mich, Sie kennenzulernen.", translation: "Nice to meet you.", context: "first meeting" },
    ],
    activities: [
      {
        id: "de-u1-l2-a1",
        type: "multiple_choice",
        question: "How do you say 'My name is' in German?",
        correctAnswer: "Ich heiße",
        options: ["Ich heiße", "Ich komme aus", "Freut mich", "Ich bin"],
      },
      {
        id: "de-u1-l2-a2",
        type: "translation",
        question: "Translate: Nice to meet you",
        correctAnswer: "Freut mich",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in German",
      systemPrompt:
        "You are a warm German teacher. Help the student introduce themselves in German. Practice short dialogues and correct gently.",
      introMessage:
        "Hallo nochmal! Today you'll learn to introduce yourself. By the end you'll say your name and where you're from — auf Deutsch!",
    },
  },

  {
    id: "de-u1-l3",
    unitId: "de-unit-1",
    languageId: "de",
    title: "Polite Expressions",
    description: "Learn please, thank you, and other polite words in German.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say please and thank you in German" },
      { description: "Apologize in German" },
    ],
    vocabulary: [
      { word: "Bitte", translation: "Please / You're welcome", pronunciation: "BIT-eh" },
      { word: "Danke", translation: "Thank you", pronunciation: "DAHN-keh" },
      { word: "Danke schön", translation: "Thank you very much", pronunciation: "DAHN-keh shern" },
      { word: "Entschuldigung", translation: "Excuse me / Sorry", pronunciation: "ent-SHOOL-dee-gung" },
      { word: "Es tut mir leid", translation: "I'm sorry", pronunciation: "es toot meer lyte" },
    ],
    phrases: [
      { phrase: "Danke schön!", translation: "Thank you very much!", context: "expressing gratitude" },
      { phrase: "Bitte sehr.", translation: "You're very welcome.", context: "responding to thanks" },
      { phrase: "Entschuldigung, können Sie mir helfen?", translation: "Excuse me, can you help me?", context: "asking for help" },
    ],
    activities: [
      {
        id: "de-u1-l3-a1",
        type: "multiple_choice",
        question: "What does 'Danke' mean?",
        correctAnswer: "Thank you",
        options: ["Thank you", "Please", "Sorry", "Hello"],
      },
      {
        id: "de-u1-l3-a2",
        type: "translation",
        question: "Translate: Excuse me",
        correctAnswer: "Entschuldigung",
      },
    ],
    aiTeacherPrompt: {
      topic: "German Polite Expressions",
      systemPrompt:
        "You are a polite German teacher. Teach courtesy phrases. Note that 'Bitte' means both 'please' and 'you're welcome' — explain why.",
      introMessage:
        "Hallo! Germans value politeness. Today we learn Danke, Bitte, and Entschuldigung. One fun fact: Bitte means both 'please' AND 'you're welcome'!",
    },
  },

  // ─── German Unit 2 ───────────────────────────────────────────────────────────

  {
    id: "de-u2-l1",
    unitId: "de-unit-2",
    languageId: "de",
    title: "Numbers 1–10",
    description: "Learn to count from one to ten in German.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [{ description: "Count from 1 to 10 in German" }],
    vocabulary: [
      { word: "eins", translation: "one", pronunciation: "eyns" },
      { word: "zwei", translation: "two", pronunciation: "tsvye" },
      { word: "drei", translation: "three", pronunciation: "dry" },
      { word: "vier", translation: "four", pronunciation: "feer" },
      { word: "fünf", translation: "five", pronunciation: "foonf" },
      { word: "sechs", translation: "six", pronunciation: "zeks" },
      { word: "sieben", translation: "seven", pronunciation: "ZEE-ben" },
      { word: "acht", translation: "eight", pronunciation: "akht" },
      { word: "neun", translation: "nine", pronunciation: "noyn" },
      { word: "zehn", translation: "ten", pronunciation: "tsayn" },
    ],
    phrases: [
      { phrase: "Ich habe zwei Katzen.", translation: "I have two cats.", context: "stating quantity" },
    ],
    activities: [
      {
        id: "de-u2-l1-a1",
        type: "multiple_choice",
        question: "What is 'fünf' in English?",
        correctAnswer: "five",
        options: ["four", "five", "six", "seven"],
      },
      {
        id: "de-u2-l1-a2",
        type: "translation",
        question: "Translate: eight",
        correctAnswer: "acht",
      },
    ],
    aiTeacherPrompt: {
      topic: "German Numbers 1–10",
      systemPrompt: "You are an enthusiastic German teacher. Teach numbers 1 to 10 with fun counting exercises.",
      introMessage: "Hallo! Let's count in German. Eins, zwei, drei — let's go all the way to zehn!",
    },
  },

  {
    id: "de-u2-l2",
    unitId: "de-unit-2",
    languageId: "de",
    title: "Numbers 11–20",
    description: "Extend your counting skills up to twenty in German.",
    type: "vocabulary",
    xpReward: 15,
    durationMinutes: 6,
    goals: [{ description: "Count from 11 to 20 in German" }],
    vocabulary: [
      { word: "elf", translation: "eleven" },
      { word: "zwölf", translation: "twelve" },
      { word: "dreizehn", translation: "thirteen" },
      { word: "vierzehn", translation: "fourteen" },
      { word: "fünfzehn", translation: "fifteen" },
      { word: "sechzehn", translation: "sixteen" },
      { word: "siebzehn", translation: "seventeen" },
      { word: "achtzehn", translation: "eighteen" },
      { word: "neunzehn", translation: "nineteen" },
      { word: "zwanzig", translation: "twenty" },
    ],
    phrases: [
      { phrase: "Ich bin zwanzig Jahre alt.", translation: "I am twenty years old.", context: "stating age" },
    ],
    activities: [
      {
        id: "de-u2-l2-a1",
        type: "multiple_choice",
        question: "What is 'fünfzehn' in English?",
        correctAnswer: "fifteen",
        options: ["twelve", "thirteen", "fifteen", "sixteen"],
      },
      {
        id: "de-u2-l2-a2",
        type: "translation",
        question: "Translate: twenty",
        correctAnswer: "zwanzig",
      },
    ],
    aiTeacherPrompt: {
      topic: "German Numbers 11–20",
      systemPrompt: "You are an encouraging German teacher. Teach numbers 11 to 20, pointing out the '-zehn' pattern.",
      introMessage: "Super! You know 1 to 10. Now notice: most numbers 13–19 end in '-zehn' (meaning ten). Let's learn them!",
    },
  },

  // ─── Portuguese Unit 1 ───────────────────────────────────────────────────────

  {
    id: "pt-u1-l1",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Basic Greetings",
    description: "Say hello, goodbye, and ask how someone is doing in Portuguese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say hello and goodbye in Portuguese" },
      { description: "Ask how someone is doing" },
    ],
    vocabulary: [
      { word: "Olá", translation: "Hello", pronunciation: "oh-LAH" },
      { word: "Bom dia", translation: "Good morning", pronunciation: "bom JEE-ah" },
      { word: "Boa tarde", translation: "Good afternoon", pronunciation: "BOH-ah TAR-jee" },
      { word: "Boa noite", translation: "Good night", pronunciation: "BOH-ah NOY-chee" },
      { word: "Tchau", translation: "Bye", pronunciation: "chow" },
      { word: "Como vai você?", translation: "How are you?", pronunciation: "KOH-moh vye voh-SAY" },
      { word: "Tudo bem", translation: "All good / Fine", pronunciation: "TOO-doo baym" },
    ],
    phrases: [
      { phrase: "Olá! Como vai?", translation: "Hello! How are you?", context: "casual greeting" },
      { phrase: "Tudo bem, obrigado(a).", translation: "All good, thank you.", context: "standard reply" },
      { phrase: "Até logo!", translation: "See you later!", context: "casual farewell" },
    ],
    activities: [
      {
        id: "pt-u1-l1-a1",
        type: "multiple_choice",
        question: "What does 'Olá' mean?",
        correctAnswer: "Hello",
        options: ["Hello", "Goodbye", "Good morning", "Thank you"],
      },
      {
        id: "pt-u1-l1-a2",
        type: "translation",
        question: "Translate: Good morning",
        correctAnswer: "Bom dia",
      },
      {
        id: "pt-u1-l1-a3",
        type: "multiple_choice",
        question: "How do you say 'How are you?' in Portuguese?",
        correctAnswer: "Como vai você?",
        options: ["Como vai você?", "Tudo bem?", "Bom dia!", "Tchau!"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Portuguese Basic Greetings",
      systemPrompt:
        "You are a cheerful Brazilian Portuguese teacher. Teach basic greetings and note that Brazilian Portuguese is warm and informal.",
      introMessage:
        "Olá! I'm your Portuguese teacher. Brazilian Portuguese is very expressive. Let's start with Olá — the most common greeting!",
    },
  },

  {
    id: "pt-u1-l2",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Introducing Yourself",
    description: "Tell people your name and where you are from.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Say your name in Portuguese" },
      { description: "Say where you are from" },
    ],
    vocabulary: [
      { word: "Meu nome é", translation: "My name is", pronunciation: "meh-oo NOH-mee eh" },
      { word: "Qual é o seu nome?", translation: "What is your name?", pronunciation: "kwahl eh oo seh-oo NOH-mee" },
      { word: "Eu sou de", translation: "I am from", pronunciation: "eh-oo soh jee" },
      { word: "Prazer", translation: "Nice to meet you", pronunciation: "prah-ZAYR" },
    ],
    phrases: [
      { phrase: "Meu nome é Ana.", translation: "My name is Ana.", context: "introducing yourself" },
      { phrase: "Eu sou do Brasil.", translation: "I am from Brazil.", context: "stating origin" },
      { phrase: "Prazer em conhecê-lo.", translation: "Nice to meet you.", context: "first meeting" },
    ],
    activities: [
      {
        id: "pt-u1-l2-a1",
        type: "multiple_choice",
        question: "How do you say 'My name is' in Portuguese?",
        correctAnswer: "Meu nome é",
        options: ["Meu nome é", "Eu sou de", "Prazer", "Olá"],
      },
      {
        id: "pt-u1-l2-a2",
        type: "translation",
        question: "Translate: Nice to meet you",
        correctAnswer: "Prazer",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in Portuguese",
      systemPrompt: "You are a warm Portuguese teacher. Help the student practice self-introductions in Brazilian Portuguese.",
      introMessage: "Olá de novo! Now let's learn to introduce yourself. I'll teach you how to say your name and where you're from. Vamos lá!",
    },
  },

  {
    id: "pt-u1-l3",
    unitId: "pt-unit-1",
    languageId: "pt",
    title: "Polite Expressions",
    description: "Learn please, thank you, and other polite words in Portuguese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say please and thank you in Portuguese" },
      { description: "Apologize in Portuguese" },
    ],
    vocabulary: [
      { word: "Por favor", translation: "Please", pronunciation: "por fah-VOR" },
      { word: "Obrigado", translation: "Thank you (male)", pronunciation: "oh-bree-GAH-doo" },
      { word: "Obrigada", translation: "Thank you (female)", pronunciation: "oh-bree-GAH-dah" },
      { word: "De nada", translation: "You're welcome", pronunciation: "jee NAH-dah" },
      { word: "Desculpe", translation: "Sorry / Excuse me", pronunciation: "jees-KOOL-peh" },
    ],
    phrases: [
      { phrase: "Obrigado(a) pela ajuda!", translation: "Thank you for the help!", context: "expressing gratitude" },
      { phrase: "De nada, foi um prazer.", translation: "You're welcome, it was a pleasure.", context: "responding to thanks" },
      { phrase: "Desculpe, pode me ajudar?", translation: "Excuse me, can you help me?", context: "asking for help" },
    ],
    activities: [
      {
        id: "pt-u1-l3-a1",
        type: "multiple_choice",
        question: "What does 'Obrigado' mean?",
        correctAnswer: "Thank you (male)",
        options: ["Thank you (male)", "Please", "Sorry", "Hello"],
      },
      {
        id: "pt-u1-l3-a2",
        type: "translation",
        question: "Translate: You're welcome",
        correctAnswer: "De nada",
      },
    ],
    aiTeacherPrompt: {
      topic: "Portuguese Polite Expressions",
      systemPrompt:
        "You are a polite Portuguese teacher. Teach courtesy phrases. Note the interesting gender agreement: 'obrigado' vs 'obrigada'.",
      introMessage:
        "Olá! In Portuguese, 'thank you' changes based on who's speaking: obrigado (male) or obrigada (female). Let's learn all the courtesy phrases!",
    },
  },

  // ─── Portuguese Unit 2 ───────────────────────────────────────────────────────

  {
    id: "pt-u2-l1",
    unitId: "pt-unit-2",
    languageId: "pt",
    title: "Common Foods",
    description: "Learn vocabulary for common Brazilian foods and drinks.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [{ description: "Name common foods and drinks in Portuguese" }],
    vocabulary: [
      { word: "o pão", translation: "bread", pronunciation: "oo powng" },
      { word: "a água", translation: "water", pronunciation: "ah AH-gwah" },
      { word: "o café", translation: "coffee", pronunciation: "oo kah-FEH" },
      { word: "o leite", translation: "milk", pronunciation: "oo LAY-chee" },
      { word: "o arroz", translation: "rice", pronunciation: "oo ah-HOHS" },
      { word: "a fruta", translation: "fruit", pronunciation: "ah FROO-tah" },
    ],
    phrases: [
      { phrase: "Eu quero um café, por favor.", translation: "I want a coffee, please.", context: "ordering at a café" },
      { phrase: "Água, por favor.", translation: "Water, please.", context: "ordering water" },
    ],
    activities: [
      {
        id: "pt-u2-l1-a1",
        type: "multiple_choice",
        question: "What does 'o pão' mean?",
        correctAnswer: "bread",
        options: ["water", "milk", "bread", "rice"],
      },
      {
        id: "pt-u2-l1-a2",
        type: "translation",
        question: "Translate: coffee",
        correctAnswer: "o café",
      },
    ],
    aiTeacherPrompt: {
      topic: "Portuguese Food Vocabulary",
      systemPrompt: "You are a Portuguese teacher who loves Brazilian food. Teach common food words and help students order at a café.",
      introMessage: "Olá! Brazilian food is delicious! Today we learn food words. Let's start with the basics: pão, café, água…",
    },
  },

  {
    id: "pt-u2-l2",
    unitId: "pt-unit-2",
    languageId: "pt",
    title: "Ordering Food",
    description: "Practice ordering food and drinks at a restaurant.",
    type: "conversation",
    xpReward: 15,
    durationMinutes: 7,
    goals: [
      { description: "Order food at a restaurant in Portuguese" },
      { description: "Ask for the bill" },
    ],
    vocabulary: [
      { word: "Eu gostaria de", translation: "I would like", pronunciation: "eh-oo gos-tah-REE-ah jee" },
      { word: "A conta", translation: "The bill", pronunciation: "ah KON-tah" },
      { word: "Está delicioso!", translation: "It's delicious!", pronunciation: "esh-TAH jeh-lee-SYOH-zoo" },
      { word: "O cardápio", translation: "The menu", pronunciation: "oo kar-DAH-pyoo" },
    ],
    phrases: [
      { phrase: "O cardápio, por favor.", translation: "The menu, please.", context: "sitting at a restaurant" },
      { phrase: "Eu gostaria de arroz e feijão.", translation: "I would like rice and beans.", context: "ordering food" },
      { phrase: "A conta, por favor.", translation: "The bill, please.", context: "asking to pay" },
    ],
    activities: [
      {
        id: "pt-u2-l2-a1",
        type: "multiple_choice",
        question: "How do you ask for the bill in Portuguese?",
        correctAnswer: "A conta, por favor.",
        options: ["A conta, por favor.", "Eu gostaria de água.", "Olá, tudo bem?", "Está delicioso!"],
      },
      {
        id: "pt-u2-l2-a2",
        type: "translation",
        question: "Translate: I would like the menu.",
        correctAnswer: "Eu gostaria do cardápio.",
      },
    ],
    aiTeacherPrompt: {
      topic: "Ordering Food in Portuguese",
      systemPrompt: "You are a Portuguese teacher. Role-play as a waiter in a Brazilian restaurant and help the student practice ordering.",
      introMessage: "Bem-vindo! Imagine we're at a churrascaria in Brazil. I'll be the waiter — let's practice ordering in Portuguese!",
    },
  },

  // ─── Korean Unit 1 ───────────────────────────────────────────────────────────

  {
    id: "ko-u1-l1",
    unitId: "ko-unit-1",
    languageId: "ko",
    title: "Basic Greetings",
    description: "Learn essential Korean greetings for any time of day.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Greet people in Korean" },
      { description: "Say goodbye in Korean" },
    ],
    vocabulary: [
      { word: "안녕하세요", translation: "Hello (formal)", pronunciation: "an-nyeong-ha-se-yo" },
      { word: "안녕", translation: "Hi / Bye (informal)", pronunciation: "an-nyeong" },
      { word: "안녕히 가세요", translation: "Goodbye (to someone leaving)", pronunciation: "an-nyeong-hi ga-se-yo" },
      { word: "안녕히 계세요", translation: "Goodbye (you are leaving)", pronunciation: "an-nyeong-hi gye-se-yo" },
      { word: "잘 지내세요?", translation: "How are you?", pronunciation: "jal ji-nae-se-yo" },
      { word: "잘 지내요", translation: "I'm doing well", pronunciation: "jal ji-nae-yo" },
    ],
    phrases: [
      { phrase: "안녕하세요! 잘 지내세요?", translation: "Hello! How are you?", context: "formal greeting" },
      { phrase: "네, 잘 지내요. 감사합니다.", translation: "Yes, I'm doing well. Thank you.", context: "standard reply" },
      { phrase: "안녕히 가세요!", translation: "Goodbye!", context: "farewell to someone leaving" },
    ],
    activities: [
      {
        id: "ko-u1-l1-a1",
        type: "multiple_choice",
        question: "What does '안녕하세요' mean?",
        correctAnswer: "Hello (formal)",
        options: ["Hello (formal)", "Goodbye", "Thank you", "Good morning"],
      },
      {
        id: "ko-u1-l1-a2",
        type: "translation",
        question: "Translate: How are you?",
        correctAnswer: "잘 지내세요?",
      },
      {
        id: "ko-u1-l1-a3",
        type: "multiple_choice",
        question: "Which phrase is used informally with friends?",
        correctAnswer: "안녕",
        options: ["안녕하세요", "안녕히 가세요", "안녕", "잘 지내요"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Korean Basic Greetings",
      systemPrompt:
        "You are a kind Korean teacher. Teach basic Korean greetings and explain the important concept of formal vs. informal speech levels.",
      introMessage:
        "안녕하세요! I'm your Korean teacher. Korean has different speech levels — formal and informal. Let's start with the most useful formal greeting!",
    },
  },

  {
    id: "ko-u1-l2",
    unitId: "ko-unit-1",
    languageId: "ko",
    title: "Introducing Yourself",
    description: "Say your name and where you are from in Korean.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Introduce yourself in Korean" },
      { description: "Ask someone their name" },
    ],
    vocabulary: [
      { word: "저는 ~입니다", translation: "I am ~", pronunciation: "jeo-neun ~ im-ni-da" },
      { word: "이름이 뭐예요?", translation: "What is your name?", pronunciation: "i-reum-i mwo-ye-yo" },
      { word: "~에서 왔어요", translation: "I came from ~", pronunciation: "~ e-seo wa-sseo-yo" },
      { word: "반갑습니다", translation: "Nice to meet you", pronunciation: "ban-gap-seum-ni-da" },
    ],
    phrases: [
      { phrase: "저는 민준입니다.", translation: "I am Minjun.", context: "formal introduction" },
      { phrase: "미국에서 왔어요.", translation: "I came from America.", context: "stating origin" },
      { phrase: "반갑습니다!", translation: "Nice to meet you!", context: "first meeting" },
    ],
    activities: [
      {
        id: "ko-u1-l2-a1",
        type: "multiple_choice",
        question: "What does '반갑습니다' mean?",
        correctAnswer: "Nice to meet you",
        options: ["Nice to meet you", "Goodbye", "Thank you", "I'm fine"],
      },
      {
        id: "ko-u1-l2-a2",
        type: "translation",
        question: "Translate: What is your name?",
        correctAnswer: "이름이 뭐예요?",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in Korean",
      systemPrompt: "You are a patient Korean teacher. Teach the student how to introduce themselves formally in Korean.",
      introMessage: "안녕하세요! Today you'll learn how to introduce yourself in Korean. Let's practice the classic self-introduction!",
    },
  },

  {
    id: "ko-u1-l3",
    unitId: "ko-unit-1",
    languageId: "ko",
    title: "Polite Expressions",
    description: "Learn please, thank you, and sorry in Korean.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say thank you and sorry in Korean" },
      { description: "Make polite requests" },
    ],
    vocabulary: [
      { word: "감사합니다", translation: "Thank you (formal)", pronunciation: "gam-sa-ham-ni-da" },
      { word: "고마워", translation: "Thank you (informal)", pronunciation: "go-ma-wo" },
      { word: "천만에요", translation: "You're welcome", pronunciation: "cheon-man-e-yo" },
      { word: "죄송합니다", translation: "I'm sorry (formal)", pronunciation: "joe-song-ham-ni-da" },
      { word: "미안해", translation: "I'm sorry (informal)", pronunciation: "mi-an-hae" },
      { word: "부탁드립니다", translation: "Please (formal)", pronunciation: "bu-tak-deu-rim-ni-da" },
    ],
    phrases: [
      { phrase: "감사합니다!", translation: "Thank you very much!", context: "formal thanks" },
      { phrase: "죄송합니다, 잠깐만요.", translation: "I'm sorry, just a moment.", context: "getting attention" },
      { phrase: "괜찮아요.", translation: "It's okay / No problem.", context: "reassuring someone" },
    ],
    activities: [
      {
        id: "ko-u1-l3-a1",
        type: "multiple_choice",
        question: "What does '감사합니다' mean?",
        correctAnswer: "Thank you (formal)",
        options: ["Thank you (formal)", "Please", "Excuse me", "I'm sorry"],
      },
      {
        id: "ko-u1-l3-a2",
        type: "translation",
        question: "Translate: I'm sorry (formal)",
        correctAnswer: "죄송합니다",
      },
    ],
    aiTeacherPrompt: {
      topic: "Korean Polite Expressions",
      systemPrompt:
        "You are a respectful Korean teacher. Teach the difference between formal and informal courtesy phrases in Korean culture.",
      introMessage:
        "안녕하세요! Politeness is very important in Korean culture. Today we learn 감사합니다, 죄송합니다, and more. These will open every door!",
    },
  },

  // ─── Korean Unit 2 ───────────────────────────────────────────────────────────

  {
    id: "ko-u2-l1",
    unitId: "ko-unit-2",
    languageId: "ko",
    title: "Native Korean Numbers",
    description: "Learn the native Korean number system (1–10).",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [{ description: "Count from 1 to 10 in native Korean" }],
    vocabulary: [
      { word: "하나", translation: "one", pronunciation: "ha-na" },
      { word: "둘", translation: "two", pronunciation: "dul" },
      { word: "셋", translation: "three", pronunciation: "set" },
      { word: "넷", translation: "four", pronunciation: "net" },
      { word: "다섯", translation: "five", pronunciation: "da-seot" },
      { word: "여섯", translation: "six", pronunciation: "yeo-seot" },
      { word: "일곱", translation: "seven", pronunciation: "il-gop" },
      { word: "여덟", translation: "eight", pronunciation: "yeo-deol" },
      { word: "아홉", translation: "nine", pronunciation: "a-hop" },
      { word: "열", translation: "ten", pronunciation: "yeol" },
    ],
    phrases: [
      { phrase: "사과 다섯 개", translation: "five apples", context: "counting objects" },
    ],
    activities: [
      {
        id: "ko-u2-l1-a1",
        type: "multiple_choice",
        question: "What is '다섯' in English?",
        correctAnswer: "five",
        options: ["four", "five", "six", "seven"],
      },
      {
        id: "ko-u2-l1-a2",
        type: "translation",
        question: "Translate: ten (native Korean)",
        correctAnswer: "열",
      },
    ],
    aiTeacherPrompt: {
      topic: "Native Korean Numbers 1–10",
      systemPrompt:
        "You are a helpful Korean teacher. Teach native Korean numbers (하나, 둘…). Note Korean has two number systems — this is the native one.",
      introMessage:
        "안녕하세요! Korean has TWO number systems. Today we learn the native Korean one: 하나, 둘, 셋… Let's go!",
    },
  },

  {
    id: "ko-u2-l2",
    unitId: "ko-unit-2",
    languageId: "ko",
    title: "Sino-Korean Numbers",
    description: "Learn the Sino-Korean number system used for dates and money.",
    type: "vocabulary",
    xpReward: 15,
    durationMinutes: 7,
    goals: [
      { description: "Count using Sino-Korean numbers" },
      { description: "Know when to use each number system" },
    ],
    vocabulary: [
      { word: "일", translation: "one (Sino)", pronunciation: "il" },
      { word: "이", translation: "two (Sino)", pronunciation: "i" },
      { word: "삼", translation: "three (Sino)", pronunciation: "sam" },
      { word: "사", translation: "four (Sino)", pronunciation: "sa" },
      { word: "오", translation: "five (Sino)", pronunciation: "o" },
      { word: "육", translation: "six (Sino)", pronunciation: "yuk" },
      { word: "칠", translation: "seven (Sino)", pronunciation: "chil" },
      { word: "팔", translation: "eight (Sino)", pronunciation: "pal" },
      { word: "구", translation: "nine (Sino)", pronunciation: "gu" },
      { word: "십", translation: "ten (Sino)", pronunciation: "sip" },
    ],
    phrases: [
      { phrase: "오월 삼일", translation: "May 3rd", context: "stating a date" },
      { phrase: "전화번호가 뭐예요?", translation: "What is your phone number?", context: "asking for a number" },
    ],
    activities: [
      {
        id: "ko-u2-l2-a1",
        type: "multiple_choice",
        question: "Which number system is used for dates in Korean?",
        correctAnswer: "Sino-Korean",
        options: ["Sino-Korean", "Native Korean", "Both", "Neither"],
      },
      {
        id: "ko-u2-l2-a2",
        type: "translation",
        question: "Translate: five (Sino-Korean)",
        correctAnswer: "오",
      },
    ],
    aiTeacherPrompt: {
      topic: "Sino-Korean Numbers",
      systemPrompt:
        "You are a patient Korean teacher. Explain the Sino-Korean number system and when it's used (dates, money, floors, minutes).",
      introMessage:
        "안녕하세요! Now for the second number system: Sino-Korean. You'll use it for dates, money, and more. 일, 이, 삼 — let's go!",
    },
  },

  // ─── Chinese Unit 1 ───────────────────────────────────────────────────────────

  {
    id: "zh-u1-l1",
    unitId: "zh-unit-1",
    languageId: "zh",
    title: "Basic Greetings",
    description: "Learn essential Mandarin Chinese greetings.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say hello and goodbye in Chinese" },
      { description: "Ask how someone is doing" },
    ],
    vocabulary: [
      { word: "你好", translation: "Hello", pronunciation: "nǐ hǎo" },
      { word: "您好", translation: "Hello (formal)", pronunciation: "nín hǎo" },
      { word: "早上好", translation: "Good morning", pronunciation: "zǎo shang hǎo" },
      { word: "晚上好", translation: "Good evening", pronunciation: "wǎn shang hǎo" },
      { word: "再见", translation: "Goodbye", pronunciation: "zài jiàn" },
      { word: "你好吗?", translation: "How are you?", pronunciation: "nǐ hǎo ma" },
      { word: "我很好", translation: "I am fine", pronunciation: "wǒ hěn hǎo" },
    ],
    phrases: [
      { phrase: "你好！你好吗？", translation: "Hello! How are you?", context: "casual greeting" },
      { phrase: "我很好，谢谢。", translation: "I'm fine, thank you.", context: "standard reply" },
      { phrase: "再见！", translation: "Goodbye!", context: "farewell" },
    ],
    activities: [
      {
        id: "zh-u1-l1-a1",
        type: "multiple_choice",
        question: "What does '你好' mean?",
        correctAnswer: "Hello",
        options: ["Hello", "Goodbye", "Good morning", "Thank you"],
      },
      {
        id: "zh-u1-l1-a2",
        type: "translation",
        question: "Translate: Goodbye",
        correctAnswer: "再见",
      },
      {
        id: "zh-u1-l1-a3",
        type: "multiple_choice",
        question: "How do you say 'How are you?' in Chinese?",
        correctAnswer: "你好吗?",
        options: ["你好吗?", "谢谢你", "再见", "早上好"],
      },
    ],
    aiTeacherPrompt: {
      topic: "Chinese Basic Greetings",
      systemPrompt:
        "You are a friendly Mandarin teacher. Teach basic Chinese greetings with tone pronunciation tips. Keep it simple and fun.",
      introMessage:
        "你好! I'm your Mandarin teacher. Chinese uses tones — they change meaning completely. Today we learn greetings, starting with 你好!",
    },
  },

  {
    id: "zh-u1-l2",
    unitId: "zh-unit-1",
    languageId: "zh",
    title: "Introducing Yourself",
    description: "Say your name and where you are from in Chinese.",
    type: "conversation",
    xpReward: 10,
    durationMinutes: 6,
    goals: [
      { description: "Introduce yourself in Chinese" },
      { description: "Ask someone their name" },
    ],
    vocabulary: [
      { word: "我叫", translation: "My name is", pronunciation: "wǒ jiào" },
      { word: "你叫什么名字?", translation: "What is your name?", pronunciation: "nǐ jiào shén me míng zi" },
      { word: "我来自", translation: "I come from", pronunciation: "wǒ lái zì" },
      { word: "很高兴认识你", translation: "Nice to meet you", pronunciation: "hěn gāo xìng rèn shi nǐ" },
    ],
    phrases: [
      { phrase: "我叫李明。", translation: "My name is Li Ming.", context: "introducing yourself" },
      { phrase: "我来自中国。", translation: "I come from China.", context: "stating origin" },
      { phrase: "很高兴认识你！", translation: "Nice to meet you!", context: "first meeting" },
    ],
    activities: [
      {
        id: "zh-u1-l2-a1",
        type: "multiple_choice",
        question: "How do you say 'My name is' in Chinese?",
        correctAnswer: "我叫",
        options: ["我叫", "我来自", "很高兴", "你好"],
      },
      {
        id: "zh-u1-l2-a2",
        type: "translation",
        question: "Translate: Nice to meet you",
        correctAnswer: "很高兴认识你",
      },
    ],
    aiTeacherPrompt: {
      topic: "Introducing Yourself in Chinese",
      systemPrompt: "You are a warm Mandarin teacher. Help the student practice self-introductions in Chinese.",
      introMessage: "你好! Let's learn how to introduce yourself in Chinese. By the end you'll say your name and where you're from — in Mandarin!",
    },
  },

  {
    id: "zh-u1-l3",
    unitId: "zh-unit-1",
    languageId: "zh",
    title: "Polite Expressions",
    description: "Learn please, thank you, and sorry in Chinese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [
      { description: "Say thank you and sorry in Chinese" },
      { description: "Make polite requests" },
    ],
    vocabulary: [
      { word: "谢谢", translation: "Thank you", pronunciation: "xiè xie" },
      { word: "非常感谢", translation: "Thank you very much", pronunciation: "fēi cháng gǎn xiè" },
      { word: "不客气", translation: "You're welcome", pronunciation: "bú kè qi" },
      { word: "对不起", translation: "I'm sorry", pronunciation: "duì bu qǐ" },
      { word: "没关系", translation: "It's okay / No problem", pronunciation: "méi guān xi" },
      { word: "请", translation: "Please", pronunciation: "qǐng" },
    ],
    phrases: [
      { phrase: "谢谢你的帮助！", translation: "Thank you for your help!", context: "expressing gratitude" },
      { phrase: "不客气，这是我的荣幸。", translation: "You're welcome, it's my honor.", context: "responding to thanks" },
      { phrase: "对不起，请问...", translation: "I'm sorry, may I ask...", context: "polite interruption" },
    ],
    activities: [
      {
        id: "zh-u1-l3-a1",
        type: "multiple_choice",
        question: "What does '谢谢' mean?",
        correctAnswer: "Thank you",
        options: ["Thank you", "Please", "Sorry", "Hello"],
      },
      {
        id: "zh-u1-l3-a2",
        type: "translation",
        question: "Translate: I'm sorry",
        correctAnswer: "对不起",
      },
    ],
    aiTeacherPrompt: {
      topic: "Chinese Polite Expressions",
      systemPrompt:
        "You are a respectful Mandarin teacher. Teach courtesy expressions and explain how politeness works in Chinese culture.",
      introMessage:
        "你好! Being polite goes a long way in China. Today we learn 谢谢, 对不起, 请 and more. These words will make your Chinese interactions much smoother!",
    },
  },

  // ─── Chinese Unit 2 ───────────────────────────────────────────────────────────

  {
    id: "zh-u2-l1",
    unitId: "zh-unit-2",
    languageId: "zh",
    title: "Numbers 1–10",
    description: "Learn to count from one to ten in Mandarin Chinese.",
    type: "vocabulary",
    xpReward: 10,
    durationMinutes: 5,
    goals: [{ description: "Count from 1 to 10 in Chinese" }],
    vocabulary: [
      { word: "一", translation: "one", pronunciation: "yī" },
      { word: "二", translation: "two", pronunciation: "èr" },
      { word: "三", translation: "three", pronunciation: "sān" },
      { word: "四", translation: "four", pronunciation: "sì" },
      { word: "五", translation: "five", pronunciation: "wǔ" },
      { word: "六", translation: "six", pronunciation: "liù" },
      { word: "七", translation: "seven", pronunciation: "qī" },
      { word: "八", translation: "eight", pronunciation: "bā" },
      { word: "九", translation: "nine", pronunciation: "jiǔ" },
      { word: "十", translation: "ten", pronunciation: "shí" },
    ],
    phrases: [
      { phrase: "一、二、三！", translation: "One, two, three!", context: "counting aloud" },
      { phrase: "我有五本书。", translation: "I have five books.", context: "stating quantity" },
    ],
    activities: [
      {
        id: "zh-u2-l1-a1",
        type: "multiple_choice",
        question: "What is '五' in English?",
        correctAnswer: "five",
        options: ["four", "five", "six", "seven"],
      },
      {
        id: "zh-u2-l1-a2",
        type: "translation",
        question: "Translate: eight",
        correctAnswer: "八",
      },
    ],
    aiTeacherPrompt: {
      topic: "Chinese Numbers 1–10",
      systemPrompt: "You are an enthusiastic Mandarin teacher. Teach numbers 1 to 10 in Chinese with tone practice.",
      introMessage: "你好！Chinese numbers are very logical. Once you know 1–10, you can count to 99! Let's start: 一, 二, 三…",
    },
  },

  {
    id: "zh-u2-l2",
    unitId: "zh-unit-2",
    languageId: "zh",
    title: "Numbers 11–100",
    description: "Extend your counting using Chinese number patterns.",
    type: "vocabulary",
    xpReward: 15,
    durationMinutes: 6,
    goals: [
      { description: "Count from 11 to 20 in Chinese" },
      { description: "Understand how Chinese forms larger numbers" },
    ],
    vocabulary: [
      { word: "十一", translation: "eleven (ten-one)", pronunciation: "shí yī" },
      { word: "十二", translation: "twelve (ten-two)", pronunciation: "shí èr" },
      { word: "十五", translation: "fifteen (ten-five)", pronunciation: "shí wǔ" },
      { word: "二十", translation: "twenty (two-ten)", pronunciation: "èr shí" },
      { word: "五十", translation: "fifty (five-ten)", pronunciation: "wǔ shí" },
      { word: "一百", translation: "one hundred", pronunciation: "yī bǎi" },
    ],
    phrases: [
      { phrase: "我二十岁。", translation: "I am twenty years old.", context: "stating age" },
      { phrase: "一共五十块。", translation: "That's fifty yuan in total.", context: "stating a price" },
    ],
    activities: [
      {
        id: "zh-u2-l2-a1",
        type: "multiple_choice",
        question: "How is '十二' (twelve) formed in Chinese?",
        correctAnswer: "ten + two",
        options: ["ten + two", "two + ten", "twelve (unique word)", "one + two"],
      },
      {
        id: "zh-u2-l2-a2",
        type: "translation",
        question: "Translate: twenty",
        correctAnswer: "二十",
      },
    ],
    aiTeacherPrompt: {
      topic: "Chinese Numbers 11–100",
      systemPrompt:
        "You are an encouraging Mandarin teacher. Show students the logical pattern of Chinese numbers: 11 = ten + one, 20 = two + ten, etc.",
      introMessage:
        "太好了！Chinese numbers have a beautiful pattern. Eleven is 十一 (ten-one), twenty is 二十 (two-ten). Once you see it, you can count to 99 instantly!",
    },
  },
];
