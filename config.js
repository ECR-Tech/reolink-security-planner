// ==========================================
// CONFIGURATION : REOLINK SECURITY PLANNER
// Géré par Ecoradinmalin
// ==========================================

const appConfig = {
    // 1. LIENS GLOBAUX BRUTS (Boutons en bas du panier)
    // L'application se chargera d'ajouter tes suffixes d'affiliation !
    globalLinks: {
        amazon: "https://www.amazon.fr/stores/Reolink/page/...", 
        reolink: "https://reolink.com/fr/" 
    },

    // 2. CATALOGUE DES CAMÉRAS
    cameras: [
        { 
            id: 'argus_track', 
            name: 'Argus Track', 
            angle: 105, 
            pirRange: 10, floodRange: 15, visionRange: 25,
            
            // Multilingue pour les tags et descriptions
            tags: {
                fr: ['Sur Batterie', 'Wi-Fi', 'Auto-Tracking'],
                en: ['Battery-Powered', 'Wi-Fi', 'Auto-Tracking']
            },
            desc: {
                fr: 'Caméra sur batterie avec double objectif. Offre une vue grand angle et un zoom avec suivi automatique.',
                en: 'Battery-powered camera with dual lens. Offers wide-angle view and zoom with auto-tracking.'
            },
            
            // Mets simplement les LIENS BRUTS des produits ici :
            amzLink: 'https://www.amazon.fr/dp/B0CVXF8W7C', 
            reoLink: 'https://reolink.com/fr/product/argus-track/',
            
            ytLink: 'https://youtube.com/@ecoradinmalin' 
        },
        { 
            id: 'duo3_poe', 
            name: 'Duo 3 PoE', 
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
            ytLink: '' // Laissé vide = le bouton vidéo n'apparaîtra pas
        }
    ]
};