# RADIO LIVESHOW — migration Next.js / Supabase / Vercel

Supabase : cuibydzpzhimesknmtrf (RADIO-LIVESHOW), organisation MLG PROD.
GitHub : AngyBlack237/radio-show-live. Transfert en attente de l’autorisation du dépôt au connecteur.
Vercel : espace mlg-production, publication à effectuer après le transfert.

## Démarrage
Copier .env.example en .env.local et fournir la clé publishable du projet, puis npm ci et npm run dev.
La clé privée service_role n’est pas nécessaire. Les règles RLS contrôlent chaque opération.

## Identité et audio
Créer le compte angychoupy@gmail.com depuis /connexion et confirmer l’adresse par e-mail pour l’accès /admin. La base vérifie l’adresse confirmée et l’identité réelle.
Les fichiers MP3 sont envoyés directement à Supabase Storage pour éviter la limite des requêtes Vercel. Les propositions restent privées ; seules les pistes de la playlist sont accessibles aux auditeurs.
Les trois fichiers de démonstration ANGY BLACK sont inclus.
Le mixage et la voix fonctionnent dans le navigateur de l’auditeur. Le serveur de diffusion permanente n’est pas installé.

## État
Compilation Next.js et vérification TypeScript réussies.
La migration reste à publier ; les tests avec un compte administrateur et les envois réels restent à effectuer après configuration de l’URL de confirmation Supabase.
Migrations distantes appliquées : radio_initial_schema, radio_admin_and_upload_policies.
