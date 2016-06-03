[![Dependency Status](https://david-dm.org/inProgress-team/mantra-webpack-boilerplate.svg)](https://david-dm.org/inProgress-team/mantra-webpack-boilerplate)
[![Build](https://travis-ci.org/inProgress-team/mantra-webpack-boilerplate.svg)](https://travis-ci.org/inProgress-team/mantra-webpack-boilerplate)

# Installation

### Node / NPM
Ce projet a été testé avec node@6.2 / npm@3.

Il est conseillé d’installer nvm qui permet d’avoir toutes les versions de node voulues sur une même machine. Voici le lien : [NVM](https://github.com/creationix/nvm)

### Configuration Gitlab

* Se créer un compte sur Gitlab.com.
* Demander à Alex, Julien ou Théo de t'ajouter au projet assipe.
* Créer une clé ssh via la commande ssh-keygen.
* Ajouter la clé sur https://gitlab.com/profile/keys

### Lancer le projet

```bash
git clone git@gitlab.com:assipe/assipe.git
cd assipe
npm install
meteor (pour lancer le projet)
npm test (pour lancer les tests)
```


# A bien comprendre

*	[ES2015 : nouvelle spécification javascript](https://babeljs.io/docs/learn-es2015/)
* React
* Meteor
* [Mantra](https://kadirahq.github.io/mantra)  : Principes d’architecture pour Meteor et React
*	Hot reloading : permet de recharger tes composants React sans recharger toute la page quand tu fais une modification de code. Par contre faut suivre cette prérogative pour que ça marche : https://github.com/mantrajs/kickstart-mantrajs-webpack#hot-module-reload-hmr


# Librairies utilisées
*	[React-bootstrap](https://react-bootstrap.github.io/) : pour utiliser les composants bootstrap avec react
* 	[Formsy-react](https://github.com/twisty/formsy-react-components) pour gérer les formulaires
* Flow router : pour gérer les différentes routes

# Outils utiles
* Perso j’utilise Atom comme éditeur mais c’est comme tu veux évidemment
* https://github.com/mantrajs/mantra-cli permet de générer des fichiers de type Mantra : tu te places dans le dossier src/ et tu executes les commandes que tu veux.


# Comment travailler ?

* Chaque issue Gitlab = une nouvelle branche À PARTIR DE MASTER. Par exemple https://gitlab.com/assipe/assipe/issues/6 ([À voir en premier] Connexion) => création d'une branche feat/6-connexion
* Sépare bien ton travail en petits commits, ça sera plus simple si tu veux revert et pour moi de review ton code
* Une fois que ton travail est fini (réalisation technique + tests), il faut que tu t'assures que :
  * npm run lint => ne renvoit pas d'erreur (tu peux lancer npm run lintfix pour corriger automatiquement un maximum de problèmes)
  * npm test => fonctionne
* Enfin si tout est bon, tu peux créer une pull request pour merger ta branch dans master. Là je ferai une review de ton code, te donnerai mon avis avant de merge tout ça.