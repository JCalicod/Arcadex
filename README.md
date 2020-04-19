# Arcadex

## Installation

`git clone https://github.com/JCalicod/Arcadex.git`

`cd Arcadex`

`npm install`

## Lancement

`npm run serve`

Se diriger alors vers `localhost:8080`

## Fonctionnalités

### Pokédex

La page d'accueil présente **9 pokémons choisis aléatoirement** dans le pokédex récupéré via l'api [PokéAPI](https://pokeapi.co/).

**/!\ Attention** Il faudra sans doute attendre quelques secondes avant le chargement des Pokémons.

Une **barre de recherche** est disponible au dessus des Pokémon présentés et permet de chercher un Pokémon par nom (non sensible à la casse) ou par ID. Un texte est affiché quand aucun Pokémon ne correspond à la recherche.

Un bouton **Charger d'autres Pokémon** est disponible en bas de la page et permettant de charger par paquets de 9 des Pokémon aléatoires différents.

Enfin, il est possible de **cliquer sur l'image d'un Pokémon** pour accéder à la page de celui-ci.

### Page Pokémon

La page Pokémon présente le Pokémon choisi précédemment.

Les données de **numéro**, de **nom**, les **statistiques** (attaque, défense, etc..), les **types** (feu, eau, etc..), ainsi que la **description** sont présents sur cette fiche. (ainsi qu'une **illustration**)

Enfin, un **lien** permet de **retourner vers le Pokédex** et découvrir de nouveaux Pokémon choisis aléatoirement.

### Page Recherche par type

La page Recherche par type présente tout d'abord les **Pokémon dans l'ordre du Pokédex**.

Il est ensuite possible de n'afficher que les Pokémon **selon un certain type** en **cliquant sur un type**. (les 18 types du jeu sont présents)

Enfin, il est possible de **rejoindre la Page Pokémon** en cliquant sur un Pokémon.

### Page A propos

La page A propos présente notre **Projet** ainsi que notre **Equipe** afin de donner à l'utilisateur le contexte de la création de ce projet.

## Code

### Router

Nos routes sont définies via le vue-router dans le fichier **src/router/index.js** où sont déclarées nos différents composants principaux.

### Store

Nous stockons différentes données relatives à l'api via le Store grâce notamment au fichier **src/store.js** où sont déclarés les paramètres ainsi que leurs getter/setter.

Grâce à cela, nous pouvons utiliser les données relatives à l'api **dans tous nos composants**, sans avoir à refaire un appel en REST.

### Utilisation de l'api

Notre fichier vue principal est le fichier src/App.vue. Grâce à **axios**, nous pouvons effectuer un appel REST.

Nous effectuons donc un appel à la route **pokemon-species** de l'api pokeapi 807 fois afin de récupérer les 807 pokémon présents sur cette api.

Nous complétons ces données via d'autres appels, notamment pour le type des Pokémon via la route **type** ou encore via la route **pokemon** afin d'obtenir des informations complémentaires sur les Pokémon déjà récupérés via pokemon-species.
