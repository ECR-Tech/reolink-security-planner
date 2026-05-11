// ==========================================
// CONFIGURATION : REOLINK SECURITY PLANNER
// Géré par Ecoradinmalin
// ==========================================

const appConfig = {
    globalLinks: {
        amazon: "https://www.amazon.fr/stores/Reolink/page/11267B80-C68C-4C92-80D7-F4DA75D4E8DC", 
        reolink: "https://reolink.com/fr/" 
    },

    // 1. LES CATÉGORIES (Bilingues)
    categories: [
        { id: 'nouvelle_gamme', name: { fr: '🌟 Nouvelle Gamme', en: '🌟 New Releases' } },
        { id: 'wifi_simple', name: { fr: '📶 Wi-Fi Simple Objectif', en: '📶 Wi-Fi Single Lens' } },
        { id: 'wifi_double', name: { fr: '📶 Wi-Fi Double Objectif', en: '📶 Wi-Fi Dual Lens' } },
        { id: 'wifi_batt_simple', name: { fr: '🔋 Wi-Fi Batterie Simple Objectif', en: '🔋 Wi-Fi Battery Single Lens' } },
        { id: 'wifi_batt_double', name: { fr: '🔋 Wi-Fi Batterie Double Objectif', en: '🔋 Wi-Fi Battery Dual Lens' } },
        { id: 'poe_fixe', name: { fr: '🔌 PoE Objectif Fixe (Sans Zoom)', en: '🔌 PoE Fixed Lens (No Zoom)' } },
        { id: 'poe_fixe_zoom', name: { fr: '🔌 PoE Objectif Fixe (Avec Zoom)', en: '🔌 PoE Fixed Lens (Zoom)' } },
        { id: 'poe_mobile', name: { fr: '🔌 PoE PTZ (Mobile avec Zoom)', en: '🔌 PoE PTZ (Motorized)' } }
    ],

    // 2. LE CATALOGUE
    cameras: [
        // --- NOUVELLE GAMME ---
        {
            id: 'trackflex_floodlight_wifi', categoryId: 'nouvelle_gamme', name: 'TrackFlex Floodlight WiFi', img: '',
            angle: 90, pirRange: 12, floodRange: 15, visionRange: 25,
            tags: { fr: ['Nouveauté', 'Wi-Fi', 'Hybride'], en: ['New', 'Wi-Fi', 'Hybrid'] },
            desc: { fr: 'Nouvelle caméra hybride avec projecteur.', en: 'New hybrid camera with floodlight.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'elite_floodlight_wifi', categoryId: 'nouvelle_gamme', name: 'Elite Floodlight WiFi', img: '',
            angle: 105, pirRange: 15, floodRange: 25, visionRange: 30,
            tags: { fr: ['Nouveauté', 'Projecteur Puissant'], en: ['New', 'Powerful Floodlight'] },
            desc: { fr: 'Caméra Premium avec éclairage massif.', en: 'Premium camera with massive illumination.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'reolink_elite_wifi', categoryId: 'nouvelle_gamme', name: 'Reolink Elite WiFi', img: '',
            angle: 105, pirRange: 15, floodRange: 15, visionRange: 30,
            tags: { fr: ['Nouveauté', 'Premium', 'Wi-Fi'], en: ['New', 'Premium', 'Wi-Fi'] },
            desc: { fr: 'Le nouveau standard Premium Reolink en Wi-Fi.', en: 'The new Reolink Premium Wi-Fi standard.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'duo_3_wifi', categoryId: 'nouvelle_gamme', name: 'Reolink Duo 3 WiFi', img: '',
            angle: 180, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['16MP', 'Panoramique 180°'], en: ['16MP', '180° Panoramic'] },
            desc: { fr: 'La version 16 Mégapixels de la Duo arrive en Wi-Fi.', en: 'The 16 Megapixel version of the Duo arrives in Wi-Fi.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/reolink-duo-3-wifi/', ytLink: ''
        },
        {
            id: 'solar_floodlight_cam', categoryId: 'nouvelle_gamme', name: 'Solar Floodlight Cam', img: '',
            angle: 120, pirRange: 12, floodRange: 20, visionRange: 20,
            tags: { fr: ['Solaire', 'Projecteur'], en: ['Solar', 'Floodlight'] },
            desc: { fr: 'Projecteur autonome alimenté par énergie solaire.', en: 'Autonomous floodlight powered by solar energy.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'argus_magicam', categoryId: 'nouvelle_gamme', name: 'Argus MagiCam', img: '',
            angle: 125, pirRange: 10, floodRange: 10, visionRange: 15,
            tags: { fr: ['Batterie', 'Compacte', 'Innovation'], en: ['Battery', 'Compact', 'Innovation'] },
            desc: { fr: 'La caméra sur batterie nouvelle génération.', en: 'The next-gen battery camera.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'altas_pt_ultra_new', categoryId: 'nouvelle_gamme', name: 'Reolink Altas PT Ultra', img: '',
            angle: 90, pirRange: 10, floodRange: 0, visionRange: 15,
            tags: { fr: ['Enregistrement Continu', 'Sur Batterie'], en: ['Continuous Recording', 'Battery'] },
            desc: { fr: 'La première caméra sur batterie avec enregistrement continu et suivi PTZ.', en: 'First battery camera with continuous recording and PTZ.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/reolink-altas-pt-ultra/', ytLink: ''
        },

        // --- Wi-Fi SIMPLE OBJECTIF ---
        {
            id: 'lumus_pro', categoryId: 'wifi_simple', name: 'Lumus Pro', img: '',
            angle: 100, pirRange: 10, floodRange: 10, visionRange: 15,
            tags: { fr: ['Wi-Fi', 'Projecteur'], en: ['Wi-Fi', 'Spotlight'] },
            desc: { fr: 'Version améliorée de la fameuse Reolink Lumus.', en: 'Upgraded version of the famous Lumus.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'rlc_811wa', categoryId: 'wifi_simple', name: 'RLC-811WA', img: '',
            angle: 105, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['Wi-Fi', 'Zoom Optique 5X'], en: ['Wi-Fi', '5X Optical Zoom'] },
            desc: { fr: 'Caméra 4K Wi-Fi avec zoom optique.', en: '4K Wi-Fi camera with optical zoom.' },
            amzLink: 'https://www.amazon.fr/dp/B09CYS878Z', reoLink: 'https://reolink.com/fr/product/rlc-811wa/', ytLink: ''
        },
        {
            id: 'rlc_843wa', categoryId: 'wifi_simple', name: 'RLC-843WA', img: '',
            angle: 105, pirRange: 20, floodRange: 10, visionRange: 30,
            tags: { fr: ['Wi-Fi', '4K', 'Dôme'], en: ['Wi-Fi', '4K', 'Dome'] },
            desc: { fr: 'Caméra dôme 4K Wi-Fi avec protection anti-vandalisme.', en: '4K Wi-Fi dome camera with vandal-proof design.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/rlc-843wa/', ytLink: ''
        },
        {
            id: 'rlc_810wa', categoryId: 'wifi_simple', name: 'RLC-810WA', img: '',
            angle: 87, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['Wi-Fi', '4K'], en: ['Wi-Fi', '4K'] },
            desc: { fr: 'La fiabilité de la série 810 en version Wi-Fi.', en: 'Reliability of the 810 series in Wi-Fi version.' },
            amzLink: 'https://www.amazon.fr/dp/B0CHYCY3T5', reoLink: 'https://reolink.com/fr/product/rlc-810wa/', ytLink: ''
        },
        {
            id: 'rlc_823s1w', categoryId: 'wifi_simple', name: 'RLC-823S1W', img: '',
            angle: 90, pirRange: 20, floodRange: 15, visionRange: 50,
            tags: { fr: ['PTZ', 'Wi-Fi'], en: ['PTZ', 'Wi-Fi'] },
            desc: { fr: 'Caméra PTZ 4K connectée en Wi-Fi.', en: '4K PTZ camera connected via Wi-Fi.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'rlc_840wa', categoryId: 'wifi_simple', name: 'RLC-840WA', img: '',
            angle: 105, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['Wi-Fi', '4K'], en: ['Wi-Fi', '4K'] },
            desc: { fr: 'Sécurité Wi-Fi haute définition.', en: 'High definition Wi-Fi security.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'e1_outdoor_pro', categoryId: 'wifi_simple', name: 'E1 Outdoor Pro', img: '',
            angle: 90, pirRange: 15, floodRange: 15, visionRange: 15,
            tags: { fr: ['Wi-Fi 6', 'PTZ', 'Compacte'], en: ['Wi-Fi 6', 'PTZ', 'Compact'] },
            desc: { fr: 'Caméra PTZ compacte 4K Wi-Fi 6.', en: 'Compact 4K PTZ Wi-Fi 6 camera.' },
            amzLink: 'https://www.amazon.fr/dp/B0C1YW72X1', reoLink: 'https://reolink.com/fr/product/e1-outdoor-pro/', ytLink: ''
        },
        {
            id: 'cx410w', categoryId: 'wifi_simple', name: 'CX410W', img: '',
            angle: 89, pirRange: 15, floodRange: 10, visionRange: 30,
            tags: { fr: ['Wi-Fi', 'ColorX'], en: ['Wi-Fi', 'ColorX'] },
            desc: { fr: 'Vision nocturne ColorX en Wi-Fi.', en: 'ColorX night vision over Wi-Fi.' },
            amzLink: 'https://www.amazon.fr/dp/B0CMQG8D8J', reoLink: 'https://reolink.com/fr/product/cx410w/', ytLink: ''
        },
        {
            id: 'reolink_lumus', categoryId: 'wifi_simple', name: 'Reolink Lumus', img: '',
            angle: 100, pirRange: 10, floodRange: 10, visionRange: 15,
            tags: { fr: ['Wi-Fi', 'Projecteur'], en: ['Wi-Fi', 'Spotlight'] },
            desc: { fr: 'Petite caméra Wi-Fi avec projecteur LED.', en: 'Small Wi-Fi camera with LED spotlight.' },
            amzLink: 'https://www.amazon.fr/dp/B0821MDRT7', reoLink: 'https://reolink.com/fr/product/reolink-lumus/', ytLink: ''
        },
        {
            id: 'e1_outdoor_cx', categoryId: 'wifi_simple', name: 'E1 Outdoor CX', img: '',
            angle: 90, pirRange: 15, floodRange: 15, visionRange: 15,
            tags: { fr: ['PTZ', 'ColorX'], en: ['PTZ', 'ColorX'] },
            desc: { fr: 'PTZ extérieure avec technologie ColorX.', en: 'Outdoor PTZ with ColorX technology.' },
            amzLink: 'https://www.amazon.fr/dp/B0CTHL9TQC', reoLink: 'https://reolink.com/fr/product/e1-outdoor-cx/', ytLink: ''
        },
        {
            id: 'e1_outdoor', categoryId: 'wifi_simple', name: 'E1 Outdoor', img: '',
            angle: 90, pirRange: 15, floodRange: 15, visionRange: 15,
            tags: { fr: ['PTZ', 'Wi-Fi'], en: ['PTZ', 'Wi-Fi'] },
            desc: { fr: 'La classique PTZ compacte.', en: 'The classic compact PTZ.' },
            amzLink: 'https://www.amazon.fr/dp/B08YYW4Z6Y', reoLink: 'https://reolink.com/fr/product/e1-outdoor/', ytLink: ''
        },
        {
            id: 'rlc_510wa', categoryId: 'wifi_simple', name: 'RLC-510WA', img: '',
            angle: 80, pirRange: 15, floodRange: 0, visionRange: 30,
            tags: { fr: ['Wi-Fi', '5MP'], en: ['Wi-Fi', '5MP'] },
            desc: { fr: 'Caméra Wi-Fi 5 Mégapixels fiable.', en: 'Reliable 5 Megapixel Wi-Fi camera.' },
            amzLink: 'https://www.amazon.fr/dp/B08MT38V89', reoLink: 'https://reolink.com/fr/product/rlc-510wa/', ytLink: ''
        },
        {
            id: '2k_wifi_generic', categoryId: 'wifi_simple', name: '2K+ Wi-Fi Caméras', img: '',
            angle: 90, pirRange: 15, floodRange: 0, visionRange: 20,
            tags: { fr: ['2K', 'Wi-Fi'], en: ['2K', 'Wi-Fi'] },
            desc: { fr: 'Modèles génériques 2K+ Wi-Fi.', en: 'Generic 2K+ Wi-Fi models.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },

        // --- Wi-Fi DOUBLE OBJECTIF ---
        {
            id: 'duo_2_wifi', categoryId: 'wifi_double', name: 'Reolink Duo 2 WiFi', img: '',
            angle: 180, pirRange: 15, floodRange: 15, visionRange: 30,
            tags: { fr: ['Wi-Fi', '180°'], en: ['Wi-Fi', '180°'] },
            desc: { fr: 'Caméra WiFi double objectif fluide à 180°.', en: 'Dual-lens WiFi camera, seamless 180°.' },
            amzLink: 'https://www.amazon.fr/dp/B0B42J2L9X', reoLink: 'https://reolink.com/fr/product/reolink-duo-2-wifi/', ytLink: ''
        },
        {
            id: 'trackmix_wifi', categoryId: 'wifi_double', name: 'Reolink TrackMix WiFi', img: '',
            angle: 90, pirRange: 15, floodRange: 15, visionRange: 30,
            tags: { fr: ['Wi-Fi', 'Auto-Tracking'], en: ['Wi-Fi', 'Auto-Tracking'] },
            desc: { fr: 'Double objectif, suivi auto et zoom hybride.', en: 'Dual lens, auto-tracking, hybrid zoom.' },
            amzLink: 'https://www.amazon.fr/dp/B0B3RCHY18', reoLink: 'https://reolink.com/fr/product/reolink-trackmix-wifi/', ytLink: ''
        },

        // --- BATTERIE SIMPLE OBJECTIF ---
        {
            id: 'argus_4_pro', categoryId: 'wifi_batt_simple', name: 'Argus 4 Pro', img: '',
            angle: 180, pirRange: 10, floodRange: 15, visionRange: 20,
            tags: { fr: ['Batterie', 'ColorX', '180°'], en: ['Battery', 'ColorX', '180°'] },
            desc: { fr: 'Caméra sur batterie 4K, vision ColorX.', en: '4K battery camera, ColorX vision.' },
            amzLink: 'https://www.amazon.fr/dp/B0D1G7Q3X7', reoLink: 'https://reolink.com/fr/product/argus-4-pro/', ytLink: ''
        },
        {
            id: 'argus_pt_ultra', categoryId: 'wifi_batt_simple', name: 'Argus PT Ultra', img: '',
            angle: 90, pirRange: 10, floodRange: 10, visionRange: 15,
            tags: { fr: ['Batterie', 'PTZ', '4K'], en: ['Battery', 'PTZ', '4K'] },
            desc: { fr: 'PTZ sur batterie en 4K.', en: '4K battery-powered PTZ.' },
            amzLink: 'https://www.amazon.fr/dp/B0CDBSKGB4', reoLink: 'https://reolink.com/fr/product/argus-pt-ultra/', ytLink: ''
        },
        {
            id: 'argus_3_ultra', categoryId: 'wifi_batt_simple', name: 'Argus 3 Ultra', img: '',
            angle: 125, pirRange: 10, floodRange: 10, visionRange: 15,
            tags: { fr: ['Batterie', '4K', 'Compacte'], en: ['Battery', '4K', 'Compact'] },
            desc: { fr: 'Caméra 4K sur batterie.', en: '4K battery camera.' },
            amzLink: 'https://www.amazon.fr/dp/B0CDBTQWZS', reoLink: 'https://reolink.com/fr/product/argus-3-ultra/', ytLink: ''
        },
        {
            id: 'argus_eco_ultra', categoryId: 'wifi_batt_simple', name: 'Argus Eco Ultra', img: '',
            angle: 105, pirRange: 10, floodRange: 0, visionRange: 15,
            tags: { fr: ['Batterie', 'Économique'], en: ['Battery', 'Budget'] },
            desc: { fr: 'La solution batterie abordable en 4K.', en: 'Affordable 4K battery solution.' },
            amzLink: 'https://www.amazon.fr/dp/B0CJFD1W9B', reoLink: 'https://reolink.com/fr/product/argus-eco-ultra/', ytLink: ''
        },
        {
            id: 'argus_pt_5', categoryId: 'wifi_batt_simple', name: 'Argus PT (5/2.4GHz)', img: '',
            angle: 90, pirRange: 10, floodRange: 0, visionRange: 15,
            tags: { fr: ['Batterie', 'PTZ', 'Dual-Band'], en: ['Battery', 'PTZ', 'Dual-Band'] },
            desc: { fr: 'PTZ sur batterie avec Wi-Fi Dual-Band.', en: 'Battery PTZ with Dual-Band Wi-Fi.' },
            amzLink: 'https://www.amazon.fr/dp/B09CYS878Z', reoLink: 'https://reolink.com/fr/product/argus-pt/', ytLink: ''
        },
        {
            id: 'argus_eco', categoryId: 'wifi_batt_simple', name: 'Argus Eco', img: '',
            angle: 100, pirRange: 10, floodRange: 0, visionRange: 10,
            tags: { fr: ['Batterie', '1080p'], en: ['Battery', '1080p'] },
            desc: { fr: 'Caméra sur batterie 1080p.', en: '1080p battery camera.' },
            amzLink: 'https://www.amazon.fr/dp/B07R5YH3R3', reoLink: 'https://reolink.com/fr/product/argus-eco/', ytLink: ''
        },
        {
            id: 'altas_pt_ultra', categoryId: 'wifi_batt_simple', name: 'Reolink Altas PT Ultra', img: '',
            angle: 90, pirRange: 10, floodRange: 0, visionRange: 15,
            tags: { fr: ['Batterie', 'Enregistrement 24/7'], en: ['Battery', '24/7 Recording'] },
            desc: { fr: 'Enregistrement continu sur batterie.', en: 'Continuous recording on battery.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/reolink-altas-pt-ultra/', ytLink: ''
        },
        {
            id: 'altas', categoryId: 'wifi_batt_simple', name: 'Reolink Altas', img: '',
            angle: 105, pirRange: 10, floodRange: 0, visionRange: 15,
            tags: { fr: ['Batterie', 'Enregistrement 24/7'], en: ['Battery', '24/7 Recording'] },
            desc: { fr: 'Modèle fixe Altas.', en: 'Fixed Altas model.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },

        // --- BATTERIE DOUBLE OBJECTIF ---
        {
            id: 'trackmix_batt', categoryId: 'wifi_batt_double', name: 'Reolink TrackMix (Batterie)', img: '',
            angle: 90, pirRange: 10, floodRange: 15, visionRange: 15,
            tags: { fr: ['Batterie', 'Auto-Tracking'], en: ['Battery', 'Auto-Tracking'] },
            desc: { fr: 'Double objectif sur batterie.', en: 'Dual lens on battery.' },
            amzLink: 'https://www.amazon.fr/dp/B0BPYPK81H', reoLink: 'https://reolink.com/fr/product/reolink-trackmix/', ytLink: ''
        },
        {
            id: 'duo_2_batt', categoryId: 'wifi_batt_double', name: 'Reolink Duo 2 (Batterie)', img: '',
            angle: 180, pirRange: 10, floodRange: 15, visionRange: 15,
            tags: { fr: ['Batterie', '180°'], en: ['Battery', '180°'] },
            desc: { fr: 'Panoramique 180° sans aucun fil.', en: '180° panoramic without wires.' },
            amzLink: 'https://www.amazon.fr/dp/B0B5ZTVK5Z', reoLink: 'https://reolink.com/fr/product/reolink-duo-2/', ytLink: ''
        },

        // --- POE OBJECTIF FIXE SANS ZOOM ---
        {
            id: 'elite_pro_flood_poe', categoryId: 'poe_fixe', name: 'Elite Pro Floodlight PoE', img: '',
            angle: 105, pirRange: 20, floodRange: 25, visionRange: 30,
            tags: { fr: ['PoE', 'Projecteur Puissant'], en: ['PoE', 'Powerful Floodlight'] },
            desc: { fr: 'Éclairage puissant alimenté en PoE.', en: 'Powerful lighting powered by PoE.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'duo_3v_poe', categoryId: 'poe_fixe', name: 'Reolink Duo 3V PoE', img: '',
            angle: 180, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '16MP', 'Dôme'], en: ['PoE', '16MP', 'Dome'] },
            desc: { fr: 'Version Dôme de la Duo 3.', en: 'Dome version of the Duo 3.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'duo_3_poe', categoryId: 'poe_fixe', name: 'Reolink Duo 3 PoE', img: '',
            angle: 180, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '16MP', '180°'], en: ['PoE', '16MP', '180°'] },
            desc: { fr: 'Vue panoramique parfaite à 180 degrés.', en: 'Perfect 180-degree panoramic view.' },
            amzLink: 'https://www.amazon.fr/dp/B0CPHYT9D5', reoLink: 'https://reolink.com/fr/product/reolink-duo-3-poe/', ytLink: ''
        },
        {
            id: 'rlc_1240a', categoryId: 'poe_fixe', name: 'RLC-1240A', img: '',
            angle: 107, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['PoE', '12MP'], en: ['PoE', '12MP'] },
            desc: { fr: 'Caméra PoE 12 Mégapixels.', en: '12 Megapixel PoE camera.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/rlc-1240a/', ytLink: ''
        },
        {
            id: 'rlc_1212a', categoryId: 'poe_fixe', name: 'RLC-1212A', img: '',
            angle: 107, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '12MP', 'Projecteur'], en: ['PoE', '12MP', 'Spotlight'] },
            desc: { fr: '12MP avec vision couleur.', en: '12MP with color night vision.' },
            amzLink: 'https://www.amazon.fr/dp/B0B7JDTY3T', reoLink: 'https://reolink.com/fr/product/rlc-1212a/', ytLink: ''
        },
        {
            id: 'rlc_1224a', categoryId: 'poe_fixe', name: 'RLC-1224A', img: '',
            angle: 107, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '12MP', 'Dôme'], en: ['PoE', '12MP', 'Dome'] },
            desc: { fr: '12MP en format dôme.', en: '12MP in dome format.' },
            amzLink: 'https://www.amazon.fr/dp/B0B8Z73TGH', reoLink: 'https://reolink.com/fr/product/rlc-1224a/', ytLink: ''
        },

        // --- POE FIXE AVEC ZOOM ---
        {
            id: 'rlc_811a', categoryId: 'poe_fixe_zoom', name: 'RLC-811A', img: '',
            angle: 105, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', 'Zoom 5X'], en: ['PoE', '5X Zoom'] },
            desc: { fr: 'Caméra PoE 4K avec zoom optique.', en: '4K PoE camera with optical zoom.' },
            amzLink: 'https://www.amazon.fr/dp/B08X1LMP8D', reoLink: 'https://reolink.com/fr/product/rlc-811a/', ytLink: ''
        },
        {
            id: 'rlc_843a', categoryId: 'poe_fixe_zoom', name: 'RLC-843A', img: '',
            angle: 105, pirRange: 20, floodRange: 10, visionRange: 30,
            tags: { fr: ['PoE', 'Dôme Antivandale'], en: ['PoE', 'Vandal-proof Dome'] },
            desc: { fr: 'Dôme 4K avec zoom optique.', en: '4K Dome with optical zoom.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/rlc-843a/', ytLink: ''
        },
        {
            id: 'rlc_840a', categoryId: 'poe_fixe_zoom', name: 'RLC-840A', img: '',
            angle: 105, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['PoE', 'Zoom Optique'], en: ['PoE', 'Optical Zoom'] },
            desc: { fr: 'Tube 4K avec zoom.', en: '4K Bullet with zoom.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'duo_2v_poe', categoryId: 'poe_fixe_zoom', name: 'Reolink Duo 2V PoE', img: '',
            angle: 180, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '180°', 'Dôme'], en: ['PoE', '180°', 'Dome'] },
            desc: { fr: 'Double objectif 180° en format dôme PoE.', en: 'Dual lens 180° in PoE dome format.' },
            amzLink: 'https://www.amazon.fr/dp/B0C39WGB17', reoLink: 'https://reolink.com/fr/product/reolink-duo-2v-poe/', ytLink: ''
        },
        {
            id: 'rlc_810a', categoryId: 'poe_fixe_zoom', name: 'RLC-810A', img: '',
            angle: 87, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['PoE', '4K'], en: ['PoE', '4K'] },
            desc: { fr: 'Tube 4K classique et robuste.', en: 'Classic and robust 4K bullet.' },
            amzLink: 'https://www.amazon.fr/dp/B08KzB1C33', reoLink: 'https://reolink.com/fr/product/rlc-810a/', ytLink: ''
        },
        {
            id: 'rlc_820a', categoryId: 'poe_fixe_zoom', name: 'RLC-820A', img: '',
            angle: 87, pirRange: 20, floodRange: 0, visionRange: 30,
            tags: { fr: ['PoE', '4K', 'Dôme'], en: ['PoE', '4K', 'Dome'] },
            desc: { fr: 'Dôme 4K classique.', en: 'Classic 4K dome.' },
            amzLink: 'https://www.amazon.fr/dp/B08L7V471D', reoLink: 'https://reolink.com/fr/product/rlc-820a/', ytLink: ''
        },

        // --- POE MOBILE AVEC ZOOM (PTZ) ---
        {
            id: 'rlc_823s2', categoryId: 'poe_mobile', name: 'RLC-823S2', img: '',
            angle: 90, pirRange: 20, floodRange: 20, visionRange: 60,
            tags: { fr: ['PoE', 'PTZ', 'Haute Performance'], en: ['PoE', 'PTZ', 'High Performance'] },
            desc: { fr: 'PTZ 4K nouvelle génération.', en: 'Next-gen 4K PTZ.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'rlc_823s1', categoryId: 'poe_mobile', name: 'RLC-823S1', img: '',
            angle: 90, pirRange: 20, floodRange: 20, visionRange: 60,
            tags: { fr: ['PoE', 'PTZ'], en: ['PoE', 'PTZ'] },
            desc: { fr: 'Caméra PTZ 4K robuste.', en: 'Robust 4K PTZ camera.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/', ytLink: ''
        },
        {
            id: 'trackmix_poe', categoryId: 'poe_mobile', name: 'Reolink TrackMix PoE', img: '',
            angle: 90, pirRange: 15, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', 'Auto-Tracking', 'Double Objectif'], en: ['PoE', 'Auto-Tracking', 'Dual Lens'] },
            desc: { fr: 'Suivi automatique et zoom hybride.', en: 'Auto-tracking and hybrid zoom.' },
            amzLink: 'https://www.amazon.fr/dp/B0B3RJQJ4J', reoLink: 'https://reolink.com/fr/product/reolink-trackmix-poe/', ytLink: ''
        },
        {
            id: 'e1_outdoor_se_poe', categoryId: 'poe_mobile', name: 'E1 Outdoor SE PoE', img: '',
            angle: 90, pirRange: 15, floodRange: 10, visionRange: 15,
            tags: { fr: ['PoE', 'PTZ', 'Compacte'], en: ['PoE', 'PTZ', 'Compact'] },
            desc: { fr: 'PTZ compacte version PoE.', en: 'Compact PTZ PoE version.' },
            amzLink: '', reoLink: 'https://reolink.com/fr/product/e1-outdoor-se-poe/', ytLink: ''
        },
        {
            id: 'duo_2_poe', categoryId: 'poe_mobile', name: 'Reolink Duo 2 PoE', img: '',
            angle: 180, pirRange: 20, floodRange: 15, visionRange: 30,
            tags: { fr: ['PoE', '180°'], en: ['PoE', '180°'] },
            desc: { fr: 'La Duo 2 en version PoE filaire.', en: 'The Duo 2 in wired PoE version.' },
            amzLink: 'https://www.amazon.fr/dp/B0B42HRB4L', reoLink: 'https://reolink.com/fr/product/reolink-duo-2-poe/', ytLink: ''
        },
        {
            id: 'cx820', categoryId: 'poe_mobile', name: 'CX820', img: '',
            angle: 105, pirRange: 20, floodRange: 10, visionRange: 30,
            tags: { fr: ['PoE', 'ColorX', 'Dôme'], en: ['PoE', 'ColorX', 'Dome'] },
            desc: { fr: 'Vision ColorX en format dôme.', en: 'ColorX vision in dome format.' },
            amzLink: 'https://www.amazon.fr/dp/B0D1G466QY', reoLink: 'https://reolink.com/fr/product/cx820/', ytLink: ''
        }
    ]
};
