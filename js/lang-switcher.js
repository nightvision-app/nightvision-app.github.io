(function () {
    const LANGS = [
        { code: 'en',      name: 'English',          path: ''       },
        { code: 'ar',      name: 'العربية',           path: 'ar'     },
        { code: 'ca',      name: 'Català',           path: 'ca'     },
        { code: 'zh-Hans', name: '简体中文',           path: 'zh-hans' },
        { code: 'zh-Hant', name: '繁體中文',           path: 'zh-hant' },
        { code: 'hr',      name: 'Hrvatski',         path: 'hr'     },
        { code: 'cs',      name: 'Čeština',          path: 'cs'     },
        { code: 'da',      name: 'Dansk',            path: 'da'     },
        { code: 'nl',      name: 'Nederlands',       path: 'nl'     },
        { code: 'fi',      name: 'Suomi',            path: 'fi'     },
        { code: 'fr',      name: 'Français',         path: 'fr'     },
        { code: 'de',      name: 'Deutsch',          path: 'de'     },
        { code: 'el',      name: 'Ελληνικά',          path: 'el'     },
        { code: 'he',      name: 'עברית',             path: 'he'     },
        { code: 'hi',      name: 'हिन्दी',              path: 'hi'     },
        { code: 'hu',      name: 'Magyar',           path: 'hu'     },
        { code: 'id',      name: 'Bahasa Indonesia', path: 'id'     },
        { code: 'it',      name: 'Italiano',         path: 'it'     },
        { code: 'ja',      name: '日本語',             path: 'ja'     },
        { code: 'ko',      name: '한국어',              path: 'ko'     },
        { code: 'ms',      name: 'Bahasa Melayu',    path: 'ms'     },
        { code: 'nb',      name: 'Norsk',            path: 'no'     },
        { code: 'pl',      name: 'Polski',           path: 'pl'     },
        { code: 'pt',      name: 'Português',        path: 'pt'     },
        { code: 'ro',      name: 'Română',           path: 'ro'     },
        { code: 'ru',      name: 'Русский',          path: 'ru'     },
        { code: 'sk',      name: 'Slovenčina',       path: 'sk'     },
        { code: 'es',      name: 'Español',          path: 'es'     },
        { code: 'sv',      name: 'Svenska',          path: 'sv'     },
        { code: 'th',      name: 'ไทย',               path: 'th'     },
        { code: 'tr',      name: 'Türkçe',           path: 'tr'     },
        { code: 'uk',      name: 'Українська',       path: 'ua'     },
        { code: 'vi',      name: 'Tiếng Việt',       path: 'vi'     }
    ];

    const root = document.querySelector('.lang-switch');
    if (!root) return;

    const htmlLang = (document.documentElement.lang || 'en').toLowerCase();
    const current =
        LANGS.find((l) => l.code.toLowerCase() === htmlLang) ||
        LANGS.find((l) => l.code.toLowerCase().split('-')[0] === htmlLang.split('-')[0]) ||
        LANGS[0];

    const basePath = current.path ? '../' : './';

    const select = document.createElement('select');
    select.id = 'lang-select';
    select.setAttribute('aria-label', 'Language');

    for (const lang of LANGS) {
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
