// 1. تعريف مصفوفة الكلمات (مدمجة من جميع الصور المرفقة)
const vocabulary = [
    // أسماء مذكرة (Module 3: السفر والمواصلات)
    { french: "un moyen de transport", arabic: "وسيلة مواصلات", category: "مواصلات وسفر" },
    { french: "un lieu", arabic: "مكان", category: "مواصلات وسفر" },
    { french: "un touriste", arabic: "سائح", category: "مواصلات وسفر" },
    { french: "un voyageur", arabic: "مسافر", category: "مواصلات وسفر" },
    { french: "un employé", arabic: "موظف", category: "مواصلات وسفر" },
    { french: "un océan", arabic: "محيط", category: "مواصلات وسفر" },
    { french: "un fleuve", arabic: "نهر", category: "مواصلات وسفر" },
    { french: "le Nil", arabic: "نهر النيل", category: "مواصلات وسفر" },
    { french: "un voyage", arabic: "رحلة", category: "مواصلات وسفر" },
    { french: "un aéroport", arabic: "مطار", category: "مواصلات وسفر" },
    { french: "un pays", arabic: "دولة", category: "مواصلات وسفر" },
    { french: "un monument", arabic: "أثر سياحي", category: "مواصلات وسفر" },
    { french: "le matin", arabic: "الصباح", category: "مواصلات وسفر" },
    { french: "le soir", arabic: "المساء", category: "مواصلات وسفر" },
    { french: "le cheval", arabic: "حصان", category: "مواصلات وسفر" },
    { french: "un slogan", arabic: "شعار", category: "مواصلات وسفر" },
    { french: "un site", arabic: "موقع", category: "مواصلات وسفر" },
    { french: "un déplacement", arabic: "موقع / مكان", category: "مواصلات وسفر" },
    { french: "un billet", arabic: "تذكرة", category: "مواصلات وسفر" },
    { french: "un ticket", arabic: "تذكرة", category: "مواصلات وسفر" },
    { french: "un conseil", arabic: "نصيحة", category: "مواصلات وسفر" },
    { french: "le sud", arabic: "الجنوب", category: "مواصلات وسفر" },
    { french: "le nord", arabic: "الشمال", category: "مواصلات وسفر" },
    { french: "l'est", arabic: "الشرق", category: "مواصلات وسفر" },
    { french: "l'ouest", arabic: "الغرب", category: "مواصلات وسفر" },
    { french: "un bureau du tourisme", arabic: "مكتب سياحة", category: "مواصلات وسفر" },
    { french: "le départ", arabic: "الرحيل", category: "مواصلات وسفر" },
    { french: "le centre", arabic: "الوسط / المنتصف", category: "مواصلات وسفر" },
    { french: "le maximum", arabic: "الحد الأقصى", category: "مواصلات وسفر" },
    
    // أسماء مؤنثة (Module 3: السفر والمواصلات)
    { french: "une carte", arabic: "خريطة", category: "مواصلات وسفر" },
    { french: "une ville", arabic: "مدينة", category: "مواصلات وسفر" },
    { french: "la mer", arabic: "البحر", category: "مواصلات وسفر" },
    { french: "la mer Rouge", arabic: "البحر الأحمر", category: "مواصلات وسفر" },
    { french: "la mer Méditerranée", arabic: "البحر المتوسط", category: "مواصلات وسفر" },
    { french: "une capitale", arabic: "عاصمة", category: "مواصلات وسفر" },
    { french: "la gare", arabic: "محطة القطار", category: "مواصلات وسفر" },
    { french: "la gare routière", arabic: "موقف الحافلات (الأوتوبيسات) الرئيسي", category: "مواصلات وسفر" },
    { french: "une heure", arabic: "ساعة زمنية", category: "مواصلات وسفر" },
    { french: "une arrivée", arabic: "وصول", category: "مواصلات وسفر" },
    { french: "une journée", arabic: "فترة نهار", category: "مواصلات وسفر" },
    { french: "une durée", arabic: "مدة", category: "مواصلات وسفر" },
    { french: "des informations", arabic: "معلومات", category: "مواصلات وسفر" },
    { french: "une rose des vents", arabic: "بوصلة الاتجاهات", category: "مواصلات وسفر" },

    // أفعال (Module 3)
    { french: "prendre", arabic: "يأخذ", category: "أفعال السفر" },
    { french: "aller", arabic: "يذهب", category: "أفعال السفر" },
    { french: "localiser", arabic: "يحدد موقع", category: "أفعال السفر" },
    { french: "situer", arabic: "يحدد موقع", category: "أفعال السفر" },
    { french: "se trouver", arabic: "يقع", category: "أفعال السفر" },
    { french: "se déplacer", arabic: "يتنقل", category: "أفعال السفر" },
    { french: "partir", arabic: "يرحل", category: "أفعال السفر" },
    { french: "visiter", arabic: "يزور", category: "أفعال السفر" },
    { french: "conseiller de", arabic: "ينصح بـ / يوجّه", category: "أفعال السفر" },
    { french: "expliquer", arabic: "يشرح", category: "أفعال السفر" },
    { french: "utiliser", arabic: "يستخدم", category: "أفعال السفر" },
    { french: "marcher", arabic: "يمشي", category: "أفعال السفر" },
    { french: "traverser", arabic: "يعبر", category: "أفعال السفر" },
    { french: "voyager", arabic: "يسافر", category: "أفعال السفر" },
    { french: "arriver", arabic: "يصل", category: "أفعال السفر" },
    { french: "donner sur", arabic: "يطل على", category: "أفعال السفر" },
    { french: "découvrir", arabic: "يستكشف", category: "أفعال السفر" },
    { french: "voir", arabic: "يرى", category: "أفعال السفر" },
    { french: "connaître", arabic: "يعرف", category: "أفعال السفر" },
    { french: "prévoir", arabic: "يخطط مسبقاً / يتوقع", category: "أفعال السفر" },

    // صفات وظروف وتعبيرات (Module 3)
    { french: "rapide", arabic: "سريع", category: "صفات / تعبيرات" },
    { french: "vite", arabic: "بسرعة", category: "صفات / تعبيرات" },
    { french: "pratique", arabic: "عملي", category: "صفات / تعبيرات" },
    { french: "confortable", arabic: "مريح", category: "صفات / تعبيرات" },
    { french: "belle", arabic: "جميلة", category: "صفات / تعبيرات" },
    { french: "bienvenue", arabic: "مرحباً", category: "صفات / تعبيرات" },
    { french: "avant", arabic: "قبل", category: "صفات / تعبيرات" },
    { french: "environ", arabic: "حوالي / تقريباً", category: "صفات / تعبيرات" },
    { french: "ou", arabic: "أو (تخيير)", category: "صفات / تعبيرات" },
    { french: "depuis", arabic: "منذ / من", category: "صفات / تعبيرات" },
    { french: "il faut", arabic: "يلزم", category: "صفات / تعبيرات" },
    { french: "discuter le prix", arabic: "يفاوض بخصوص السعر", category: "صفات / تعبيرات" },
    { french: "aller-retour", arabic: "ذهاب وعودة", category: "صفات / تعبيرات" },
    { french: "aller-simple", arabic: "ذهاب فقط", category: "صفات / تعبيرات" },
    { french: "ça coûte", arabic: "هذا يكلف", category: "صفات / تعبيرات" },
    { french: "au bord de", arabic: "على شاطئ / على حافة", category: "صفات / تعبيرات" },
    { french: "bon voyage !", arabic: "رحلة سعيدة", category: "صفات / تعبيرات" },
    { french: "bonne arrivée !", arabic: "وصول سعيد (لتهنئة بالوصول)", category: "صفات / تعبيرات" },
    
    // مفردات أساسية (مدمجة من وحدات سابقة للتجميع)
    { french: "un collège mixte", arabic: "مدرسة مشتركة", category: "أساسية" },
    { french: "un directeur", arabic: "مدير", category: "أساسية" },
    { french: "la télévision", arabic: "التلفزيون", category: "أساسية" },
    { french: "mélanger", arabic: "يخلط", category: "أساسية" },
    { french: "très", arabic: "جداً", category: "أساسية" },
    { french: "châtain", arabic: "كستنائي اللون", category: "أساسية" },
    { french: "sympa", arabic: "لطيف / رفيق", category: "أساسية" },
];


const cardsContainer = document.getElementById('cards-container');
const utterance = new SpeechSynthesisUtterance();

/**
 * دالة لتشغيل النطق الصوتي للكلمة الفرنسية
 * @param {string} textToSpeak - الكلمة الفرنسية المراد نطقها
 * @param {HTMLElement} cardElement - عنصر البطاقة لتطبيق تنسيق "جاري النطق"
 */
function speakFrenchWord(textToSpeak, cardElement) {
    if (!('speechSynthesis' in window)) {
        alert("عذراً، متصفحك لا يدعم ميزة النطق الصوتي (Speech Synthesis).");
        return;
    }

    // إيقاف أي نطق سابق
    window.speechSynthesis.cancel();
    
    // إعداد النطق
    utterance.text = textToSpeak;
    utterance.lang = 'fr-FR'; // تحديد اللغة الفرنسية
    utterance.rate = 1; 
    
    // إضافة تنسيق "جاري النطق" عند البدء
    cardElement.classList.add('speaking');

    // إزالة تنسيق "جاري النطق" عند الانتهاء
    utterance.onend = () => {
        cardElement.classList.remove('speaking');
    };
    
    // تشغيل النطق
    window.speechSynthesis.speak(utterance);
}

/**
 * دالة لإنشاء بطاقة الكلمة وإضافتها إلى الصفحة
 */
function renderCards() {
    vocabulary.forEach(item => {
        // إنشاء عنصر البطاقة
        const card = document.createElement('div');
        card.classList.add('word-card');
        
        // بناء المحتوى الداخلي للبطاقة
        card.innerHTML = `
            <div class="french-word">${item.french}</div>
            <div class="arabic-translation"> (${item.category}) ${item.arabic}</div>
            <div class="pronounce-icon">🔊</div>
        `;
        
        // إضافة حدث النقر لتشغيل النطق
        card.addEventListener('click', () => {
            speakFrenchWord(item.french, card);
        });

        // إضافة البطاقة إلى الحاوية
        cardsContainer.appendChild(card);
    });
}

// تشغيل دالة إنشاء البطاقات عند تحميل الصفحة
window.onload = renderCards;