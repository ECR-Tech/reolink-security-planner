// ==========================================
// CONFIGURATION : REOLINK SECURITY PLANNER
// Géré par Ecoradinmalin
// ==========================================

const appConfig = {
    // 1. LIENS GLOBAUX BRUTS (Le moteur ajoute les suffixes auto)
    globalLinks: {
        amazon: "https://www.amazon.fr/stores/Reolink/page/11267B80-C68C-4C92-80D7-F4DA75D4E8DC", 
        reolink: "https://reolink.com/fr/" 
    },

    // 2. CATALOGUE DES CAMÉRAS
    cameras: [
{
        img: 'https://m.media-amazon.com/images/I/61R4L7J4s1L._AC_SL1500_.jpg',
        angle: 110,
        pirRange: 10,
        floodRange: 15,
        visionRange: 25,
        tags: {
            fr: ['Sur Batterie', 'PTZ', '4K'],
            en: ['Battery‑Powered', 'PTZ', '4K']
        },
        desc: {
            fr: 'Caméra PTZ 4K sur batterie compatible panneau solaire.',
            en: '4K battery PTZ camera compatible with solar panel.'
        },
        amzLink: 'https://www.amazon.fr/s?k=Reolink+Argus+PT+Ultra',
        reoLink: 'https://reolink.com/fr/product/argus-pt-ultra/',
        ytLink: ''
    },

    {
        id: 'rlc_811a',
        name: 'RLC‑811A',
        img: 'https://m.media-amazon.com/images/I/61m1mP4n7mL._AC_SL1500_.jpg',
        angle: 105,
        pirRange: 15,
        floodRange: 20,
        visionRange: 30,
        tags: {
            fr: ['PoE', 'Zoom Optique', 'Spotlight'],
            en: ['PoE', 'Optical Zoom', 'Spotlight']
        },
        desc: {
            fr: 'Caméra PoE 4K avec zoom optique motorisé et détection IA.',
            en: '4K PoE camera with motorized optical zoom and AI detection.'
        },
        amzLink: 'https://www.amazon.fr/s?k=Reolink+RLC-811A',
        reoLink: 'https://reolink.com/fr/product/rlc-811a/',
        ytLink: ''
    },

    {
        id: 'rlc_823a',
        name: 'RLC‑823A',
        img: 'https://m.media-amazon.com/images/I/61pN8Qf7VBL._AC_SL1500_.jpg',
        angle: 96,
        pirRange: 15,
        floodRange: 25,
        visionRange: 60,
        tags: {
            fr: ['PoE', 'PTZ', 'Auto‑Tracking'],
            en: ['PoE', 'PTZ', 'Auto‑Tracking']
        },
        desc: {
            fr: 'Caméra PTZ PoE avec rotation motorisée et suivi automatique.',
            en: 'PoE PTZ camera with motorized rotation and auto‑tracking.'
        },
        amzLink: 'https://www.amazon.fr/s?k=Reolink+RLC-823A',
        reoLink: 'https://reolink.com/fr/product/rlc-823a/',
        ytLink: ''
    },

    {
        id: 'e1_outdoor_pro',
        name: 'E1 Outdoor Pro',
        img: 'https://m.media-amazon.com/images/I/61Y0kW4rAUL._AC_SL1500_.jpg',
        angle: 94,
        pirRange: 12,
        floodRange: 15,
        visionRange: 30,
        tags: {
            fr: ['Wi‑Fi', 'PTZ', 'Auto‑Tracking'],
            en: ['Wi‑Fi', 'PTZ', 'Auto‑Tracking']
        },
        desc: {
            fr: 'Caméra extérieure Wi‑Fi compacte avec rotation et suivi IA.',
            en: 'Compact outdoor Wi‑Fi camera with pan/tilt and AI tracking.'
        },
        amzLink: 'https://www.amazon.fr/s?k=Reolink+E1+Outdoor+Pro',
        reoLink: 'https://reolink.com/fr/product/e1-outdoor-pro/',
        ytLink: ''
    },

    {
        id: 'duo_floodlight_poe',
        name: 'Duo Floodlight PoE',
        img: 'https://m.media-amazon.com/images/I/71Q4m3kYxTL._AC_SL1500_.jpg',
        angle: 180,
        pirRange: 15,
        floodRange: 25,
        visionRange: 30,
        tags: {
            fr: ['PoE', 'Projecteur', '180°'],
            en: ['PoE', 'Floodlight', '180°']
        },
        desc: {
            fr: 'Caméra panoramique avec puissant projecteur LED intégré.',
            en: 'Panoramic camera with integrated powerful LED floodlight.'
        },
        amzLink: 'https://www.amazon.fr/s?k=Reolink+Duo+Floodlight+PoE',
        reoLink: 'https://reolink.com/fr/product/reolink-duo-floodlight-poe/',
        ytLink: ''
    }
    ]
};
