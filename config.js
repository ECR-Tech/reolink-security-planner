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
            id: 'argus_track', 
            name: 'Argus Track', 
            // NOUVEAU : Ajoute une image (Amazon ou autre) ici. 
            // Laisse vide ('') si tu n'en as pas, le picto générique prendra le relais.
            img: 'https://m.media-amazon.com/images/I/51wXF1VlqLL._AC_SL1500_.jpg', 
            
            angle: 105, 
            pirRange: 10, floodRange: 15, visionRange: 25,
            
            tags: {
                fr: ['Sur Batterie', 'Wi-Fi', 'Auto-Tracking'],
                en: ['Battery-Powered', 'Wi-Fi', 'Auto-Tracking']
            },
            desc: {
                fr: 'Caméra sur batterie avec double objectif. Offre une vue grand angle et un zoom avec suivi automatique.',
                en: 'Battery-powered camera with dual lens. Offers wide-angle view and zoom with auto-tracking.'
            },
            
            amzLink: 'https://www.amazon.fr/dp/B0CVXF8W7C', 
            reoLink: 'https://reolink.com/fr/product/argus-track/',
            ytLink: 'https://youtube.com/@ecoradinmalin' 
        },
        { 
            id: 'duo3_poe', 
            name: 'Duo 3 PoE', 
            img: 'https://m.media-amazon.com/images/I/61b-9U-0zCL._AC_SL1500_.jpg',
            angle: 180, 
            pirRange: 15, floodRange: 20, visionRange: 30,
            tags: {
                fr: ['Filaire PoE', '16 Mégapixels', 'Panoramique 180°'],
                en: ['PoE Wired', '16 Megapixels', '180° Panoramic']
            },
            desc: {
                fr: 'Vue panoramique parfaite sans déformation à 180 degrés. Alimentation via câble Ethernet.',
                en: 'Perfect 180-degree panoramic view without distortion. Powered via Ethernet cable.'
            },
            amzLink: 'https://www.amazon.fr/dp/B0CQ2N5FMT', 
            reoLink: 'https://reolink.com/fr/product/reolink-duo-3-poe/',
            ytLink: '' 
        }
    ]
};
