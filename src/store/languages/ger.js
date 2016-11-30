const MENU = {
    DICE_CUP: 'Würfelbecher',
    IMPRESSUM: 'Impressum',
    INITATIVE: 'Initative',
    TITLE: 'Menü',
    SEARCH: 'Indexsuche',
    SETTINGS: 'Einstellungen',
};

export default {
    MENU,
    DICE_CUP: {
        TITLE: MENU.DICE_CUP,
        DICE_POOL: 'Würfelpool',
        ROLL_BUTTON: 'Lass die Würfel rollen',
        RESULT_SLIP: 'Du hast einen Patzer geworfen',
        RESULT_CRIT_SLIP: 'Du hast einen kritischen Patzer geworfen',
        TEXT_POPOVER: 'Du hast COUNT Erfloge geworfen',
    },
    SEARCH: {
        TITLE: MENU.SEARCH,
        PLACEHOLDER: 'Suche',
    },
    SETTINGS: {
        TITLE: MENU.SETTINGS,
        LANGUAGES: {
            HEADLINE: 'Sprache',
            GER: 'Deutsch',
            EN: 'Englisch',
        },
        DICE_POOL: {
            HEADLINE: 'Standart Würfelpool',
        },
    },
    IMPRESSUM: {
        TITLE: MENU.IMPRESSUM,
        DEVELOPER: 'Entwikler',
        COPY_RIGTH: 'Shadowrun-Logo und Inhalte mit freundlicher Genehmigung von Pegasus Spiele unter Lizenz von ' +
        'Catalyst Game Labs und Topps Company, Inc. © 2014 Toppy Company, Inc. Alle Rechte vorbehalten.' +
        'Shadowrun ist eine eingetragene Handelsmarke von Topps Company, Inc.',
    },
    INITATIVE: {
        TITLE: MENU.INITATIVE,
    },
};
