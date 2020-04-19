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
