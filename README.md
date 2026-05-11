# 🎥 ReoLink Security Planner by Ecoradinmalin

Une application web 100% front-end (sans serveur) permettant de planifier l'installation de caméras Reolink sur une carte interactive. Cet outil permet de simuler précisément les angles de vision, les portées de détection de mouvement (PIR) et les zones d'éclairage (Floodlight) avant l'achat ou l'installation.

## ✨ Fonctionnalités
* **100% Client-Side :** Aucune donnée n'est envoyée sur un serveur (HTML/JS/CSS purs).
* **Bilingue :** Détection automatique FR/EN avec bouton de bascule manuel.
* **Moteur Trigonométrique :** Dessin dynamique des cônes de vision selon les spécifications réelles de chaque caméra.
* **Manipulation Interactive :** Placement par glisser-déposer et poignées de rotation pour orienter les caméras.
* **Panier de Projet :** Génération automatique d'une liste d'achats basée sur les caméras placées sur le plan.

## 🛠️ Installation & Configuration
Le projet repose sur deux fichiers seulement : `index.html` et `config.js`. 
Vous pouvez héberger ces fichiers gratuitement sur n'importe quel service (GitHub Pages, Vercel, Netlify) ou les ouvrir directement en local dans votre navigateur.

Pour ajouter de nouvelles caméras ou modifier les spécifications, éditez simplement le catalogue dans le fichier `config.js`. L'application se chargera de générer l'interface automatiquement.

## ⚖️ Licence et Conditions d'Utilisation (IMPORTANT)
Le code source de cette application est ouvert et libre. Vous êtes autorisé à le télécharger, l'héberger et le modifier pour l'adapter à vos besoins personnels ou professionnels.

**Toutefois, une condition stricte et obligatoire s'applique :**
Le moteur d'affiliation intégré au code (`applyAffiliate` dans `index.html`) et les suffixes de suivi Amazon (`&tag=ecoradinmalin-21...`) et Reolink (`?aff=974`) **ne doivent en aucun cas être retirés, modifiés ou altérés**. 

Cet outil représente de nombreuses heures de travail et est mis à la disposition de la communauté gratuitement. Maintenir ces liens affiliés générateurs de commissions est la condition *sine qua non* de cette gratuité. Ils sont indispensables pour soutenir les recherches de partenariats, la création de contenu et le financement des futurs tests de matériel de la chaîne YouTube **Ecoradinmalin**. 

En utilisant ou en clonant ce code, vous acceptez formellement cette condition.