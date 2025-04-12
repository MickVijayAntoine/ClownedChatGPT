# ChatGPT Clone by Antoine

Une application locale utilisant l'API OpenAI pour offrir des fonctionnalités avancées similaires à ChatGPT, avec une interface conviviale inspirée de ChatGPT.com.

## Fonctionnalités

- **Chat Conversationnel** : Utilisation de GPT-4o pour des conversations interactives avec historique contextuel
- **Génération d'Images** : Utilisation de DALL-E 3 pour créer des images à partir de descriptions textuelles
- **Transcription Audio** : Utilisation de Whisper pour convertir des fichiers audio en texte
- **Analyse de PDF** : Utilisation d'O3-mini pour résumer ou répondre à des questions sur des documents PDF
- **Analyse d'Images** : Utilisation de GPT-4 Turbo Vision pour décrire ou répondre à des questions sur des images

## Accès à l'application

L'application est déployée et accessible à l'adresse suivante :
[https://3000-i16meptjxrlvikp4c5535-ec71e850.manus.computer](https://3000-i16meptjxrlvikp4c5535-ec71e850.manus.computer)

## Installation locale

### Prérequis

- Node.js 18.0.0 ou supérieur
- npm ou yarn

### Étapes d'installation

1. Clonez le dépôt :
```bash
git clone https://github.com/votre-utilisateur/chatgpt-clone-by-antoine.git
cd chatgpt-clone-by-antoine
```

2. Installez les dépendances :
```bash
npm install
# ou
yarn install
```

3. Démarrez le serveur de développement :
```bash
npm run dev
# ou
yarn dev
```

4. Accédez à l'application dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000)

## Configuration

Pour utiliser l'application, vous devez configurer votre clé API OpenAI :

1. Créez un compte sur [OpenAI](https://platform.openai.com/) si vous n'en avez pas déjà un
2. Générez une clé API dans la section [API Keys](https://platform.openai.com/api-keys)
3. Dans l'application, accédez à la page "Paramètres" et entrez votre clé API
4. Cliquez sur "Enregistrer la clé API"

## Guide d'utilisation

### Chat avec GPT-4o

1. Accédez à la page "Chat" depuis le menu principal
2. Tapez votre message dans le champ de texte en bas de l'écran
3. Appuyez sur Entrée ou cliquez sur le bouton d'envoi
4. L'IA répondra à votre message et vous pourrez continuer la conversation

### Génération d'images avec DALL-E 3

1. Accédez à la page "Images" depuis le menu principal
2. Entrez une description détaillée de l'image que vous souhaitez générer
3. Cliquez sur "Générer l'image"
4. L'image générée s'affichera à l'écran et vous pourrez la télécharger

### Transcription audio avec Whisper

1. Accédez à la page "Audio" depuis le menu principal
2. Cliquez sur "Choisir un fichier" pour sélectionner un fichier audio (formats supportés : MP3, WAV, M4A, MP4)
3. Cliquez sur "Transcrire l'audio"
4. La transcription s'affichera à l'écran et vous pourrez la copier ou la télécharger

### Analyse de PDF avec O3-mini

1. Accédez à la page "PDF" depuis le menu principal
2. Cliquez sur "Choisir un fichier" pour sélectionner un fichier PDF
3. Cliquez sur "Télécharger le PDF"
4. Une fois le PDF téléchargé, vous pourrez poser des questions sur son contenu
5. Tapez votre question et cliquez sur "Analyser"
6. L'IA répondra à votre question en se basant sur le contenu du PDF

### Analyse d'images avec GPT-4 Turbo Vision

1. Accédez à la page "Analyse d'images" depuis le menu principal
2. Cliquez sur "Choisir un fichier" pour sélectionner une image (formats supportés : PNG, JPG, JPEG, WEBP)
3. Entrez une question ou une demande concernant l'image
4. Cliquez sur "Analyser l'image"
5. L'IA répondra à votre question en se basant sur le contenu de l'image

## Problèmes connus

- **Chat avec GPT-4o** : Des erreurs peuvent survenir lors de l'envoi de messages. Si cela se produit, essayez de rafraîchir la page et de réessayer.
- **Génération d'images** : La génération d'images peut prendre du temps et parfois échouer. Dans ce cas, essayez de simplifier votre description ou de réessayer.
- **Analyse de PDF** : Les PDF volumineux peuvent prendre plus de temps à analyser ou causer des erreurs. Essayez de diviser les grands documents en parties plus petites.

## Technologies utilisées

- **Frontend** : Next.js (React) avec TypeScript
- **Styling** : Tailwind CSS
- **API** : API Routes de Next.js
- **Intégration OpenAI** : Bibliothèque officielle OpenAI pour Node.js

## Modèles d'IA utilisés

- Chat conversationnel : GPT-4o
- Génération d'images : DALL-E 3
- Transcription audio : Whisper
- Analyse de PDF : O3-mini
- Analyse d'images : GPT-4 Turbo Vision

## Maintenance et mises à jour

Pour mettre à jour l'application :

1. Tirez les dernières modifications du dépôt :
```bash
git pull origin main
```

2. Installez les nouvelles dépendances :
```bash
npm install
# ou
yarn install
```

3. Redémarrez le serveur de développement

## Licence

Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.

## Contact

Pour toute question ou suggestion, veuillez contacter Antoine à [email@example.com](mailto:email@example.com).
