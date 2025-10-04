// ملف JavaScript: script.js
const vocabulary = [
    // ===============================================================
    // الوحدة الثالثة: Noms masculins (أسماء مذكرة)
    // ===============================================================
    { french: "un moyen de transport", arabic: "وسيلة مواصلات", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un lieu", arabic: "مكان", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un touriste", arabic: "سائح", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un voyageur", arabic: "مسافر", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un employé", arabic: "موظف", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un océan", arabic: "محيط", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un fleuve", arabic: "نهر", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le Nil", arabic: "نهر النيل", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un voyage", arabic: "رحلة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un aéroport", arabic: "مطار", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un pays", arabic: "دولة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un monument", arabic: "أثر سياحي", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le matin", arabic: "الصباح", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le soir", arabic: "المساء", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le cheval", arabic: "حصان", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un slogan", arabic: "شعار", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un site", arabic: "موقع", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un déplacement", arabic: "موقع / مكان", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un billet", arabic: "تذكرة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un ticket", arabic: "تذكرة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un conseil", arabic: "نصيحة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le sud", arabic: "الجنوب", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le nord", arabic: "الشمال", category: "Noms masculins (أسماء مذكرة)" },
    { french: "l'est", arabic: "الشرق", category: "Noms masculins (أسماء مذكرة)" },
    { french: "l'ouest", arabic: "الغرب", category: "Noms masculins (أسماء مذكرة)" },
    { french: "un bureau du tourisme", arabic: "مكتب سياحة", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le départ", arabic: "الرحيل", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le centre", arabic: "الوسط / المنتصف", category: "Noms masculins (أسماء مذكرة)" },
    { french: "le maximum", arabic: "الحد الأقصى", category: "Noms masculins (أسماء مذكرة)" },

    // ===============================================================
    // الوحدة الثالثة: Noms féminins (أسماء مؤنثة)
    // ===============================================================
    { french: "une carte", arabic: "خريطة", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une ville", arabic: "مدينة", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "la mer", arabic: "البحر", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "la mer Rouge", arabic: "البحر الأحمر", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "la mer Méditerranée", arabic: "البحر المتوسط", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une capitale", arabic: "عاصمة", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "la gare", arabic: "محطة القطار", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "la gare routière", arabic: "موقف الحافلات الرئيسي", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une heure", arabic: "ساعة زمنية", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une arrivée", arabic: "وصول", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une journée", arabic: "فترة نهار", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une durée", arabic: "مدة", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "des informations", arabic: "معلومات", category: "Noms féminins (أسماء مؤنثة)" },
    { french: "une rose des vents", arabic: "بوصلة الاتجاهات", category: "Noms féminins (أسماء مؤنثة)" },

    // ===============================================================
    // الوحدة الثالثة: Verbes (أفعال)
    // ===============================================================
    { french: "prendre", arabic: "يأخذ", category: "Verbes (أفعال)" },
    { french: "aller", arabic: "يذهب", category: "Verbes (أفعال)" },
    { french: "localiser", arabic: "يحدد موقع", category: "Verbes (أفعال)" },
    { french: "situer", arabic: "يحدد موقع", category: "Verbes (أفعال)" },
    { french: "se trouver", arabic: "يقع", category: "Verbes (أفعال)" },
    { french: "se déplacer", arabic: "يتنقل", category: "Verbes (أفعال)" },
    { french: "partir", arabic: "يرحل", category: "Verbes (أفعال)" },
    { french: "visiter", arabic: "يزور", category: "Verbes (أفعال)" },
    { french: "conseiller de", arabic: "ينصح بـ / يوجّه", category: "Verbes (أفعال)" },
    { french: "expliquer", arabic: "يشرح", category: "Verbes (أفعال)" },
    { french: "utiliser", arabic: "يستخدم", category: "Verbes (أفعال)" },
    { french: "marcher", arabic: "يمشي", category: "Verbes (أفعال)" },
    { french: "traverser", arabic: "يعبر", category: "Verbes (أفعال)" },
    { french: "voyager", arabic: "يسافر", category: "Verbes (أفعال)" },
    { french: "arriver", arabic: "يصل", category: "Verbes (أفعال)" },
    { french: "donner sur", arabic: "يطل على", category: "Verbes (أفعال)" },
    { french: "découvrir", arabic: "يستكشف", category: "Verbes (أفعال)" },
    { french: "voir", arabic: "يرى", category: "Verbes (أفعال)" },
    { french: "connaître", arabic: "يعرف", category: "Verbes (أفعال)" },
    { french: "prévoir", arabic: "يخطط مسبقاً / يتوقع", category: "Verbes (أفعال)" },

    // ===============================================================
    // الوحدة الثالثة: Adj., adv., prép. et expressions (تعبيرات وحروف)
    // ===============================================================
    { french: "rapide", arabic: "سريع", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "vite", arabic: "بسرعة", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "pratique", arabic: "عملي", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "confortable", arabic: "مريح", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "belle", arabic: "جميلة", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "bienvenue", arabic: "مرحباً", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "avant", arabic: "قبل", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "environ", arabic: "حوالي / تقريباً", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "ou", arabic: "أو (تخيير)", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "depuis", arabic: "منذ / من", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "il faut", arabic: "يلزم", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "discuter le prix", arabic: "يفاوض بخصوص السعر", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "aller-retour", arabic: "ذهاب وعودة", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "aller-simple", arabic: "ذهاب فقط", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "ça coûte", arabic: "هذا يكلف", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "au bord de", arabic: "على شاطئ / على حافة", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "bon voyage !", arabic: "رحلة سعيدة", category: "Adj. & Expressions (صفات وتعبيرات)" },
    { french: "bonne arrivée !", arabic: "وصول سعيد (بسلامة الوصول)", category: "Adj. & Expressions (صفات وتعبيرات)" },
];

const cardsContainer = document.getElementById('cards-container');
let utterance = null; 

/**
 * دالة لتجميع الكلمات حسب الفئة (الجدول)
 */
function groupByCategory(arr) {
    return arr.reduce((acc, item) => {
        const category = item.category;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(item);
        return acc;
    }, {});
}

/**
 * دالة لتشغيل النطق الصوتي للكلمة الفرنسية
 */
function speakFrenchWord(textToSpeak, cardElement) {
    if (!('speechSynthesis' in window)) {
        alert("عذراً، متصفحك لا يدعم ميزة النطق الصوتي (Speech Synthesis).");
        return;
    }
    
    if (!utterance) {
        utterance = new SpeechSynthesisUtterance();
        utterance.lang = 'fr-FR'; 
        utterance.rate = 1; 
    }

    window.speechSynthesis.cancel();
    utterance.text = textToSpeak;
    
    cardElement.classList.add('speaking');
    utterance.onend = () => {
        cardElement.classList.remove('speaking');
    };
    
    window.speechSynthesis.speak(utterance);
}

/**
 * دالة لإنشاء بطاقة الكلمة
 */
function createCard(item) {
    const card = document.createElement('div');
    card.classList.add('word-card');
    card.setAttribute('data-category', item.category); 
    
    card.innerHTML = `
        <div class="french-word">${item.french}</div>
        <div class="arabic-translation">${item.arabic}</div>
        <div class="pronounce-icon">🔊</div>
    `;
    
    card.addEventListener('click', () => {
        speakFrenchWord(item.french, card);
    });
    return card;
}

/**
 * دالة لإنشاء البطاقات مجمعة حسب الفئات
 */
function renderCards() {
    const groupedWords = groupByCategory(vocabulary);
    cardsContainer.innerHTML = ''; 

    // ترتيب الفئات للوحدة الثالثة
    const categoryOrder = [
        "Noms masculins (أسماء مذكرة)", 
        "Noms féminins (أسماء مؤنثة)",
        "Verbes (أفعال)", 
        "Adj. & Expressions (صفات وتعبيرات)"
    ]; 
    
    const categoriesToRender = categoryOrder.filter(cat => groupedWords[cat]).concat(
        Object.keys(groupedWords).filter(cat => !categoryOrder.includes(cat))
    );

    categoriesToRender.forEach(category => {
        const words = groupedWords[category];

        // 1. إنشاء عنوان الفئة
        const title = document.createElement('h2');
        title.classList.add('category-title');
        
        // تقسيم العنوان ليظهر بشكل أجمل
        const parts = category.split(' ');
        const mainTitle = parts[0]; // Noms, Verbes, Adj.
        const subTitle = parts.slice(1).join(' '); // (أسماء مذكرة), (أفعال)...
        
        title.innerHTML = `${mainTitle} <span>${subTitle}</span>`;
        cardsContainer.appendChild(title);

        // 2. إنشاء حاوية مجموعة البطاقات (Grid)
        const groupContainer = document.createElement('div');
        groupContainer.classList.add('category-group');
        
        // 3. إنشاء البطاقات وإضافتها للمجموعة
        words.forEach(item => {
            const card = createCard(item);
            groupContainer.appendChild(card);
        });
        
        // 4. إضافة المجموعة إلى الحاوية الرئيسية
        cardsContainer.appendChild(groupContainer);
    });
}

// تشغيل دالة إنشاء البطاقات عند تحميل الصفحة
window.onload = renderCards;
