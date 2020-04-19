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
