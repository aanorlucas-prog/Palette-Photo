# 🎨 Palette Photo

**Palette Photo** est un projet complet développé avec **Next.js**, **React** et **NestJS**, conçu pour mettre en avant mes compétences en **développement web full-stack moderne**.

Ce projet se compose de **deux applications complémentaires** autour d’un même univers : celui d’un **photographe professionnel**.

---

## 📸 1. Site vitrine – "Portfolio du photographe"

Une interface élégante, rapide et optimisée pour le référencement (SEO), développée avec Next.js.
Ce site vitrine met en valeur le photographe et ses réalisations à travers un design moderne et épuré.
Elle permet de découvrir le photographe, ses réalisations et de le contacter.

### 🌐 Fonctionnalités principales :

- 🧑‍🎨 Page **“Qui suis-je ?”** présentant le photographe
- 🖼️ Galerie / **Portfolio photo** dynamique
- 📩 Formulaire de **contact** avec envoi simulé
- 💬 Page **“Demande de devis”** pour les prestations
- 🌗 Design **clair, fluide et professionnel**, réalisé avec **TailwindCSS**

---

## 🧭 2. Application interne – "ERP Photographe"

Un espace privé conçu pour le photographe, lui permettant de gérer son activité au quotidien.  
Cette application met en avant la conception d’un **tableau de bord fonctionnel et ergonomique**.

### ⚙️ Fonctionnalités principales :

- 👥 Gestion des **clients**
- 📄 Gestion des **devis** (création, statut, suivi)
- 💰 Gestion des **factures**
- 🗓️ **Calendrier interactif** pour suivre les rendez-vous et relances
- 🖼️ Consultation rapide des photos liées aux projets
- 🔐 Connexion photographe (authentification JWT)
- 📬 Envoi de mails simulés pour relances / devis

---

## 🧠 Objectifs techniques

Ce projet a pour but de démontrer :

- Ma maîtrise d’un **environnement full-stack moderne** :  
  **Next.js** + **React (Vite)** + **NestJS** + **Prisma** + **MySQL**
- Choix stratégique : **Next.js** pour le site vitrine (SEO & performance),  
  et **React (Vite)** pour l’application ERP (fluidité & simplicité).
- Ma capacité à **concevoir une architecture claire et scalable**
- Mon sens du **design fonctionnel et épuré**
- Mon aptitude à **produire du code maintenable et structuré**

---

## 🧩 Architecture globale

[Frontend - Site vitrine (Next.js)] →
→ [Backend API NestJS] → [Base MySQL (via Prisma)]
[Frontend - ERP photographe (React)] →

Un **backend unique** alimente les deux fronts :

- le site public pour les visiteurs
- et l’ERP sécurisé pour le photographe

---

## 🚀 Stack technique

| Domaine                     | Outil                  | Description                                   |
| --------------------------- | ---------------------- | --------------------------------------------- |
| **Frontend - Site vitrine** | Next.js                | Rendu côté serveur (SSR) pour un SEO optimal  |
| **Frontend - ERP**          | React + Vite           | Interface interne rapide et modulaire         |
| **Backend**                 | NestJS                 | API REST structurée et maintenable            |
| **Base de données**         | MySQL (via Prisma ORM) | Données partagées entre les deux apps         |
| **Styling**                 | Tailwind CSS           | Design responsive et minimaliste              |
| **Authentification**        | JWT + bcrypt           | Gestion sécurisée des accès ERP               |
| **Calendrier / UI**         | FullCalendar           | Gestion des rendez-vous clients               |
| **ORM / Seed**              | Prisma                 | Migration + génération de données de démo     |
| **Tests**                   | Jest / Vitest          | (optionnel) pour démontrer la qualité du code |

---

## 💼 Projet portfolio

> Ce projet a été réalisé dans le cadre de mon **portfolio développeur front-end & full-stack** afin de démontrer mes compétences techniques et ma capacité à concevoir des solutions web complètes, du design à la mise en place d’un back-end structuré.

---

## ⚙️ Installation et lancement

Ce projet se compose de **trois parties** :

1. **Backend** (API NestJS)
2. **Frontend Portfolio** (site vitrine React)
3. **Frontend ERP** (application interne React)

---

### 🧩 1️⃣ Installation du backend

#### 📂 Accès au dossier :

```bash
cd services/api
```

#### 📦 Installation des dépendances :

```bash
npm install
```

#### ⚙️ Configuration de l’environnement :

Crée un fichier .env à la racine de services/api (copie du modèle .env.example) :

```bash
cp .env.example .env
```

Exemple de contenu :

```bash
DATABASE_URL="mysql://root:password@localhost:3306/palette_photo"
JWT_SECRET="monSuperSecretJWT"
```

#### 🗄️ Migration et peuplement de la base :

```bash
npx prisma migrate dev --name init
npx prisma db seed
```

#### 🚀 Lancer l’API :

```bash
npm run start:dev
```

Le backend est disponible sur :
👉 http://localhost:3000

### 🎨 2️⃣ Lancement du site vitrine

#### 📂 Accès au dossier :

```bash
cd ../frontend-portfolio
```

#### 📦 Installation :

```bash
npm install
```

#### 🚀 Démarrage du serveur de dev :

```bash
npm run dev
```

Le site vitrine est accessible sur :
👉 http://localhost:3001

(Le site Next.js utilise un rendu côté serveur — il peut prendre quelques secondes à se lancer la première fois.)

### 🧭 3️⃣ Lancement de l’application ERP

#### 📂 Accès au dossier :

```bash
cd ../frontend-erp
```

#### 📦 Installation :

```bash
npm install
```

#### 🚀 Démarrage :

```bash
npm run dev
```

L’application ERP est accessible sur :
👉 http://localhost:5174

(Cette application React est purement client-side, légère et rapide à lancer.)

---

## 🧰 Données de démonstration

Le script de seed Prisma crée automatiquement :

un photographe (Jean Dupont)

3 clients

2 devis

2 factures

2 événements dans le calendrier

3 photos fictives dans /uploads/portfolio/

Tu peux donc tester immédiatement les interfaces sans rien ajouter.

---

## 🧪 Commandes utiles

### Lancer les tests backend

```bash
npm run test
```

### Vérifier le schéma Prisma

```bash
npx prisma validate
```

### Explorer la base (studio web)

```bash
npx prisma studio
```

### Formatter le code

```bash
npm run format
```

---

## 📁 Arborescence du projet

palette-photo/
├── services/
│ ├── api/ # Backend NestJS
│ ├── frontend-portfolio/ # Front public Next.js
│ └── frontend-erp/ # ERP interne React
├── docs/ # Documentation technique
└── README.md

---

## 🧠 Objectif de ce projet

Fournir une démonstration concrète d’un écosystème full-stack complet, du design UI à la gestion de données back-end, en passant par l’intégration de fonctionnalités métiers : devis, facturation, calendrier, et gestion clients.

---

## 📬 Contact

👨‍💻 **Développeur :** Aanor Lucas  
📧 **Email :** aanor.lucas@proton.me  
🔗 **GitHub :** [aanorlucas-prog](https://github.com/aanorlucas-prog)
