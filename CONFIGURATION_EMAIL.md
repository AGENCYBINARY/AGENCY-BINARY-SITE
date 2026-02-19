# Configuration de l'envoi d'emails avec Gmail SMTP

## ✅ Installation terminée

Le formulaire de contact a été configuré pour envoyer les emails **DEPUIS et VERS** `agency.binary@gmail.com` en utilisant Gmail SMTP via Nodemailer.

## 🔐 Configuration Gmail (OBLIGATOIRE - 5 minutes)

### Étape 1 : Activer la validation en 2 étapes

1. Allez sur https://myaccount.google.com/security
2. Connectez-vous avec `agency.binary@gmail.com`
3. Cliquez sur "Validation en deux étapes"
4. Si ce n'est pas déjà fait, activez-la (suivez les instructions)

### Étape 2 : Créer un mot de passe d'application

1. Une fois la validation en 2 étapes activée, retournez sur https://myaccount.google.com/security
2. Cliquez sur "Validation en deux étapes" 
3. Tout en bas, cliquez sur "Mots de passe des applications"
   - OU allez directement sur : https://myaccount.google.com/apppasswords
4. Dans "Sélectionner une application", choisissez **"Autre (nom personnalisé)"**
5. Tapez : **"Agency Website Contact Form"**
6. Cliquez sur **"Générer"**
7. **COPIEZ le mot de passe généré** (16 caractères sans espaces, ex: `abcd efgh ijkl mnop`)
   - ⚠️ **Important** : Ce mot de passe ne sera affiché qu'une seule fois !

### Étape 3 : Configurer le fichier .env.local

Dans le fichier `.env.local`, remplacez :
```
GMAIL_APP_PASSWORD=votre_mot_de_passe_application_ici
```
par le mot de passe d'application que vous venez de générer (enlevez les espaces) :
```
GMAIL_APP_PASSWORD=abcdefghijklmnop
```

### Étape 4 : Redémarrer le serveur

```bash
npm run dev
```

## 🎯 Comment ça fonctionne

### Flux de l'email :
1. **Utilisateur remplit le formulaire** sur le site
2. **Données envoyées** à l'API `/api/contact`
3. **Nodemailer se connecte** à Gmail SMTP avec vos identifiants
4. **Email envoyé** :
   - 📤 **FROM** : `agency.binary@gmail.com` (votre boîte Gmail)
   - 📥 **TO** : `agency.binary@gmail.com` (la même boîte Gmail)
   - 🔄 **REPLY-TO** : Email du client (pour répondre facilement)
5. **Vous recevez l'email** dans votre boîte `agency.binary@gmail.com`

### Informations contenues dans l'email :
- ✅ Nom du contact
- ✅ Email du contact (configuré en Reply-To)
- ✅ Entreprise (optionnel)
- ✅ Message complet
- ✅ Design HTML professionnel

## 🔧 Ce qui a été modifié

### Fichiers modifiés :
- ✅ `src/app/api/contact/route.ts` - Utilise maintenant Nodemailer avec Gmail SMTP
- ✅ `.env.local` - Variables d'environnement Gmail (GMAIL_USER et GMAIL_APP_PASSWORD)

### Dépendances :
- ❌ `resend` - Désinstallé
- ✅ `nodemailer` - Installé
- ✅ `@types/nodemailer` - Installé

## ✅ Avantages de cette solution

✅ **Email envoyé DEPUIS votre propre adresse Gmail**
✅ **Email reçu SUR votre propre adresse Gmail**
✅ **Aucun service tiers** (Formspree, Resend, etc.)
✅ **Gratuit et illimité** (limite Gmail : 500 emails/jour, largement suffisant)
✅ **Fiable et sécurisé** (authentification Gmail)
✅ **Reply-To automatique** pour répondre facilement aux clients
✅ **Fonctionne côté serveur** (sécurisé)

## 🧪 Test

Une fois le mot de passe d'application configuré :
1. Redémarrez le serveur : `npm run dev`
2. Allez sur http://localhost:3000
3. Remplissez le formulaire
4. Cliquez sur "Envoyer le message"
5. **Vérifiez votre boîte `agency.binary@gmail.com`**
   - L'email devrait arriver en quelques secondes
   - Il sera envoyé depuis et reçu sur la même adresse

## ⚠️ Important

- ✅ Ne commitez JAMAIS le fichier `.env.local` sur Git
- ✅ Le mot de passe d'application est différent de votre mot de passe Gmail normal
- ✅ La validation en 2 étapes DOIT être activée pour créer un mot de passe d'application
- ✅ Si vous changez votre mot de passe Gmail, le mot de passe d'application reste valide
- ✅ Vous pouvez révoquer un mot de passe d'application à tout moment depuis https://myaccount.google.com/apppasswords

## 🆘 Problèmes courants

### "Invalid login" ou erreur d'authentification
- Vérifiez que la validation en 2 étapes est activée
- Assurez-vous d'avoir copié le mot de passe d'application sans espaces
- Redémarrez le serveur après avoir modifié `.env.local`

### L'email n'arrive pas
- Vérifiez vos dossiers Spam/Promotions
- Consultez les logs du terminal pour voir les erreurs
- Vérifiez que `GMAIL_USER` et `GMAIL_APP_PASSWORD` sont bien configurés

### "Less secure app access"
- N'utilisez PAS cette option (obsolète et dangereuse)
- Utilisez OBLIGATOIREMENT un mot de passe d'application

## 📚 Ressources

- Configuration validation 2 étapes : https://myaccount.google.com/security
- Mots de passe d'applications : https://myaccount.google.com/apppasswords
- Documentation Nodemailer : https://nodemailer.com/
- Limites Gmail SMTP : https://support.google.com/mail/answer/22839
