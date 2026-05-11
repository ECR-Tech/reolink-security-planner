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

    // 2. CATALOGUE DES CAMÉRAS COMPLET
    cameras: [
        {
            id: 'trackmix_wifi',
            name: 'TrackMix WiFi',
            img: 'https://m.media-amazon.com/images/I/61r590h04FL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 15,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['Wi-Fi', 'Double Objectif', 'Auto-Tracking', 'PTZ'],
                en: ['Wi-Fi', 'Dual Lens', 'Auto-Tracking', 'PTZ']
            },
            desc: {
                fr: 'Caméra 4K avec double objectif, suivi automatique et zoom hybride 6X.',
                en: '4K camera with dual lens, auto-tracking, and 6X hybrid zoom.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0B3RCHY18',
            reoLink: 'https://reolink.com/fr/product/reolink-trackmix-wifi/',
            ytLink: ''
        },
        {
            id: 'trackmix_poe',
            name: 'TrackMix PoE',
            img: 'https://m.media-amazon.com/images/I/61U0t4eQZPL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 15,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['PoE', 'Double Objectif', 'Auto-Tracking', 'PTZ'],
                en: ['PoE', 'Dual Lens', 'Auto-Tracking', 'PTZ']
            },
            desc: {
                fr: 'Caméra PoE 4K avec double objectif, suivi automatique et projecteur.',
                en: '4K PoE camera with dual lens, auto-tracking, and spotlight.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0B3RJQJ4J',
            reoLink: 'https://reolink.com/fr/product/reolink-trackmix-poe/',
            ytLink: ''
        },
        {
            id: 'trackmix_battery',
            name: 'TrackMix sur Batterie',
            // Correction du "+" dans l'URL par "%2B" pour éviter l'erreur Not Found
            img: 'https://m.media-amazon.com/images/I/61-b%2Bp3sH1L._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 10,
            floodRange: 15,
            visionRange: 15,
            tags: {
                fr: ['Batterie', 'Solaire', 'Auto-Tracking', 'PTZ'],
                en: ['Battery', 'Solar', 'Auto-Tracking', 'PTZ']
            },
            desc: {
                fr: 'Caméra sur batterie 2K avec suivi automatique, vue panoramique et zoom.',
                en: '2K battery camera with auto-tracking, panoramic view and zoom.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0BPYPK81H',
            reoLink: 'https://reolink.com/fr/product/reolink-trackmix/',
            ytLink: ''
        },
        {
            id: 'trackmix_lte',
            name: 'TrackMix LTE',
            img: 'https://m.media-amazon.com/images/I/61-b%2Bp3sH1L._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 10,
            floodRange: 15,
            visionRange: 15,
            tags: {
                fr: ['4G/LTE', 'Batterie', 'Auto-Tracking', 'PTZ'],
                en: ['4G/LTE', 'Battery', 'Auto-Tracking', 'PTZ']
            },
            desc: {
                fr: 'Caméra 4G sur batterie avec double objectif, suivi automatique et zoom.',
                en: '4G battery camera with dual lens, auto-tracking and zoom.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0BPYPK81H',
            reoLink: 'https://reolink.com/fr/product/reolink-trackmix-lte/',
            ytLink: ''
        },
        {
            id: 'duo_3_poe',
            name: 'Duo 3 PoE',
            img: 'https://m.media-amazon.com/images/I/61W9-yJp0WL._AC_SL1500_.jpg',
            angle: 180,
            pirRange: 20,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['PoE', '16MP', 'Panoramique 180°'],
                en: ['PoE', '16MP', '180° Panoramic']
            },
            desc: {
                fr: 'Caméra PoE 16MP avec vue panoramique à 180° et détection de mouvement avancée.',
                en: '16MP PoE camera with 180° panoramic view and advanced motion detection.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CPHYT9D5',
            reoLink: 'https://reolink.com/fr/product/reolink-duo-3-poe/',
            ytLink: ''
        },
        {
            id: 'duo_2_wifi',
            name: 'Duo 2 WiFi',
            img: 'https://m.media-amazon.com/images/I/61E5R8wL3mL._AC_SL1500_.jpg',
            angle: 180,
            pirRange: 15,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['Wi-Fi', '4K', 'Panoramique 180°'],
                en: ['Wi-Fi', '4K', '180° Panoramic']
            },
            desc: {
                fr: 'Caméra WiFi 4K double objectif offrant un champ de vision fluide de 180°.',
                en: '4K dual-lens WiFi camera offering a seamless 180° field of view.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0B42J2L9X',
            reoLink: 'https://reolink.com/fr/product/reolink-duo-2-wifi/',
            ytLink: ''
        },
        {
            id: 'duo_floodlight_wifi',
            name: 'Duo Floodlight WiFi',
            img: 'https://m.media-amazon.com/images/I/61F1WJj6-pL._AC_SL1500_.jpg',
            angle: 180,
            pirRange: 15,
            floodRange: 30,
            visionRange: 30,
            tags: {
                fr: ['Wi-Fi', 'Panoramique 180°', 'Projecteur Puissant'],
                en: ['Wi-Fi', '180° Panoramic', 'Powerful Floodlight']
            },
            desc: {
                fr: 'Caméra 4K 180° intégrée avec deux projecteurs ultra-puissants de 2000 lumens.',
                en: '4K 180° camera integrated with dual 2000-lumen ultra-bright floodlights.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0BHW2G36W',
            reoLink: 'https://reolink.com/fr/product/reolink-duo-floodlight-wifi/',
            ytLink: ''
        },
        {
            id: 'argus_4_pro',
            name: 'Argus 4 Pro',
            img: 'https://m.media-amazon.com/images/I/61qH8p8uLhL._AC_SL1500_.jpg',
            angle: 180,
            pirRange: 10,
            floodRange: 15,
            visionRange: 20,
            tags: {
                fr: ['Batterie', 'Solaire', 'Panoramique 180°', 'ColorX'],
                en: ['Battery', 'Solar', '180° Panoramic', 'ColorX']
            },
            desc: {
                fr: 'Caméra sur batterie 4K avec vision nocturne ColorX et angle de 180° sans angle mort.',
                en: '4K battery camera with ColorX night vision and 180° blind-spot-free angle.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0D1G7Q3X7',
            reoLink: 'https://reolink.com/fr/product/argus-4-pro/',
            ytLink: ''
        },
        {
            id: 'argus_3_ultra',
            name: 'Argus 3 Ultra',
            img: 'https://m.media-amazon.com/images/I/61O2h21k8IL._AC_SL1500_.jpg',
            angle: 125,
            pirRange: 10,
            floodRange: 10,
            visionRange: 15,
            tags: {
                fr: ['Batterie', 'Solaire', '4K', 'Compacte'],
                en: ['Battery', 'Solar', '4K', 'Compact']
            },
            desc: {
                fr: 'Caméra de sécurité sur batterie 4K avec vision nocturne en couleur et Wi-Fi 5/2.4GHz.',
                en: '4K battery security camera with color night vision and 5/2.4GHz Wi-Fi.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CDBTQWZS',
            reoLink: 'https://reolink.com/fr/product/argus-3-ultra/',
            ytLink: ''
        },
        {
            id: 'argus_pt_ultra',
            name: 'Argus PT Ultra',
            img: 'https://m.media-amazon.com/images/I/61XkLdE%2BZdL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 10,
            floodRange: 10,
            visionRange: 15,
            tags: {
                fr: ['Batterie', 'Solaire', 'PTZ', '4K'],
                en: ['Battery', 'Solar', 'PTZ', '4K']
            },
            desc: {
                fr: 'Caméra sans fil 4K motorisée (Pan/Tilt) avec projecteur et vision nocturne en couleur.',
                en: '4K wireless motorized (Pan/Tilt) camera with spotlight and color night vision.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CDBSKGB4',
            reoLink: 'https://reolink.com/fr/product/argus-pt-ultra/',
            ytLink: ''
        },
        {
            id: 'argus_track',
            name: 'Argus Track',
            img: 'https://m.media-amazon.com/images/I/61v4D0q%2BhOL._AC_SL1500_.jpg',
            angle: 105,
            pirRange: 10,
            floodRange: 15,
            visionRange: 15,
            tags: {
                fr: ['Batterie', 'Auto-Tracking', 'Double Objectif', 'Wi-Fi'],
                en: ['Battery', 'Auto-Tracking', 'Dual Lens', 'Wi-Fi']
            },
            desc: {
                fr: 'Caméra sur batterie compacte avec double objectif, suivi automatique et zoom 6X.',
                en: 'Compact battery camera with dual lens, auto-tracking and 6X zoom.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CQ2J9P8X',
            reoLink: 'https://reolink.com/fr/product/argus-track/',
            ytLink: ''
        },
        {
            id: 'rlc_811a',
            name: 'RLC-811A',
            img: 'https://m.media-amazon.com/images/I/61M6sQnQ-KL._AC_SL1500_.jpg',
            angle: 105,
            pirRange: 20,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['PoE', 'Zoom Optique 5X', 'Projecteur', 'Audio Bidirectionnel'],
                en: ['PoE', '5X Optical Zoom', 'Spotlight', 'Two-way Audio']
            },
            desc: {
                fr: 'Caméra PoE 4K avec zoom optique 5X, vision nocturne en couleur et projecteur.',
                en: '4K PoE camera with 5X optical zoom, color night vision and spotlight.'
            },
            amzLink: 'https://www.amazon.fr/dp/B08X1LMP8D',
            reoLink: 'https://reolink.com/fr/product/rlc-811a/',
            ytLink: ''
        },
        {
            id: 'rlc_823a',
            name: 'RLC-823A',
            img: 'https://m.media-amazon.com/images/I/61wW1%2B8Y5qL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 20,
            floodRange: 20,
            visionRange: 60,
            tags: {
                fr: ['PoE', 'PTZ', 'Zoom Optique 5X', 'Suivi Automatique'],
                en: ['PoE', 'PTZ', '5X Optical Zoom', 'Auto-Tracking']
            },
            desc: {
                fr: 'Caméra de sécurité PTZ PoE 4K avec zoom 5X, rotation 360° et suivi automatique.',
                en: '4K PoE PTZ security camera with 5X zoom, 360° rotation and auto-tracking.'
            },
            amzLink: 'https://www.amazon.fr/dp/B098XGF233',
            reoLink: 'https://reolink.com/fr/product/rlc-823a/',
            ytLink: ''
        },
        {
            id: 'rlc_810a',
            name: 'RLC-810A',
            img: 'https://m.media-amazon.com/images/I/61b7b7pS6oL._AC_SL1500_.jpg',
            angle: 87,
            pirRange: 20,
            floodRange: 0,
            visionRange: 30,
            tags: {
                fr: ['PoE', '4K', 'Format Bullet', 'Détection Intelligente'],
                en: ['PoE', '4K', 'Bullet Style', 'Smart Detection']
            },
            desc: {
                fr: 'Caméra IP PoE 4K format tube avec détection intelligente de personnes et de véhicules.',
                en: '4K PoE bullet IP camera with smart person and vehicle detection.'
            },
            amzLink: 'https://www.amazon.fr/dp/B08KzB1C33',
            reoLink: 'https://reolink.com/fr/product/rlc-810a/',
            ytLink: ''
        },
        {
            id: 'rlc_820a',
            name: 'RLC-820A',
            img: 'https://m.media-amazon.com/images/I/61zB5b%2BbOAL._AC_SL1500_.jpg',
            angle: 87,
            pirRange: 20,
            floodRange: 0,
            visionRange: 30,
            tags: {
                fr: ['PoE', '4K', 'Format Dôme', 'Détection Intelligente'],
                en: ['PoE', '4K', 'Dome Style', 'Smart Detection']
            },
            desc: {
                fr: 'Caméra de surveillance dôme PoE 4K discrète pour un montage au plafond ou au mur.',
                en: 'Discreet 4K PoE dome surveillance camera for ceiling or wall mounting.'
            },
            amzLink: 'https://www.amazon.fr/dp/B08L7V471D',
            reoLink: 'https://reolink.com/fr/product/rlc-820a/',
            ytLink: ''
        },
        {
            id: 'rlc_1212a',
            name: 'RLC-1212A',
            img: 'https://m.media-amazon.com/images/I/61%2B9bY5B6uL._AC_SL1500_.jpg',
            angle: 107,
            pirRange: 20,
            floodRange: 15,
            visionRange: 30,
            tags: {
                fr: ['PoE', '12MP', 'Projecteur', 'Audio Bidirectionnel'],
                en: ['PoE', '12MP', 'Spotlight', 'Two-way Audio']
            },
            desc: {
                fr: 'Caméra de sécurité PoE 12 Mégapixels offrant une clarté extrême et vision nocturne couleur.',
                en: '12 Megapixel PoE security camera offering extreme clarity and color night vision.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0B7JDTY3T',
            reoLink: 'https://reolink.com/fr/product/rlc-1212a/',
            ytLink: ''
        },
        {
            id: 'cx810',
            name: 'CX810',
            img: 'https://m.media-amazon.com/images/I/51wXhWwQ51L._AC_SL1500_.jpg',
            angle: 105,
            pirRange: 20,
            floodRange: 10,
            visionRange: 30,
            tags: {
                fr: ['PoE', '4K', 'ColorX', 'Vision Nocturne True Color'],
                en: ['PoE', '4K', 'ColorX', 'True Color Night Vision']
            },
            desc: {
                fr: 'Caméra PoE 4K dotée de la technologie ColorX pour une vision nocturne en couleur sans projecteur.',
                en: '4K PoE camera equipped with ColorX technology for color night vision without spotlights.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0D1G2D3H1',
            reoLink: 'https://reolink.com/fr/product/cx810/',
            ytLink: ''
        },
        {
            id: 'cx410',
            name: 'CX410',
            img: 'https://m.media-amazon.com/images/I/61yB%2BmZ4H5L._AC_SL1500_.jpg',
            angle: 89,
            pirRange: 20,
            floodRange: 10,
            visionRange: 30,
            tags: {
                fr: ['PoE', '2K', 'ColorX', 'Vision Nocturne True Color'],
                en: ['PoE', '2K', 'ColorX', 'True Color Night Vision']
            },
            desc: {
                fr: 'Caméra ColorX 2K 4MP avec ouverture F1.0 pour des images lumineuses dans l’obscurité totale.',
                en: '2K 4MP ColorX camera with F1.0 aperture for bright images in total darkness.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0C3VWJ8Z9',
            reoLink: 'https://reolink.com/fr/product/cx410/',
            ytLink: ''
        },
        {
            id: 'e1_outdoor_pro',
            name: 'E1 Outdoor Pro',
            img: 'https://m.media-amazon.com/images/I/51T%2Bb4jJ0SL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 15,
            floodRange: 15,
            visionRange: 15,
            tags: {
                fr: ['Wi-Fi 6', '4K', 'PTZ', 'Compacte'],
                en: ['Wi-Fi 6', '4K', 'PTZ', 'Compact']
            },
            desc: {
                fr: 'Caméra Wi-Fi 6 PTZ 4K compacte avec zoom optique 3X et suivi automatique.',
                en: 'Compact 4K PTZ Wi-Fi 6 camera with 3X optical zoom and auto-tracking.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0C1YW72X1',
            reoLink: 'https://reolink.com/fr/product/e1-outdoor-pro/',
            ytLink: ''
        },
        {
            id: 'e1_outdoor_cx',
            name: 'E1 Outdoor CX',
            img: 'https://m.media-amazon.com/images/I/51T%2Bb4jJ0SL._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 15,
            floodRange: 15,
            visionRange: 15,
            tags: {
                fr: ['Wi-Fi', 'ColorX', 'PTZ', 'Dual-Band'],
                en: ['Wi-Fi', 'ColorX', 'PTZ', 'Dual-Band']
            },
            desc: {
                fr: 'Caméra PTZ extérieure avec vision nocturne en couleur véritable ColorX et suivi.',
                en: 'Outdoor PTZ camera with ColorX true color night vision and tracking.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0C1YW72X1',
            reoLink: 'https://reolink.com/fr/product/e1-outdoor-cx/',
            ytLink: ''
        },
        {
            id: 'go_pt_ultra',
            name: 'Go PT Ultra',
            img: 'https://m.media-amazon.com/images/I/61Vv%2BmZ4H5L._AC_SL1500_.jpg',
            angle: 90,
            pirRange: 10,
            floodRange: 10,
            visionRange: 15,
            tags: {
                fr: ['4G/LTE', 'Batterie', 'Solaire', 'PTZ', '4K'],
                en: ['4G/LTE', 'Battery', 'Solar', 'PTZ', '4K']
            },
            desc: {
                fr: 'Caméra 4G LTE autonome 4K avec fonction Pan/Tilt et détection intelligente.',
                en: 'Standalone 4K 4G LTE camera with Pan/Tilt function and smart detection.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CJFD3W1P',
            reoLink: 'https://reolink.com/fr/product/reolink-go-pt-ultra/',
            ytLink: ''
        },
        {
            id: 'go_plus',
            name: 'Go Plus',
            img: 'https://m.media-amazon.com/images/I/61yB%2BmZ4H5L._AC_SL1500_.jpg',
            angle: 115,
            pirRange: 10,
            floodRange: 0,
            visionRange: 10,
            tags: {
                fr: ['4G/LTE', 'Batterie', 'Solaire', '2K'],
                en: ['4G/LTE', 'Battery', 'Solar', '2K']
            },
            desc: {
                fr: 'Caméra de sécurité 4G 100% sans fil 4MP avec détection de personnes/véhicules.',
                en: '100% wire-free 4MP 4G security camera with person/vehicle detection.'
            },
            amzLink: 'https://www.amazon.fr/dp/B093H251T8',
            reoLink: 'https://reolink.com/fr/product/reolink-go-plus/',
            ytLink: ''
        }
    ]
};
