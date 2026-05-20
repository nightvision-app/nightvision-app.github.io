(function () {
    const LANGS = [
        { code: 'en',      name: 'English',          path: ''        },
        { code: 'ar',      name: 'العربية',           path: 'ar'      },
        { code: 'bn',      name: 'বাংলা',             path: 'bn'      },
        { code: 'ca',      name: 'Català',           path: 'ca'      },
        { code: 'cs',      name: 'Čeština',          path: 'cs'      },
        { code: 'da',      name: 'Dansk',            path: 'da'      },
        { code: 'de',      name: 'Deutsch',          path: 'de'      },
        { code: 'el',      name: 'Ελληνικά',          path: 'el'      },
        { code: 'es',      name: 'Español',          path: 'es'      },
        { code: 'fi',      name: 'Suomi',            path: 'fi'      },
        { code: 'fr',      name: 'Français',         path: 'fr'      },
        { code: 'gu',      name: 'ગુજરાતી',           path: 'gu'      },
        { code: 'he',      name: 'עברית',             path: 'he'      },
        { code: 'hi',      name: 'हिन्दी',              path: 'hi'      },
        { code: 'hr',      name: 'Hrvatski',         path: 'hr'      },
        { code: 'hu',      name: 'Magyar',           path: 'hu'      },
        { code: 'id',      name: 'Bahasa Indonesia', path: 'id'      },
        { code: 'it',      name: 'Italiano',         path: 'it'      },
        { code: 'ja',      name: '日本語',             path: 'ja'      },
        { code: 'kn',      name: 'ಕನ್ನಡ',             path: 'kn'      },
        { code: 'ko',      name: '한국어',              path: 'ko'      },
        { code: 'ml',      name: 'മലയാളം',           path: 'ml'      },
        { code: 'mr',      name: 'मराठी',             path: 'mr'      },
        { code: 'ms',      name: 'Bahasa Melayu',    path: 'ms'      },
        { code: 'nb',      name: 'Norsk',            path: 'no'      },
        { code: 'nl',      name: 'Nederlands',       path: 'nl'      },
        { code: 'or',      name: 'ଓଡ଼ିଆ',              path: 'or'      },
        { code: 'pa',      name: 'ਪੰਜਾਬੀ',             path: 'pa'      },
        { code: 'pl',      name: 'Polski',           path: 'pl'      },
        { code: 'pt',      name: 'Português',        path: 'pt'      },
        { code: 'ro',      name: 'Română',           path: 'ro'      },
        { code: 'ru',      name: 'Русский',          path: 'ru'      },
        { code: 'sk',      name: 'Slovenčina',       path: 'sk'      },
        { code: 'sl',      name: 'Slovenščina',      path: 'sl'      },
        { code: 'sv',      name: 'Svenska',          path: 'sv'      },
        { code: 'ta',      name: 'தமிழ்',             path: 'ta'      },
        { code: 'te',      name: 'తెలుగు',            path: 'te'      },
        { code: 'th',      name: 'ไทย',               path: 'th'      },
        { code: 'tr',      name: 'Türkçe',           path: 'tr'      },
        { code: 'uk',      name: 'Українська',       path: 'ua'      },
        { code: 'ur',      name: 'اردو',              path: 'ur'      },
        { code: 'vi',      name: 'Tiếng Việt',       path: 'vi'      },
        { code: 'zh-Hans', name: '简体中文',           path: 'zh-hans' },
        { code: 'zh-Hant', name: '繁體中文',           path: 'zh-hant' }
    ];

    const root = document.querySelector('.lang-switch');
    if (!root) return;

    const htmlLang = (document.documentElement.lang || 'en').toLowerCase();
    const current =
        LANGS.find((l) => l.code.toLowerCase() === htmlLang) ||
        LANGS.find((l) => l.code.toLowerCase().split('-')[0] === htmlLang.split('-')[0]) ||
        LANGS[0];

    const basePath = current.path ? '../' : './';

    // W3C i18n: list languages by their native name, alphabetically.
    // Fixed 'en' locale so the order is stable across browsers — otherwise
    // localeCompare's default puts the user's own script (e.g. Cyrillic for
    // a Russian browser) at the top, which is unpredictable.
    // With 'en': Latin (diacritics handled — Č after C, not after Z), then
    // non-Latin scripts in Unicode order.
    const sortedLangs = [...LANGS].sort((a, b) =>
        a.name.localeCompare(b.name, 'en')
    );

    const select = document.createElement('select');
    select.id = 'lang-select';
    select.setAttribute('aria-label', 'Language');

    for (const lang of sortedLangs) {
        const option = document.createElement('option');
        option.value = lang.path ? basePath + lang.path + '/' : basePath;
        option.textContent = lang.name;
        option.lang = lang.code;
        if (lang.code === current.code) option.selected = true;
        select.appendChild(option);
    }

    select.addEventListener('change', () => {
        if (select.value) window.location.href = select.value;
    });

    root.appendChild(select);
})();
