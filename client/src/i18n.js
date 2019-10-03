import i18n from 'i18next';
import { reactI18nextModule } from 'react-i18next';
import { initReactI18n } from 'react-i18next/hooks';
import langDetect from 'i18next-browser-languagedetector';

import vi from './__locales/vi.json';
import en from './__locales/en.json';
import ru from './__locales/ru.json';
import es from './__locales/es.json';
import fr from './__locales/fr.json';
import ja from './__locales/ja.json';
import sv from './__locales/sv.json';
import ptBR from './__locales/pt-br.json';
import zhTW from './__locales/zh-tw.json';
import bg from './__locales/bg.json';
import zhCN from './__locales/zh-cn.json';
import cs from './__locales/cs.json';
import da from './__locales/da.json';
import de from './__locales/de.json';
import id from './__locales/id.json';
import it from './__locales/it.json';
import ko from './__locales/ko.json';
import nl from './__locales/nl.json';
import pl from './__locales/pl.json';
import ptPT from './__locales/pt-pt.json';
import sk from './__locales/sk.json';
import sl from './__locales/sl.json';
import tr from './__locales/tr.json';

const resources = {
    en: {
        translation: en,
    },
    vi: {
        translation: vi,
    },
    ru: {
        translation: ru,
    },
    es: {
        translation: es,
    },
    fr: {
        translation: fr,
    },
    ja: {
        translation: ja,
    },
    sv: {
        translation: sv,
    },
    'pt-BR': {
        translation: ptBR,
    },
    'zh-TW': {
        translation: zhTW,
    },
    bg: {
        translation: bg,
    },
    'zh-CN': {
        translation: zhCN,
    },
    cs: {
        translation: cs,
    },
    da: {
        translation: da,
    },
    de: {
        translation: de,
    },
    id: {
        translation: id,
    },
    it: {
        translation: it,
    },
    ko: {
        translation: ko,
    },
    nl: {
        translation: nl,
    },
    pl: {
        translation: pl,
    },
    'pt-PT': {
        translation: ptPT,
    },
    sk: {
        translation: sk,
    },
    sl: {
        translation: sl,
    },
    tr: {
        translation: tr,
    },
};

i18n
    .use(langDetect)
    .use(initReactI18n)
    .use(reactI18nextModule) // passes i18n down to react-i18next
    .init({
        resources,
        fallbackLng: 'en',
        keySeparator: false, // we use content as keys
        nsSeparator: false, // Fix character in content
        returnEmptyString: false, // count empty value as invalid
        interpolation: {
            escapeValue: false, // not needed for react!!
        },
        react: {
            wait: true,
        },
    });

export default i18n;
